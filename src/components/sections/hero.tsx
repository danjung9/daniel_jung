import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

import { siteConfig } from "../../data/site";
import { Container } from "../layout/container";
import { Section } from "../layout/section";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"]
});

export function Hero() {
  return (
    <Section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)] !py-0">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46vw] max-w-[42rem] lg:block">
        <Image
          src="/me.jpg"
          alt=""
          fill
          priority
          sizes="46vw"
          className="object-cover object-[74%_22%] opacity-[0.42] saturate-[0.72]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,rgba(247,249,252,0.9)_18%,rgba(247,249,252,0.28)_52%,rgba(247,249,252,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,249,252,0.18)_0%,rgba(247,249,252,0)_34%,var(--background)_100%)]" />
      </div>

      <Container className="relative">
        <div className="grid min-h-[calc(100svh-4.5rem)] items-center py-6 sm:py-8 lg:py-10">
          <div
            className="animate-fade-up max-w-4xl"
            style={{ animationDelay: "80ms" }}
          >
            <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] sm:text-[0.78rem]">
              <span>Applied AI Systems</span>
              <span className="hidden h-px w-12 bg-[var(--accent)] sm:block" />
              <span>CMU MS · Systems Engineer II · Graduate Research</span>
            </div>

            <div className="space-y-4">
              <h1 className={`${playfairDisplay.className} max-w-[58rem] text-[1.95rem] leading-[1.02] text-[var(--text)] sm:text-[2.55rem] md:text-[2.9rem] lg:text-[3.1rem] xl:text-[3.95rem]`}>
                I&apos;m Daniel, an AI engineer that ships.
              </h1>
              <p className="max-w-2xl text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)] sm:text-[0.8rem]">
                Vision · Document AI · Robotics · Recommender systems
              </p>
              <p className="max-w-xl text-base leading-7 text-[var(--text-muted)] sm:text-lg sm:leading-8">
                I turn research-heavy AI ideas into usable software across perception, retrieval, robotics, and engineering workflows.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center border border-[var(--accent)] bg-[var(--accent)] px-5 text-sm font-semibold !text-white transition hover:border-[var(--text)] hover:bg-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 sm:text-base"
              >
                View Case Studies
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                className="inline-flex h-11 items-center justify-center border border-[var(--border)] bg-white/70 px-5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:bg-white focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 sm:text-base"
              >
                Open Resume
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
