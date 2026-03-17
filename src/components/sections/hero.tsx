import Link from "next/link";
import { siteConfig } from "../../data/site";
import { Container } from "../layout/container";
import { Section } from "../layout/section";

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-10 sm:pt-14">
      <Container className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
        <div className="max-w-4xl space-y-7">
          <p className="eyebrow text-sm font-semibold">Daniel Jung</p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-[var(--text)] sm:text-5xl lg:text-7xl">
            {siteConfig.headline}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
            {siteConfig.valueProposition}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--text)] px-5 text-sm font-semibold !text-white hover:-translate-y-0.5 hover:bg-[var(--accent)] focus-visible:outline-none"
            >
              Projects
            </Link>
            <Link
              href={siteConfig.resumeUrl}
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/70 px-5 text-sm font-semibold text-[var(--text)] hover:-translate-y-0.5 hover:border-[var(--accent)] focus-visible:outline-none"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] bg-transparent px-5 text-sm font-semibold text-[var(--text)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white/60 focus-visible:outline-none"
            >
              Contact
            </Link>
          </div>
          <p className="max-w-3xl text-sm leading-7 text-[var(--text-muted)] sm:text-base">
            {siteConfig.description}
          </p>
        </div>

        <div className="surface animate-fade-up rounded-[2rem] p-6 sm:p-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Snapshot
            </p>
            <div className="grid gap-4">
              {siteConfig.affiliations.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-[var(--border)] bg-white/80 p-5"
                >
                  <p className="text-base font-semibold tracking-tight text-[var(--text)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--accent-soft)] p-5">
              <p className="text-sm font-medium text-[var(--text-muted)]">
                Current focus
              </p>
              <p className="mt-2 text-base leading-7 text-[var(--text)]">
                {siteConfig.currentFocus}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
