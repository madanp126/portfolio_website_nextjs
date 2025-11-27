// app/projects/page.tsx
import { projects } from "@/app/data/projects";
import ProjectCard from "@/app/components/projectCard";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">All Projects</h1>
        <p className="mt-2 text-sm text-slate-400">
          Case studies and experiments showing real-world work in React,
          Next.js, ASP.NET Core, and SQL.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} showReadMore />
        ))}
      </div>
    </div>
  );
}
