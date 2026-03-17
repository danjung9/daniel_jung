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
  },
  {
    label: "Robotics",
    emphasis: "Systems",
    description: "Software shaped by real-world constraints, reliability, and control.",
  },
  {
    label: "Applied AI",
    emphasis: "Software",
    description: "Production-minded tools that connect research ideas to usable systems.",
  },
];

export function CapabilityBridge() {
  return (
    <Section className="relative pb-10 pt-0 sm:pb-12 lg:pb-14">
      <Container>
        <div className="relative overflow-hidden rounded-[1.95rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.44))] px-4 py-4 shadow-[0_18px_42px_rgba(27,36,48,0.04)] backdrop-blur sm:px-5 lg:px-6 lg:py-5">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,rgba(15,118,110,0.45),rgba(15,118,110,0))]"
          />

          <div className="grid gap-3 lg:grid-cols-[1.2fr_0.9fr_0.95fr]">
            {credentialTiles.map((tile) => (
              <CredentialTile key={tile.title} {...tile} />
            ))}
          </div>

          <div className="mt-4 border-t border-[var(--border)] pt-4 lg:mt-5 lg:pt-5">
            <div className="grid gap-3 lg:grid-cols-[0.78fr_1fr_1fr_1fr] lg:gap-0 lg:items-stretch">
              <div className="px-1 py-2 lg:pr-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Core Themes
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[var(--text-muted)]">
                  The applied domains that connect the research, systems, and product work.
                </p>
              </div>

              {capabilityThemes.map((theme, index) => (
                <article
                  key={theme.label}
                  className="relative rounded-[1.35rem] border border-[var(--border)] bg-white/42 px-4 py-4 backdrop-blur lg:rounded-none lg:border-0 lg:bg-transparent lg:px-6"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-5 left-0 hidden w-px bg-[linear-gradient(180deg,rgba(15,118,110,0.35),rgba(15,118,110,0))] lg:block"
                  />
                  <div className="space-y-1.5 lg:pl-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-[1.15rem] font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-xl">
                      {theme.label}
                      <span className="block text-[var(--text-muted)]">{theme.emphasis}</span>
                    </h2>
                    <p className="text-sm leading-6 text-[var(--text-muted)]">
                      {theme.description}
                    </p>
                  </div>
                </article>
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
