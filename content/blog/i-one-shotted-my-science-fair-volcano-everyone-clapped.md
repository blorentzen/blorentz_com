---
title: "I one-shotted my science fair volcano (everyone clapped)"
slug: "i-one-shotted-my-science-fair-volcano-everyone-clapped"
date: "2026-04-21"
publishTime: "06:00"
category: "process"
description: "Everyone's posting 'I built this app in one prompt!' on LinkedIn. Here's what happens ten minutes after the eruption, and how to build something that's still standing when the science fair is over."
readTime: "8 min read"
heroImage: "https://cdn.empac.co/portfolio/images/blog/stop-one-shotting-things/retro-image-kid-with-science-fair-volcano-project.png"
heroAlt: "16-bit pixel art of a small proud figure standing next to a massive erupting volcano in a school gymnasium, colorful foam explosion filling the room"
published: true
---

Imagine for a moment that you're in fifth grade, and it's science fair day. You've spent the last three weeks on your project… researching, building, carefully documenting your findings on a tri-fold board that your mom and/or dad helped you make look presentable. You're proud of the thing: It's thorough, it's accurate, it's got cool pictures and stickers, possibly a diorama, and all the things that make it a killer project.

Then the kid next to you walks in with a papier-mâché volcano. They dump in some baking soda and vinegar, and the thing absolutely erupts. Foam is going everywhere, the teachers are clapping, the parents are filming and posting to TikTok. That kid gets a ribbon, meanwhile your tri-fold board about soil erosion gets a polite smile and a participation trophy.

If you've been on LinkedIn in the last year, you've watched this exact scene play out way too many times. "I built this entire app in one prompt!" There's screenshots of a working UI, fire emojis are everywhere, all the AI thumpers are screaming miracles... essentially, the volcano erupted on cue and everyone lost their god damn minds.

The real question though, what happens ten minutes later when the foam stops? The crowd moves on, and now you're standing in a gymnasium full of wet papier-mâché wondering what to do next.

I'm not here to hate on the volcano kids. I WAS a volcano kid in the beginning once AI was capable enough to let me one-shot things. After the oohing and aahing, I spent the next several hours cleaning up the mess I made.

### We all became the volcano kid at some point.

Let's be honest about why one-shotting is so tempting… because AI is fast, and we all know it. It's dangerously fast. When you can go from idea to working prototype in minutes, stopping to plan feels like a huge waste of time. It's like being handed a Lamborghini and someone suggesting you read the owner's manual first. Who's seriously going to do that? I'm ready to take the thing onto I-5 and floor it.

And LinkedIn isn't helping at all. The platform's incentive structure is engineered to reward the volcano (bonus points if it erupts multiple times).

"I built an app in one prompt!" gets thousands of impressions and fire emojis. "I spent three days carefully planning my architecture before writing a single line of code" gets your mom's like and a comment from a recruiter or influencer who didn't read it. Nobody's posting their tri-fold board on LinkedIn, everyone's posting their volcano.

It's the Red Bull all-nighter of software development. Crack open a prompt, crank it out overnight, ship it, collect the applause. The tech debt is a problem for future you. And let me tell you from experience… future you is going to either hate it or dump it.

When I started building CascadeDS, my design system, I jumped straight into Claude Code before I even opened Figma… I had the same exact energy as volcano kid. I was so excited about what AI could do that I skipped the planning entirely. I became the kid who saw what baking soda and vinegar could do and immediately went all in. The volcano instinct is strong, and none of us are immune to it.

### What happens after the eruption.

Here's the thing about the volcano kid that nobody talks about at the science fair…

The volcano kid was overexcited. They discovered that baking soda and vinegar create an explosive reaction, and that was it. They were sold, and didn't realize that thousands of kids have done this before… and most likely didn't research the actual science behind it beforehand. They didn't plan the structure, nor did they think about whether the papier-mâché could handle the pressure… the explosion was just too cool to slow down for something as boring as "will this thing hold up tomorrow?"

That's the exact energy of your first one-shot prompt. The tool is so fast and the results are so immediate that planning feels like you're wasting the magic. And honestly, I believe it's okay for all of us to do that at least once.

<figure>
<img src="https://cdn.empac.co/portfolio/images/blog/stop-one-shotting-things/retro-image-of-science-fair-dead-volcano.png" alt="16-bit pixel art of a small figure standing alone in a messy modern gymnasium next to a deflated soggy volcano, dried foam everywhere, morning light through large windows" loading="lazy" />
<figcaption>The morning after the eruption. The crowd is gone. The foam dried overnight. Now what?</figcaption>
</figure>

