interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <header className={`space-y-3 ${alignClass}`}>
      {eyebrow ? (
        <p className="eyebrow text-xs font-semibold">{eyebrow}</p>
      ) : null}
      <h2 className="display-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-[var(--text-muted)]">
          {description}
        </p>
      ) : null}
    </header>
  );
}
