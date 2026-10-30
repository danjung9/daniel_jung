"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeMotion(callback: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const getReducedMotion = () => window.matchMedia(motionQuery).matches;
const getServerMotion = () => true;
const smoothstep = (start: number, end: number, value: number) => {
  const t = Math.max(0, Math.min(1, (value - start) / (end - start)));
  return t * t * (3 - 2 * t);
};

type Point = {
  x: number; y: number; bx: number; by: number; z: number; phase: number;
  drift: number; speedX: number; speedY: number; size: number; opacity: number;
  reach: number; degree: number;
};
type Vertex = [number, number, number];

// Actual parallel-jaw geometry: actuator, two fingers, and inward-facing tips.
function gripperGeometry() {
  const vertices: Vertex[] = [];
  const edges: [number, number][] = [];
  const boxes = [
    [0, -32, 0, 76, 28, 30],
    [-30, 10, 0, 12, 60, 18], [30, 10, 0, 12, 60, 18],
    [-22, 36, 0, 16, 10, 18], [22, 36, 0, 16, 10, 18]
  ];
  for (const [x, y, z, w, h, d] of boxes) {
    const start = vertices.length;
    for (let i = 0; i < 8; i++) {
      vertices.push([x + (i & 1 ? w : -w) / 2, y + (i & 2 ? h : -h) / 2, z + (i & 4 ? d : -d) / 2]);
    }
    for (let i = 0; i < 8; i++) {
      for (const bit of [1, 2, 4]) if (!(i & bit)) edges.push([start + i, start + (i | bit)]);
    }
  }
  return { vertices, edges };
}
const gripper = gripperGeometry();

