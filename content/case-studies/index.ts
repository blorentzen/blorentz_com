export type CaseStudyVoice = "product" | "strategy" | "build";
export type CaseStudyCategory = "tmobile" | "empac-products" | "client-work";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ComparisonPair {
  label: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
}

export type ContentBlock =
  | { type: "text"; content: string }
  | { type: "gallery"; title?: string; description?: string; images: GalleryImage[]; aspectRatio?: "3/2" | "1/1" | "4/3" | "16/9" }
  | { type: "video"; src: string; title: string; description?: string; poster?: string; aspect?: string }
  | { type: "comparison"; title?: string; pairs: ComparisonPair[] };

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  voice: CaseStudyVoice;
  year: string;
  role: string;
  order: number;
  category: CaseStudyCategory;
  headline: string;
  heroImage?: string;
  cardLogo?: string;
  cardLogoType?: "horizontal" | "monogram";
  problem: string;
  approach: string | ContentBlock[];
  result: string;
  techStack?: string[];
  timeline?: string;
  teamSize?: string;
  liveUrl?: string;
  videoUrl?: string;
  videoPoster?: string;
  videoAspect?: "16/9" | "16/10" | "4/3" | "1/1" | "21/9";
  stats?: {
    stat: string;
    label: string;
  }[];
  challenges?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image?: string;
    initials?: string;
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
import { gameshuffle } from "./gameshuffle";
import { iyengarPlasticSurgery } from "./iyengar-plastic-surgery";
import { consiglieri } from "./consiglieri";

const caseStudies: CaseStudy[] = [
  tmobileSavingsCalculator,
  olympicEnergyCalculator,
  drPatelRedesign,
  tmobileSuperBowl,
  fn5gl,
  cascadeds,
  sidecar,
  gameshuffle,
  iyengarPlasticSurgery,
  consiglieri,
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

export function getCaseStudiesByCategory(category: CaseStudyCategory): CaseStudy[] {
  return getCaseStudies().filter((cs) => cs.category === category);
}

// Backward-compatible aliases (homepage uses these)
const featuredSlugs = [
  "tmobile-savings-calculator",
  "fn5gl",
  "gameshuffle",
  "cascadeds",
];

export function getFeaturedCaseStudies(): CaseStudy[] {
  return featuredSlugs
    .map((slug) => caseStudies.find((cs) => cs.slug === slug))
    .filter((cs): cs is CaseStudy => cs !== undefined);
}

export function getAllCaseStudies(): CaseStudy[] {
  return getCaseStudies();
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return getCaseStudy(slug);
}
