declare module "@empac/cascadeds" {
  import { ComponentType, ReactNode, CSSProperties } from "react";

  export const ThemeToggle: ComponentType;

  export const Footer: ComponentType<{
    logo?: ReactNode;
    description?: string;
    sections?: {
      title: string;
      links: { href: string; label: string }[];
    }[];
    socialLinks?: { href: string; label: string; icon: ReactNode }[];
    copyright?: string;
    bottomLinks?: { href: string; label: string }[];
    variant?: "columns" | "simple" | "centered";
    className?: string;
  }>;

  export const Icon: ComponentType<{
    name?: string;
    icon?: ComponentType;
    size?: string | number;
    color?: string;
    className?: string;
    stroke?: number;
    strokeWidth?: number;
    style?: CSSProperties;
  }>;

  export const icons: Record<string, ComponentType>;
}

declare module "@empac/cascadeds/dist/styles.css";
