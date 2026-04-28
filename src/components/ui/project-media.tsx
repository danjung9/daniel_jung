"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Project } from "../../types/portfolio";

interface ProjectMediaProps {
  project: Project;
  className?: string;
  priority?: boolean;
  controls?: boolean;
}

export function ProjectMedia({ project, className, priority, controls = false }: ProjectMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current || !project.videoPlaybackRate) {
      return;
    }

    videoRef.current.playbackRate = project.videoPlaybackRate;
  }, [project.videoPlaybackRate, project.video]);

  if (project.video) {
    return (
      <video
        ref={videoRef}
        src={project.video}
        poster={project.image}
        aria-label={`${project.title} preview`}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        controls={controls}
        preload="metadata"
      />
    );
  }

  return (
    <Image
      src={project.image}
      alt={`${project.title} preview`}
      width={1600}
      height={960}
      className={className}
      priority={priority}
    />
  );
}
