import type { CaseStudy } from "./index";

export const tmobileSuperBowl: CaseStudy = {
  slug: "tmobile-super-bowl",
  title: "Super Bowl Landing Page",
  client: "T-Mobile",
  voice: "build",
  year: "2022",
  role: "Lead Developer",
  order: 6,
  headline: "Custom execution for T-Mobile's biggest digital moment of the year.",
  heroImage: "https://cdn.empac.co/portfolio/images/tmo-superbowl-2022-thumb.jpg",
  videoUrl: "https://cdn.empac.co/portfolio/video/tmo-superbowl_2022-desktop.mp4",
  techStack: ["HTML", "CSS", "JavaScript"],
  timeline: "Super Bowl LVI, 2022.",
  teamSize: "Cross-functional (design, dev, web ops, analytics, accessibility).",
  problem:
    "There are two primary reasons people watch the Super Bowl: the game, or the commercials. T-Mobile shows up with a major spot every year, but the digital side usually takes a back seat to the commercial, social outreach, and various marketing activities surrounding the day. In 2022, that changed... the \"Save the Phones\" campaign with Miley Cyrus and Dolly Parton needed a digital experience that matched the broadcast.\n\nThere was a catch though: T-Mobile was running multiple spots throughout the game. Every time one aired, the landing page needed to surface that new video alongside the previous ones. All live while tens of millions of people were watching.",
  approach:
    "The whole design was built around live updates. Multiple ads were scheduled throughout the broadcast, and each time one aired, that video needed to slot into a playlist component on the page.\n\nBeyond the video playlist, there was a request to integrate components that helped users understand how to switch to T-Mobile and what devices were available — tying the campaign energy directly into the conversion funnel. New components and content had to be developed that matched the design language and tone of the \"save the phones\" campaign while still driving business outcomes.\n\nSince this was a custom execution outside of T-Mobile's standard page templates, it opened the door for new animations and interactions: text glow and drop-in effects, hover and active states for video playback, and other details that brought the page to life beyond a typical marketing landing page.\n\nI worked with the design team on new components and interactions, then built a high-fidelity prototype for leadership sign-off. After that, I wrote all the code (every component, interaction, and the page itself), shipped it to production, and coordinated with web ops on analytics, accessibility, and SEO.",
  result:
    "Shipped on time for T-Mobile's highest-visibility digital moment of the year. Live updates ran throughout the broadcast with zero issues. Video playlist, device components, switching flows, and custom animations all delivered on deadline across design, dev, web ops, analytics, and accessibility teams.",
  challenges: [
    "Building a page that could accept live video content updates during the game without requiring a deploy or page refresh",
    "Coordinating the timeline between commercial production (often finalized late) and digital execution deadlines",
    "Shipping custom animations and interactions within AEM's constraints",
    "Meeting accessibility and SEO requirements on an aggressive timeline while maintaining the creative vision of the campaign",
  ],
};
