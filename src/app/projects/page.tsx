import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Selected AI, ML, and systems-focused projects spanning recommendation systems, document understanding, and robotics-adjacent exploration."
});

export default function ProjectsPage() {
  return (
    <Section>
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Selected Work"
          title="A visual index of applied AI systems."
          description="Browse the work quickly, then open a case study for the technical details."
        />
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="index" />
          ))}
        </div>
      </Container>
    </Section>
  );
}
