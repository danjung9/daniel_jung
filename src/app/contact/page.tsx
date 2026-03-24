import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { SocialLink } from "@/components/ui/social-link";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact information, resume access, and professional profile links for AI, ML, robotics, and software engineering outreach."
});

export default function ContactPage() {
  return (
    <Section>
      <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <section className="surface rounded-[2rem] p-8 md:p-10">
          <SectionHeading
            eyebrow="Contact"
            title="Open to AI / ML, robotics, and software engineering conversations."
            description="The fastest way to reach me is by email. I typically respond within one business day."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`mailto:${siteConfig.email}`}>Email Me</Button>
            <Button href={siteConfig.resumeUrl} variant="secondary">
              View Resume
            </Button>
          </div>
        </section>

        <section className="surface rounded-[2rem] p-8 md:p-10">
          <h2 className="display-heading text-2xl font-semibold tracking-tight">Professional Profiles</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            {siteConfig.socials.map((social) => (
              <SocialLink key={social.label} label={social.label} href={social.href} />
            ))}
          </div>
          <dl className="mt-8 space-y-4 text-sm text-[var(--text-muted)] md:text-base">
            <div>
              <dt className="font-medium text-[var(--text)]">Location</dt>
              <dd className="mt-1">{siteConfig.location}</dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Email</dt>
              <dd className="mt-1">{siteConfig.email}</dd>
            </div>
          </dl>
        </section>
      </Container>
    </Section>
  );
}
