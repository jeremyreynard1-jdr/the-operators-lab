import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import ProjectLayout from "@/components/ProjectLayout";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} - The Operator's Lab`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return <ProjectLayout project={project} />;
}
