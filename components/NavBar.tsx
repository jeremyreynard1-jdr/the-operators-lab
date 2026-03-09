"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const sections = [
  { id: "projects", label: "AI Projects" },
  { id: "journey", label: "Journey" },
  { id: "side-projects", label: "Side Projects" },
  { id: "inspiration", label: "Inspiration" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        height: "var(--nav-height)",
        top: "var(--accent-bar-height)",
        backgroundColor: scrolled ? "rgba(250, 251, 252, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border-color)"
          : "1px solid transparent",
      }}
    >
      <div
        className="flex items-center justify-between h-full px-6"
        style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity"
          style={{ color: "var(--text-primary)" }}
        >
          The Operator&apos;s Lab
        </Link>

        <div className="flex items-center gap-6">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm transition-colors duration-150"
              style={{
                color:
                  activeSection === id
                    ? "var(--accent)"
                    : "var(--text-secondary)",
                fontWeight: activeSection === id ? 600 : 400,
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
