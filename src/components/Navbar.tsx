import Link from "next/link";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="#"
            className="text-sm font-medium tracking-tight text-foreground"
          >
            Jose Gerry R. Acevedo Jr.
          </Link>
          <div className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-wider text-muted">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:josegerryacevedojr@gmail.com"
              className="transition-colors hover:text-accent"
            >
              Email
            </a>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <button
              className="p-2 text-muted hover:text-foreground"
              aria-label="Open menu"
            >
              ≡
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