export function PerceptionField({ children, isHome = true }: { children: React.ReactNode; isHome?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<{ pause: (value: boolean) => void } | null>(null);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeMotion, getReducedMotion, getServerMotion);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const page = host?.closest<HTMLElement>(".home-page");
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !page || !ctx) return;

    let width = 0, height = 0, frame = 0, previous = 0, time = 0;
    let playing = true, assembly = 0;
    let progress = 0;
    let terrain: { x: number; y: number; strength: number }[] = [];
    let points: Point[] = [];
    let selected: number[] = [];
    let quiet = { x: 0, y: 0, rx: 1, ry: 1 };
    const pointer = { x: 0, y: 0, active: false, moved: 0 };
    const trail: { x: number; y: number; age: number }[] = [];

    const attenuation = (x: number, y: number) => {
      const distance = Math.hypot((x - quiet.x) / quiet.rx, (y - quiet.y) / quiet.ry);
      const mask = Math.min(1, Math.max(.06, (distance - .55) * 1.5));
      return mask + (1 - mask) * smoothstep(0, .4, progress);
    };

    // The landscape stays in the field's own material: layered silver points on black.
    function buildTerrain(random: () => number) {
      terrain = [];
      const ridge = (u: number, layer: number) => height * (
        .68 + layer * .09
        - Math.exp(-(((u - .08) / .23) ** 2)) * (.23 - layer * .025)
        - Math.exp(-(((u - .86) / .22) ** 2)) * (.31 - layer * .035)
        + Math.sin(u * 23 + layer * 1.6) * .012
        + Math.sin(u * 57 + layer * .8) * .004
      );
      for (let layer = 0; layer < 3; layer++) {
        for (let x = -8; x < width + 8; x += 4 + random() * 7) {
          const y = ridge(x / width, layer);
          if (random() > .14) terrain.push({ x, y: y + random() * 2, strength: .25 + random() * .4 });
          if (random() < .45) terrain.push({ x: x + random() * 7, y: y + 5 + random() * 32, strength: .1 + random() * .2 });
        }
      }
      const treeCount = width < 600 ? 8 : 14;
      for (let tree = 0; tree < treeCount; tree++) {
        const u = tree % 2 ? .79 + random() * .2 : .01 + random() * .2;
        const x = u * width, base = ridge(u, 2) + 12;
        const treeHeight = Math.min(height * .13, 92) * (.55 + random() * .8);
        const top = base - treeHeight;
        for (let y = top; y < base; y += 4 + random() * 3) {
          terrain.push({ x: x + random() * 1.5, y, strength: .25 + random() * .3 });
        }
        for (let branch = 1; branch <= 7; branch++) {
          const depth = branch / 8, y = top + treeHeight * depth;
          for (const side of [-1, 1]) {
            const length = treeHeight * depth * (.18 + random() * .12);
            for (let d = 0; d < length; d += 3 + random() * 2) {
              terrain.push({ x: x + side * d, y: y + d * (.2 + random() * .2), strength: .2 + random() * .4 });
            }
          }
        }
      }
    }

    function updateScroll() {
      if (!page) return;
      progress = Math.max(0, Math.min(1, -page.getBoundingClientRect().top / (window.innerHeight * .95)));
      if (!frame) start();
    }

    function draw(now: number) {
      if (!ctx || !canvas) return;
      frame = 0;
      const step = previous ? Math.min((now - previous) / 16.67, 2) : 1;
      previous = now;
      const animated = playing && !reducedMotion;
      if (animated) time += step;
      ctx.clearRect(0, 0, width, height);
      const morph = reducedMotion ? Number(progress > .5) : smoothstep(.04, .9, progress);
      const fieldOpacity = 1 - smoothstep(.2, 1, progress) * .88;
      ctx.globalAlpha = fieldOpacity;

      const settled = animated && progress < .05 && pointer.active && now - pointer.moved > 700;
      assembly += ((settled ? 1 : 0) - assembly) * .045 * step;
      if (settled && selected.length === 0) {
        selected = points.map((p, i) => ({ i, distance: Math.hypot(p.x - pointer.x, p.y - pointer.y) }))
          .sort((a, b) => a.distance - b.distance).slice(0, gripper.vertices.length).map(p => p.i);
      }
      if (!settled && assembly < .02) selected = [];

      const shapeScale = Math.min(1.5, width / 380);
      const angle = -.35 + Math.sin(time * .002) * .12;
      const projected = gripper.vertices.map(([x, y, z]) => {
        const depth = z * Math.cos(angle) - x * Math.sin(angle);
        const perspective = 300 / (300 + depth);
        return {
          x: pointer.x + (x * Math.cos(angle) + z * Math.sin(angle)) * perspective * shapeScale,
          y: pointer.y + (y + depth * .3) * perspective * shapeScale
        };
      });
      const targets = new Map(selected.map((index, i) => [index, projected[i]]));

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        let tx = p.bx + Math.sin(time * p.speedX + p.phase) * p.drift * p.z;
        let ty = p.by + Math.cos(time * p.speedY + p.phase) * p.drift * p.z;
        const distance = Math.hypot(p.x - pointer.x, p.y - pointer.y);
        const influence = pointer.active && animated && progress < .05 ? Math.max(0, 1 - distance / 210) : 0;
        tx += (pointer.x - tx) * influence * .2;
        ty += (pointer.y - ty) * influence * .2;
        const target = targets.get(i);
        if (target) { tx += (target.x - tx) * assembly; ty += (target.y - ty) * assembly; }
        const terrainPoint = terrain[Math.floor(i / points.length * terrain.length)];
        if (animated) { p.x += (tx - p.x) * .035 * step; p.y += (ty - p.y) * .035 * step; }
        const x = terrainPoint ? p.x + (terrainPoint.x - p.x) * morph : p.x;
        const y = terrainPoint ? p.y + (terrainPoint.y - p.y) * morph : p.y;
        const alpha = (p.opacity + influence * .42) * attenuation(x, y);
        ctx.fillStyle = `rgba(${influence > .2 ? "145,190,255" : "190,200,215"},${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, p.size + influence * .5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connections are local to the visitor's attention, rather than a full-screen mesh.
      const nearby = pointer.active && progress < .05 && !reducedMotion && assembly < .98 ? points.filter(p => Math.hypot(p.x - pointer.x, p.y - pointer.y) < 180) : [];
      const connections: { a: Point; b: Point; distance: number; reach: number; score: number }[] = [];
      ctx.lineWidth = .6;
      for (let i = 0; i < nearby.length; i++) {
        for (let j = i + 1; j < nearby.length; j++) {
          const a = nearby[i], b = nearby[j], distance = Math.hypot(a.x - b.x, a.y - b.y);
          const reach = Math.min(a.reach, b.reach);
          if (distance > reach || distance < 12 || Math.abs(a.z - b.z) > .45) continue;
          connections.push({ a, b, distance, reach, score: distance * (.75 + ((a.phase + b.phase) % 1) * .5) });
        }
      }
      // Short, depth-aware branches; no index-ordered chain through the field.
      connections.sort((a, b) => a.score - b.score);
      const degrees = new Map<Point, number>();
      for (const { a, b, distance, reach } of connections) {
        if ((degrees.get(a) ?? 0) >= a.degree || (degrees.get(b) ?? 0) >= b.degree) continue;
        const alpha = (1 - distance / reach) * .32 * (1 - assembly * .8) * attenuation((a.x + b.x) / 2, (a.y + b.y) / 2);
        ctx.strokeStyle = `rgba(125,174,240,${alpha})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        degrees.set(a, (degrees.get(a) ?? 0) + 1);
        degrees.set(b, (degrees.get(b) ?? 0) + 1);
      }
      if (assembly > .05) {
        for (const [i, j] of gripper.edges) {
          const a = points[selected[i]], b = points[selected[j]];
          if (!a || !b) continue;
          ctx.strokeStyle = `rgba(145,190,255,${assembly * .38 * attenuation((a.x + b.x) / 2, (a.y + b.y) / 2)})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        if (animated) p.age += step;
        if (p.age > 28) { trail.splice(i, 1); continue; }
        ctx.fillStyle = `rgba(105,165,255,${(1 - p.age / 28) * .3 * attenuation(p.x, p.y)})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, .8, 0, Math.PI * 2); ctx.fill();
      }
      if (morph > 0) {
        ctx.globalAlpha = 1;
        for (const p of terrain) {
          ctx.fillStyle = `rgba(184,194,207,${morph * p.strength * .65})`;
          ctx.fillRect(p.x, p.y, 1, 1);
        }
      }
      ctx.globalAlpha = 1;
      if (animated && !document.hidden && progress < 1) frame = requestAnimationFrame(draw);
    }

    function stop() { cancelAnimationFrame(frame); frame = 0; previous = 0; }
    function start() {
      stop();
      draw(performance.now());
    }
    function resize() {
      if (!canvas || !ctx || !host) return;
      const bounds = host.getBoundingClientRect();
      width = bounds.width; height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const heading = page?.querySelector("h1")?.getBoundingClientRect();
      if (heading) quiet = { x: heading.x - bounds.x + heading.width / 2, y: heading.y - bounds.y + heading.height / 2, rx: heading.width / 2 + 70, ry: heading.height / 2 + 65 };
      const count = Math.min(230, Math.max(85, Math.floor(width * height / 4500)));
      // A stable random scene survives resizes without the diagonal bands of a lattice.
      let seed = 0x34f8ab91;
      const random = () => {
        seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
        return seed / 4294967296;
      };
      const scale = Math.min(width, height);
      const clusters = Array.from({ length: 5 }, () => ({
        x: (.1 + random() * .8) * width, y: (.1 + random() * .8) * height,
        rx: (.06 + random() * .1) * scale, ry: (.06 + random() * .12) * scale,
        angle: random() * Math.PI
      }));
      points = [];
      for (let i = 0; i < count; i++) {
        const cluster = random() < .55 ? clusters[Math.floor(random() * clusters.length)] : null;
        let x = 0, y = 0;
        for (let attempt = 0; attempt < 30; attempt++) {
          if (cluster) {
            const radius = Math.sqrt(-2 * Math.log(1 - random()));
            const angle = random() * Math.PI * 2;
            const dx = Math.cos(angle) * radius * cluster.rx;
            const dy = Math.sin(angle) * radius * cluster.ry;
            x = cluster.x + dx * Math.cos(cluster.angle) - dy * Math.sin(cluster.angle);
            y = cluster.y + dx * Math.sin(cluster.angle) + dy * Math.cos(cluster.angle);
          } else { x = 6 + random() * (width - 12); y = 6 + random() * (height - 12); }
          if (x > 6 && x < width - 6 && y > 6 && y < height - 6 && points.every(p => Math.hypot(x - p.x, y - p.y) > 8)) break;
        }
        if (x < 6 || x > width - 6 || y < 6 || y > height - 6) { x = 6 + random() * (width - 12); y = 6 + random() * (height - 12); }
        points.push({
          x, y, bx: x, by: y, z: .2 + random() * .8, phase: random() * Math.PI * 2,
          drift: 6 + random() * 24, speedX: .001 + random() * .003, speedY: .001 + random() * .002,
          size: .4 + random() ** 2 * 1.4, opacity: .1 + random() ** 1.6 * .45,
          reach: 60 + random() * 65, degree: 1 + Math.floor(random() * 3)
        });
      }
      selected = []; assembly = 0; trail.length = 0;
      buildTerrain(random);
      updateScroll();
      start();
    }
    function move(event: PointerEvent) {
      if (!host || !playing || reducedMotion || progress >= .05) return;
      if (event.target instanceof Element && event.target.closest("a, button, nav")) { pointer.active = false; return; }
      const bounds = host.getBoundingClientRect();
      const x = event.clientX - bounds.x, y = event.clientY - bounds.y;
      if (Math.hypot(x - pointer.x, y - pointer.y) > 2) pointer.moved = performance.now();
      pointer.x = x; pointer.y = y; pointer.active = true;
      const last = trail[trail.length - 1];
      if (!last || Math.hypot(x - last.x, y - last.y) > 7) {
        trail.push({ x, y, age: 0 });
        if (trail.length > 40) trail.shift();
      }
    }
    function leave() { pointer.active = false; }
    function release(event: PointerEvent) { if (event.pointerType !== "mouse") leave(); }
    function visibility() { if (document.hidden) stop(); else start(); }
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    const heading = page.querySelector("h1");
    if (heading) observer.observe(heading);
    page.addEventListener("pointermove", move, { passive: true });
    page.addEventListener("pointerdown", move, { passive: true });
    page.addEventListener("pointerleave", leave);
    page.addEventListener("pointercancel", leave);
    page.addEventListener("pointerup", release);
    window.addEventListener("blur", leave);
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("scroll", updateScroll, { passive: true });
    engineRef.current = { pause(value) { playing = !value; if (playing) start(); else stop(); } };
    resize();
    return () => {
      stop(); observer.disconnect(); engineRef.current = null;
      page.removeEventListener("pointermove", move); page.removeEventListener("pointerdown", move);
      page.removeEventListener("pointerleave", leave); page.removeEventListener("pointercancel", leave);
      page.removeEventListener("pointerup", release); window.removeEventListener("blur", leave);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("scroll", updateScroll);
    };
  }, [reducedMotion]);

  useEffect(() => { engineRef.current?.pause(paused); }, [paused, reducedMotion]);

  return (
    <div className="home-page">
      <div className="home-scene" aria-hidden="true">
        <canvas ref={canvasRef} className="perception-field" />
      </div>
      <SiteHeader isHome={isHome} paused={paused} reducedMotion={reducedMotion} onToggleMotion={() => setPaused(value => !value)} />
      {children}
    </div>
  );
}
