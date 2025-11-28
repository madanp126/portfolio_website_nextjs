// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Madan Patil | Portfolio",
  description: "Full-stack developer portfolio built with Next.js 14.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-950">
        <header className="sticky top-0 z-20 border-b border-slate-0 bg-slate-950/20 backdrop-blur">
          <nav className="mx-auto flex max-w-full items-center justify-between px-4 py-3">
            <Link href="/" className="text-lg font-semibold">
              Madan Patil
            </Link>
            <div className="flex gap-4 text-sm">
              <a href="#about" className="hover:text-cyan-400">
                About
              </a>
              <a href="#skills" className="hover:text-cyan-400">
                Skills
              </a>
              <a href="#projects" className="hover:text-cyan-400">
                Projects
              </a>
              {/* <a href="#contact" className="hover:text-cyan-400">
                Contact
              </a> */}
              <Link href="/contact" className="hover:text-cyan-400">
              Contact</Link>
              <Link href="/projects" className="hover:text-cyan-400">
                All Projects
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-full px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
