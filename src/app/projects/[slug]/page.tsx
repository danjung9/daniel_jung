import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
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
  const project = projects.find((item) => item.slug === slug);

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
  const project = projects.find((item) => item.slug === slug);

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
          description={project.tagline}
        />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="space-y-8">
            <div className="surface overflow-hidden rounded-[2rem] p-3">
              <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)]">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={1600}
                  height={960}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>

            <section className="surface rounded-[2rem] p-8">
              <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
              <p className="prose-copy mt-4 text-base">{project.description}</p>
            </section>

            <section className="surface rounded-[2rem] p-8">
              <h2 className="text-2xl font-semibold tracking-tight">Highlights</h2>
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
              <section className="surface rounded-[2rem] p-8">
                <h2 className="text-2xl font-semibold tracking-tight">Impact</h2>
                <ul className="mt-4 grid gap-4 md:grid-cols-2">
                  {project.impact.map((item) => (
                    <li
                      key={item}
                      className="rounded-[1.25rem] border border-[var(--border)] bg-white/70 px-5 py-4 text-sm text-[var(--text-muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </article>

          <aside className="space-y-6">
            <section className="surface rounded-[2rem] p-8">
              <h2 className="text-lg font-semibold tracking-tight">Project Info</h2>
              <dl className="mt-5 space-y-5 text-sm text-[var(--text-muted)]">
                <div>
                  <dt className="font-medium text-[var(--text)]">Role</dt>
                  <dd className="mt-1">{project.role}</dd>
                </div>
                <div>
                  <dt className="font-medium text-[var(--text)]">Period</dt>
                  <dd className="mt-1">{project.period}</dd>
                </div>
                {project.teamSize ? (
                  <div>
                    <dt className="font-medium text-[var(--text)]">Team Size</dt>
                    <dd className="mt-1">{project.teamSize}</dd>
                  </div>
                ) : null}
                <div>
                  <dt className="font-medium text-[var(--text)]">Status</dt>
                  <dd className="mt-1 capitalize">{project.status ?? "live"}</dd>
                </div>
              </dl>
            </section>

            <section className="surface rounded-[2rem] p-8">
              <h2 className="text-lg font-semibold tracking-tight">Stack</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </section>

            <section className="surface rounded-[2rem] p-8">
              <h2 className="text-lg font-semibold tracking-tight">Links</h2>
              <div className="mt-5 flex flex-wrap gap-3">
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
              </div>
            </section>
          </aside>
        </div>
      </Container>
    </Section>
  );
}

