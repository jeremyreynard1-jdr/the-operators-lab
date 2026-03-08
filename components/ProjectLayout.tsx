import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { type Project } from "@/lib/projects";
import ProjectEmbed from "@/components/ProjectEmbed";
import ProjectDemo from "@/components/ProjectDemo";
import ProjectConcept from "@/components/ProjectConcept";

const statusConfig = {
  live: { label: "Live", color: "var(--status-live)" },
  "in-dev": { label: "In Development", color: "var(--status-dev)" },
  ideation: { label: "Ideation", color: "var(--status-ideation)" },
};

export default function ProjectLayout({ project }: { project: Project }) {
  const Icon = project.icon;
  const status = statusConfig[project.status];

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
          <Icon size={20} style={{ color: "var(--accent)" }} />
        </div>
        <h1
          className="text-3xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h1>
      </div>

      <p
        className="text-base mb-4"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span
          className="text-xs font-medium"
          style={{ color: status.color }}
        >
          {status.label}
        </span>
      </div>

      {/* Display mode: iframe embed */}
      {project.displayMode === "iframe" && project.liveUrl && (
        <div className="mb-8">
          <ProjectEmbed url={project.liveUrl} title={project.title} />
        </div>
      )}

      {/* Display mode: demo video */}
      {project.displayMode === "demo-video" && (
        <div className="mb-8">
          <ProjectDemo
            assetPath={project.demoAsset || ""}
            title={project.title}
          />
        </div>
      )}

      {/* Display mode: concept */}
      {project.displayMode === "concept" && (
        <div className="mb-8">
          <ProjectConcept
            title={project.title}
            description={project.longDescription}
          />
        </div>
      )}

      {/* Display mode: external link - prominent CTA */}
      {project.displayMode === "external-link" && project.liveUrl && (
        <div className="mb-8">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--accent)",
              color: "#FFFFFF",
              borderRadius: "var(--input-radius)",
            }}
          >
            <ExternalLink size={14} />
            View {project.title} Live
          </a>
        </div>
      )}

      {/* Long description */}
      <div
        className="p-6 mb-8"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border-color)",
          borderRadius: "var(--card-radius)",
          boxShadow: "var(--card-shadow)",
        }}
      >
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.longDescription}
        </p>
      </div>

      {/* Tech stack */}
      {project.techStack.length > 0 && (
        <div className="mb-8">
          <h2
            className="text-xs font-medium uppercase tracking-widest mb-3"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: "var(--accent-light)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
