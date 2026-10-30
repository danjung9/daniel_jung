import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact information, resume requests, and professional profile links for AI, ML, robotics, and software engineering outreach."
});

export default function ContactPage() {
  const profileNotes: Record<string, string> = {
    GitHub: "Code & experiments",
    LinkedIn: "Professional profile"
  };
  const resources = [
    { label: "Resume", href: `mailto:${siteConfig.email}?subject=${encodeURIComponent("Resume request")}`, note: "Reach out to receive a copy" },
    ...siteConfig.socials.filter(social => !social.href.startsWith("mailto:")).map(social => ({
      ...social,
      note: profileNotes[social.label] ?? "Profile"
    }))
  ];

  return (
    <Section>
      <Container className="contact-workbench">
        <SectionHeading as="h1" title="Contact"
          description="Open to AI / ML, robotics, and software engineering conversations." />
        <div className="contact-desk">
          <section className="contact-letter" aria-labelledby="hello-title">
            <h2 id="hello-title" className="display-heading">Say hello.</h2>
            <p>The fastest way to reach me is by email. I typically respond within one business day.</p>
            <a className="contact-email" href={`mailto:${siteConfig.email}`}>
              <span>Email me</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
            </a>
            {siteConfig.location ? <p className="contact-location">{siteConfig.location}</p> : null}
          </section>
          <section className="contact-resources" aria-labelledby="contact-links-title">
            <h2 id="contact-links-title" className="display-heading">A few useful links</h2>
            <nav className="contact-links" aria-label="Resume and profiles">
              <svg className="contact-constellation" viewBox={`0 0 40 ${resources.length * 80}`} width="40" height={resources.length * 80} aria-hidden="true">
                <path d={resources.map((_, index) => `${index ? "L" : "M"}${index % 2 ? 12 : 24} ${index * 80 + 24}`).join(" ")} />
                {resources.map((resource, index) => <circle key={resource.label} cx={index % 2 ? 12 : 24} cy={index * 80 + 24} r="2.5" />)}
              </svg>
              {resources.map(resource => (
                <Link key={resource.href} href={resource.href} className="contact-resource" target={resource.href.startsWith("http") ? "_blank" : undefined} rel={resource.href.startsWith("http") ? "noreferrer" : undefined}>
                  <span><span className="contact-resource-name">{resource.label}</span><span className="contact-resource-note">{resource.note}</span></span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
                </Link>
              ))}
            </nav>
          </section>
        </div>
      </Container>
    </Section>
  );
}
