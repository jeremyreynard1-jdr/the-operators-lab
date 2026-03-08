"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function ProjectEmbed({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(true);

  if (failed || !url) {
    return (
      <div
        className="p-8 text-center"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border-color)",
          borderRadius: "var(--card-radius)",
        }}
      >
        <p
          className="text-sm mb-4"
          style={{ color: "var(--text-secondary)" }}
        >
          This app can&apos;t be embedded here.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 transition-opacity hover:opacity-80"
          style={{
            backgroundColor: "var(--accent)",
            color: "#FFFFFF",
            borderRadius: "var(--input-radius)",
          }}
        >
          <ExternalLink size={14} />
          Open {title}
        </a>
      </div>
    );
  }

  return (
    <div>
      <div
        className="relative w-full overflow-hidden"
        style={{
          borderRadius: "var(--card-radius)",
          border: "1px solid var(--border-color)",
          aspectRatio: "16 / 9",
        }}
      >
        {loading && (
          <div
            className="absolute inset-0 animate-pulse"
            style={{ backgroundColor: "var(--border-color)" }}
          />
        )}
        <iframe
          src={url}
          title={title}
          className="w-full h-full"
          style={{
            border: "none",
            opacity: loading ? 0 : 1,
            transition: "opacity 0.3s",
          }}
          onLoad={() => setLoading(false)}
          onError={() => setFailed(true)}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
      <div className="mt-3 text-right">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs hover:opacity-70 transition-opacity"
          style={{ color: "var(--text-secondary)" }}
        >
          <ExternalLink size={12} />
          Open in new tab
        </a>
      </div>
    </div>
  );
}
