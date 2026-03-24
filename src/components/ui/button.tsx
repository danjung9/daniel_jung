import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
}

const variantClassMap: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--text)] !text-white hover:bg-[var(--accent)] disabled:bg-[var(--text-muted)]",
  secondary:
    "border border-[var(--border)] bg-white/80 text-[var(--text)] hover:border-[var(--accent)] hover:bg-white disabled:text-[var(--text-muted)]",
  ghost:
    "bg-transparent text-[var(--text-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)] disabled:text-[var(--text-muted)]",
};

const sizeClassMap: Record<ButtonSize, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export function Button({
  children,
  className,
  href,
  external = false,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  const classNames = `inline-flex items-center justify-center rounded-[4px] font-semibold transition hover:-translate-y-0.5 disabled:cursor-not-allowed ${variantClassMap[variant]} ${sizeClassMap[size]} ${className ?? ""}`;

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={classNames}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      {...props}
    >
      {children}
    </button>
  );
}
