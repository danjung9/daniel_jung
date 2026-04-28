import { siteConfig } from "../../data/site";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Button } from "../ui/button";
import { SocialLink } from "../ui/social-link";

export function ContactCta() {
  return (
    <Section id="contact-cta" className="bg-[var(--background)] py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="border-t border-[var(--border)] pt-8">
          <div className="flex flex-col gap-6 border-b border-[var(--border)] pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--text)] sm:text-4xl">
                Open to applied AI, ML, and systems roles.
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--text-muted)]">
                Email is the fastest way to reach me, and my resume is one click away for quick review.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={`mailto:${siteConfig.email}`}>
                Email
              </Button>
              <Button href={siteConfig.resumeUrl} variant="secondary">
                Resume
              </Button>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[var(--text-muted)]">
            {siteConfig.socials.map((social) => (
              <SocialLink key={social.label} label={social.label} href={social.href} />
            ))}
            {siteConfig.location ? <span>{siteConfig.location}</span> : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
