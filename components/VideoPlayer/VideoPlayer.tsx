"use client";

import dynamic from "next/dynamic";

// VideoEmbed exists in CDS bundle but is missing from main type declarations
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VideoEmbed = dynamic(
  () =>
    import("@empac/cascadeds").then(
      (mod: any) => mod.VideoEmbed as React.ComponentType<any>
    ),
  { ssr: false }
);

interface VideoPlayerProps {
  src: string;
  title: string;
  poster?: string;
  aspect?: "16/9" | "4/3" | "1/1" | "21/9";
}

export function VideoPlayer({ src, title, poster, aspect = "16/9" }: VideoPlayerProps) {
  return (
    <VideoEmbed
      src={src}
      title={title}
      poster={poster}
      aspect={aspect}
    />
  );
}
