import Image from "next/image";

import { siteConfig } from "../../data/site";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Button } from "../ui/button";

const heroFocus = "Vision transformers, engineering documents, and ML-enabled tools.";

export function Hero() {
  return (
    <Section className="relative overflow-hidden pb-1 pt-2 sm:pb-2 sm:pt-5 lg:pb-2 lg:pt-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[31rem] bg-[radial-gradient(circle_at_14%_18%,rgba(15,118,110,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.8),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0))]"
      />

      <Container className="relative">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-start lg:gap-8">
          <div className="max-w-3xl pt-1">
            <div className="animate-fade-up">
              <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-white/82 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] shadow-[0_10px_30px_rgba(27,36,48,0.06)] backdrop-blur">
                Daniel Jung
              </span>
            </div>

            <div className="mt-4 animate-fade-up space-y-4 sm:space-y-5" style={{ animationDelay: "80ms" }}>
              <h1 className="max-w-4xl text-[3.55rem] font-semibold leading-[0.92] tracking-[-0.065em] text-[var(--text)] sm:text-[4.55rem] md:text-[5.15rem] lg:text-[4.9rem] xl:text-[5.3rem]">
                Building AI systems that can read complex signals and operate in
                the real world.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--text-muted)] sm:text-[1.15rem]">
                AI / ML engineer focused on computer vision, intelligent developer
                tools, and robotics-adjacent software with systems-level rigor.
              </p>
            </div>

            <div
              className="mt-6 animate-fade-up flex flex-wrap gap-3"
              style={{ animationDelay: "140ms" }}
            >
              <Button href="/projects" size="lg">
                View Projects
              </Button>
              <Button href={siteConfig.resumeUrl} variant="secondary" size="lg">
                Resume
              </Button>
            </div>
          </div>

          <div
            className="animate-fade-up lg:pt-1"
            style={{ animationDelay: "180ms" }}
          >
            <HeroPortrait />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:mx-0">
      <div
        aria-hidden="true"
        className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-[var(--accent-soft)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-2 top-0 h-32 w-32 rounded-full bg-white/80 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute left-6 right-10 top-6 hidden h-[88%] rounded-[2.4rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.54),rgba(255,255,255,0.14))] lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-12 bottom-1 h-14 rounded-full bg-[rgba(27,36,48,0.12)] blur-2xl"
      />

      <div className="relative overflow-visible rounded-[2.35rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.66))] p-3 shadow-[0_28px_72px_rgba(27,36,48,0.1)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 sm:p-3.5">
        <div className="rounded-[1.95rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.16))] p-3.5">
          <div className="flex items-start justify-between gap-4 pb-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Based in
              </p>
              <p className="mt-1 text-base font-medium tracking-[-0.03em] text-[var(--text)] sm:text-[1.05rem]">
                {siteConfig.location}
              </p>
            </div>
            <div className="pt-1 text-right">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Field Context
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Human systems, real environments
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/70 bg-[var(--background-strong)]">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-white/55 to-transparent"
            />
            <Image
              src="/me.jpg"
              alt={`${siteConfig.name} portrait`}
              width={1536}
              height={2048}
              priority
              className="h-[20.5rem] w-full object-cover object-center transition duration-500 ease-out hover:scale-[1.03] sm:h-[24.5rem] lg:h-[27rem] xl:h-[28.5rem]"
            />
          </div>

          <div className="mt-3 grid gap-3 border-t border-[var(--border)] pt-3 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Current Focus
              </p>
              <p className="max-w-md text-sm leading-6 text-[var(--text)]">
                {heroFocus}
              </p>
            </div>
            <div className="rounded-[1.15rem] border border-[var(--border)] bg-white/72 px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Working Style
              </p>
              <p className="mt-1 text-sm leading-6 text-[var(--text)]">
                Research-informed, systems-first, production-aware.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
