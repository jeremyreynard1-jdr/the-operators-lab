"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  // Close menu on click outside
  useEffect(() => {
    if (!menuOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleLinkClick = useCallback(() => {
    setMenuOpen(false);
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

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm transition-colors duration-150"
              aria-current={activeSection === id ? "page" : undefined}
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

        {/* Mobile hamburger button */}
        <button
          ref={buttonRef}
          className="flex md:hidden flex-col justify-center items-center w-8 h-8 gap-[5px] relative z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-5 h-[2px] rounded-full transition-all duration-300 ease-in-out origin-center"
            style={{
              backgroundColor: "var(--text-primary)",
              transform: menuOpen
                ? "translateY(3.5px) rotate(45deg)"
                : "none",
            }}
          />
          <span
            className="block w-5 h-[2px] rounded-full transition-all duration-300 ease-in-out"
            style={{
              backgroundColor: "var(--text-primary)",
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
            }}
          />
          <span
            className="block w-5 h-[2px] rounded-full transition-all duration-300 ease-in-out origin-center"
            style={{
              backgroundColor: "var(--text-primary)",
              transform: menuOpen
                ? "translateY(-3.5px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: menuOpen ? `${sections.length * 52 + 16}px` : "0px",
          opacity: menuOpen ? 1 : 0,
          backgroundColor: "var(--surface)",
          borderBottom: menuOpen
            ? "1px solid var(--border-color)"
            : "1px solid transparent",
        }}
      >
        <div className="flex flex-col py-2 px-6" style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={handleLinkClick}
              className="text-sm py-3 transition-colors duration-150"
              aria-current={activeSection === id ? "page" : undefined}
              style={{
                color:
                  activeSection === id
                    ? "var(--accent)"
                    : "var(--text-secondary)",
                fontWeight: activeSection === id ? 600 : 400,
                borderBottom: "1px solid var(--border-color)",
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
