import Link from "next/link";
import { featuredProjects } from "../../data/projects";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { ProjectCard } from "../ui/project-card";
import { SectionHeading } from "../ui/section-heading";

export function FeaturedProjects() {
  return (
    <Section id="featured-projects">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that show applied AI, systems thinking, and product execution"
          description="These featured repos were chosen to make your technical range obvious quickly: recommendation systems, document-understanding workflows, and robotics-adjacent ML exploration."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-[var(--text)] underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--accent)] focus-visible:outline-none"
          >
            See all projects
          </Link>
        </div>
      </Container>
    </Section>
  );
}
