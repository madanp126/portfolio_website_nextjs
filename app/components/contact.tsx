// components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="mb-8 scroll-mt-20">
      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="mt-3 text-sm text-slate-400">
        Interested in working together or have a question? Reach out by email
        or connect on LinkedIn.
      </p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <a
          href="mailto:youremail@example.com"
          className="rounded-md bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400"
        >
          Email Me
        </a>
        <a
          href="https://linkedin.com/in/yourname"
          target="_blank"
          className="text-slate-300 hover:text-cyan-400"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yourname"
          target="_blank"
          className="text-slate-300 hover:text-cyan-400"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
