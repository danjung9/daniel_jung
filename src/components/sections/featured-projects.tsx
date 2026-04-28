import Link from "next/link";
import { featuredProjects } from "../../data/projects";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { ProjectCard } from "../ui/project-card";

const homepageFeaturedSlugs = [
  "emio-pick-place-imitation-lab",
  "ai-shopping-glasses"
];

export function FeaturedProjects() {
  const homepageFeaturedProjects = homepageFeaturedSlugs
    .map((slug) => featuredProjects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <Section id="featured-projects" className="border-b border-[var(--border)] bg-white py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Selected Work
            </p>
            <h2 className="text-3xl font-semibold text-[var(--text)] sm:text-4xl">
              Two projects, enough signal to keep moving.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[var(--text-muted)]">
              Vision / Documents / Robotics / Recsys, with the detail saved for the case studies.
            </p>
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
          {homepageFeaturedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="compact" />
          ))}
        </div>
      </Container>
    </Section>
  );
}
