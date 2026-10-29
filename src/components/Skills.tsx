import { Reveal, RevealItem } from "@/components/reveal";

export default function Skills() {
  const groups = [
    {
      label: "Frameworks & Libraries",
      items: ["React", "Laravel", "Next.js"],
    },
    {
      label: "Languages",
      items: ["PHP", "TypeScript", "JavaScript", "Inertia.js", "HTML5", "CSS3/SCSS"],
    },
    {
      label: "UI & Styling",
      items: ["Tailwind CSS", "Bootstrap", "Semantic UI", "Material UI"],
    },
    {
      label: "Databases",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      label: "Tools & Platforms",
      items: ["Git", "Postman", "Figma", "Cloudflare"],
    },
    {
      label: "Practices",
      items: ["RESTful APIs", "Responsive Design", "Agile/Scrum"],
    },
  ];

  return (
    <section id="skills" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 scroll-mt-20">
      <Reveal>
        <RevealItem as="h2" className="text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-8 sm:mb-12">
          Technical Skills
        </RevealItem>
        <Reveal className="grid gap-6 sm:grid-cols-2 md:grid-cols-3" stagger={0.05}>
          {groups.map((g) => (
            <RevealItem key={g.label}>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-muted mb-4">
                  {g.label}
                </h4>
                <ul className="space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="text-sm text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Reveal>
    </section>
  );
}
