import Link from "next/link";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-background">
      <div className="mx-auto max-w-3xl px-6 py-4 md:px-8">
        <div className="flex items-center justify-between flex-wrap gap-y-2">
          <Link
            href="#"
            className="text-sm font-medium tracking-tight text-foreground shrink-0"
          >
            Jose Gerry Acevedo
          </Link>
          <div className="hidden md:flex items-center flex-wrap gap-4 text-[14px] font-medium text-muted">
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
