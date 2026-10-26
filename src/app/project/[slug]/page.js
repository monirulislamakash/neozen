import { notFound } from "next/navigation";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { getNextProject, getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project — Neozen" };
  return {
    title: `${project.title} — Neozen`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <ProjectDetail project={project} nextProject={getNextProject(slug)} />
  );
}
