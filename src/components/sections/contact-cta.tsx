import Link from "next/link";
import { siteConfig } from "../../data/site";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { SocialLink } from "../ui/social-link";

export function ContactCta() {
  return (
    <Section id="contact-cta" className="bg-[var(--background)] py-12 sm:py-14 lg:py-16">
      <Container>
        <div className="border border-[var(--border)] bg-[var(--background)] px-6 py-8 sm:px-8 sm:py-9">
          <div className="flex flex-col gap-6 border-b border-[var(--border)] pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
                Open to applied AI, ML, and systems roles.
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--text-muted)]">
                Email is the fastest way to reach me, and my resume is one click away for quick review.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-11 items-center justify-center border border-[var(--text)] bg-[var(--text)] px-5 text-sm font-semibold !text-white transition hover:border-[var(--accent)] hover:bg-[var(--accent)]"
              >
                Email
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                className="inline-flex h-11 items-center justify-center border border-[var(--border)] bg-white px-5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--text)]"
              >
                Resume
              </Link>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[var(--text-muted)]">
            {siteConfig.socials.map((social) => (
              <SocialLink key={social.label} label={social.label} href={social.href} />
            ))}
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
