// components/Hero.tsx
"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="mb-16 mx-auto w-fit">
      <p className="text-md text-cyan-400">Hi, my name is</p>
      <h1 className="mt-2 text-5xl font-bold sm:text-5xl">
        Madan Kumar Patil
      </h1>
      <h2 className="mt-3 text-3xl font-semibold text-slate-300">
        Full-Stack Developer
      </h2>
      <p className="mt-4 max-w-xl text-md text-slate-400">
        Building modern web applications with React, Angular.js, ASP.NET Core,
        and SQL. Focused on clean architecture, performance, and great UX.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-400"
        >
          View Projects
        </a>
        <Link
          href="/projects"
          className="rounded-md border border-slate-700 px-4 py-2 text-sm font-medium hover:border-cyan-400 hover:text-cyan-400"
        >
          All Case Studies
        </Link>
        <a
          href="https://github.com/madanp126"
          target="_blank"
          className="text-sm text-slate-400 hover:text-cyan-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/madan-patil-650092227"
          
          target="_blank"
          className="text-sm text-slate-400 hover:text-cyan-400"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