The volcano kid cracked a Red Bull and cranked the whole thing out the night before while the tri-fold board kids had been spending weeks researching their topics, gathering data, and carefully laying out their presentations. The volcano kid threw the entire project together in a single session: It was fast, scrappy, fun, and impressive enough to get the ribbon. Someone should have posted that on LinkedIn so we could all philosophize about it afterwards. Or, knowing how the folks are sometimes, will point out the biggest problem among all of this: the structure wasn't reusable… that's usually a debt that's hard to take on multiple times.

The thing that sucks though, is that the volcano kid's project actually worked, and that's the most dangerous part of this whole story. It erupted on cue, and everyone clapped. If the volcano had failed, the kid would have learned something valuable about shortcuts... but instead it worked, so the takeaway became "shortcuts are totally fine." That lesson holds up right until the next project is bigger, more complex, and the same approach produces a soggy mess that doesn't erupt and can't be salvaged. The "it works" moment is exactly where the worst habits get reinforced.

And here's the real kicker… there's a good chance the volcano kid can't explain how any of it works. The teacher walks over after the applause dies down and asks about the chemical reaction… and the kid shrugs. "I dunno, I just put the stuff in and it went boof." That's essentially you staring at one-shot code three weeks later when someone asks you to add a feature. You didn't make the architectural decisions, AI made the architectural decisions… and AI isn't sitting next to you anymore to explain why it chose that framework, that file structure, or any of the patterns across your website.

### How to be the tri-fold board kid (without being boring).

Look, nobody wants to be the tri-fold board kid in this story… that kid didn't get the applause, they didn't get filmed, and they probably didn't even get the participation trophy. But, twenty years later, the tri-fold board is the project that actually taught them something… and more importantly, it's the project that was still standing at the end of the science fair.

<figure>
<img src="https://cdn.empac.co/portfolio/images/blog/stop-one-shotting-things/retro-image-person-researching-science-fair-project.png" alt="16-bit pixel art of a small figure carefully working at a modern desk with organized notes on the wall, calm warm sunset lighting through window" loading="lazy" />
<figcaption>It doesn't erupt. It doesn't need to.</figcaption>
</figure>

Here's how to bring that energy into your AI workflow without putting everyone to sleep:

**Do the research first.** The tri-fold board kid spent time understanding their topic before building anything. Before you write a single prompt, think through your idea and write a short spec: What are you building? Who's it for? What frameworks are you using? What patterns should it follow? This sometimes takes only 15-30 minutes. It might not be an awesome erupting volcano, but at least it's a sustainable working model that'll give you a better chance at succeeding.

**Build one section at a time.** The tri-fold board kid didn't try to fill all three panels in one night. They did the research panel, then the methodology, then the findings… each section got attention before moving to the next. Do the same thing with AI: one page, one component, one route at a time. Review each piece before moving on. You catch mistakes when they're cheap to fix, not after the whole thing is glued together.

**Give context, not just instructions.** There's a massive difference between "make me a poster" and "make a poster about soil erosion for a fifth grade audience using these three data sources and this color scheme." The first prompt gets you a volcano, the second gets you a tri-fold board that actually has some value to it. When you're working with AI, "build a login page using our existing auth provider, matching our design tokens, following the same component patterns as the dashboard" is a fundamentally different prompt than "build me a login page." Context is king, and without it you're just dumping baking soda into a cardboard shell and hoping for the best.

**Check the work.** The tri-fold board kid had their parent(s) proofread it. Their teacher might have reviewed the outline. Their friend said the chart was hard to read. Every set of eyes caught something the others missed along the way. Apply the same principle to AI output: challenge every generation, read the code, ask why it made certain choices, and always push back when something feels off. Don't accept the first thing that comes back, the back-and-forth is where the quality comes to life.

**Keep each session focused.** One panel at a time, and one goal per session. Build the nav component today, set up the API routes tomorrow… then create the form validation after that. When you try to do everything in a single session, the context gets muddy and the quality drops all around. That's how you end up with a half-volcano, half-tri-fold-board situation that makes people think "Wtf were they trying to do?"

### The volcano was fun, now go build something that lasts.

That first time you one-shotted something with AI and it actually worked was genuinely thrilling… the eruption was spectacular, the applause was real, and there's absolutely nothing wrong with that excitement. For what it's worth, it's what got most of us into building things in the first place.

But at some point, you have to make a decision: are you going to keep erupting on cue and cleaning up the mess after, or are you going to build something that's still relevant when the science fair is over?

The tri-fold board never got the applause, but it's the project that actually taught you something. And honestly? It's the one that's still in your closet somewhere twenty years later. Meanwhile, the volcano got scraped off the gymnasium floor and ended up in a dump somewhere.

Build the tri-fold board. Your future self will thank you.
