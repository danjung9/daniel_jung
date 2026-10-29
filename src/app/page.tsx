import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PerceptionField } from "@/components/perception-field";

import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...buildMetadata({ title: siteConfig.name, description: siteConfig.description }),
  title: { absolute: siteConfig.name }
};

export default function HomePage() {
  return (
    <PerceptionField>
      <main id="main-content" className="home-content">
        <section className="home-intro" aria-label="Introduction">
          <h1 className="home-name display-heading text-center text-4xl font-extrabold sm:text-5xl">
            {siteConfig.name}
          </h1>
          <a className="home-scroll-link" href="#bio">
            About me <span aria-hidden="true">↓</span>
          </a>
        </section>
        <div className="landscape-transition" aria-hidden="true" />
        <section id="bio" className="home-bio" aria-labelledby="bio-title">
          <div className="home-bio-layout">
            <div className="home-portrait">
              <Image
                className="home-portrait-image"
                src="/me.jpg"
                alt="Daniel Jung beside a small airplane"
                width={320}
                height={320}
                sizes="(max-width: 700px) 224px, 320px"
              />
            </div>
            <div className="home-bio-copy">
              <h2 id="bio-title" className="display-heading">A little about me.</h2>
              <p>I’m Daniel, an engineer working across AI, computer vision, and systems engineering.</p>
              <p>
                At the Department of War, I work on a range of technical problems, from exploring how AI 
                and machine learning can help to building and shipping solutions. At Carnegie Mellon’s CERLAB, 
                I research how computers can interpret engineering drawings.
              </p>
              <p>
                My projects explore perception, retrieval, and robotics—connecting research
                ideas with software that works in the real world.
              </p>
              <div className="home-bio-links">
                <Link href="/projects">Explore my projects</Link>
                <Link href="/about">Background &amp; experience</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PerceptionField>
  );
}
