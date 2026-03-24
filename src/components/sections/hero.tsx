import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "../../data/site";
import { Container } from "../layout/container";
import { Section } from "../layout/section";

const heroProof = [
  {
    label: "Research",
    value: "CMU MS + graduate work in engineering-document understanding"
  },
  {
    label: "Industry",
    value: "Systems Engineer II building in reliability-sensitive environments"
  },
  {
    label: "Focus",
    value: "Computer vision, document intelligence, and practical AI systems"
  }
];

export function Hero() {
  return (
    <Section className="overflow-hidden border-b border-[var(--border)] bg-[var(--background)] py-8 sm:py-12 lg:min-h-[calc(100svh-4rem)] lg:py-14">
      <Container className="relative flex h-full items-center">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.18fr)_18rem] lg:items-center lg:gap-12 xl:grid-cols-[minmax(0,1.2fr)_19rem]">
          <div className="max-w-3xl">
            <div
              className="animate-fade-up space-y-4 sm:space-y-5"
              style={{ animationDelay: "80ms" }}
            >
              <h1 className="max-w-4xl text-[3rem] font-semibold leading-[0.95] tracking-[-0.065em] text-[var(--text)] sm:text-[4rem] md:text-[4.5rem] lg:text-[4.35rem] xl:text-[4.75rem]">
                Applied AI engineer building reliable systems people can use.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg sm:leading-8">
                I work across computer vision, document intelligence, and systems-heavy software, translating research into clear, production-minded case studies.
              </p>
            </div>

            <div
              className="mt-6 animate-fade-up flex flex-wrap gap-3"
              style={{ animationDelay: "140ms" }}
            >
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center border border-[var(--text)] bg-[var(--text)] px-5 text-base font-semibold !text-white transition hover:bg-[var(--accent)] hover:border-[var(--accent)]"
              >
                View Projects
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                className="inline-flex h-12 items-center justify-center border border-[var(--border)] bg-white px-5 text-base font-semibold text-[var(--text)] transition hover:border-[var(--text)]"
              >
                Open Resume
              </Link>
            </div>

            <dl
              className="mt-8 animate-fade-up grid gap-0 border-y border-[var(--border)]"
              style={{ animationDelay: "200ms" }}
            >
              {heroProof.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-1 border-b border-[var(--border)] py-4 last:border-b-0 sm:grid-cols-[6rem_minmax(0,1fr)] sm:items-start sm:gap-4"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    {item.label}
                  </dt>
                  <dd className="text-sm leading-6 text-[var(--text)] sm:text-[0.95rem]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="animate-fade-up"
            style={{ animationDelay: "240ms" }}
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
    <div className="mx-auto w-full max-w-[18rem] lg:mx-0">
      <div className="border border-[var(--border)] bg-[var(--surface-strong)] p-3">
        <Image
          src="/me.jpg"
          alt={`${siteConfig.name} portrait`}
          width={1536}
          height={2048}
          priority
          className="h-[16rem] w-full object-cover object-center sm:h-[17rem] lg:h-[19rem]"
        />
      </div>

      <div className="mt-4 border-t border-[var(--border)] pt-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Pittsburgh, Pennsylvania
        </p>
        <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
          Carnegie Mellon research and systems engineering experience.
        </p>
      </div>
    </div>
  );
}
