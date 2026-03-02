"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StatCard = dynamic(
  () =>
    import("@empac/cascadeds").then(
      (mod: any) => mod.StatCard as React.ComponentType<any>
    ),
  { ssr: false }
);

interface CountUpStatProps {
  stat: string;
  label: string;
  variant?: string;
}

/** Parse a stat string into prefix, numeric value, and suffix.
 *  "$500K+" → { prefix: "$", value: 500, suffix: "K+", decimals: 0 }
 *  "22.6%"  → { prefix: "",  value: 22.6, suffix: "%", decimals: 1 }
 *  "4,200+" → { prefix: "",  value: 4200, suffix: "+", decimals: 0, hasCommas: true }
 */
function parseStat(stat: string) {
  const match = stat.match(/^([^0-9]*)([0-9][0-9,]*\.?[0-9]*)(.*)$/);
  if (!match) return null;

  const prefix = match[1];
  const numStr = match[2];
  const suffix = match[3];
  const hasCommas = numStr.includes(",");
  const cleanNum = numStr.replace(/,/g, "");
  const value = parseFloat(cleanNum);
  const decimalIndex = cleanNum.indexOf(".");
  const decimals = decimalIndex >= 0 ? cleanNum.length - decimalIndex - 1 : 0;

  if (isNaN(value)) return null;
  return { prefix, value, suffix, decimals, hasCommas };
}

function formatNumber(n: number, decimals: number, hasCommas: boolean): string {
  const fixed = n.toFixed(decimals);
  if (!hasCommas) return fixed;

  const [intPart, decPart] = fixed.split(".");
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decPart ? `${withCommas}.${decPart}` : withCommas;
}

export function CountUpStat({ stat, label, variant }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayStat, setDisplayStat] = useState(stat);
  const parsed = useRef(parseStat(stat));
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current || !parsed.current) return;
    hasAnimated.current = true;

    const { prefix, value, suffix, decimals, hasCommas } = parsed.current;

    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplayStat(
          `${prefix}${formatNumber(latest, decimals, hasCommas)}${suffix}`
        );
      },
    });

    return () => controls.stop();
  }, [isInView, stat]);

  return (
    <div ref={ref} style={{ height: "100%" }}>
      <StatCard stat={displayStat} label={label} variant={variant} style={{ height: "100%" }} />
    </div>
  );
}
