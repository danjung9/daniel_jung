import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <div className="surface rounded-[2rem] p-10 text-center">
          <p className="eyebrow text-sm font-semibold">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            This page is missing.
          </h1>
          <p className="prose-copy mx-auto mt-4 max-w-2xl text-base">
            The link may be outdated, or the page may have moved. Start from the
            homepage or go directly to the project archive.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/">Back Home</Button>
            <Button href="/projects" variant="secondary">
              Browse Projects
            </Button>
          </div>
          <p className="mt-8 text-sm text-[var(--text-muted)]">
            If you expected a case study here,{" "}
            <Link href="/contact" className="underline">
              get in touch
            </Link>
            .
          </p>
        </div>
      </Container>
    </Section>
  );
}

