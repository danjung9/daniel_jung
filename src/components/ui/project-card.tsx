import Link from "next/link";
import type { Project } from "../../types/portfolio";
import { Badge } from "./badge";
import { ProjectMedia } from "./project-media";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "compact" | "index";
}

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const isCompact = variant === "compact";
  const isIndex = variant === "index";
  const compactMediaClass = "h-44 w-full object-cover";
  const defaultMediaClass = project.video
    ? "aspect-video h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.01] group-focus-within:scale-[1.01]"
    : "aspect-video h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.01] group-focus-within:scale-[1.01]";
  const problem = project.problem ?? project.tagline;
  const contribution = project.contribution ?? project.summary;
  const outcome = project.metric ?? project.outcome ?? project.impact?.[0];

  if (isCompact) {
    return (
      <article className="group border-t border-[var(--border)] bg-white transition-colors duration-200 hover:border-[var(--text)]">
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`View case study for ${project.title}`}
          className="grid cursor-pointer gap-5 py-6 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 md:grid-cols-[18rem_minmax(0,1fr)] md:items-center"
        >
          <div className="hidden overflow-hidden border border-[var(--border)] bg-[var(--background-strong)] md:block">
            <ProjectMedia
              project={project}
              className={compactMediaClass}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              <span>{project.period}</span>
              <span aria-hidden="true">/</span>
              <span>{project.status ?? "live"}</span>
            </div>
            <h3 className="text-2xl font-semibold text-[var(--text)] transition-colors duration-200 group-hover:text-[var(--accent)] group-focus-within:text-[var(--accent)]">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-[var(--accent)]">
              {project.recruiterSignal ?? project.tagline}
            </p>
            {outcome ? (
              <p className="max-w-2xl text-sm leading-7 text-[var(--text-muted)]">
                {outcome}
              </p>
            ) : null}
            <div className="flex items-center gap-2 pt-1 text-sm font-semibold text-[var(--text)] transition-colors duration-200 group-hover:text-[var(--accent)] group-focus-within:text-[var(--accent)]">
              <span>Case study</span>
              <span aria-hidden="true" className="text-base leading-none">
                →
              </span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (isIndex) {
    return (
      <article className="group border-t border-[var(--border)] transition-colors duration-200 hover:border-[var(--text)]">
        <div className="grid gap-5 py-6 md:grid-cols-[13rem_minmax(0,1fr)] md:items-start lg:grid-cols-[16rem_minmax(0,1fr)]">
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`View case study for ${project.title}`}
            className="block overflow-hidden border border-[var(--border)] bg-[var(--background-strong)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4"
          >
            <ProjectMedia
              project={project}
              className="h-40 w-full object-cover md:h-36 lg:h-40"
            />
          </Link>

          <div className="min-w-0 space-y-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              <span>{project.period}</span>
              <span aria-hidden="true">/</span>
              <span>{project.status ?? "live"}</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-[var(--text)]">
                <Link
                  href={`/projects/${project.slug}`}
                  className="transition-colors duration-200 hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="text-sm font-medium text-[var(--accent)]">
                {project.recruiterSignal ?? project.tagline}
              </p>
            </div>

            {outcome ? (
              <p className="max-w-3xl text-sm leading-7 text-[var(--text-muted)]">
                {outcome}
              </p>
            ) : null}

            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-sm font-semibold">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 text-[var(--text)] transition hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4"
              >
                <span>Case study</span>
                <span aria-hidden="true">→</span>
              </Link>
              {project.links.repo ? (
                <Link
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--text-muted)] underline decoration-[var(--border)] underline-offset-4 hover:text-[var(--text)] hover:decoration-[var(--accent)]"
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
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="surface group flex h-full flex-col gap-4 rounded-[8px] p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(27,36,48,0.1)]">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View case study for ${project.title}`}
        className="-m-2 flex cursor-pointer flex-col gap-5 rounded-[6px] p-2 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4"
      >
        <div className="overflow-hidden rounded-[6px] border border-[var(--border)] bg-[var(--background-strong)] transition-colors duration-200 group-hover:border-[color:rgba(15,118,110,0.28)] group-focus-within:border-[color:rgba(15,118,110,0.32)]">
          <ProjectMedia
            project={project}
            className={defaultMediaClass}
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[var(--text)] transition-colors duration-200 group-hover:text-[var(--accent)] group-focus-within:text-[var(--accent)]">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-[var(--accent)]">
            {project.recruiterSignal ?? project.tagline}
          </p>
        </div>

        <div className="grid gap-4 border-y border-[var(--border)] py-4">
          <EvidenceRow label="Problem" value={problem} />
          <EvidenceRow label="Built" value={contribution} />
          {outcome ? <EvidenceRow label="Proof" value={outcome} /> : null}
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
    </article>
  );
}

function EvidenceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
        {label}
      </p>
      <p className="text-sm leading-6 text-[var(--text-muted)]">{value}</p>
    </div>
  );
}
