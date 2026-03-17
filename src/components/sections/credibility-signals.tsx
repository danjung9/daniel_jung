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
          eyebrow="Credibility"
          title="Signals that make the profile legible to recruiters and technical hiring managers"
          description="The homepage highlights research depth, current industry context, and practical engineering signals without forcing the reader to dig."
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
