import type { CaseStudy } from "./index";

export const tmobileSavingsCalculator: CaseStudy = {
  slug: "tmobile-savings-calculator",
  title: "Savings Calculator",
  client: "T‑Mobile",
  voice: "product",
  year: "2022 – Present",
  role: "Lead Designer, Lead Developer, Product Owner",
  order: 1,
  headline: "50% lift in shop-to-cart rate. Featured in national TV spots.",
  heroImage: "https://cdn.empac.co/portfolio/images/savings-calc-example-thumb.jpg",
  liveUrl: "https://www.t-mobile.com/cell-phone-plans",
  videoUrl: "https://cdn.empac.co/portfolio/video/tmo-savings-calc-example.mp4",
  stats: [
    { stat: "50%", label: "Lift in shop-to-cart rate" },
    { stat: "28%", label: "Lift in shop-to-order rate" },
    { stat: "National TV", label: "Featured in broadcast spots" },
  ],
  techStack: ["HTML", "CSS", "Vanilla JavaScript"],
  timeline: "Late 2022 (initial chart) → mid-2023 (calculator evolution) → 2024-2025 (full product)",
  teamSize: "Primary owner with design team collaboration",
  problem:
    "In late 2022, T‑Mobile had a simple comparison chart showing pricing differences between carriers. It worked, but it was static... essentially a snapshot that went stale every time the business decided to change up the plans. When a new value campaign launched in mid-2023, leadership saw an opportunity: turn the chart into an interactive tool that made the case for T‑Mobile as the value leader.\n\nThe real challenge: building something that could evolve. It started as a line selector, became a benefits comparison, and eventually turned into a full calculator that computed savings percentages and dollar amounts... all while staying accurate, legally compliant, and simple enough for anyone to use.",
  approach:
    "There was no grand plan. The tool started in market and each version was shaped by data from the last one: what people clicked, where they dropped off, and what questions they still had.\n\nThe tool went through multiple phases: first a line selector and basic comparison view, then a benefits comparison showing what's included at T‑Mobile versus what you pay extra for at Verizon and AT&T, and eventually a full calculator that computes actual savings percentages and dollar amounts based on a prospect's current plan.\n\nSince the calculator displays competitor data, all pricing and plan information lives in a JavaScript object on the front end. Legal needed to control exactly what's shown and update it fast when plans change or something gets flagged.\n\nDisplaying competitor pricing comparisons meant careful sourcing, constant updates, and multiple rounds of legal review. Plus, the calculator had to hold up under both regulatory scrutiny and marketing approval.\n\nT‑Mobile's CMS (Adobe Experience Manager) is locked down. We had limited access and limited flexibility... so the entire tool was built from scratch with HTML, CSS, and Vanilla JS.\n\nOver time it grew past a single module. It's now a dynamic placement that breaks down the full value of a plan (benefits, perks, pricing) and lives on the How to Switch page, the Plans page, and across multiple ad campaigns in constant rotation. It's one of the only web modules in T‑Mobile's history to appear in a nationally broadcast TV spot, including commercials with the Suits cast and Snoop Dogg.\n\nI was the lead designer, lead developer, and eventually the de facto product owner. I was in rooms with senior leadership building the product roadmap as we went.",
  result:
    "The numbers that made the calculator the centerpiece of T‑Mobile's current ad strategy:\n\n50% lift quarter-over-quarter in shop-to-cart rate (28.94% to 43.42%). 28% lift in shop-to-order rate (1.07% to 1.37%). Both attributed to prospects who used the calculator before continuing down the funnel.\n\nNow featured in nationally broadcast TV spots, including commercials with the Suits cast and Snoop Dogg. Deployed across multiple pages and campaigns in constant rotation. One of the only web modules to ever appear in a T‑Mobile broadcast commercial.",
  challenges: [
    "Regulatory and legal compliance for displaying competitor pricing data, requiring constant updates and review cycles.",
    "Building within AEM's constraints with limited CMS access, everything handwritten in HTML/CSS/JS.",
    "Evolving the tool through multiple iterations while keeping it live and accurate in market.",
    "Managing the transition from simple comparison chart to full interactive product with its own roadmap and senior leadership stakeholder meetings.",
  ],
};
