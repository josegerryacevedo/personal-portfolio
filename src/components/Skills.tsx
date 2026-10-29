import { Reveal, RevealItem } from "@/components/reveal";

const groups = [
  {
    label: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "SCSS",
      "Styled Components",
      "Vite",
      "Webpack",
      "ESLint",
      "Prettier",
      "Bootstrap",
      "Semantic UI",
      "Material UI",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "PHP",
      "Laravel",
      "PostgreSQL",
      "MySQL",
      "REST",
      "OAuth",
      "Supabase",
      "Cloudflare",
    ],
  },
  {
    label: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "Slack",
      "Discord",
      "Teams",
      "VS Code",
      "JetBrains IntelliJ",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 scroll-mt-20">
      <Reveal className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12">
        <div className="md:sticky md:top-[var(--nav-height,3.5rem)] md:self-start">
          <RevealItem as="h2" className="text-xl sm:text-2xl font-medium tracking-tight text-foreground">
            Stacks
          </RevealItem>
        </div>
        <div>
          <Reveal className="flex flex-wrap gap-20" stagger={0.05}>
            {groups.map((g) => (
              <RevealItem key={g.label}>
                <div className="min-w-[200px]">
                  <h4 className="text-base font-medium text-foreground mb-3">
                    {g.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="inline-block rounded-sm border border-border bg-border-soft px-2 py-0.5 text-[13px] font-medium text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}