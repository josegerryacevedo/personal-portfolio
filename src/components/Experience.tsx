"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal, RevealItem } from "@/components/reveal";
import ExperienceHeader from "@/components/ExperienceHeader";

export default function Experience() {
  const work = [
    {
      role: "Software Developer",
      company: "APSYS Solutions & Technologies Inc.",
      location: "Pasay City, Philippines",
      date: "Jan 2023 – Present",
      bullets: [
        "Develop and maintain web applications based on business requirements and user needs.",
        "Implement and enhance application functionality across frontend, backend, and database layers.",
        "Troubleshoot application issues and improve system reliability, functionality, and performance.",
        "Collaborate with team members to deliver updates, address technical issues, and maintain existing systems.",
      ],
    },
  ];

  const training = [
    {
      title: "KODA Gem Camp | Ruby on Rails Bootcamp",
      location: "Makati City, Philippines",
      date: "Jun 2022 – Sep 2022",
      bullets: [
        "Completed training in Ruby, Ruby on Rails, Active Record, MySQL, Bootstrap, Pundit, RSpec, and Git.",
        "Built 3 Ruby on Rails web applications.",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Bestlink College of the Philippines",
      date: "Jun 2017 – Apr 2021",
    },
  ];

  return (
    <section
      id="experience"
     
      className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 scroll-mt-20"
    >
      <Reveal className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12">
        <div className="md:sticky md:top-[calc(var(--nav-height,3.5rem)+1rem)] md:self-start">
          <RevealItem as="h2" className="text-xl sm:text-2xl font-medium tracking-tight text-foreground">
            Experience
          </RevealItem>
        </div>
        <div className="space-y-10">
          <RevealItem>
            <div className="mb-16">
              <h3 className="text-base font-medium text-foreground mb-6">Work Experience</h3>
            {work.map((w) => (
              <div key={w.company} className="mb-10">
<ExperienceHeader
                  title={w.role}
                  company={w.company}
                  location={w.location}
                  startDate="Jan 2023"
                  endDate="Present"
                />
                <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
                  {w.bullets.map((b) => (
                    <li
                      key={b}
                      className="grid grid-cols-[12px_1fr] gap-x-2 items-start min-w-0 before:mt-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-muted before:justify-self-center before:content-['']"
                    >
                      <span className="min-w-0 [overflow-wrap:anywhere]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </RevealItem>

          <RevealItem>
            <div className="mb-16">
              <h3 className="text-base font-medium text-foreground mb-6">Training</h3>
            {training.map((t) => (
              <div key={t.title} className="mb-10">
<ExperienceHeader
                  title={t.title}
                  company={t.location}
                  location=""
                  startDate="Jun 2022"
                  endDate="Sep 2022"
                />
                <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
                  {t.bullets.map((b) => (
                    <li
                      key={b}
                      className="grid grid-cols-[12px_1fr] gap-x-2 items-start min-w-0 before:mt-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-muted before:justify-self-center before:content-['']"
                    >
                      <span className="min-w-0 [overflow-wrap:anywhere]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </RevealItem>

          <RevealItem>
            <div>
              <h3 className="text-base font-medium text-foreground mb-6">Education</h3>
            {education.map((e) => (
              <div key={e.school} className="mb-10">
                <ExperienceHeader
                  title={e.degree}
                  company={e.school}
                  location=""
                  startDate=""
                  endDate={e.date}
                />
              </div>
            ))}
          </div>
          </RevealItem>
        </div>
      </Reveal>
      <RevealItem>
        <hr className="section-divider mt-16" />
      </RevealItem>
    </section>
  );
}