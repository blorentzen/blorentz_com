import type { CaseStudy } from "./index";

export const fn5gl: CaseStudy = {
  slug: "fn5gl",
  title: "Friday Night 5G Lights",
  client: "T-Mobile",
  voice: "strategy",
  year: "2025",
  role: "Technical Lead & Design Lead",
  order: 2,
  headline: "2,000+ schools, 8M+ votes, $1M+ grand prize",
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
  timeline: "2025 (Season 2)",
  teamSize: "Technical Lead — hired/guided contractor, coordinated with external API agency",
  problem:
    "Friday Night 5G Lights is one of T-Mobile's largest community-focused programs — a national sweepstakes where thousands of high schools across the country compete for a $1M+ grand prize package including a field makeover, Gronk Fitness gym equipment (contributed by Rob Gronkowski), and more. The 2025 season was the program's second year, and the biggest challenge was bringing the majority of functionality in-house.\n\nIn Year 1, much of the digital experience was handled by external agencies. For Year 2, the business wanted to own the core components — a dynamic leaderboard, an interactive school map, a school directory, and all the animations and design patterns — built to work within T-Mobile's AEM platform. This meant coordinating with multiple agencies that were handling program data while building the front-end experience internally.",
  approach:
    "The scope of this project was massive. It involved multiple phases — pre-registration, registration, and the competition itself — each with distinct digital needs.\n\nThe core technical challenge was making the content as dynamic as possible. I coordinated with an external agency that managed the program data to develop APIs that would feed the front-end for the school directory, interactive map, and dynamic leaderboard (which included an actual voting mechanism). This required defining the data patterns, schema, and component requirements so everything could work within AEM's constraints.\n\nSince this was a high-profile program with its own visual identity, we couldn't use standard T-Mobile page components. We designed and built custom animations and patterns that matched the energy and branding of Friday Night 5G Lights — a distinct look and feel within the broader T-Mobile digital ecosystem.\n\nMy role was Technical Lead: I hired and guided a front-end developer contractor for the majority of the project, provided design and development direction for all dynamic components, and coordinated with the API agency on data integration. About 60-70% of the way through, the contractor left to take a full-time position elsewhere. I picked up from where he left off and finished building all the dynamic components myself. I also worked with the agency on a plan for sunsetting the API and bringing the data in-house so the experience could continue displaying results after the 2025 season ended.\n\nThe tech stack was HTML, CSS, and Vanilla JavaScript. For build and testing, we used Vite with custom export patterns to generate code compatible with AEM.",
  result:
    "2,000+ schools applied from towns of 150,000 people or fewer across 48 states. 8M+ total votes cast during the competition. 450 schools won $5,000 through the $5K Fridays sweepstakes. 25 finalists each received $25,000. 1 grand prize winner (Dierks High School, Arkansas) scored a prize package worth over $1 million. Significant national press coverage. All dynamic components (leaderboard, map, directory, voting) built in-house and functioning within AEM. Program renewed for 2026 season.",
  challenges: [
    "Bringing the entire front-end in-house from external agencies while maintaining program continuity",
    "Coordinating data APIs across multiple external partners and integrating into AEM's constraints",
    "Building custom animations and visual identity for a program that needed to feel distinct from standard T-Mobile pages",
    "Absorbing the full build when the contractor departed at 60-70% completion",
    "Planning API sunset and data migration strategy so content persists beyond the active season",
  ],
};
