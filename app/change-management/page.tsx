import Link from "next/link";
import { ArrowLeft, BookOpen, Lightbulb, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Management - The Operator's Lab",
  description: "Frameworks, principles, and case studies on leading organizational change.",
};

const frameworks = [
  {
    title: "Kotter's 8-Step Model",
    description:
      "Create urgency, form coalitions, develop a vision, communicate it, empower action, generate wins, consolidate gains, and anchor change in culture.",
  },
  {
    title: "ADKAR Model",
    description:
      "Awareness of the need for change, Desire to participate, Knowledge of how to change, Ability to implement, and Reinforcement to sustain it.",
  },
  {
    title: "Lewin's Change Model",
    description:
      "Three stages - Unfreeze existing behaviors, Change by introducing new processes, and Refreeze to stabilize the new state as the norm.",
  },
  {
    title: "McKinsey 7-S Framework",
    description:
      "Aligning seven interdependent elements - Strategy, Structure, Systems, Shared Values, Skills, Style, and Staff - to drive effective change.",
  },
  {
    title: "Bridges' Transition Model",
    description:
      "Focuses on the human side: Ending (letting go), Neutral Zone (uncertainty), and New Beginning (embracing change).",
  },
  {
    title: "Nudge Theory",
    description:
      "Subtly guiding behavior through choice architecture rather than mandates - making the desired change the path of least resistance.",
  },
];

const caseStudies = [
  {
    title: "Enterprise Communications Transformation",
    description: "Leading a global comms team through a complete technology and workflow overhaul.",
  },
  {
    title: "Crisis-Driven Organizational Pivot",
    description: "Rapid change management during an unexpected business disruption.",
  },
  {
    title: "Culture Change in a Legacy Organization",
    description: "Multi-year initiative to shift mindset and processes in a traditional enterprise.",
  },
];

export default function ChangeManagementPage() {
  return (
    <div
      className="px-6 py-10"
      style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm mb-8 hover:opacity-70 transition-opacity"
        style={{ color: "var(--text-secondary)" }}
      >
        <ArrowLeft size={14} />
        Back to The Operator&apos;s Lab
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <div
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg"
          style={{ backgroundColor: "var(--accent-light)" }}
        >
          <BookOpen size={20} style={{ color: "var(--accent)" }} />
        </div>
        <h1
          className="text-3xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Change Management
        </h1>
      </div>

      <p
        className="text-base mb-10"
        style={{ color: "var(--text-secondary)" }}
      >
        Frameworks and principles for leading organizational change, plus case study placeholders for real-world applications.
      </p>

      {/* Frameworks */}
      <section className="mb-12">
        <h2
          className="text-xs font-medium uppercase tracking-widest mb-5 flex items-center gap-2"
          style={{ color: "var(--accent)", fontFamily: "var(--font-geist-mono)" }}
        >
          <Lightbulb size={14} />
          Frameworks & Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {frameworks.map((fw) => (
            <div
              key={fw.title}
              className="p-5"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--card-radius)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <h3
                className="text-sm font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {fw.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {fw.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-12">
        <h2
          className="text-xs font-medium uppercase tracking-widest mb-5 flex items-center gap-2"
          style={{ color: "var(--accent)", fontFamily: "var(--font-geist-mono)" }}
        >
          <FileText size={14} />
          Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="p-5 relative"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--card-radius)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <span
                className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full mb-3 inline-block"
                style={{
                  backgroundColor: "var(--accent-light)",
                  color: "var(--accent)",
                }}
              >
                Coming Soon
              </span>
              <h3
                className="text-sm font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {cs.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {cs.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
