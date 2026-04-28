import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectMedia } from "@/components/ui/project-media";
import { SectionHeading } from "@/components/ui/section-heading";
import { getProjectBySlug, projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({
      title: "Project Not Found",
      description: "The requested project page could not be found."
    });
  }

  return buildMetadata({
    title: project.title,
    description: project.summary,
    image: project.image
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${SITE_URL}/projects/${project.slug}`
  };

  return (
    <Section>
      <Container className="space-y-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <SectionHeading
          eyebrow="Case Study"
          title={project.title}
          description={project.recruiterSignal ?? project.tagline}
        />
        {project.metric ?? project.outcome ? (
          <p className="max-w-3xl border-l-2 border-[var(--accent)] pl-4 text-base font-semibold leading-7 text-[var(--text)]">
            {project.metric ?? project.outcome}
          </p>
        ) : null}

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <article className="order-2 lg:order-1">
            <div className="overflow-hidden border border-[var(--border)] bg-[var(--background-strong)]">
              <div className="overflow-hidden">
                <ProjectMedia
                  project={project}
                  className="max-h-[70vh] w-full bg-black object-contain"
                  priority
                  controls={Boolean(project.video)}
                />
              </div>
            </div>

            <section className="border-t border-[var(--border)] py-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Problem
              </p>
              <h2 className="mt-3 text-2xl font-semibold">What this project needed to solve</h2>
              <p className="prose-copy mt-4 text-base">{project.problem ?? project.description}</p>
            </section>

            <section className="border-t border-[var(--border)] py-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                My Role
              </p>
              <h2 className="mt-3 text-2xl font-semibold">Ownership and contribution</h2>
              <p className="prose-copy mt-4 text-base">{project.contribution ?? project.summary}</p>
            </section>

            <section className="border-t border-[var(--border)] py-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Technical Approach
              </p>
              <h2 className="mt-3 text-2xl font-semibold">How the system was built</h2>
              <ul className="mt-4 space-y-3 text-sm text-[var(--text-muted)] md:text-base">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {project.impact?.length ? (
              <section className="border-t border-[var(--border)] py-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Results
                </p>
                <h2 className="mt-3 text-2xl font-semibold">Outcome and proof</h2>
                <ul className="mt-4 grid gap-4 md:grid-cols-2">
                  {project.impact.map((item) => (
                    <li
                      key={item}
                      className="border-l border-[var(--border)] pl-4 text-sm leading-6 text-[var(--text-muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section className="border-t border-[var(--border)] py-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Overview
              </p>
              <h2 className="mt-3 text-2xl font-semibold">Full context</h2>
              <p className="prose-copy mt-4 text-base">{project.description}</p>
            </section>
          </article>

          <aside className="order-1 space-y-6 border-t border-[var(--border)] pt-6 lg:sticky lg:top-24 lg:order-2">
            <section>
              <h2 className="text-lg font-semibold">Project Info</h2>
              <dl className="mt-4 divide-y divide-[var(--border)] text-sm text-[var(--text-muted)]">
                <div className="grid grid-cols-[5rem_minmax(0,1fr)] gap-3 py-3 first:pt-0">
                  <dt className="font-medium text-[var(--text)]">Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div className="grid grid-cols-[5rem_minmax(0,1fr)] gap-3 py-3">
                  <dt className="font-medium text-[var(--text)]">Period</dt>
                  <dd>{project.period}</dd>
                </div>
                {project.teamSize ? (
                  <div className="grid grid-cols-[5rem_minmax(0,1fr)] gap-3 py-3">
                    <dt className="font-medium text-[var(--text)]">Team</dt>
                    <dd>{project.teamSize}</dd>
                  </div>
                ) : null}
                <div className="grid grid-cols-[5rem_minmax(0,1fr)] gap-3 py-3">
                  <dt className="font-medium text-[var(--text)]">Status</dt>
                  <dd className="capitalize">{project.status ?? "live"}</dd>
                </div>
              </dl>
            </section>

            <section className="border-t border-[var(--border)] pt-5">
              <h2 className="text-lg font-semibold">Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </section>

            <section className="border-t border-[var(--border)] pt-5">
              <h2 className="text-lg font-semibold">Links</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.links.live ? (
                  <Button href={project.links.live} external>
                    Live Demo
                  </Button>
                ) : null}
                {project.links.repo ? (
                  <Button href={project.links.repo} variant="secondary" external>
                    Repository
                  </Button>
                ) : null}
                {project.links.caseStudy &&
                project.links.caseStudy.startsWith("http") ? (
                  <Button href={project.links.caseStudy} variant="ghost" external>
                    Case Study
                  </Button>
                ) : null}
                {project.links.attachments?.map((attachment) => (
                  <Button
                    key={`${attachment.label}-${attachment.href}`}
                    href={attachment.href}
                    variant="secondary"
                    external
                  >
                    {attachment.label}
                  </Button>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
