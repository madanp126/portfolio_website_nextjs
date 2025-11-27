// components/ProjectCard.tsx
import Link from "next/link";
import type { Project } from "@/app/data/projects";

type Props = {
  project: Project;
  showReadMore?: boolean;
};

export default function ProjectCard({ project, showReadMore }: Props) {
  return (
    <article className="flex flex-col justify-between rounded-lg border border-slate-800 bg-slate-900/40 p-4">
      <div>
        <h3 className="text-sm font-semibold text-slate-100">
          {project.title}
        </h3>
        <p className="mt-2 text-xs text-slate-400">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-800 px-2 py-1 text-[11px] text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-xs">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            Live
          </a>
        )}
        {showReadMore && (
          <Link
            href={`/projects/${project.slug}`}
            className="text-slate-300 hover:text-cyan-400"
          >
            Case study →
          </Link>
        )}
      </div>
    </article>
  );
}
