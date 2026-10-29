"use client";

import { useState } from "react";

const projects = [
  {
    title: "Eztrackph",
    status: "GPS fleet management platform",
    href: "/projects/eztrackph",
    description:
      "Contributed to the development and maintenance of a fleet management platform. Developed application features and integrated APIs to support fleet operations and data reporting. Worked on dashboards, reporting functionality, and data management improvements.",
    tech: ["PHP", "Laravel", "React", "TypeScript", "Inertia.js", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Internal Payroll System",
    status: "HR and Payroll Management",
    href: "/projects/payroll",
    description:
      "Developed an internal payroll system to reduce manual work and simplify HR and payroll processes. Integrated employee records, attendance, and leave information into payroll workflows. Implemented payroll calculations, approval workflows, and role-based access controls.",
    tech: ["PHP", "Laravel", "React", "TypeScript", "Inertia.js", "PostgreSQL", "Tailwind CSS"],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (title: string) =>
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <section
      id="projects"
      className="mx-auto max-w-3xl px-4 pt-8 pb-16 sm:px-6 sm:pt-10 sm:pb-20 md:px-8 scroll-mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12">
        <div className="md:sticky md:top-[var(--nav-height,3.5rem)] md:self-start">
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground">
            Projects
          </h2>
        </div>
        <div className="space-y-10">
          {projects.map((p) => (
            <article key={p.title} className="group">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className={`text-lg font-medium transition-colors ${p.title === "Eztrackph" ? "text-orange-700 dark:text-orange-400" : p.title === "Internal Payroll System" ? "text-blue-700 dark:text-blue-400" : "text-foreground group-hover:text-accent"}`}>
                  {p.title}
                </h3>
                <a
                  href={p.href}
                  className="text-xs font-mono text-accent hover:underline"
                >
                  View →
                </a>
              </div>
              <div className="relative mb-4">
                  <p
                    className={`text-sm text-muted leading-relaxed ${
                      expanded[p.title] ? "" : "line-clamp-2"
                    }`}
                  >
                    {p.description}
                  </p>
                  {!expanded[p.title] && (
                    <button
                      type="button"
                      onClick={() => toggle(p.title)}
                      className="absolute bottom-1 right-0 text-xs font-mono text-accent hover:underline bg-background pl-2 transition-colors"
                    >
                      See more
                    </button>
                  )}
                </div>
                {expanded[p.title] && (
                  <button
                    type="button"
                    onClick={() => toggle(p.title)}
                    className="text-xs font-mono text-accent hover:underline mb-4 transition-colors"
                  >
                    See less
                  </button>
                )}
              <p className="text-[12px] font-mono uppercase tracking-wider text-muted mb-2">
                {p.status}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-border bg-border-soft px-2 py-0.5 text-[11px] font-medium text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      <hr className="section-divider mt-16" />
    </section>
  );
}
