import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SocialLinkProps {
  label: string;
  href: string;
  className?: string;
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.51v-1.97c-2.94.64-3.56-1.25-3.56-1.25-.48-1.22-1.17-1.54-1.17-1.54-.96-.66.07-.65.07-.65 1.05.08 1.61 1.08 1.61 1.08.94 1.61 2.46 1.15 3.06.88.09-.68.37-1.15.66-1.41-2.35-.27-4.82-1.18-4.82-5.24 0-1.16.42-2.11 1.09-2.85-.11-.27-.47-1.37.1-2.86 0 0 .9-.29 2.95 1.09a10.2 10.2 0 0 1 5.37 0c2.05-1.38 2.95-1.09 2.95-1.09.57 1.49.21 2.59.1 2.86.68.74 1.09 1.69 1.09 2.85 0 4.07-2.48 4.96-4.84 5.23.38.33.72.97.72 1.96v2.91c0 .28.19.62.73.51A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.08-.81-1.94-1.9-1.94s-1.9.86-1.9 1.94.8 1.94 1.88 1.94h.02c1.1 0 1.9-.86 1.9-1.94ZM20 13.06c0-3.49-1.86-5.11-4.35-5.11-2 0-2.9 1.11-3.4 1.88V8.5H8.88c.04.88 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.03 1.88 2.53V20H20v-6.94Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 stroke-current" fill="none">
      <path d="M3.75 6.75h16.5v10.5H3.75z" strokeWidth="1.75" />
      <path d="m4.5 7.5 7.5 6 7.5-6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function getSocialIcon(label: string, href: string): ReactNode {
  if (label === "GitHub" || href.includes("github.com")) {
    return <GitHubIcon />;
  }

  if (label === "LinkedIn" || href.includes("linkedin.com")) {
    return <LinkedInIcon />;
  }

  if (label === "Email" || href.startsWith("mailto:")) {
    return <EmailIcon />;
  }

  return null;
}

export function SocialLink({ label, href, className }: SocialLinkProps) {
  const opensExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={opensExternal ? "_blank" : undefined}
      rel={opensExternal ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] underline decoration-[var(--border)] underline-offset-4 transition hover:decoration-[var(--accent)]",
        className
      )}
    >
      {getSocialIcon(label, href)}
      {label}
    </Link>
  );
}
