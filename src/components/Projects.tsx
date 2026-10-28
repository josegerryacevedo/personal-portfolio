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
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-20 md:px-8 scroll-mt-20">
      <h2 className="text-2xl font-medium tracking-tight text-foreground mb-12">
        Projects
      </h2>
      <div className="space-y-10">
        {projects.map((p) => (
          <article key={p.title} className="group">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <a
                href={p.href}
                className="text-xs font-mono text-accent hover:underline"
              >
                View →
              </a>
            </div>
            <p className="text-sm text-muted mb-4 leading-relaxed">{p.description}</p>
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
      <hr className="section-divider mt-16" />
    </section>
  );
}
