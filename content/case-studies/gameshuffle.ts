import type { CaseStudy } from "./index";

export const gameshuffle: CaseStudy = {
  slug: "gameshuffle",
  title: "GameShuffle",
  client: "Personal Project / Empac",
  voice: "build",
  year: "2024 – Present",
  role: "Solo Creator, Designer & Developer",
  order: 4,
  category: "empac-products",
  headline:
    "A real-time game-night platform for streamers, built solo from database to overlay.",
  heroImage: "https://cdn.empac.co/portfolio/images/gameshuffle-main-og.jpg",
  videoUrl: "https://cdn.empac.co/portfolio/video/gameshuffle-main-features-v2.mp4",
  videoPoster: "https://cdn.empac.co/portfolio/images/gameshuffle-walkthrough-thumb.png",
  videoAspect: "16/10",
  liveUrl: "https://gameshuffle.co",
  status: "in-progress",
  techStack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Supabase",
    "CascadeDS",
    "Stripe",
    "Twitch API",
    "Discord Interactions API",
    "Cloudflare",
    "Vercel",
    "Railway",
    "Sentry",
    "Claude Code",
  ],
  problem:
    "I stream on Twitch occasionally, and usually I'm playing Mario Kart with my community. As a way to spice up the races (and also get viewers off their normal kart combos), I came up with an idea of building my own randomizer that I could use in the middle of my stream.\n\nThere were plenty of randomizers already out there… but I realized that most of them couldn't handle multiple racers well, there wasn't an easy way to append the app into OBS or Streamlabs, usually combo randomizers were separate from track randomizers, and more. There were also a few randomizers that were quite out of date… and specialized in just one of the Mario Karts, not multiple in case I wanted to switch games.\n\nThat's how GameShuffle started: a simple Mario Kart 8 Deluxe randomizer. It's since grown into a full game-night platform that turns a stream into an interactive game night, with chat-driven randomizers, live competitive scoring, tournaments, an OBS overlay, and a closed-loop token economy the audience plays along with. The streamer is the customer; viewers join in from Twitch or Discord chat with no account required. And I built the whole thing solo, from the database to the overlay.",
  approach: [
    {
      type: "text",
      content:
        "## From a randomizer to a platform\n\nThe first version was just a Mario Kart 8 Deluxe randomizer I could drop into OBS as a browser source. Once that was working, I got more interested in the part around it: what actually happens on a game night, and how do you get viewers playing along, keeping score, and coming back the next week?\n\nThat's what turned it from a static site into a real product. I moved everything onto Next.js, React, and Supabase and built it into something a streamer runs and their viewers join straight from Twitch or Discord chat, no account needed. All of it is mine end to end: the database and its row-level security, Stripe billing, both platform integrations, the OBS overlay, and the marketing site.",
    },
    {
      type: "cards",
      title: "The engineering decisions that mattered",
      cards: [
        {
          title: "A dynamic token ledger",
          desc: "A token balance is set up as a running sum of append-only events that either add or remove tokens. It's a dynamic ledger so it never has to be updated manually, but could easily be tracked for what events happened when.",
          code: `-- balance is the running sum of the events
select coalesce(sum(amount), 0) as balance
from token_events
where user_id = $1;`,
        },
        {
          title: "Per-player writes in live scoring",
          desc: "When a lobby scores a race, each player writes only their own row instead of everyone piling onto one shared record. A full lobby can score at the same time without stepping on each other, and the leaderboard just reads back what everyone wrote.",
          code: `// each player writes only their own row
await supabase.from("placements").upsert({
  match_id, user_id: me, place,
});`,
        },
        {
          title: "One adapter, every platform",
          desc: "Twitch and Discord both sit behind the same adapter, so the rest of the app doesn't care which one it's talking to. When something happens in a session, one publisher sends it out to whichever platforms are connected, so I'm not rewriting the same poll or result three times.",
          code: `interface PlatformAdapter {
  publish(e: DomainEvent): Promise<void>;
}
// one event, every connected platform
for (const p of platforms) p.publish(e);`,
        },
        {
          title: "The Discord bot runs on Railway",
          desc: "It's not fully serverless. Slash commands come in over HTTP, but plenty of what the bot does is timed, so cron jobs on Railway keep checking the database for events that are due, run them, and send the results back.",
          code: `// Railway cron: fire what's due
const due = await db
  .from("scheduled_events")
  .select("*")
  .lte("run_at", now);

for (const e of due) dispatch(e);`,
        },
        {
          title: "Security lives at the database",
          desc: "Row-level security is on every table, so a user can only ever touch their own data. Admin work goes through a separate server-only path, and any third-party tokens I store are encrypted at rest.",
          code: `alter table token_events
  enable row level security;

create policy "own rows" on token_events
  for select using (auth.uid() = user_id);`,
        },
        {
          title: "Plan and role, kept separate",
          desc: "What someone paid for and what they're allowed to operate are two different things. Subscription tier comes from Stripe; a staff or admin role is its own axis. Both resolve in one place on the server, so there's one clear answer to whether someone can do a given thing.",
          code: `// plan (Stripe) is separate from role
const tier = effectiveTier(user);
if (!allows(tier, "pro")) return deny();`,
        },
      ],
    },
    {
      type: "cards",
      title: "The design language",
      intro:
        "The UI runs on CascadeDS, my own design system, but I pushed it to give GameShuffle a look of its own. Most design systems chase consistency and reusability, which is the right instinct, but lean on that too hard and everything you build ends up looking like everything else you've built. So the thing I cared about most here was branding GameShuffle without cracking the shared components underneath. That's only gotten more important now that anyone can have AI generate a decent-looking screen in a minute. Staying flexible enough to brand it your own way, without the core coming apart, is the part that's genuinely hard.",
      cards: [
        {
          title: "Recolor from the root",
          desc: "The palette is defined once, and components read semantic tokens off of it instead of hardcoded colors. Change it once at the root and the whole system re-skins, so branding a new app is a quick adjustment instead of a rebuild.",
          code: `:root { --indigo-500: #4f46e5; }

/* components read tokens, never a raw hex */
.cta { background: var(--action); }`,
        },
        {
          title: "One job per color",
          desc: "Indigo carries anything structural, violet is reserved for glow and 'Pro' moments, and gold only ever means Arcade Tokens. Keeping each color to one job is what lets me push the palette around per app without it turning to mush.",
          code: `--action: var(--indigo-500);  /* structure */
--glow:   var(--violet-500);  /* Pro only  */
--token:  var(--gold-500);    /* currency  */`,
        },
        {
          title: "Marketing persuades, the app gets out of the way",
          desc: "Marketing pages use deliberate moments of light and dark, plus color and layout, to communicate what sets GameShuffle apart from other platforms. Inside the app it flips: it leans on patterns people already know from other tools and follows their theme preference, so there's nothing new to learn and less friction to get through.",
          code: `// app: follow the user's theme, stay familiar
<html data-theme={user.theme}>

// marketing: art-directed, section by section
<section data-tone="dark">…</section>`,
        },
        {
          title: "Built for one hand, mid-stream",
          desc: "People are holding a controller and glancing at a phone, so the whole thing is tuned for narrow screens and one-handed use, on a real gutter with a type scale that actually fits.",
          code: `--gutter: 16px;
font-size: clamp(1rem, 4.5vw, 1.4rem);`,
        },
      ],
    },
    {
      type: "text",
      content:
        "## How I use AI here\n\nClaude Code does a lot of the actual building: scaffolding components, wiring up API routes, iterating on the schema. What it doesn't do is the thinking. Every requirement, every architecture call, and every decision above, I work out and write up myself, then hand off the execution. I want to be clear about that, because plenty of AI-built products let the model decide what to build and how all in one go. Here it's more like a very fast pair of hands, and I'm the one drawing up the plan.",
    },
  ],
  result:
    "## Live in production\n\ngameshuffle.co runs on Next.js 16, React 19, Supabase, and Vercel, and nearly all of it is shipped and in production.\n\n**Play.** MK8 Deluxe and Mario Kart World randomizers, lounge-style live scoring for free-for-alls and teams, five tournament formats including a Heat-to-Mains ladder and full championship seasons, and a Pokémon TCG companion.\n\n**Stream and platform.** Deep Twitch integration with a chat bot, channel points, an OBS overlay, and a lobby viewer; a Discord bot; the multi-platform session engine that ties it all together; a public live page; a wheel spinner; and polls that run across every connected platform at once.\n\n**Economy and engagement.** The ledger-backed Arcade Token currency, with prediction markets, awards, bounties, leaderboards, and participant-driven picks and bans.\n\n**Community and identity.** Follows, presence, notifications, invitations, DMs and group chat in a single Comms Center, public profiles with personal theming, and a full trust and safety system covering reporting, blocking, moderation, and appeals.\n\n**Accounts and business.** Hardened auth (OAuth and email, verification, a passwordless gate, deletion cascade), Stripe subscriptions with tier gating, and staff and admin operational tooling.\n\n**Foundation.** SEO and GEO marketing pages, first-class privacy and compliance with cookie consent, GPC, and DSAR flows, and lifecycle email.\n\n## Where it stands\n\nIt's a live product I'm still actively building. One piece, walk-up anthems, is a shipped foundation (the data model and settings UI are in) whose final playback wiring isn't done yet. Everything else above is running today. From here it's mostly more of everything: more games, more modes, and filling in the gaps, with the aim of GameShuffle being the first thing people reach for when they want to run a game night.",
  challenges: [
    "Getting the token economy right without letting balances drift. Building it as an append-only ledger with atomic spends means there are no negative balances and every token is traceable, which matters when it's the currency people are actually playing for.",
    "Making one product work across Twitch and Discord without forking it. A shared adapter and a single event publisher mean a poll or a session is one object with one source of truth, wherever it was created or shown.",
    "Running a real-time, multi-user product solo without drowning in ops. Leaning on managed services (Supabase and Vercel, plus Railway for the bot's timed work) is what makes it possible for one person to keep it up.",
    "Building privacy and trust in from the start instead of bolting them on at the end: row-level security everywhere, encrypted third-party tokens, consent that honors GPC, a DSAR flow, and a full moderation and appeals system.",
  ],
};
