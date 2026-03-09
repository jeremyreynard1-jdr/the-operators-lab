"use client";

import { inspirationItems, type InspirationItem } from "@/lib/inspiration";
import { ExternalLink } from "lucide-react";

const typeConfig = {
  blog: { label: "Blog", bg: "#DBEAFE", color: "#1E40AF" },
  newsletter: { label: "Newsletter", bg: "#DCFCE7", color: "#166534" },
  guide: { label: "Guide", bg: "#F3E8FF", color: "#6B21A8" },
  video: { label: "Video", bg: "#FEF3C7", color: "#92400E" },
};

function InspirationCard({ item }: { item: InspirationItem }) {
  const Icon = item.icon;
  const type = typeConfig[item.type];

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 transition-all duration-200 hover:translate-y-[-2px]"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--card-radius)",
        boxShadow: "var(--card-shadow)",
      }}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-start gap-3">
          <div
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
            style={{ backgroundColor: "var(--accent-light)" }}
          >
            <Icon size={16} style={{ color: "var(--accent)" }} />
          </div>
          <div>
            <h3
              className="text-sm font-semibold mb-0.5"
              style={{ color: "var(--text-primary)" }}
            >
              {item.title}
            </h3>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              {item.author}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className="text-[10px] font-medium px-2 py-0.5 rounded-full"
            style={{ backgroundColor: type.bg, color: type.color }}
          >
            {type.label}
          </span>
          <ExternalLink
            size={12}
            style={{ color: "var(--text-secondary)" }}
          />
        </div>
      </div>

      {item.description && (
        <p
          className="text-sm leading-relaxed pl-12"
          style={{ color: "var(--text-secondary)" }}
        >
          {item.description}
        </p>
      )}
    </a>
  );
}

export default function InspirationSection() {
  return (
    <>
      <h2
        className="text-xs font-medium uppercase tracking-widest mb-2"
        style={{
          color: "var(--accent)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        Inspiration
      </h2>
      <p
        className="text-lg mb-8 max-w-2xl"
        style={{ color: "var(--text-secondary)" }}
      >
        Articles, talks, and thinkers that shape how I work.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {inspirationItems.map((item) => (
          <InspirationCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
