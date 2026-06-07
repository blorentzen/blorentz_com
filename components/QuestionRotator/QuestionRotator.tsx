"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./QuestionRotator.module.css";

interface QuestionRotatorProps {
  label?: string;
  questions: string[];
  intervalMs?: number;
}

export function QuestionRotator({
  label,
  questions,
  intervalMs = 4200,
}: QuestionRotatorProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || questions.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % questions.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, questions.length, intervalMs]);

  return (
    <div
      className={styles.rotator}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className={styles.mark} aria-hidden="true">
        ?
      </span>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.stage} aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={index}
            className={styles.question}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.98 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {questions[index]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className={styles.dots}>
        {questions.map((q, i) => (
          <button
            key={q}
            type="button"
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            aria-label={`Show question ${i + 1} of ${questions.length}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
