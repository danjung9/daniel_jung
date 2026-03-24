import { siteConfig } from "../../data/site";
import { SocialLink } from "../ui/social-link";
import { Container } from "./container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(255,255,255,0.5)]">
      <Container className="flex flex-col gap-3 py-8 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          {year} {siteConfig.name}. Built with Next.js.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {siteConfig.socials.map((social) => (
            <SocialLink key={social.label} label={social.label} href={social.href} />
          ))}
        </div>
      </Container>
    </footer>
  );
}
