import Link from "next/link";
import { featuredProjects } from "../../data/projects";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { ProjectCard } from "../ui/project-card";

export function FeaturedProjects() {
  return (
    <Section id="featured-projects" className="border-b border-[var(--border)] bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Selected Work
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-4xl">
              Two projects that show how I build.
            </h2>
          </div>
          <div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-[var(--text)] underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--accent)]"
            >
              View all projects
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featuredProjects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} variant="compact" />
          ))}
        </div>
      </Container>
    </Section>
  );
}
