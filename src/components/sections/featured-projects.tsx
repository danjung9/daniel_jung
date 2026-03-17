import Link from "next/link";
import { featuredProjects } from "../../data/projects";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { ProjectCard } from "../ui/project-card";
import { SectionHeading } from "../ui/section-heading";

export function FeaturedProjects() {
  return (
    <Section id="featured-projects" className="relative pt-4 sm:pt-6 lg:pt-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0))]"
      />
      <Container className="relative">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0.22))] px-4 py-6 shadow-[0_20px_44px_rgba(27,36,48,0.04)] backdrop-blur sm:px-6 lg:px-8 lg:py-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,rgba(15,118,110,0.38),rgba(15,118,110,0))]"
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected Work"
              title="Built at the edge of what AI can do right now."
              description="From recommendation engines to document-understanding workflows—projects across the full AI stack."
            />
            <Link
              href="/projects"
              className="text-sm font-semibold text-[var(--text)] underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--accent)] focus-visible:outline-none"
            >
              See all projects
            </Link>
          </div>

          <div className="relative mt-8 grid gap-6 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
