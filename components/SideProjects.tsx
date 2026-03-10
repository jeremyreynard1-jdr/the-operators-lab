"use client";

import { useState } from "react";
import { aboutCards } from "@/lib/about";
import AboutCard from "@/components/AboutCard";

export default function SideProjects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const linkedInExpanded = expandedId === "linkedin-challenge";

  const handleToggle = (cardId: string) => {
    setExpandedId(expandedId === cardId ? null : cardId);
  };

  return (
    <>
      <h2
        className="text-xs font-medium uppercase tracking-widest mb-2"
        style={{
          color: "var(--accent)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        Side Projects &amp; Community
      </h2>
      <p
        className="text-lg mb-8 max-w-2xl"
        style={{ color: "var(--text-secondary)" }}
      >
        Ideas and communities outside of work.
      </p>
      <div
        className={`grid gap-3 ${
          linkedInExpanded
            ? "grid-cols-1 md:grid-cols-[3fr_2fr]"
            : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {aboutCards.map((card, i) => (
          <div
            key={card.id}
            className={linkedInExpanded && i === 0 ? "md:row-span-2" : ""}
          >
            <AboutCard
              card={card}
              expanded={expandedId === card.id}
              onToggle={() => handleToggle(card.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
