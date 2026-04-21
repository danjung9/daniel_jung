import Image from "next/image";
import type { Project } from "../../types/portfolio";

interface ProjectMediaProps {
  project: Project;
  className?: string;
  priority?: boolean;
  controls?: boolean;
}

export function ProjectMedia({ project, className, priority, controls = false }: ProjectMediaProps) {
  if (project.video) {
    return (
      <video
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
