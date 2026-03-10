"use client";

import { aboutCards } from "@/lib/about";
import AboutCard from "@/components/AboutCard";

export default function SideProjects() {
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {aboutCards.map((card) => (
          <AboutCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}
