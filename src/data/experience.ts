import type { ExperienceItem } from "../types/portfolio";

export const experience: ExperienceItem[] = [
  {
    company: "Carnegie Mellon University",
    title: "Graduate Student Researcher",
    period: "Apr 2025 - Present",
    location: "Pittsburgh, Pennsylvania",
    summary:
      "Researches machine understanding of engineering documents in CERLAB under Professor Kenji Shimada, with emphasis on computer vision, transformers, and technical visual structure.",
    achievements: [
      "Studies diagram-heavy engineering content where model quality depends on layout, context, and domain-specific document structure.",
      "Builds experiments around evaluation questions that matter for real engineering workflows, not just model novelty.",
      "Uses graduate research as a foundation for deployable AI systems and portfolio projects."
    ],
    stack: ["Computer Vision", "Transformers", "AI Research", "Engineering Documents"]
  },
  {
    company: "Westinghouse Electric Company",
    title: "Systems Engineer II",
    period: "Jun 2023 - Present",
    location: "Cranberry Township, Pennsylvania",
    summary:
      "Works on complex systems programs where integration, reliability, documentation, and multidisciplinary coordination directly affect delivery.",
    achievements: [
      "Contributes to first-of-a-kind hardware efforts in environments where safety and performance constraints matter.",
      "Operates in multidisciplinary delivery settings that reward careful interfaces, documentation quality, and failure-aware thinking.",
      "Brings high-consequence systems rigor into software and AI work, especially around reliability and operational judgment."
    ],
    stack: ["Systems Engineering", "Reliability", "Integration", "Technical Delivery"]
  },
  {
    company: "Carnegie Mellon University",
    title: "Course Grader",
    period: "Jan 2026 - Present",
    location: "Pittsburgh, Pennsylvania",
    summary:
      "Supports Mechanics II instruction while continuing graduate research and independent applied-AI development.",
    achievements: [
      "Explains technical material clearly through grading and instructional support for engineering coursework.",
      "Balances teaching, research, and project work without losing depth in any one track.",
      "Strengthens technical communication through repeated review of engineering reasoning and problem-solving."
    ],
    stack: ["Teaching", "Communication", "Mechanics", "Graduate Coursework"]
  }
];
