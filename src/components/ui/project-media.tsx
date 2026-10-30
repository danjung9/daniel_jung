"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "../../types/portfolio";

interface ProjectMediaProps {
  project: Project;
  className?: string;
  priority?: boolean;
  controls?: boolean;
}

export function ProjectMedia({ project, className, priority, controls = false }: ProjectMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failedSource, setFailedSource] = useState<string | null>(null);

  useEffect(() => {
    if (!videoRef.current || !project.videoPlaybackRate) {
      return;
    }

    videoRef.current.playbackRate = project.videoPlaybackRate;
  }, [project.videoPlaybackRate, project.video]);

  if (project.video && controls) {
    return (
      <div>
      <video
        ref={videoRef}
        src={project.video}
        poster={project.image}
        aria-label={`${project.title} preview`}
        className={`aspect-video ${className ?? ""}`}
        width={1920}
        height={1080}
        onError={() => setFailedSource(project.video ?? null)}
        onLoadedMetadata={() => {
          if (videoRef.current) videoRef.current.playbackRate = project.videoPlaybackRate ?? 1;
        }}
        muted
        loop
        playsInline
        controls={controls}
        preload="none"
      />
      {failedSource === project.video ? (
        <p role="status" className="prose-copy p-4 text-sm">
          The video could not be played. <a href={project.video} className="text-link">Open the video file</a> or read the case study below.
        </p>
      ) : null}
      </div>
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
      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 640px"
    />
  );
}
