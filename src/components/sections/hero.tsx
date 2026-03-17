import Image from "next/image";

import { siteConfig } from "../../data/site";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Button } from "../ui/button";

const credentialTiles = [
  {
    eyebrow: "Graduate Program",
    title: "Carnegie Mellon",
    detail: "MS candidate",
    meta: "Advanced engineering and AI systems",
    className:
      "bg-[linear-gradient(160deg,rgba(255,255,255,0.95),rgba(15,118,110,0.09))]",
    titleClassName: "text-[1.65rem] sm:text-[1.8rem]",
  },
  {
    eyebrow: "Research",
    title: "CERLAB",
    detail: "Graduate researcher",
    meta: "Engineering documents + vision transformers",
    className:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.72))]",
    titleClassName: "text-xl sm:text-[1.55rem]",
  },
  {
    eyebrow: "Industry",
    title: "Westinghouse",
    detail: "Systems Engineer II",
    meta: "Reliability, systems rigor, technical delivery",
    className:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(15,118,110,0.07))]",
    titleClassName: "text-xl sm:text-[1.55rem]",
  },
];

const heroFocus =
  "Engineering documents, vision transformers, and ML-enabled developer tools.";

export function Hero() {
  return (
    <Section className="relative overflow-hidden pb-10 pt-4 sm:pt-8 lg:pb-8 lg:pt-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_14%_18%,rgba(15,118,110,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.8),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0))]"
      />

      <Container className="relative grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:items-start lg:gap-10">
        <div className="max-w-3xl pt-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-white/82 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] shadow-[0_10px_30px_rgba(27,36,48,0.06)] backdrop-blur">
              Daniel Jung
            </span>
          </div>

          <div className="mt-5 animate-fade-up space-y-5" style={{ animationDelay: "80ms" }}>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.06em] text-[var(--text)] sm:text-5xl lg:text-[5.35rem]">
              Building AI systems that can read complex signals and operate in
              the real world.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
              AI / ML engineer focused on computer vision, intelligent developer
              tools, and robotics-adjacent software with systems-level rigor.
            </p>
          </div>

          <div
            className="mt-7 animate-fade-up flex flex-wrap gap-3"
            style={{ animationDelay: "140ms" }}
          >
            <Button href="/projects" size="lg">
              View Projects
            </Button>
            <Button href={siteConfig.resumeUrl} variant="secondary" size="lg">
              Resume
            </Button>
          </div>

          <div
            className="mt-6 animate-fade-up grid gap-3 lg:grid-cols-[1.25fr_0.85fr_0.9fr]"
            style={{ animationDelay: "220ms" }}
          >
            {credentialTiles.map((tile) => (
              <CredentialTile key={tile.title} {...tile} />
            ))}
          </div>
        </div>

        <div
          className="animate-fade-up lg:pt-1"
          style={{ animationDelay: "180ms" }}
        >
          <HeroPortrait />
        </div>
      </Container>
    </Section>
  );
}

interface CredentialTileProps {
  eyebrow: string;
  title: string;
  detail: string;
  meta: string;
  className: string;
  titleClassName: string;
}

function CredentialTile({
  eyebrow,
  title,
  detail,
  meta,
  className,
  titleClassName,
}: CredentialTileProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-[1.7rem] border border-[var(--border)] px-4 py-4 shadow-[0_18px_40px_rgba(27,36,48,0.05)] backdrop-blur ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,rgba(15,118,110,0.5),rgba(15,118,110,0))]"
      />
      <div className="relative flex h-full flex-col gap-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          {eyebrow}
        </p>
        <div className="space-y-1">
          <h2 className={`${titleClassName} font-semibold tracking-[-0.05em] text-[var(--text)]`}>
            {title}
          </h2>
          <p className="text-sm font-medium text-[var(--text)]">{detail}</p>
        </div>
        <p className="mt-auto text-sm leading-6 text-[var(--text-muted)]">{meta}</p>
      </div>
    </article>
  );
}

function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[35rem] lg:mx-0">
      <div
        aria-hidden="true"
        className="absolute -left-8 top-12 h-28 w-28 rounded-full bg-[var(--accent-soft)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-4 top-0 h-36 w-36 rounded-full bg-white/80 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute left-8 right-12 top-7 hidden h-[89%] rounded-[2.65rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.54),rgba(255,255,255,0.16))] lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-12 bottom-2 h-16 rounded-full bg-[rgba(27,36,48,0.14)] blur-2xl"
      />

      <div className="relative overflow-visible rounded-[2.55rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.66))] p-3 shadow-[0_30px_80px_rgba(27,36,48,0.1)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 sm:p-4">
        <div className="rounded-[2.1rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.16))] p-4 sm:p-4">
          <div className="flex items-start justify-between gap-4 pb-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Based in
              </p>
              <p className="mt-1 text-base font-medium tracking-[-0.03em] text-[var(--text)] sm:text-lg">
                {siteConfig.location}
              </p>
            </div>
            <div className="pt-1 text-right">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Field Context
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Human systems, real environments
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.85rem] border border-white/70 bg-[var(--background-strong)]">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white/55 to-transparent"
            />
            <Image
              src="/me.jpg"
              alt={`${siteConfig.name} portrait`}
              width={1536}
              height={2048}
              priority
              className="h-[23rem] w-full object-cover object-center transition duration-500 ease-out hover:scale-[1.03] sm:h-[28rem] lg:h-[31rem]"
            />
          </div>

          <div className="mt-3 grid gap-3 border-t border-[var(--border)] pt-3 sm:grid-cols-[1.2fr_0.8fr] sm:items-end">
            <div className="space-y-1.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Current Focus
              </p>
              <p className="max-w-md text-sm leading-6 text-[var(--text)] sm:text-[15px]">
                {heroFocus}
              </p>
            </div>
            <div className="rounded-[1.3rem] border border-[var(--border)] bg-white/74 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Working Style
              </p>
              <p className="mt-1.5 text-sm leading-6 text-[var(--text)]">
                Research-informed, systems-first, production-aware.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
