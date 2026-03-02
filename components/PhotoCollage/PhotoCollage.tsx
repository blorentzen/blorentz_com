"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./PhotoCollage.module.css";

interface CollagePhoto {
  src: string;
  alt: string;
}

interface PhotoCollageProps {
  photos: CollagePhoto[];
  className?: string;
}

const variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function PhotoCollage({ photos, className }: PhotoCollageProps) {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  return (
    <motion.div
      className={`${styles.collage} ${className ?? ""}`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
      {photos.map((photo, i) => (
        <motion.div
          key={photo.src}
          className={`${styles.frame} ${styles[`frame${i + 1}`]}`}
          variants={variants}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 45vw, 180px"
            className={styles.image}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
