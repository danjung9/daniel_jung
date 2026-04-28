import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

import { siteConfig } from "../../data/site";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Button } from "../ui/button";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"]
});

const hero = {
  title: "I'm Daniel, an AI engineer that ships.",
  domains: "Computer Vision · Applied AI · Robotics",
  body: "I turn research-heavy AI ideas into usable software across perception, retrieval, robotics, and engineering workflows."
};

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
          className="object-cover object-[60%_22%] opacity-[1] saturate-[1]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,rgba(247,249,252,0.78)_20%,rgba(247,249,252,0.18)_52%,rgba(247,249,252,0.03)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,249,252,0.06)_0%,rgba(247,249,252,0)_38%,rgba(247,249,252,0.16)_100%)]" />
      </div>

      <Container className="relative">
        <div className="grid min-h-[calc(100svh-4.5rem)] items-center py-6 sm:py-8 lg:py-10">
          <div
            className="animate-fade-up max-w-4xl"
            style={{ animationDelay: "80ms" }}
          >
            <div className="space-y-4">
              <h1 className={`${playfairDisplay.className} max-w-[58rem] text-[1.95rem] leading-[1.02] text-[var(--text)] sm:text-[2.55rem] md:text-[2.9rem] lg:text-[3.1rem] xl:text-[3.95rem]`}>
                {hero.title}
              </h1>
              <p className="max-w-2xl text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)] sm:text-[0.8rem]">
                {hero.domains}
              </p>
              <p className="max-w-xl text-base leading-7 text-[var(--text-muted)] sm:text-lg sm:leading-8">
                {hero.body}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <SplitCtaLink href="/projects">Check out my work</SplitCtaLink>
              <Button href={siteConfig.resumeUrl} variant="secondary" size="lg" className="sm:h-14">
                Open Resume
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function SplitCtaLink({ children, href }: { children: string; href: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-base font-semibold text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4"
    >
      <span
        aria-hidden="true"
        className="z-10 flex h-12 w-12 items-center justify-center rounded-[8px] border border-transparent bg-white/70 text-3xl leading-none shadow-[0_10px_24px_rgba(16,24,32,0.04)] transition-[background-color,border-radius,color] duration-[575ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rounded-r-none group-hover:bg-[var(--text)] group-hover:text-white group-focus-visible:rounded-r-none group-focus-visible:bg-[var(--text)] group-focus-visible:text-white sm:h-14 sm:w-14"
      >
        <span className="transition-transform duration-[575ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:translate-y-0.5">
          ↳
        </span>
      </span>
      <span className="flex h-12 will-change-transform items-center rounded-[8px] border border-[var(--border)] bg-white/75 px-5 shadow-[0_10px_24px_rgba(16,24,32,0.04)] transition-[transform,background-color,border-color,border-radius,color] duration-[575ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-[0.6rem] group-hover:rounded-l-none group-hover:border-transparent group-hover:bg-[var(--text)] group-hover:text-white group-focus-visible:-translate-x-[0.6rem] group-focus-visible:rounded-l-none group-focus-visible:border-transparent group-focus-visible:bg-[var(--text)] group-focus-visible:text-white sm:h-14 sm:px-8 sm:text-xl">
        {children}
      </span>
    </Link>
  );
}
