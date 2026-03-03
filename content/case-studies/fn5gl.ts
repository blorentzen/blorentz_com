import type { CaseStudy } from "./index";

export const fn5gl: CaseStudy = {
  slug: "fn5gl",
  title: "Friday Night 5G Lights",
  client: "T-Mobile",
  voice: "strategy",
  year: "2025",
  role: "Technical Lead & Design Lead",
  order: 2,
  headline: "2,000+ schools, 8M+ votes, $1M+ grand prize.",
  heroImage: "https://cdn.empac.co/portfolio/images/fn5gl-example-thumb.jpg",
  liveUrl: "https://www.t-mobile.com/brand/friday-night-5g-lights",
  videoUrl: "https://cdn.empac.co/portfolio/video/fn5gl-example.mp4",
  stats: [
    { stat: "8M+", label: "Total votes cast" },
    { stat: "2,000+", label: "Schools applied" },
    { stat: "48", label: "States represented" },
    { stat: "$1M+", label: "Grand prize value" },
  ],
  techStack: ["HTML", "CSS", "Vanilla JavaScript", "Vite"],
  timeline: "2025 (Season 2).",
  teamSize: "Technical Lead — hired/guided contractor, coordinated with external API agency.",
  problem:
    "Friday Night 5G Lights is a massive T-Mobile program. National sweepstakes, thousands of high schools competing for a $1M+ prize package... including a field makeover, Gronk Fitness gym equipment from Rob Gronkowski, trip to the SEC Championship, and all the things that a small, local high school would love for their football program. The 2025 season was the program's second year, and the biggest challenge was bringing the majority of functionality in-house.\n\nYear 1 was mostly handled by external agencies. For Year 2, the goal was to bring the core experience in-house: dynamic leaderboard, interactive school map, school directory, and all the animations... built to properly run in AEM. That meant coordinating with the agencies that still owned the data while we built the front-end internally.",
  approach:
    "This was a big one. Multiple phases — pre-registration, registration, then the competition itself — each with different digital needs.\n\nThe core challenge was making everything as dynamic as possible. I coordinated with an external agency that managed the program data to develop APIs that would feed the front-end for the school directory, interactive map, and dynamic leaderboard (which included an actual voting mechanism). This required defining the data patterns, schema, and component requirements so everything could work within AEM's constraints.\n\nSince this was a high-profile program with its own visual identity, we couldn't use standard T-Mobile page components. We designed and built custom animations and patterns that matched the energy and branding of Friday Night 5G Lights — a distinct look and feel within the broader T-Mobile digital ecosystem.\n\nI was the Technical Lead. Hired and managed a front-end contractor, provided design and dev direction for all the dynamic components, and coordinated with the API agency on data integration. About 60-70% through, the contractor left for a full-time role... so I picked up where he left off and finished building everything myself since we didn't have enough time to seek and onboard a new developer. I also worked with the agency on a plan for sunsetting the API and bringing the data in-house so the experience could continue displaying results after the 2025 season ended.\n\nThe tech stack was HTML, CSS, and Vanilla JavaScript. For build and testing, we used Vite with custom export patterns to generate code compatible with AEM.",
  result:
    "2,000+ schools applied across 48 states. 8M+ votes cast. 450 schools took home $5K through the weekly sweepstakes, 25 finalists got $25K each, and Dierks High School in Arkansas won the whole thing. Prize package worth over $1 million.\n\nEvery dynamic component (leaderboard, map, directory, voting) built in-house and running in AEM. Program renewed for 2026.",
  challenges: [
    "Bringing the entire front-end in-house from external agencies while maintaining program continuity",
    "Coordinating data APIs across multiple external partners and integrating into AEM's constraints",
    "Building custom animations and visual identity for a program that needed to feel distinct from standard T-Mobile pages",
    "Absorbing the full build when the contractor departed at 60-70% completion",
    "Planning API sunset and data migration strategy so content persists beyond the active season",
  ],
};
