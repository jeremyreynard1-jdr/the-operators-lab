"use client";

import { Cpu } from "lucide-react";
import { aiToolStack } from "@/lib/about";

export default function AiToolStack() {
  return (
    <div
      className="p-5"
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
  );
}
