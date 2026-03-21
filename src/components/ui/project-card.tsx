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
    <Card className="group flex h-full flex-col gap-4 rounded-[1.75rem] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_32px_72px_rgba(27,36,48,0.12)]">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View case study for ${project.title}`}
        className="-m-2 flex cursor-pointer flex-col gap-5 rounded-[1.5rem] p-2 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4"
      >
        <div className="overflow-hidden rounded-[1.25rem] border border-[var(--border)] transition-colors duration-200 group-hover:border-[color:rgba(15,118,110,0.28)] group-focus-within:border-[color:rgba(15,118,110,0.32)]">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={1200}
            height={630}
            className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.015] group-focus-within:scale-[1.015]"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[var(--text)] transition-colors duration-200 group-hover:text-[var(--accent)] group-focus-within:text-[var(--accent)]">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-[var(--accent)]">{project.tagline}</p>
          <p className="text-sm leading-7 text-[var(--text-muted)]">{project.summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text)] transition-colors duration-200 group-hover:text-[var(--accent)] group-focus-within:text-[var(--accent)]">
          <span>View case study</span>
          <span aria-hidden="true" className="text-base leading-none">
            →
          </span>
        </div>
      </Link>

      <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-[var(--border)] pt-1 text-sm font-medium">
        {project.links.repo ? (
          <Link
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text)] underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--accent)]"
          >
            GitHub
          </Link>
        ) : null}
        {project.links.live ? (
          <Link
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text-muted)] underline decoration-[var(--border)] underline-offset-4 hover:text-[var(--text)] hover:decoration-[var(--accent)]"
          >
            Demo
          </Link>
        ) : null}
      </div>
    </Card>
  );
}
