import type { Metadata } from "next";

import { ContactCta } from "@/components/sections/contact-cta";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
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
      <ContactCta />
    </>
  );
}
