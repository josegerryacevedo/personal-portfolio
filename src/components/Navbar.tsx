"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const h = (document.querySelector("nav") as HTMLElement | null)?.offsetHeight;
      if (h) document.documentElement.style.setProperty("--nav-height", `${h}px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between gap-2 py-4">
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
          <button
            type="button"
            className="md:hidden p-2 text-muted hover:text-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
        {open && (
          <div className="md:hidden flex flex-col gap-2 pb-4 text-[14px] font-medium text-muted">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
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
        )}
      </div>
    </nav>
  );
}
