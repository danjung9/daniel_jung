import { Container } from "../layout/container";
import { Section } from "../layout/section";

const credentialTiles = [
  {
    eyebrow: "Graduate Program",
    title: "Carnegie Mellon",
    detail: "MS candidate",
    meta: "Advanced engineering and AI systems",
    className:
      "bg-[linear-gradient(160deg,rgba(255,255,255,0.9),rgba(15,118,110,0.08))]",
    titleClassName: "text-[1.45rem] sm:text-[1.65rem]",
  },
  {
    eyebrow: "Research",
    title: "CERLAB",
    detail: "Graduate researcher",
    meta: "Engineering documents + vision transformers",
    className:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,255,255,0.68))]",
    titleClassName: "text-[1.2rem] sm:text-[1.35rem]",
  },
  {
    eyebrow: "Industry",
    title: "Westinghouse",
    detail: "Systems Engineer II",
    meta: "Reliability, systems rigor, technical delivery",
    className:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(15,118,110,0.07))]",
    titleClassName: "text-[1.2rem] sm:text-[1.35rem]",
  },
];

const capabilityThemes = [
  {
    label: "Computer vision",
    emphasis: "Transformers",
    description: "Dense visual reasoning for technical, diagram-heavy information.",
    className:
      "lg:col-span-5 lg:row-span-2 lg:border-l lg:border-[var(--border)] lg:pl-6",
  },
  {
    label: "Robotics",
    emphasis: "Systems",
    description: "Software shaped by real-world constraints, reliability, and control.",
    className:
      "lg:col-span-4 lg:border-l lg:border-[var(--border)] lg:pl-6",
  },
  {
    label: "Applied AI",
    emphasis: "Software",
    description: "Production-minded tools that connect research ideas to usable systems.",
    className:
      "lg:col-span-4 lg:border-l lg:border-t lg:border-[var(--border)] lg:pl-6",
  },
];

export function CapabilityBridge() {
  return (
    <Section className="relative pb-6 pt-0 sm:pb-8 lg:pb-8">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.66),rgba(255,255,255,0.46))] px-4 py-4 shadow-[0_18px_42px_rgba(27,36,48,0.04)] backdrop-blur sm:px-5 lg:px-6 lg:py-6">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,rgba(15,118,110,0.45),rgba(15,118,110,0))]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.08),transparent_70%)]"
          />

          <div className="relative grid gap-3 lg:grid-cols-[1.2fr_0.9fr_0.95fr]">
            {credentialTiles.map((tile) => (
              <CredentialTile key={tile.title} {...tile} />
            ))}
          </div>

          <div className="relative mt-4 border-t border-[var(--border)] pt-4 lg:mt-5 lg:pt-5">
            <div className="grid gap-3 lg:grid-cols-12 lg:auto-rows-[minmax(5.4rem,auto)] lg:gap-x-0 lg:gap-y-0">
              <div className="rounded-[1.35rem] border border-[var(--border)] bg-white/42 px-4 py-4 backdrop-blur lg:col-span-3 lg:row-span-2 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:pr-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Core Themes
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[var(--text-muted)]">
                  The applied domains that connect the research, systems, and product work.
                </p>
              </div>

              {capabilityThemes.map((theme, index) => (
                <ThemeModule key={theme.label} index={index + 1} {...theme} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

interface CredentialTileProps {
  eyebrow: string;
  title: string;
  detail: string;
  meta: string;
  className: string;
  titleClassName: string;
}

function CredentialTile({
  eyebrow,
  title,
  detail,
  meta,
  className,
  titleClassName,
}: CredentialTileProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] px-4 py-4 shadow-[0_14px_32px_rgba(27,36,48,0.03)] backdrop-blur ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,rgba(15,118,110,0.5),rgba(15,118,110,0))]"
      />
      <div className="relative flex h-full flex-col gap-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          {eyebrow}
        </p>
        <div className="space-y-0.5">
          <h2 className={`${titleClassName} font-semibold tracking-[-0.05em] text-[var(--text)]`}>
            {title}
          </h2>
          <p className="text-sm font-medium text-[var(--text)]">{detail}</p>
        </div>
        <p className="mt-auto text-sm leading-6 text-[var(--text-muted)]">{meta}</p>
      </div>
    </article>
  );
}

interface ThemeModuleProps {
  label: string;
  emphasis: string;
  description: string;
  index: number;
  className: string;
}

function ThemeModule({
  label,
  emphasis,
  description,
  index,
  className,
}: ThemeModuleProps) {
  return (
    <article
      className={`relative rounded-[1.35rem] border border-[var(--border)] bg-white/42 px-4 py-4 backdrop-blur lg:rounded-none lg:bg-transparent ${className}`}
    >
      <div className="space-y-1.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          {String(index).padStart(2, "0")}
        </p>
        <h2 className="text-[1.15rem] font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-xl">
          {label}
          <span className="block text-[var(--text-muted)]">{emphasis}</span>
        </h2>
        <p className="max-w-md text-sm leading-6 text-[var(--text-muted)]">
          {description}
        </p>
      </div>
    </article>
  );
}
