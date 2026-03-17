import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <article className={`surface rounded-[1.5rem] p-6 ${className ?? ""}`}>
      {children}
    </article>
  );
}
