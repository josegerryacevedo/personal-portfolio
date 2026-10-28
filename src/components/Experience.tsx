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
      date: "2017 – 2021",
    },
  ];

  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-20 md:px-8 scroll-mt-20">
      <h2 className="text-2xl font-medium tracking-tight text-foreground mb-12">
        Experience
      </h2>

      <div className="mb-16">
        <h3 className="text-base font-medium text-foreground mb-6">Work Experience</h3>
        {work.map((w) => (
          <div key={w.company} className="mb-10">
            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <span className="text-sm font-medium text-foreground">{w.role}</span>
              <span className="text-xs text-muted">|</span>
              <span className="text-sm text-muted">{w.company}</span>
              <span className="text-xs text-muted ml-auto">{w.date}</span>
            </div>
            <p className="text-xs text-muted mb-3">{w.location}</p>
            <ul className="list-disc list-inside text-sm text-foreground leading-relaxed space-y-2">
              {w.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <h3 className="text-base font-medium text-foreground mb-6">Training</h3>
        {training.map((t) => (
          <div key={t.title} className="mb-10">
            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <span className="text-sm font-medium text-foreground">{t.title}</span>
              <span className="text-xs text-muted">|</span>
              <span className="text-sm text-muted">{t.location}</span>
              <span className="text-xs text-muted ml-auto">{t.date}</span>
            </div>
            <ul className="list-disc list-inside text-sm text-foreground leading-relaxed space-y-2">
              {t.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-base font-medium text-foreground mb-6">Education</h3>
        {education.map((e) => (
          <div key={e.school} className="mb-10">
            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <span className="text-sm font-medium text-foreground">{e.degree}</span>
              <span className="text-xs text-muted">|</span>
              <span className="text-sm text-muted">{e.school}</span>
              <span className="text-xs text-muted ml-auto">{e.date}</span>
            </div>
          </div>
        ))}
      </div>
      <hr className="section-divider mt-16" />
    </section>
  );
}
