import Link from "next/link";
import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  current?: boolean;
  className?: string;
}

export function NavLink({ href, children, current = false, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={`nav-link border-b border-transparent px-1 py-2 text-sm font-medium text-[var(--text-muted)] transition hover:!text-[var(--accent)] ${
        current ? "!border-[var(--accent)] !text-[var(--accent)]" : ""
      } ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
