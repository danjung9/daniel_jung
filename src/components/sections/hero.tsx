import Image from "next/image";
import Link from "next/link";
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
    <Section className="overflow-hidden border-b border-[var(--border)] bg-[var(--background)] py-8 sm:py-12 lg:min-h-[30rem] lg:py-12">
      <Container className="relative lg:flex lg:h-full lg:items-center">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <div
              className="animate-fade-up space-y-4"
              style={{ animationDelay: "80ms" }}
            >
              <h1 className={`${playfairDisplay.className} max-w-3xl text-[2.15rem] leading-[1.04] text-[var(--text)] sm:text-[3.15rem] md:text-[3.55rem] lg:text-[4rem]`}>
                Applied AI engineer building systems that ship.
              </h1>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)] sm:text-[0.8rem]">
                Vision / Documents / Robotics / Recsys
              </p>
              <p className="max-w-xl text-base leading-7 text-[var(--text-muted)] sm:text-lg sm:leading-8">
                I connect ML research, systems engineering, and product execution without losing sight of reliability, usability, and delivery.
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
            <p className="mt-5 animate-fade-up text-sm leading-6 text-[var(--text)]" style={{ animationDelay: "180ms" }}>
              CMU MS · Systems Engineer II · Graduate Research · Applied AI Projects
            </p>
          </div>

          <div
            className="hidden animate-fade-up lg:block"
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
    <div className="mx-auto w-full max-w-[14rem] lg:mx-0">
      <div className="border border-[var(--border)] bg-[var(--surface-strong)] p-3">
        <Image
          src="/me.jpg"
          alt={`${siteConfig.name} portrait`}
          width={1536}
          height={2048}
          priority
          className="h-[15rem] w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 space-y-3 border-t border-[var(--border)] pt-4 text-xs leading-5 text-[var(--text-muted)]">
        <p>
          <span className="font-semibold text-[var(--text)]">CMU</span> graduate research in applied AI.
        </p>
        <p>
          <span className="font-semibold text-[var(--text)]">Westinghouse</span> systems engineering discipline.
        </p>
      </div>
    </div>
  );
}
