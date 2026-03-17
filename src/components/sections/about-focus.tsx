import { focusAreas } from "../../data/focus";
import { skills } from "../../data/skills";
import { siteConfig } from "../../data/site";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { SectionHeading } from "../ui/section-heading";

export function AboutFocus() {
  return (
    <Section id="about-focus">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="About"
          title="A systems-minded engineer working at the boundary of AI, ML, and robotics"
          description="The homepage keeps the narrative simple: who you are, what you build, and why your background makes your work credible."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-6 rounded-[1.75rem]">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
                Short introduction
              </h3>
              <p className="text-base leading-8 text-[var(--text-muted)]">
                {siteConfig.description}
              </p>
              <p className="text-base leading-8 text-[var(--text-muted)]">
                I am most interested in applied AI systems that have to operate under
                real engineering constraints: ambiguous data, difficult interfaces,
                reliability requirements, and cross-functional delivery pressure.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Core technical areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.flatMap((group) => group.items).slice(0, 12).map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </Card>

          <div className="grid gap-6">
            {focusAreas.map((area) => (
              <Card key={area.title} className="space-y-4 rounded-[1.75rem]">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--text)]">
                  {area.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--text-muted)] md:text-base">
                  {area.description}
                </p>
                <ul className="space-y-3 text-sm text-[var(--text)] md:text-base">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
