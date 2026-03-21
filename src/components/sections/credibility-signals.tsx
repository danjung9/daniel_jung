import { credibilitySignals } from "../../data/credibility";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Card } from "../ui/card";
import { SectionHeading } from "../ui/section-heading";

export function CredibilitySignals() {
  return (
    <Section id="credibility">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Current Context"
          title="Why the work reads as credible quickly."
          description="Graduate research, current industry work, and independent shipping all point in the same direction: applied AI built with engineering discipline."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {credibilitySignals.map((signal) => (
            <Card key={signal.title} className="space-y-4 rounded-[1.75rem]">
              <p className="eyebrow text-xs font-semibold">{signal.eyebrow}</p>
              <h3 className="text-xl font-semibold tracking-tight text-[var(--text)]">
                {signal.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--text-muted)] md:text-base">
                {signal.description}
              </p>
              <p className="text-sm font-medium text-[var(--accent)]">{signal.meta}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
