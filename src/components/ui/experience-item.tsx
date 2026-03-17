import type { ExperienceItem as ExperienceItemType } from "../../types/portfolio";
import { Badge } from "./badge";
import { Card } from "./card";

interface ExperienceItemProps {
  item: ExperienceItemType;
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <Card className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-[var(--text)]">{item.title}</h3>
          <p className="text-sm text-[var(--text-muted)]">
            {item.company}
            {item.location ? ` - ${item.location}` : ""}
          </p>
        </div>
        <p className="text-sm font-medium text-[var(--text-muted)]">{item.period}</p>
      </div>

      <p className="text-sm leading-7 text-[var(--text-muted)]">{item.summary}</p>

      <ul className="space-y-2">
        {item.achievements.map((achievement) => (
          <li key={achievement} className="text-sm leading-7 text-[var(--text)]">
            {achievement}
          </li>
        ))}
      </ul>

      {item.stack?.length ? (
        <div className="flex flex-wrap gap-2">
          {item.stack.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
