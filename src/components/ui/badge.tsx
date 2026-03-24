import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-[4px] border border-[var(--border)] bg-[var(--surface-strong)] px-2.5 py-1 text-xs font-medium text-[var(--text-muted)] ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
