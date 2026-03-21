import { skills } from "../../data/skills";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { SectionHeading } from "../ui/section-heading";

export function SkillsGrid() {
  return (
    <Section id="skills">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Capabilities"
          title="Core tools for applied AI and systems work"
          description="A compact view of the stack behind the projects: model-centric workflows, production software, and engineering contexts."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <Card key={group.title} className="space-y-4 rounded-[1.75rem]">
              <h3 className="text-lg font-semibold text-[var(--text)]">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
