"use client";

import { useState } from "react";
import Image from "next/image";
import { careerStops } from "@/lib/career";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export default function CareerMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stop = careerStops[activeIndex];

  const prev = () =>
    setActiveIndex((i) => (i > 0 ? i - 1 : careerStops.length - 1));
  const next = () =>
    setActiveIndex((i) => (i < careerStops.length - 1 ? i + 1 : 0));

  return (
    <div
      className="overflow-hidden"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--card-radius)",
        boxShadow: "var(--card-shadow)",
      }}
    >
      {/* Timeline strip */}
      <div
        className="flex items-center px-4 md:px-6 py-4 gap-1 overflow-x-auto"
        style={{ borderBottom: "1px solid var(--border-color)" }}
      >
        {careerStops.map((s, i) => {
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;

          return (
            <div key={s.id} className="flex items-center flex-shrink-0">
              <div className="flex flex-col items-center gap-1">
                <button
                  onClick={() => setActiveIndex(i)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: isActive
                      ? "var(--accent)"
                      : isPast
                        ? "var(--accent-light)"
                        : "transparent",
                    color: isActive
                      ? "#FFFFFF"
                      : isPast
                        ? "var(--accent)"
                        : "var(--text-secondary)",
                    border: isActive
                      ? "1px solid var(--accent)"
                      : "1px solid transparent",
                  }}
                >
                  <span
                    className="text-xs font-semibold whitespace-nowrap"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {s.company}
                  </span>
                </button>
                <span
                  className="text-[10px] whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                    opacity: isActive ? 1 : 0.5,
                  }}
                >
                  {s.startYear}
                </span>
              </div>

              {/* Connector */}
              {i < careerStops.length - 1 && (
                <div
                  className="w-4 h-px mx-0.5 flex-shrink-0"
                  style={{
                    backgroundColor:
                      i < activeIndex
                        ? "var(--accent)"
                        : "var(--border-color)",
                    opacity: i < activeIndex ? 0.4 : 1,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Active stop content */}
      <div className="px-5 md:px-8 py-6 md:py-8">
        <div
          key={stop.id}
          style={{ animation: "fadeSlideIn 0.3s ease-out" }}
        >
          {/* Header: logo + company + period */}
          <div className="flex items-start gap-3 md:gap-4 mb-4">
            {/* Company logo */}
            {stop.logoUrl ? (
              <div
                className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden relative"
                style={{
                  backgroundColor: "var(--badge-bg)",
                }}
              >
                <Image
                  src={stop.logoUrl}
                  alt={`${stop.company} logo`}
                  fill
                  className="object-contain p-1.5"
                  sizes="48px"
                />
              </div>
            ) : (
              <div
                className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-bold text-sm"
                style={{
                  backgroundColor: stop.isCurrent
                    ? "var(--accent)"
                    : "var(--accent-light)",
                  color: stop.isCurrent ? "#FFFFFF" : "var(--accent)",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {stop.logo}
              </div>
            )}

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3
                    className="text-lg md:text-xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stop.company}
                  </h3>
                  <p
                    className="text-xs md:text-sm font-medium mt-0.5"
                    style={{ color: "var(--accent-muted)" }}
                  >
                    {stop.title}
                  </p>
                </div>
              </div>

              {/* Location + period */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                <div className="flex items-center gap-1.5">
                  <MapPin
                    size={13}
                    style={{ color: "var(--text-secondary)" }}
                  />
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {stop.city}
                  </span>
                </div>
                <span
                  className="text-xs"
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  {stop.period}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-3 pl-[52px] md:pl-16"
            style={{ color: "var(--text-secondary)" }}
          >
            {stop.description}
          </p>

        </div>
      </div>

      {/* Footer nav */}
      <div
        className="flex items-center justify-between px-5 md:px-8 py-3"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <span
          className="text-xs"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          {activeIndex + 1} of {careerStops.length}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-150 hover:opacity-80"
            style={{
              backgroundColor: "var(--badge-bg)",
              color: "var(--text-secondary)",
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-150 hover:opacity-80"
            style={{
              backgroundColor: "var(--accent)",
              color: "#FFFFFF",
            }}
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
