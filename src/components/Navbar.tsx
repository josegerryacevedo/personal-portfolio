"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Link from "next/link";
import {
  FolderGit2,
  Briefcase,
  Wrench,
  MessageCircle,
  Mail,
} from "lucide-react";

const navItems = [
  { id: "projects", label: "Projects", icon: FolderGit2, href: "#projects" },
  { id: "experience", label: "Experience", icon: Briefcase, href: "#experience" },
  { id: "skills", label: "Skills", icon: Wrench, href: "#skills" },
  { id: "contact", label: "Contact", icon: MessageCircle, href: "#contact" },
  { id: "email", label: "Email", icon: Mail, href: "mailto:josegerryacevedojr@gmail.com" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [canHover, setCanHover] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const showTooltip = (id: string) => hoveredId === id || focusedId === id;

  return (
    <>
      {!scrolled && (
        <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
            <div className="flex items-center justify-between gap-2 py-4">
              <Link href="#" className="text-sm font-medium tracking-tight text-foreground shrink-0">
                Jose Gerry Acevedo
              </Link>
              <div className="hidden md:flex items-center flex-wrap gap-4 text-[14px] font-medium text-muted">
                {navItems.map((item) => (
                  <Link key={item.id} href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}
      {scrolled && (
        <nav
          aria-label="Section navigation"
          className="fixed z-50 flex gap-2 p-2 rounded-full border border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 md:flex-col md:left-4 md:top-1/2 md:-translate-y-1/2 md:bottom-auto bottom-4 left-1/2 -translate-x-1/2"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeId === item.id;
            const tooltipVisible = showTooltip(item.id);
            return (
              <div key={item.id} className="relative">
                <button
                  type="button"
                  aria-label={item.label}
                  onMouseEnter={() => canHover && setHoveredId(item.id)}
                  onMouseLeave={() => canHover && setHoveredId(null)}
                  onFocus={() => setFocusedId(item.id)}
                  onBlur={() => setFocusedId(null)}
                  onClick={() => {
                    if (item.href.startsWith("#")) {
                      const el = document.querySelector(item.href);
                      el?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.location.href = item.href;
                    }
                  }}
                  className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-150 motion-reduce:transition-none active:scale-[0.95] hover:scale-[1.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
                    active ? "bg-border-soft text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  <Icon size={20} />
                </button>
                <AnimatePresence>
                  {tooltipVisible && (
                    <motion.div
                      initial={
                        prefersReducedMotion
                          ? { opacity: 1 }
                          : isDesktop
                          ? { opacity: 0, x: -6 }
                          : { opacity: 0, y: 6 }
                      }
                      animate={
                        prefersReducedMotion
                          ? { opacity: 1 }
                          : isDesktop
                          ? { opacity: 1, x: 0 }
                          : { opacity: 1, y: 0 }
                      }
                      exit={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : isDesktop
                          ? { opacity: 0, x: -6 }
                          : { opacity: 0, y: 6 }
                      }
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className={`pointer-events-none absolute z-50 whitespace-nowrap rounded-md border border-border bg-white px-2 py-1 text-[12px] font-mono text-foreground shadow-sm ${
                        isDesktop
                          ? "left-full top-1/2 -translate-y-1/2 ml-2"
                          : "bottom-full left-1/2 -translate-x-1/2 mb-2"
                      }`}
                    >
                      {item.label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>
      )}
    </>
  );
}