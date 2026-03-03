import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Colophon",
  description:
    "How this site was built — the tech stack, typography, and tools behind blorentz.com.",
};

const stack = [
  { name: "Next.js", description: "App Router, server components, static generation" },
  { name: "TypeScript", description: "End-to-end type safety" },
  { name: "CascadeDS", description: "Design system with token-first architecture" },
  { name: "CSS Modules", description: "Scoped styles with CDS design tokens" },
  { name: "Framer Motion", description: "Page transitions and micro-interactions" },
  { name: "Vercel", description: "Deployment and edge infrastructure" },
  { name: "Plausible", description: "Privacy-friendly analytics" },
];

const fonts = [
  {
    name: "General Sans",
    variable: "--font-family-display",
    role: "The Strategist",
    usage: "Page titles, section headings, navigation. The voice of strategy and narrative.",
    specimen: "The quick brown fox jumps over the lazy dog.",
  },
  {
    name: "Space Grotesk",
    variable: "--font-family-technical",
    role: "The Builder",
    usage: "Technical details, tech stack labels, metadata. The voice of how things were built.",
    specimen: "The quick brown fox jumps over the lazy dog.",
  },
  {
    name: "Inter",
    variable: "--font-family-body",
    role: "Body Text",
    usage: "All paragraph text, descriptions, and long-form reading.",
    specimen: "The quick brown fox jumps over the lazy dog.",
  },
  {
    name: "JetBrains Mono",
    variable: "--font-family-mono",
    role: "The Code",
    usage: "Inline code, code blocks, terminal references, and technical specifications.",
    specimen: "const site = await build(ideas);",
  },
];

export default function ColophonPage() {
  return (
    <div className={styles.page}>
      <PageHeader
        title="Colophon"
        subtitle="How this site was built."
        font="technical"
      />

      <Section heading="Tech Stack" font="technical">
        <div className={styles.stack}>
          {stack.map((item) => (
            <div key={item.name} className={styles.stackItem}>
              <span className={styles.stackName}>{item.name}</span>
              <span className={styles.stackDescription}>
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section heading="Typography" font="technical">
        <p className={styles.body}>
          This site uses a deliberate three-font system. Each typeface has a
          specific voice and purpose. &ldquo;What and why&rdquo; gets General
          Sans. &ldquo;How and with what&rdquo; gets Space Grotesk. The thing
          itself gets JetBrains Mono.
        </p>
        <div className={styles.fonts}>
          {fonts.map((font) => (
            <div key={font.name} className={styles.fontCard}>
              <div className={styles.fontHeader}>
                <h3 className={styles.fontName}>{font.name}</h3>
                <span className={styles.fontRole}>{font.role}</span>
              </div>
              <p className={styles.fontUsage}>{font.usage}</p>
              <p
                className={styles.fontSpecimen}
                style={{ fontFamily: `var(${font.variable})` }}
              >
                {font.specimen}
              </p>
              <code className={styles.fontVariable}>{font.variable}</code>
            </div>
          ))}
        </div>
      </Section>

      <Section heading="Design Principles" font="technical">
        <ul className={styles.principles}>
          <li className={styles.principle}>
            <strong>Tokens, not hardcodes.</strong> Every color, spacing value,
            and font size comes from CascadeDS design tokens.
          </li>
          <li className={styles.principle}>
            <strong>Dark mode first.</strong> Designed in dark mode, then
            verified in light. Both themes use the same token system.
          </li>
          <li className={styles.principle}>
            <strong>Server-first.</strong> Every page is a server component.
            Client code only where interaction requires it.
          </li>
        </ul>
      </Section>

      <section className={styles.credits}>
        <h2 className={styles.creditsHeading}>Credits</h2>
        <p className={styles.body}>
          Designed and built by Britton Lorentzen. Powered by CascadeDS, an
          Empac project.
        </p>
      </section>
    </div>
  );
}
