"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectScreenshots({
  screenshots,
  title,
}: {
  screenshots: string[];
  title: string;
}) {
  const [current, setCurrent] = useState(0);

  if (!screenshots || screenshots.length === 0) {
    return (
      <div
        className="p-8 text-center"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border-color)",
          borderRadius: "var(--card-radius)",
        }}
      >
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Screenshots coming soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Main screenshot */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          borderRadius: "var(--card-radius)",
          border: "1px solid var(--border-color)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={screenshots[current]}
          alt={`${title} screenshot ${current + 1}`}
          className="w-full"
        />

        {/* Navigation arrows */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrent((prev) =>
                  prev === 0 ? screenshots.length - 1 : prev - 1
                )
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full transition-opacity hover:opacity-100"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff",
                opacity: 0.7,
              }}
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() =>
                setCurrent((prev) =>
                  prev === screenshots.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full transition-opacity hover:opacity-100"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff",
                opacity: 0.7,
              }}
              aria-label="Next screenshot"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail dots */}
      {screenshots.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                backgroundColor:
                  i === current ? "var(--accent)" : "var(--border-color)",
              }}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
