"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import PillToggle from "@/components/PillToggle";

const statusOptions = [
  { label: "All", value: "all" },
  { label: "Live", value: "live" },
  { label: "In Dev", value: "in-dev" },
  { label: "Ideation", value: "ideation" },
];

const categoryOptions = [
  { label: "All", value: "all" },
  { label: "Productivity", value: "productivity" },
  { label: "Network", value: "network" },
  { label: "Learning", value: "learning" },
];

export default function ProjectFilter() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filtered = projects.filter((p) => {
    const matchesStatus = statusFilter === "all" || p.status === statusFilter;
    const matchesCategory =
      categoryFilter === "all" || p.category === categoryFilter;
    return matchesStatus && matchesCategory;
  });

  const professional = filtered.filter((p) => p.group === "professional");
  const personal = filtered.filter((p) => p.group === "personal");

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <PillToggle
          options={statusOptions}
          selected={statusFilter}
          onChange={setStatusFilter}
        />
        <div
          className="w-px h-5 hidden sm:block"
          style={{ backgroundColor: "var(--border-color)" }}
        />
        <PillToggle
          options={categoryOptions}
          selected={categoryFilter}
          onChange={setCategoryFilter}
        />
      </div>

      {/* Professional Projects */}
      {professional.length > 0 && (
        <div className="mb-10">
          <h3
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Professional Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {professional.map((project) => (
              <div
                key={project.slug}
                className="transition-all duration-300 h-full"
                style={{ opacity: 1 }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Personal Projects */}
      {personal.length > 0 && (
        <div>
          <h3
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Personal Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {personal.map((project) => (
              <div
                key={project.slug}
                className="transition-all duration-300 h-full"
                style={{ opacity: 1 }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      )}

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
