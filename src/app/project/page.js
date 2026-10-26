"use client";

import ProjectShowcase from "@/components/projects/ProjectShowcase";
import SiteFooter from "@/components/SiteFooter";

export default function ProjectPage() {
  return (
    <main className="project-page-root">
      <ProjectShowcase />
      <SiteFooter />
    </main>
  );
}
