import { Reveal, RevealItem } from "@/components/reveal";
import SectionContainer from "@/components/section-container";
import { BladeFlash } from "@/components/blade-flash";

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
    <section className="min-h-0 lg:min-h-screen lg:min-h-dvh py-12 md:py-16 lg:py-24">
      <SectionContainer id="skills" className="pb-8 md:pb-12 scroll-mt-12 md:scroll-mt-16">
      <Reveal className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-8">
        <div className="md:sticky md:top-[calc(var(--nav-height,3.5rem)+1rem)] md:self-start">
          <RevealItem as="h2" className="text-xl sm:text-2xl font-medium tracking-tight text-foreground">
            <BladeFlash as="span" trigger="view">Stacks</BladeFlash>
          </RevealItem>
        </div>
        <div>
          <Reveal className="flex flex-wrap gap-20" stagger={0.05}>
            {groups.map((g) => (
              <RevealItem key={g.label}>
                <div>
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
      </SectionContainer>
    </section>
  );
}