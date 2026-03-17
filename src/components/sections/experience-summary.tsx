import { experience } from "../../data/experience";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { ExperienceItem } from "../ui/experience-item";
import { SectionHeading } from "../ui/section-heading";

export function ExperienceSummary() {
  return (
    <Section id="experience">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Experience"
          title="Shipping production-grade interfaces with business context"
          description="I focus on user-facing architecture that is maintainable, measurable, and fast."
        />
        <div className="grid gap-6">
          {experience.map((item) => (
            <ExperienceItem key={`${item.company}-${item.title}`} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
