import type { CaseStudy } from "./index";

export const tmobileSuperBowl: CaseStudy = {
  slug: "tmobile-super-bowl",
  title: "Super Bowl Landing Page",
  client: "T-Mobile",
  voice: "build",
  year: "2022",
  role: "Lead Developer",
  order: 6,
  headline: "Custom execution for T-Mobile's biggest digital moment of the year",
  heroImage: "https://cdn.empac.co/portfolio/images/tmo-superbowl-2022-thumb.jpg",
  videoUrl: "https://cdn.empac.co/portfolio/video/tmo-superbowl_2022-desktop.mp4",
  techStack: ["HTML", "CSS", "JavaScript"],
  timeline: "Super Bowl LVI, 2022",
  teamSize: "Cross-functional (design, dev, web ops, analytics, accessibility)",
  problem:
    "There's two reasons people watch the Super Bowl: the game, or the commercials. T-Mobile typically shows up with a major commercial every year, but the digital presence usually takes a back seat. In 2022, the business wanted to change that with a parody campaign to \"save the phones\" featuring Miley Cyrus and Dolly Parton. The digital experience needed to match the energy and visibility of the broadcast campaign.\n\nThe challenge was building a landing page that could handle multiple live updates throughout the game. T-Mobile was running multiple ad spots during the broadcast, and each time one aired, the landing page needed to surface that new video alongside the previous spots — in real time, while tens of millions of people were watching.",
  approach:
    "The core design challenge was building for live updates during the game. With multiple ads scheduled throughout the broadcast, the wireframe had to ensure the page could handle bringing new videos into a playlist component without a full page rebuild. Each time a new spot aired, the video needed to slot into the experience seamlessly.\n\nBeyond the video playlist, there was a request to integrate components that helped users understand how to switch to T-Mobile and what devices were available — tying the campaign energy directly into the conversion funnel. New components and content had to be developed that matched the design language and tone of the \"save the phones\" campaign while still driving business outcomes.\n\nSince this was a custom execution outside of T-Mobile's standard page templates, it opened the door for new animations and interactions: text glow and drop-in effects, hover and active states for video playback, and other details that brought the page to life beyond a typical marketing landing page.\n\nI collaborated with the design team on new components and interactions, then built a high-fidelity prototype to get approval from leadership. Once signed off, I wrote all the code — components, interactions, and the overall page — prepared and shipped it to production, and worked with web operations partners on analytics tagging, code validation, accessibility compliance, and SEO requirements.",
  result:
    "Custom landing page built and shipped for one of T-Mobile's highest-visibility moments of the year. Page handled live updates throughout the broadcast with zero issues. New video playlist component, device and switching components, and custom animations all shipped on deadline. Coordination across design, development, web ops, analytics, and accessibility teams.",
  challenges: [
    "Building a page that could accept live video content updates during the game without requiring a deploy or page refresh",
    "Coordinating the timeline between commercial production (often finalized late) and digital execution deadlines",
    "Shipping custom animations and interactions within AEM's constraints",
    "Meeting accessibility and SEO requirements on an aggressive timeline while maintaining the creative vision of the campaign",
  ],
};
