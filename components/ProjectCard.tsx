import Link from "next/link";
import { type Project } from "@/lib/projects";
import { ExternalLink } from "lucide-react";

const categoryConfig = {
  productivity: { label: "Productivity" },
  learning: { label: "Learning" },
  network: { label: "Network" },
};

const statusConfig = {
  live: {
    label: "Live",
    bg: "var(--status-live-bg)",
    color: "var(--status-live)",
    dot: "var(--status-live-dot)",
  },
  "in-dev": {
    label: "In Dev",
    bg: "var(--status-dev-bg)",
    color: "var(--status-dev)",
    dot: null,
  },
  ideation: {
    label: "Ideation",
    bg: "var(--status-ideation-bg)",
    color: "var(--status-ideation)",
    dot: null,
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const status = statusConfig[project.status];
  const category = categoryConfig[project.category];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block h-full p-5 transition-all duration-200 hover:translate-y-[-2px]"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--card-radius)",
        boxShadow: "var(--card-shadow)",
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg"
          style={{ backgroundColor: "var(--accent-light)" }}
        >
          <Icon size={20} style={{ color: "var(--accent)" }} />
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: "var(--badge-bg)",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            {category.label}
          </span>
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ backgroundColor: status.bg, color: status.color }}
          >
            {status.dot && (
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: status.dot }}
              />
            )}
            {status.label}
          </span>
        </div>
      </div>

      <h3
        className="text-base font-semibold mb-1"
        style={{ color: "var(--text-primary)" }}
      >
        {project.title}
        {project.liveUrl && (
          <ExternalLink
            size={12}
            className="inline ml-1.5 opacity-40"
            style={{ verticalAlign: "middle" }}
          />
        )}
      </h3>

      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.description}
      </p>
    </Link>
  );
}
