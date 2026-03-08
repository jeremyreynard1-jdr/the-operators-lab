"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function ProjectDemo({
  assetPath,
  title,
}: {
  assetPath: string;
  title: string;
}) {
  const [loading, setLoading] = useState(true);
  const isVideo =
    assetPath.endsWith(".mp4") ||
    assetPath.endsWith(".webm") ||
    assetPath.endsWith(".mov");

  if (!assetPath) {
    return (
      <div
        className="p-8 text-center"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border-color)",
          borderRadius: "var(--card-radius)",
        }}
      >
        <Play
          size={24}
          className="mx-auto mb-3"
          style={{ color: "var(--text-secondary)", opacity: 0.4 }}
        />
        <p
          className="text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          Demo walkthrough coming soon.
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        borderRadius: "var(--card-radius)",
        border: "1px solid var(--border-color)",
      }}
    >
      {loading && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundColor: "var(--border-color)",
            aspectRatio: "16 / 9",
          }}
        />
      )}

      {isVideo ? (
        <video
          src={assetPath}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full"
          style={{
            opacity: loading ? 0 : 1,
            transition: "opacity 0.3s",
          }}
          onLoadedData={() => setLoading(false)}
        >
          <track kind="descriptions" label={`${title} demo walkthrough`} />
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={assetPath}
          alt={`${title} demo walkthrough`}
          className="w-full"
          style={{
            opacity: loading ? 0 : 1,
            transition: "opacity 0.3s",
          }}
          onLoad={() => setLoading(false)}
        />
      )}
    </div>
  );
}
