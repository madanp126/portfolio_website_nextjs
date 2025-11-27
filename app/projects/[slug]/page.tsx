    // app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";

type Props = {
  params: { slug: string };
};

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <article className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold">{project.title}</h1>
        <p className="mt-2 text-sm text-slate-400">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <section className="space-y-2 text-sm text-slate-300">
        <p>
          Here you can write a detailed case study: problem, your approach,
          architecture, tools, and what impact it had.
        </p>
        <p>
          Break down interesting technical decisions (state management,
          routing, performance, database design, testing, deployment).
        </p>
      </section>

      <section className="flex flex-wrap gap-4 text-sm">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            View GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            View Live
          </a>
        )}
      </section>
    </article>
  );
}
