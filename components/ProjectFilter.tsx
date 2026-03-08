"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import PillToggle from "@/components/PillToggle";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Live", value: "live" },
  { label: "In Dev", value: "in-dev" },
  { label: "Ideation", value: "ideation" },
];

export default function ProjectFilter() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  return (
    <div>
      <div className="mb-6">
        <PillToggle
          options={filterOptions}
          selected={activeFilter}
          onChange={setActiveFilter}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project) => (
          <div
            key={project.slug}
            className="transition-all duration-300 h-full"
            style={{ opacity: 1 }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div
          className="text-center py-12 text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          No projects in this category yet.
        </div>
      )}
    </div>
  );
}
