import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ExperienceItem } from "@/components/ui/experience-item";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/experience";
import { siteConfig } from "@/data/site";
import { skills } from "@/data/skills";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Background, engineering focus, and current work across AI, machine learning, systems engineering, and robotics-adjacent software."
});

export default function AboutPage() {
  return (
    <Section className="py-12 sm:py-16 lg:py-20">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="About"
          title="An engineer working across AI, ML, systems engineering, and robotics-focused software."
          description={siteConfig.description}
        />

        <div className="grid gap-10 border-t border-[var(--border)] pt-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section>
            <h2 className="display-heading text-2xl font-semibold">Experience</h2>
            <div className="mt-6 space-y-6">
              {experience.map((item) => (
                <ExperienceItem key={`${item.company}-${item.title}`} item={item} />
              ))}
            </div>
          </section>

          <section className="border-t border-[var(--border)] pt-8 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <h2 className="display-heading text-2xl font-semibold">Strengths</h2>
            <div className="mt-6 divide-y divide-[var(--border)]">
              {skills.map((group) => (
                <div key={group.title} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                    {group.title}
                  </h3>
                  <p className="prose-copy mt-3 text-sm md:text-base">
                    {group.items.join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </Section>
  );
}
