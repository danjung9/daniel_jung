import type { Metadata } from "next";

import { AboutFocus } from "@/components/sections/about-focus";
import { ContactCta } from "@/components/sections/contact-cta";
import { CredibilitySignals } from "@/components/sections/credibility-signals";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
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
      <CredibilitySignals />
      <FeaturedProjects />
      <AboutFocus />
      <ContactCta />
    </>
  );
}
