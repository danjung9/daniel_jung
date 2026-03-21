import Link from "next/link";

interface SocialLinkProps {
  label: string;
  href: string;
  className?: string;
}

export function SocialLink({ label, href, className }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center text-sm font-medium text-[var(--text)] underline decoration-[var(--border)] underline-offset-4 transition hover:decoration-[var(--accent)] ${className ?? ""}`}
    >
      {label}
    </Link>
  );
}
