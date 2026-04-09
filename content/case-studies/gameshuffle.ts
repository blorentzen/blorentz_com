import type { CaseStudy } from "./index";

export const gameshuffle: CaseStudy = {
  slug: "gameshuffle",
  title: "GameShuffle",
  client: "Personal Project / Empac",
  voice: "build",
  year: "2024 – Present",
  role: "Creator, Designer, Developer",
  order: 3,
  headline: "A game night companion platform built for my Twitch community.",
  heroImage: "https://cdn.empac.co/portfolio/images/gameshuffle-main-og.jpg",
  videoUrl: "https://cdn.empac.co/portfolio/video/gameshuffle-example.mp4",
  videoPoster: "https://cdn.empac.co/portfolio/images/gameshuffle-homepage-screen.png",
  videoAspect: "16/10",
  liveUrl: "https://gameshuffle.co",
  status: "in-progress",
  techStack: [
    "Next.js 15",
    "React",
    "Supabase",
    "CascadeDS",
    "Discord Interactions API",
    "Vercel Pro",
    "Claude Code",
    "Mailersend",
    "Sentry",
  ],
  stats: [
    { stat: "2", label: "Game randomizers live" },
    { stat: "5+", label: "Game modes" },
    { stat: "60+", label: "CDS components powering the UI" },
  ],
  problem:
    "I stream on Twitch occasionally, and usually I'm playing Mario Kart with my community. As a way to spice up the races (and also get viewers off their normal kart combos), I came up with an idea of building my own randomizer that I could use in the middle of my stream.\n\nThere were plenty of randomizers already out there… but I realized that most of them couldn't handle multiple racers well, there wasn't an easy way to append the app into OBS or Streamlabs, usually combo randomizers were separate from track randomizers, and more. There were also a few randomizers that were quite out of date… and specialized in just one of the Mario Karts, not multiple in case I wanted to switch games.\n\nEssentially, GameShuffle was born. It started off as a simple randomizer for Mario Kart 8 Deluxe, and is slowly turning into a platform where game nights can have better structure, where players can engage with each other through their profiles, and where the community can come together to save their favorite tools, combos, rules, and more.",
  approach:
    "## Phase 1: The Randomizer\n\nI originally started with a Mario Kart 8 Deluxe randomizer that was built on an early version of EmpacJS. It was a simple concept: randomize kart combos, race selections, and item loadouts designed to work two ways: as a browser source in OBS/Streamlabs for on-stream use, or as a standalone page viewers could pull up on their phones.\n\nAlong the way, I started adding competitive modes alongside casual play. Mario Kart has a HUGE competitive scene, and I wanted GameShuffle to handle different audiences. Some people just want a random kart, while others may want a structured FFA or team scoring with a live leaderboard.\n\n## Phase 2: Expanding the Game Library\n\nOnce MK8DX was solid, I started working on the game roadmap. There was a Mario Kart World randomizer that went live in early 2026… and coming down the line there'll be randomizers and modes for Smash Bros, Mario Party, and other types of games including Sonic, board games, and more. Each video game will get its own randomizer template and game modes with an architecture that easily adapts between game types. There's also tournament and competitive modes being added to serve the MK competitive community specifically, complete with lounge scoring, team modes, and bracket management.\n\n## Phase 3: From Static Site to Platform\n\nThis is where it gets interesting… I'm starting to think through what happens between game nights. How do you build community on a platform like GameShuffle? How do you reward people for showing up, participating, and making predictions before, during, and after game night?\n\nAll of this meant that the static randomizer site couldn't stay static any longer... I went ahead and converted everything to React with Next.js 15. I also brought in Supabase for auth, relational data, and realtime capabilities. I identified that the data model needed to support user profiles, session history, crew memberships, and eventually some kind of token economy for all of this to work reliably and securely.\n\n## Key design decisions included:\n\n**Building a Discord bot via Interactions API:** The community practically lives in Discord in between streams. Instead of making people come to the website for everything, the bot brings GameShuffle to them with slash commands, rich embeds, and a Discord Activity for in-voice-channel use. I wanted to meet users where they were, not just on the website alone.\n\n**Session architecture:** A GameShuffle Session is a structured meta-game layer that runs alongside whatever game you're playing. This includes room codes (format: MARIO-4821), player assignment, parallel scoring, and event cards. It works for both casual couch play and streamed sessions.\n\n**Crew system:** Persistent groups of 4-8 people with their own leaderboards and rivalries. This easily gives the community identity beyond individual sessions. Your crew standing carries across seasons and can easily be monitored.\n\n**The token economy:** Free engagement currency earned through participation, predictions, and session attendance. It'll be designed from the ground up to avoid gambling classification… tokens are free to earn, have no monetary value, and unlock cosmetic rewards only. There'll also be season resets to keep things fair (and stop folks from banking and rigging leaderboards).\n\n**Session Score for streamer discovery:** A quality metric that rewards engagement density over viewer count. A 12-person stream with 100% participation naturally scores higher than a 500-viewer stream with 2% engagement. While some platforms might favor larger streamers with larger audiences and collaborations, GameShuffle favors communities with higher engagement rates.\n\n**Mobile-first for mid-stream use:** Players are holding controllers and glancing at phones... so every interaction needs to work with one hand and take under 3 seconds.\n\n**CascadeDS:** The entire UI is built on CascadeDS, my design system. Same tokens, same components, and the same dark/light theming as every other Empac project to maintain consistency across the Empac ecosystem.\n\n**AI-assisted development:** Claude Code handles the bulk of implementation including component scaffolding, API routes, Discord bot integration, database schema iteration, and more. The architecture and product decisions are mine.",
  result:
    "## What's live now:\n\ngameshuffle.co on Next.js 15 / Supabase / Vercel Pro. MK8DX randomizer (karts, characters, tracks, items for casual + competitive modes). Mario Kart World randomizer. Discord bot with slash commands + rich embeds. Discord Activity (in-voice-channel randomizer experience). Competitive Hub with live lounge scoring (FFA + team modes). Tournament management (beta). Supabase auth + full user system. Mailersend transactional emails. Full SEO infrastructure (dynamic sitemap, robots.txt, structured metadata). Sentry error tracking + Better Stack uptime monitoring. SE Ranking connected and tracking.\n\n## Designed and specced:\n\nFull platform layer (Sessions, Tokens, Crew system, GameShuffle Live Hub). Social layer philosophy (it should complement Twitch/Discord/YouTube and serve as a companion app). Profile system with prediction history, season tiers, and crew standing. Twitch integration (overlay, dashboard, stream remote PWA). Additional randomizers (Smash Bros, Mario Party, Jackbox, Board Games, and more).\n\n## Where it stands:\n\nIt's an active product in development. It's community-driven, and built for the communities I'm a part of plus many more. There are ideas for how GameShuffle could be monetized in the future… but the primary goal is to continue building additional applications, modes, and content that makes GameShuffle the go-to place for organizing game nights.",
  challenges: [
    "Converting a static randomizer site to a full-stack platform with auth, realtime data, and Discord integration while keeping the existing randomizer experience intact.",
    "Designing a token economy that drives engagement without crossing into gambling classification. Tokens are free, have no monetary value, and unlock cosmetic rewards only.",
    "Building a mobile-first experience for mid-stream use. Players are holding controllers and glancing at phones, so every interaction needs to work with one hand in under 3 seconds.",
    "Creating a Session Score metric that rewards engagement density over viewer count, so smaller streamers with active communities aren't disadvantaged.",
  ],
};
