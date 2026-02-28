# About Page — Content Audit

**Audited:** 2026-02-27
**File:** `app/about/page.tsx` + `app/about/page.module.css`

---

## Page Structure

The about page has four sections:

### 1. Intro (Hero)
- **Lead text:** "I'm a front-end engineering leader who's spent a career building things that matter at companies like T-Mobile and Apple."
- **Body copy:** Two paragraphs — one about Empac's value proposition (Fortune 500 rigor for smaller businesses), one about the philosophy of invisible engineering.
- **Image:** Placeholder (`<Placeholder aspectRatio="3/4" label="Portrait photo" />`) — no actual portrait yet.
- **Layout:** Two-column grid (text + 300px image column), collapses to single column on mobile.

### 2. Career Timeline
Three entries, each with company name, role, period, and description:

| Company | Role | Period | Description |
|---------|------|--------|-------------|
| Empac | Founder & Principal Consultant | 2022 – Present | Founded consultancy, built CascadeDS, shipped across healthcare/energy/SaaS |
| Apple | Senior Front-End Engineer | 2021 – 2022 | Internal tools and platforms |
| T-Mobile | Lead Front-End Engineer | 2018 – 2021 | Savings Calculator (2M+ calcs/quarter), Super Bowl page (50M+ pageviews) |

### 3. How I Work (Values)
Four value cards in a 2x2 grid:

| Title | Description |
|-------|-------------|
| Ship, then polish | Working software beats perfect plans. Ship fast, iterate on real usage. |
| Own the outcome | Cares about performance, accessibility, conversions — not just code. |
| Build for the team | Systems that outlast him — clean code, clear docs, patterns others can run with. |
| Stay technical | Leadership means staying in the code — reviewing, architecting, shipping. |

### 4. CTA
- **Heading:** "Want to work together?"
- **Body:** "I take on a limited number of engagements at a time..."
- **Link:** "See my work" → `/work`

---

## Observations

### Content Gaps
- **Portrait photo is a placeholder** — no actual image is loaded yet.
- **No link to /empac** — the CTA links to /work instead of the consultancy bridge page. Phase 2 item, but worth noting.
- **Career timeline is incomplete** — only 3 roles listed. No mention of pre-T-Mobile career history.
- **No personal story** — the intro is purely professional. No background, education, or personal interests that humanize the page.

### Typography Compliance
- Page header uses `<PageHeader>` component — should render as General Sans (H1). Correct.
- Section headings ("Career", "How I Work") use `<Section>` component — should be General Sans. Correct.
- Timeline company names use `--font-family-display` (General Sans). Correct.
- Timeline periods use `--font-family-technical` (Space Grotesk). Correct — this is metadata.
- Timeline roles use `--font-family-display` (General Sans). Correct.
- Value card titles use `--font-family-display` (General Sans). Correct.
- CTA heading uses `--font-family-display` (General Sans). Correct.
- CTA link uses `--font-family-display` (General Sans). Correct.
- All body text uses default (Inter). Correct.

**Typography verdict: Fully compliant with three-voice system.**

### Styling Compliance
- All spacing uses CDS tokens. Correct.
- All colors use semantic tokens. Correct.
- No hardcoded values found. Correct.
- No Tailwind classes. Correct.
- Responsive breakpoint at 768px with appropriate column collapse. Correct.

### Metadata
- Title: "About"
- Description: "Strategic front-end engineering leader with Fortune 500 experience at T-Mobile and Apple, now running Empac."
