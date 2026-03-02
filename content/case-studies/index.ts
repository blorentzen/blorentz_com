export type CaseStudyVoice = "product" | "strategy" | "build";

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  voice: CaseStudyVoice;
  year: string;
  role: string;
  order: number;
  headline: string;
  heroImage?: string;
  problem: string;
  approach: string;
  result: string;
  techStack?: string[];
  timeline?: string;
  teamSize?: string;
  liveUrl?: string;
  videoUrl?: string;
  stats?: {
    stat: string;
    label: string;
  }[];
  challenges?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  status?: "complete" | "in-progress";
}

import { tmobileSavingsCalculator } from "./tmobile-savings-calculator";
import { olympicEnergyCalculator } from "./olympic-energy-calculator";
import { drPatelRedesign } from "./dr-patel-redesign";
import { tmobileSuperBowl } from "./tmobile-super-bowl";
import { fn5gl } from "./fn5gl";
import { cascadeds } from "./cascadeds";
import { sidecar } from "./sidecar";

const caseStudies: CaseStudy[] = [
  tmobileSavingsCalculator,
  olympicEnergyCalculator,
  drPatelRedesign,
  tmobileSuperBowl,
  fn5gl,
  cascadeds,
  sidecar,
];

// Primary API
export function getCaseStudies(): CaseStudy[] {
  return [...caseStudies].sort((a, b) => a.order - b.order);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}

// Backward-compatible aliases (homepage uses these)
export function getFeaturedCaseStudies(): CaseStudy[] {
  return getCaseStudies().filter((cs) => cs.order <= 4);
}

export function getAllCaseStudies(): CaseStudy[] {
  return getCaseStudies();
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return getCaseStudy(slug);
}
