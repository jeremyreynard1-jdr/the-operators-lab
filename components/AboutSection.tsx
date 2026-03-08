"use client";

import { Cpu } from "lucide-react";
import { aboutCards, aiToolStack } from "@/lib/about";
import AboutCard from "@/components/AboutCard";
import CareerMap from "@/components/CareerMap";

const bonusCards = aboutCards.filter((c) => c.id !== "change-management");

export default function AboutSection() {
  return (
    <>
      <h2
        className="text-xs font-medium uppercase tracking-widest mb-2"
        style={{
          color: "var(--accent)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        Journey
      </h2>
      <p
        className="text-lg mb-8 max-w-2xl"
        style={{ color: "var(--text-secondary)" }}
      >
        Over the last 10+ years I&apos;ve been lucky to work at some amazing
        companies and startups all over the world.
      </p>

      {/* Career Map - the centerpiece */}
      <div className="mb-10">
        <CareerMap />
      </div>

      {/* AI Tool Stack */}
      <div
        className="p-5 mb-10"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border-color)",
          borderRadius: "var(--card-radius)",
          boxShadow: "var(--card-shadow)",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg"
            style={{ backgroundColor: "var(--accent-light)" }}
          >
            <Cpu size={16} style={{ color: "var(--accent)" }} />
          </div>
          <div>
            <h3
              className="text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              AI Tool Stack
            </h3>
            <p
              className="text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              The tools that power my workflow
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pl-12">
          {aiToolStack.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: "var(--badge-bg)",
                border: "1px solid var(--border-color)",
              }}
            >
              <span
                className="font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {tool.name}
              </span>
              <span
                className="text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                {tool.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Side Projects & Community - bonus section */}
      <div className="mb-6">
        <h3
          className="text-xs font-medium uppercase tracking-widest mb-4"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          Side Projects &amp; Community
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {bonusCards.map((card) => (
            <AboutCard key={card.id} card={card} />
          ))}
        </div>
      </div>

    </>
  );
}
