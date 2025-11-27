// components/Skills.tsx
import { skills } from "@/app/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mb-16 scroll-mt-20">
      <h2 className="text-xl font-semibold">Skills</h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-lg border border-slate-800 bg-slate-900/40 p-4"
          >
            <h3 className="text-sm font-medium capitalize text-slate-200">
              {category}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
