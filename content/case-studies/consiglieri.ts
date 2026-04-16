import type { CaseStudy } from "./index";

export const consiglieri: CaseStudy = {
  slug: "consiglieri",
  title: "Consiglieri",
  client: "Consiglieri",
  voice: "build",
  year: "2024",
  role: "Designer, Developer, AI Creative Director",
  order: 10,
  category: "client-work",
  headline: "AI-driven brand identity and website redesign.",
  heroImage:
    "https://cdn.empac.co/main/assets/images/work-samples/consiglieri/bauhaus-pattern-1.png",
  cardLogo:
    "https://cdn.empac.co/main/assets/images/work-samples/consiglieri/consiglieri-wht.png",
  cardLogoType: "monogram",
  techStack: ["Figma", "Webflow", "DALL-E", "Midjourney"],
  timeline: "2024",
  teamSize: "Solo",
  problem:
    "Consiglieri is a marketing agency created by former executives from companies including T-Mobile, Nordstrom, Adobe, Nike, and HTC. They also have experience with agencies including Publicis, Omnicom, Razorfish, Slalom, and Deutsch.\n\nThe team was ready to modernize their website, and I was tasked with redesigning their website with a new CMS and leveraging AI to generate content for their branding.",
  approach: [
    {
      type: "text",
      content:
        "There were two things that needed to happen at the same time: rebuild the website on a modern CMS that the Consiglieri team could manage themselves, and develop a visual identity that felt modern, bold, and distinctly their own.\n\n## The Website\n\nI rebuilt the site from the ground up with Webflow. Every module was designed to be reusable so the team could assemble pages, add content, and rearrange layouts without touching code or needing to call me. New sections were also added for the team, job postings, and insights. All in all, the end goal was to hand them a site they could own and operate without additional support from me.",
    },
    {
      type: "video",
      src: "https://cdn.empac.co/main/assets/video/consiglieri-website-preview.mp4",
      title: "The Website in Action",
    },
    {
      type: "text",
      content:
        "## The Visual Identity (and the AI Experiment)\n\nThis is where it got interesting… Consiglieri wanted to push beyond generic stock photography, and they wanted to explore generative AI as a creative tool for developing the future version of their brand.\n\nUsing DALL-E and Midjourney, I worked through multiple rounds of iteration to develop imagery that matched the brand's personality… the creative direction they requested drew from 60s post-modernism, Bauhaus patterns, and the collage work of artists like Frank Moth… blending eccentricity with sophistication.",
    },
    {
      type: "gallery",
      title: "AI-Driven Visual Direction",
      description:
        "Generative AI imagery developed through iterative creative direction... blending Bauhaus patterns, post-modernism, and curated lifestyle compositions.",
      images: [
        {
          src: "https://cdn.empac.co/main/assets/images/work-samples/consiglieri/bauhaus-sample-1.jpg",
          alt: "Bauhaus-inspired pattern created for Consiglieri's brand system",
          caption:
            "AI-generated Bauhaus patterns — bold geometry meets brand identity",
        },
        {
          src: "https://cdn.empac.co/main/assets/images/work-samples/consiglieri/bauhaus-sample-2.jpg",
          alt: "Second Bauhaus pattern variation for Consiglieri",
          caption: "Iterating on visual direction through generative AI",
        },
        {
          src: "https://cdn.empac.co/main/assets/images/work-samples/consiglieri/items-on-desk-sample.jpg",
          alt: "Notebook, iPhone, succulents, and wallet with the Consiglieri logo",
          caption:
            "Curated lifestyle compositions replacing AI-generated figures",
        },
        {
          src: "https://cdn.empac.co/main/assets/images/work-samples/consiglieri/modern-studio-sample.jpg",
          alt: "Modern studio setting from Consiglieri's visual identity system",
          caption: "Studio environments that feel intentional and elevated",
        },
      ],
    },
    {
      type: "text",
      content:
        "The process wasn't clean though. Early iterations featured professionals in hotel lobbies and meeting rooms, but the whole thing felt incredibly dated. I refined the direction towards a more modern studio and downtown setting with diverse individuals… but then we hit another wall: the AI-generated people looked too close to real humans, and it risked being confused with actual employees. We essentially hit the uncanny valley with where we were headed.",
    },
    {
      type: "comparison",
      title: "The Visual Pivot",
      pairs: [
        {
          label: "From dated to modern",
          before: {
            src: "https://cdn.empac.co/main/assets/images/work-samples/consiglieri/old-desktop-sample.jpg",
            alt: "Vintage desktop computer representing where Consiglieri's web presence started",
          },
          after: {
            src: "https://cdn.empac.co/main/assets/images/work-samples/consiglieri/modern-office-sample.jpg",
            alt: "Modern office environment reflecting the elevated brand direction",
          },
        },
      ],
    },
    {
      type: "text",
      content:
        "I suggested a pivot to steer away from actual people towards environmental imagery. With the new direction, I focused on modern office environments, design studios, and curated lifestyle compositions without people. The imagery felt intentional and elevated without the pitfalls of AI-generated faces. Once we paired the imagery with a cognac brown and vintage green color palette, the visual system became complete and made Consiglieri feel like we landed on a unique brand they could call their own.",
    },
  ],
  result:
    "The site went from undercutting Consiglieri's reputation to reinforcing it. Prospective clients now arrive understanding the caliber of the firm before a single conversation happens, and potential hires see a company that operates at a level worth joining.\n\nThe CMS gives the team full control over their content. Team members, job postings, case studies, and insights can all be published without the intervention of a developer. And the AI-generated visual identity gives them a brand aesthetic that's unique in their space.\n\nThis project also proved something I've continued to lean into: generative AI, used with clear creative direction and real iteration, can produce brand assets that compete with traditional photography at a fraction of the cost and time. The key with it all is knowing what to ask for and when to pivot… which is exactly the kind of judgment needed when working with AI tooling.",
  testimonial: {
    quote:
      "Our company, Consiglieri, hired Empac Design to restructure and redesign our website to add a more professional, modern feel to the content. The Empac team was collaborative in the early design process, efficient with their work and reviews, and delivered a final product at an incredibly high standard. They continued to support us even after the new site launched to ensure our complete satisfaction. We'd highly recommend Empac for design!",
    author: "Chris Noble",
    role: "Founder & Head of Operations, Consiglieri",
  },
  challenges: [
    "Navigating multiple rounds of AI-generated imagery to find a visual direction that felt modern and elevated without falling into uncanny valley territory.",
    "Building a CMS architecture flexible enough for an agency that adds team members, case studies, and insights regularly.",
    "Creating a brand identity for a firm whose founders have worked at companies known for world-class branding.",
  ],
};
