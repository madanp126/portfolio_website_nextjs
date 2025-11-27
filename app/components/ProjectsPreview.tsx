// components/ProjectsPreview.tsx
import { projects } from "@/app/data/projects";
import ProjectCard from "./projectCard";
import Link from "next/link";

export default function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="mb-16 scroll-mt-20">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Selected Projects</h2>
        <Link
          href="/projects"
          className="text-xs text-slate-400 hover:text-cyan-400"
        >
          View all
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {featured.map((p) => (
          <ProjectCard key={p.slug} project={p} showReadMore />
        ))}
      </div>
    </section>
  );
}
