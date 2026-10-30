"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useTheme } from "@/components/theme-provider";
import {
  FolderGit2,
  Briefcase,
  Wrench,
  Mail,
  FileText,
  Sun,
  Moon,
} from "lucide-react";

const navItems = [
  { id: "projects", label: "Projects", icon: FolderGit2, href: "#projects" },
  { id: "experience", label: "Experience", icon: Briefcase, href: "#experience" },
  { id: "skills", label: "Stacks", icon: Wrench, href: "#skills" },
  { id: "email", label: "Email", icon: Mail, href: "mailto:josegerryacevedojr@gmail.com" },
  { id: "resume", label: "Download resume", icon: FileText, href: "/resume.pdf" },
] as const;

export default function Navbar() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [canHover, setCanHover] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [heroInView, setHeroInView] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [themeTooltipVisible, setThemeTooltipVisible] = useState(false);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
    const mq = window.matchMedia("(min-width: 1024px)");
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
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    const hero = document.getElementById("hero");
    let heroObserver: IntersectionObserver | null = null;
    if (hero) {
      heroObserver = new IntersectionObserver(([entry]) => {
        setHeroInView(entry.isIntersecting);
      }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });
      heroObserver.observe(hero);
    }
    return () => {
      observer.disconnect();
      heroObserver?.disconnect();
    };
  }, []);

  const showTooltip = (id: string) => hoveredId === id || focusedId === id;

  const scrollToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <motion.nav
      aria-label="Primary"
      initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
      className="fixed z-50 flex gap-2 p-2 rounded-full border border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 md:flex-col md:left-4 md:top-1/2 md:-translate-y-1/2 md:bottom-auto bottom-20 left-1/2 -translate-x-1/2"
    >
      <button
        type="button"
        aria-label="Top"
        onClick={scrollToTop}
        className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs font-medium transition-transform duration-150 motion-reduce:transition-none hover:scale-[1.08] active:scale-[0.95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
            heroInView ? "bg-border-soft text-foreground" : "text-muted hover:text-foreground"
          }`}
      >
        JA
      </button>
      <span className="mx-auto h-px w-6 bg-border md:mx-0 md:h-6 md:w-px" aria-hidden="true" />
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
                  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                  el?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
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
                  className={`pointer-events-none absolute z-50 whitespace-nowrap rounded-md border border-border bg-background px-2 py-1 text-[12px] font-mono text-foreground shadow-sm ${
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
      <div className="relative">
        <button
          type="button"
          aria-label="Toggle theme"
          onMouseEnter={() => setThemeTooltipVisible(true)}
          onMouseLeave={() => setThemeTooltipVisible(false)}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-150 motion-reduce:transition-none hover:scale-[1.08] active:scale-[0.95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <span
            key={isDark ? "moon" : "sun"}
            className={prefersReducedMotion ? "" : "theme-icon-swap"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </span>
        </button>
        <AnimatePresence>
          {themeTooltipVisible && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className={`pointer-events-none absolute z-50 whitespace-nowrap rounded-md border border-border bg-background px-2 py-1 text-[12px] font-mono text-foreground shadow-sm ${isDesktop ? "left-full top-1/2 -translate-y-1/2 ml-2" : "bottom-full left-1/2 -translate-x-1/2 mb-2"}`}
            >
              {isDark ? "Light mode" : "Dark mode"}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

