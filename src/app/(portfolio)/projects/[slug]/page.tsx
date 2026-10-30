import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
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

  const chapters = [
    { id: "idea", label: "The idea" },
    { id: "contribution", label: "What I built" },
    { id: "approach", label: "How it works" },
    ...(project.impact?.length ? [{ id: "results", label: "What came out" }] : []),
    { id: "context", label: "A closer look" }
  ];
  const resources = [
    ...(project.links.live ? [{ label: "Open demo", href: project.links.live }] : []),
    ...(project.links.repo ? [{ label: "View code", href: project.links.repo }] : []),
    ...(project.links.caseStudy?.startsWith("http") ? [{ label: "Read case study", href: project.links.caseStudy }] : []),
    ...(project.links.attachments ?? [])
  ];
  const nextProject = projects[(projects.findIndex(item => item.slug === project.slug) + 1) % projects.length];

  return (
    <Section>
      <Container className="project-detail">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Link href="/projects" className="text-link project-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20 12H5m6-6-6 6 6 6" /></svg>
          All projects
        </Link>
        <SectionHeading as="h1" title={project.shortTitle ?? project.title} description={project.tagline} />

        <div className="project-desk">
          <figure className="project-artifact">
            <div className="project-artifact-media">
              <ProjectMedia project={project} className="project-artifact-image" priority controls={Boolean(project.video)} />
            </div>
            {project.metric ?? project.outcome ? (
              <figcaption>{project.metric ?? project.outcome}</figcaption>
            ) : null}
          </figure>
          <aside className="project-notes" aria-label="Project details and resources">
            <dl className="project-facts">
              <div><dt>Role</dt><dd>{project.role}</dd></div>
              <div><dt>Period</dt><dd>{project.period}</dd></div>
              {project.teamSize ? <div><dt>Team</dt><dd>{project.teamSize} {project.teamSize === 1 ? "person" : "people"}</dd></div> : null}
              <div><dt>Status</dt><dd>{project.status === "in-progress" ? "In progress" : project.status === "archived" ? "Archived" : "Live"}</dd></div>
            </dl>
            <section className="project-tools" aria-labelledby="tools-title">
              <h2 id="tools-title">Made with</h2>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {project.stack.map(item => <Badge key={item}>{item}</Badge>)}
              </div>
            </section>
            {resources.length ? (
              <div className="project-resources">
                {resources.map(resource => (
                  <Link key={`${resource.label}-${resource.href}`} href={resource.href} className="text-link" target="_blank" rel="noreferrer">
                    {resource.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
                  </Link>
                ))}
              </div>
            ) : null}
          </aside>
        </div>

        <div className="project-journal">
          <nav className="project-chapters" aria-label="In this project">
            <svg viewBox={`0 0 40 ${chapters.length * 44}`} width="40" height={chapters.length * 44} aria-hidden="true">
              <path d={chapters.map((_, index) => `${index ? "L" : "M"}${index % 2 ? 12 : 24} ${index * 44 + 22}`).join(" ")} />
              {chapters.map((chapter, index) => <circle key={chapter.id} cx={index % 2 ? 12 : 24} cy={index * 44 + 22} r="2.5" />)}
            </svg>
            {chapters.map(chapter => <a key={chapter.id} href={`#${chapter.id}`}>{chapter.label}</a>)}
          </nav>
          <article className="project-story" aria-label={`${project.shortTitle ?? project.title} project notes`}>
            <section id="idea" aria-labelledby="idea-title">
              <h2 id="idea-title">The idea</h2>
              <p>{project.problem ?? project.description}</p>
            </section>
            <section id="contribution" aria-labelledby="contribution-title">
              <h2 id="contribution-title">What I built</h2>
              <p>{project.contribution ?? project.summary}</p>
            </section>
            <section id="approach" aria-labelledby="approach-title">
              <h2 id="approach-title">How it works</h2>
              <ul>{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
            </section>
            {project.impact?.length ? (
              <section id="results" aria-labelledby="results-title">
                <h2 id="results-title">What came out</h2>
                <ul>{project.impact.map(item => <li key={item}>{item}</li>)}</ul>
              </section>
            ) : null}
            <section id="context" aria-labelledby="context-title">
              <h2 id="context-title">A closer look</h2>
              <p>{project.description}</p>
            </section>
          </article>
        </div>

        <nav className="project-continuation" aria-label="Explore more projects">
          <Link href="/projects" className="text-link">Back to the workbench</Link>
          <Link href={`/projects/${nextProject.slug}`} className="project-next">
            <span>Next project</span>
            <span className="display-heading">{nextProject.shortTitle ?? nextProject.title}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
            </span>
          </Link>
        </nav>
      </Container>
    </Section>
  );
}
