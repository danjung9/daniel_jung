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
      className={`rounded-full px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition hover:bg-white/70 hover:text-[var(--text)] ${
        current ? "bg-white/80 text-[var(--text)]" : ""
      } ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
