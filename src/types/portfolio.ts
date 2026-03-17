export type ProjectStatus = "live" | "in-progress" | "archived";

export interface ProjectLinks {
  live?: string;
  repo?: string;
  caseStudy?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  role: string;
  teamSize?: number;
  period: string;
  stack: string[];
  highlights: string[];
  impact?: string[];
  links: ProjectLinks;
  image: string;
  featured: boolean;
  status?: ProjectStatus;
}

export interface ExperienceItem {
  company: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  achievements: string[];
  stack?: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  headline: string;
  email: string;
  location: string;
  socials: SocialLink[];
  resumeUrl: string;
  description: string;
  valueProposition: string;
  currentFocus: string;
  affiliations: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface CredibilitySignal {
  title: string;
  eyebrow: string;
  description: string;
  meta: string;
}

export interface FocusArea {
  title: string;
  description: string;
  items: string[];
}
