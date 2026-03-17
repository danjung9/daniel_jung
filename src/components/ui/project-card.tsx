import Image from "next/image";
import Link from "next/link";
import type { Project } from "../../types/portfolio";
import { Badge } from "./badge";
import { Card } from "./card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col gap-5 rounded-[1.75rem]">
      <div className="overflow-hidden rounded-[1.25rem] border border-[var(--border)]">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={1200}
          height={630}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-[var(--text)]">{project.title}</h3>
        <p className="text-sm font-medium text-[var(--accent)]">{project.tagline}</p>
        <p className="text-sm leading-7 text-[var(--text-muted)]">{project.summary}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-4 text-sm font-medium">
        {project.links.repo ? (
          <Link
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text)] underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--accent)] focus-visible:outline-none"
          >
            GitHub
          </Link>
        ) : null}
        {project.links.live ? (
          <Link
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text-muted)] underline decoration-[var(--border)] underline-offset-4 hover:text-[var(--text)] hover:decoration-[var(--accent)] focus-visible:outline-none"
          >
            Demo
          </Link>
        ) : null}
        <Link
          href={`/projects/${project.slug}`}
          className="text-[var(--text-muted)] underline decoration-[var(--border)] underline-offset-4 hover:text-[var(--text)] hover:decoration-[var(--accent)] focus-visible:outline-none"
        >
          Details
        </Link>
      </div>
    </Card>
  );
}
