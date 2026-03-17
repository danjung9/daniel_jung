import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({ children, className, narrow = false }: ContainerProps) {
  const widthClass = narrow ? "max-w-3xl" : "max-w-7xl";
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${widthClass} ${className ?? ""}`}>
      {children}
    </div>
  );
}
