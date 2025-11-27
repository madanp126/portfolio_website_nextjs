// app/page.tsx
import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Skills from "@/app/components/skills";
import ProjectsPreview from "@/app/components/ProjectsPreview";
import Contact from "@/app/components/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsPreview />
      <Contact />
    </>
  );
}
