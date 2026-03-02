"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function StaggerGrid({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: StaggerGridProps) {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
