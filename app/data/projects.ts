// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "lims-platform",
    title: "Laboratory Information Management System",
    description:
      "Full-stack LIMS for managing samples, reports, and analyst workflows.",
    tech: ["React", "Next.js", "ASP.NET Core", "SQL"],
    githubUrl: "https://github.com/yourname/lims",
  },
  {
    slug: "food-analyst-module",
    title: "Food Analyst Notification Module",
    description:
      "Module for allocating food samples and notifying analysts in real time.",
    tech: ["React", "ASP.NET Core", "SQL Server"],
  },
  {
    slug: "dev-portfolio",
    title: "Developer Portfolio",
    description: "This portfolio site built with Next.js 14 and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourname/portfolio",
  },
];
