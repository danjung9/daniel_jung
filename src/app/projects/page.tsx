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
          title="Project case studies that reflect applied AI and systems thinking."
          description="Each project page is written to make the problem, technical approach, stack, and engineering relevance easy to scan quickly."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
