import styles from "./Placeholder.module.css";

interface PlaceholderProps {
  aspectRatio?: string;
  label?: string;
}

export function Placeholder({
  aspectRatio = "16 / 9",
  label = "Image placeholder",
}: PlaceholderProps) {
  return (
    <div className={styles.placeholder} style={{ aspectRatio }}>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
