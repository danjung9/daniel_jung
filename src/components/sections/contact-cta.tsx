import Link from "next/link";
import { siteConfig } from "../../data/site";
import { Container } from "../layout/container";
import { Section } from "../layout/section";

export function ContactCta() {
  return (
    <Section id="contact-cta">
      <Container>
        <div className="surface rounded-[2rem] px-6 py-10 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow text-sm font-semibold">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
                Open to AI / ML, robotics, and software engineering conversations
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
                If you are hiring for applied ML, intelligent systems, or
                research-to-product engineering roles, the fastest way to reach me
                is by email.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--text)] px-5 text-sm font-semibold !text-white hover:-translate-y-0.5 hover:bg-[var(--accent)] focus-visible:outline-none"
                >
                  Email
                </Link>
                <Link
                  href={siteConfig.resumeUrl}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/70 px-5 text-sm font-semibold text-[var(--text)] hover:-translate-y-0.5 hover:border-[var(--accent)] focus-visible:outline-none"
                >
                  Resume
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              {siteConfig.socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-[1.25rem] border border-[var(--border)] bg-white/75 px-5 py-4 text-sm font-medium text-[var(--text)] hover:-translate-y-0.5 hover:border-[var(--accent)] md:text-base"
                >
                  {social.label}
                </Link>
              ))}
              <div className="rounded-[1.25rem] border border-[var(--border)] bg-[var(--accent-soft)] px-5 py-4 text-sm text-[var(--text-muted)] md:text-base">
                {siteConfig.location}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
