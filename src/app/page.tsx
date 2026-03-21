import type { Metadata } from "next";

import { ContactCta } from "@/components/sections/contact-cta";
import { CredibilitySignals } from "@/components/sections/credibility-signals";
import { ExperienceSummary } from "@/components/sections/experience-summary";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Daniel Jung | AI / ML Engineer",
  description:
    "Applied AI / ML engineer building computer vision, document intelligence, and systems-minded software for real-world engineering problems."
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <CredibilitySignals />
      <ExperienceSummary />
      <SkillsGrid />
      <ContactCta />
    </>
  );
}
