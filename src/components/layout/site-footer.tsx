import Link from "next/link";
import { siteConfig } from "../../data/site";
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
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[var(--text)] underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--accent)] focus-visible:outline-none"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
