"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { type AboutCard as AboutCardType, type Highlight } from "@/lib/about";

function ScreenshotCarousel({ highlights }: { highlights: Highlight[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -200 : 200;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % highlights.length);
  };
  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + highlights.length) % highlights.length);
  };

  return (
    <>
      {/* Thumbnail strip */}
      <div className="mt-4 pl-12 relative">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[10px] font-medium uppercase tracking-wider"
            style={{ color: "var(--text-secondary)" }}
          >
            Featured reframes
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => scrollBy("left")}
              className="p-1 rounded hover:bg-black/5 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={12} style={{ color: "var(--text-secondary)" }} />
            </button>
            <button
              onClick={() => scrollBy("right")}
              className="p-1 rounded hover:bg-black/5 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={12} style={{ color: "var(--text-secondary)" }} />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {highlights.map((h, i) => (
            <button
              key={h.day}
              onClick={() => openLightbox(i)}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div
                className="relative w-[140px] h-[180px] rounded-lg overflow-hidden transition-all duration-200 group-hover:scale-[1.03] group-hover:shadow-lg"
                style={{ border: "1px solid var(--border-color)" }}
              >
                <Image
                  src={h.image}
                  alt={`Day ${h.day}: ${h.title}`}
                  fill
                  className="object-cover object-top"
                  sizes="140px"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-2 py-1.5"
                  style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}
                >
                  <span className="text-white text-[10px] font-mono font-medium">
                    Day {h.day}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
            aria-label="Close"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 md:left-6 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>

          {/* Image + caption */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-[90vw] md:w-[500px] max-h-[70vh] overflow-hidden rounded-lg">
              <Image
                src={highlights[lightboxIndex].image}
                alt={`Day ${highlights[lightboxIndex].day}: ${highlights[lightboxIndex].title}`}
                width={500}
                height={650}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
            <div className="mt-3 text-center">
              <p className="text-white/90 text-sm font-medium">
                Day {highlights[lightboxIndex].day}: &ldquo;{highlights[lightboxIndex].title}&rdquo;
              </p>
              <p className="text-white/60 text-xs mt-1 italic">
                Reframe: {highlights[lightboxIndex].reframe}
              </p>
            </div>
            {/* Dots */}
            <div className="flex gap-1.5 mt-3">
              {highlights.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="w-1.5 h-1.5 rounded-full transition-all"
                  style={{
                    backgroundColor: i === lightboxIndex ? "white" : "rgba(255,255,255,0.3)",
                  }}
                  aria-label={`Go to screenshot ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 md:right-6 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight size={28} className="text-white" />
          </button>
        </div>
      )}
    </>
  );
}

interface AboutCardProps {
  card: AboutCardType;
  expanded?: boolean;
  onToggle?: () => void;
}

export default function AboutCard({
  card,
  expanded: controlledExpanded,
  onToggle,
}: AboutCardProps) {
  const [internalExpanded, setInternalExpanded] = useState(false);

  const expanded =
    controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
  const toggleExpanded =
    onToggle || (() => setInternalExpanded(!internalExpanded));

  const Icon = card.icon;

  if (card.linkTo) {
    return (
      <Link
        href={card.linkTo}
        className="block h-full p-5 transition-all duration-200 hover:translate-y-[-2px]"
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

  const hasHighlights = card.highlights && card.highlights.length > 0;

  return (
    <div
      className="h-full p-5 transition-all duration-200"
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
        onClick={toggleExpanded}
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

      {/* Expandable content using grid for smooth height animation */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{
          gridTemplateRows: expanded ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <p
            className="text-sm leading-relaxed mt-4 pl-12"
            style={{ color: "var(--text-secondary)" }}
          >
            {card.content}
          </p>
          {hasHighlights && <ScreenshotCarousel highlights={card.highlights!} />}
        </div>
      </div>
    </div>
  );
}
