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
    "border border-[var(--text)] bg-[var(--text)] !text-white shadow-[0_10px_24px_rgba(16,24,32,0.08)] hover:border-[var(--accent)] hover:bg-[var(--accent)] disabled:border-[var(--text-muted)] disabled:bg-[var(--text-muted)]",
  secondary:
    "border border-[var(--border)] bg-white/75 text-[var(--text)] shadow-[0_10px_24px_rgba(16,24,32,0.04)] hover:border-[var(--accent)] hover:bg-white disabled:text-[var(--text-muted)]",
  ghost:
    "bg-transparent text-[var(--text-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)] disabled:text-[var(--text-muted)]",
};

const sizeClassMap: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
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
  const classNames = `inline-flex items-center justify-center rounded-full font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 disabled:cursor-not-allowed ${variantClassMap[variant]} ${sizeClassMap[size]} ${className ?? ""}`;

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
