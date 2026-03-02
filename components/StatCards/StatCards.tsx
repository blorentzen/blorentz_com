"use client";

import { CountUpStat } from "@/components/CountUpStat/CountUpStat";
import styles from "./StatCards.module.css";

interface Stat {
  stat: string;
  label: string;
}

interface StatCardsProps {
  stats: Stat[];
}

export function StatCards({ stats }: StatCardsProps) {
  return (
    <div className={styles.grid}>
      {stats.map((item) => (
        <CountUpStat
          key={item.label}
          stat={item.stat}
          label={item.label}
          variant="accent"
        />
      ))}
    </div>
  );
}
