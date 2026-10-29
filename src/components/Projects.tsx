"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal, RevealItem } from "@/components/reveal";
import { BladeFlash } from "@/components/blade-flash";
import { motion } from "motion/react";

const projects = [
  {
    title: "Eztrackph",
    status: "GPS fleet management platform",
    href: "https://eztrackph.com/",
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
  const paraRefs = useRef<Record<string, HTMLParagraphElement | null>>({});
  const visibleWordCounts = useRef<Record<string, number>>({});

  useEffect(() => {
    projects.forEach((p) => {
      const para = paraRefs.current[p.title];
      if (!para) return;
      const spans = Array.from(para.querySelectorAll("span"));
      const lineHeight = parseFloat(getComputedStyle(para).lineHeight) || 22.75;
      const collapsedHeight = lineHeight * 2;
      let count = 0;
      for (const span of spans) {
        const el = span as HTMLElement;
        if (el.offsetTop + el.offsetHeight <= collapsedHeight + 1) {
          count++;
        } else {
          break;
        }
      }
      visibleWordCounts.current[p.title] = count;
    });
  }, []);


  const toggle = (title: string) =>
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <section
      id="projects"
      className="mx-auto max-w-3xl px-4 pt-8 pb-16 sm:px-6 sm:pt-10 sm:pb-20 md:px-8 scroll-mt-20"
    >
      <Reveal className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12 pb-8 md:pb-12">
        <div className="md:sticky md:top-[calc(var(--nav-height,3.5rem)+1rem)] md:self-start">
          <RevealItem as="h2" className="text-xl sm:text-2xl font-medium tracking-tight text-foreground">
            <BladeFlash as="span" trigger="view">Projects</BladeFlash>
          </RevealItem>
        </div>
        <div className="space-y-10">
          {projects.map((p) => (
            <RevealItem key={p.title} as="article" className="group">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/view inline-flex items-center gap-1.5 rounded-sm border border-border bg-transparent px-3 py-1.5 text-xs font-mono text-muted transition-[transform,opacity,color,border-color,background-color] duration-150 motion-reduce:transition-none hover:border-transparent hover:bg-white/5 hover:text-foreground active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  View
                  <span
                    className="inline-block transition-transform duration-150 motion-reduce:transition-none group-hover/view:translate-x-[3px] group-hover/view:-translate-y-[3px]"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </div>
              <div className="mb-4">
                  <motion.div
                    initial={false}
                    animate={{ height: expanded[p.title] ? "auto" : "calc(2 * 1.625 * 0.875rem)" }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      ref={(el) => { paraRefs.current[p.title] = el; }}
                      className="text-sm text-muted leading-relaxed"
                    >
                      {p.description.split(" ").map((word, i) => {
                        const visibleCount = visibleWordCounts.current[p.title] ?? 0;
                        const animate = expanded[p.title] && i >= visibleCount;
                        return (
                          <span
                            key={i}
                            className={animate ? "inline-block animate-blur-fade-up mr-1" : "inline-block mr-1"}
                            style={animate ? { animationDelay: `${(i - visibleCount) * 35}ms` } : undefined}
                          >
                            {word}{" "}
                          </span>
                        );
                      })}
                    </p>
                  </motion.div>
                  {!expanded[p.title] && (
                    <button
                      type="button"
                      onClick={() => toggle(p.title)}
                      className="text-xs font-mono text-muted hover:text-foreground transition-colors duration-300 mt-1"
                    >
                      See more
                    </button>
                  )}
                </div>
                {expanded[p.title] && (
                  <button
                    type="button"
                    onClick={() => toggle(p.title)}
                    className="text-xs font-mono text-muted hover:text-foreground mb-4 transition-colors duration-300"
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
            </RevealItem>
          ))}
        </div>
</Reveal>
      <RevealItem>
        <hr className="section-divider" />
      </RevealItem>
    </section>
  );
}
