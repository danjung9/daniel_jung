import Link from "next/link";
import type { ReactNode } from "react";

interface IconLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
  className?: string;
}

export function IconLink({ href, label, icon, className }: IconLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition hover:border-slate-400 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2 ${className ?? ""}`}
    >
      {icon}
    </Link>
  );
}
