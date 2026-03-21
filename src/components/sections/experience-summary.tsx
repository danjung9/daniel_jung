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
          title="Experience across research labs, high-consequence systems, and technical instruction"
          description="The common thread is ownership under constraints: ambiguous research problems, reliability-sensitive engineering environments, and clear technical communication."
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
