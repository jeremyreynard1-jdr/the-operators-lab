"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { type AboutCard as AboutCardType } from "@/lib/about";

export default function AboutCard({ card }: { card: AboutCardType }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = card.icon;

  if (card.linkTo) {
    return (
      <Link
        href={card.linkTo}
        className="block p-5 transition-all duration-200 hover:translate-y-[-2px]"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border-color)",
          borderRadius: "var(--card-radius)",
          boxShadow: "var(--card-shadow)",
        }}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
              style={{ backgroundColor: "var(--accent-light)" }}
            >
              <Icon size={16} style={{ color: "var(--accent)" }} />
            </div>
            <div>
              <h3
                className="text-sm font-semibold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {card.description}
              </p>
            </div>
          </div>
          <ArrowRight
            size={16}
            className="flex-shrink-0 mt-1"
            style={{ color: "var(--text-secondary)" }}
          />
        </div>
      </Link>
    );
  }

  return (
    <div
      className="p-5 transition-all duration-200"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--card-radius)",
        boxShadow: "var(--card-shadow)",
        borderLeftColor: expanded ? "var(--accent)" : "var(--border-color)",
        borderLeftWidth: expanded ? "3px" : "1px",
      }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
              style={{ backgroundColor: "var(--accent-light)" }}
            >
              <Icon size={16} style={{ color: "var(--accent)" }} />
            </div>
            <div>
              <h3
                className="text-sm font-semibold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {card.description}
              </p>
            </div>
          </div>
          <ChevronDown
            size={16}
            className="flex-shrink-0 mt-1 transition-transform duration-200"
            style={{
              color: "var(--text-secondary)",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: expanded ? "200px" : "0",
          opacity: expanded ? 1 : 0,
        }}
      >
        <p
          className="text-sm leading-relaxed mt-4 pl-12"
          style={{ color: "var(--text-secondary)" }}
        >
          {card.content}
        </p>
      </div>
    </div>
  );
}
