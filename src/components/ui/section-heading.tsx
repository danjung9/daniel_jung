interface SectionHeadingProps {
  title: string;
  as?: "h1" | "h2";
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  as: Heading = "h2",
  eyebrow,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <header className={`section-heading space-y-3 ${alignClass}`}>
      {eyebrow ? (
        <p className="eyebrow text-xs font-semibold">{eyebrow}</p>
      ) : null}
      <Heading className="display-heading max-w-4xl text-4xl font-semibold leading-[1.12] text-[var(--text)] sm:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-[var(--text-muted)]">
          {description}
        </p>
      ) : null}
    </header>
  );
}
