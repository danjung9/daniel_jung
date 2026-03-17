import { Container } from "../layout/container";
import { Section } from "../layout/section";

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
        <div className="surface rounded-[2rem] px-5 py-4 sm:px-6 sm:py-5 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1fr_1fr_1fr] lg:items-center">
            <div className="pr-4 lg:pr-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Core Themes
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[var(--text-muted)]">
                The applied domains that tie the portfolio together.
              </p>
            </div>

            {capabilityThemes.map((theme, index) => (
              <article
                key={theme.label}
                className="relative rounded-[1.45rem] border border-[var(--border)] bg-white/66 px-4 py-4 backdrop-blur lg:h-full lg:border-0 lg:bg-transparent lg:px-6"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-y-5 left-0 hidden w-px bg-[linear-gradient(180deg,rgba(15,118,110,0.35),rgba(15,118,110,0))] lg:block"
                />
                <div className="space-y-2 lg:pl-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-xl font-semibold tracking-[-0.04em] text-[var(--text)]">
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
      </Container>
    </Section>
  );
}
