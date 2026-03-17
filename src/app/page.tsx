import type { Metadata } from "next";

import { CapabilityBridge } from "@/components/sections/capability-bridge";
import { ContactCta } from "@/components/sections/contact-cta";
import { ExperienceSummary } from "@/components/sections/experience-summary";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Daniel Jung | AI / ML Engineer",
  description:
    "AI / ML engineer and robotics-focused software engineer building practical machine learning, computer vision, and systems-driven software."
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityBridge />
      <FeaturedProjects />
      <ExperienceSummary />
      <SkillsGrid />
      <ContactCta />
    </>
  );
}
