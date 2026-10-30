"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { SectionContainer } from "@/components/section-container";
import { useTheme } from "@/components/theme-provider";
import { CYCLE, FLASH_END, JUMP_SPAN, START_DELAY } from "@/lib/hero-timing";
import { BladeFlash } from "@/components/blade-flash";

export default function Hero() {
  const [time, setTime] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [paused, setPaused] = useState(false);
  const emojiRef = useRef<HTMLSpanElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5, ease: "easeOut" as const },
    }),
  };

  useEffect(() => {
    setMounted(true);
    const format = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Manila",
      }).format(new Date());

    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = emojiRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      setPaused(!entry.isIntersecting);
    }, { threshold: 0 });
    observer.observe(el);
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [mounted]);
  return (
    <section
      id="hero"
      className="min-h-[100svh] md:min-h-dvh flex flex-col justify-center pt-16 md:pt-24 pb-[calc(var(--dock-height)+env(safe-area-inset-bottom)+16px+6vh)] md:pb-[calc(6rem+6vh)]"
    >
      <div className="flex-1 flex flex-col justify-center">
        <SectionContainer className="flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] items-center lg:items-end gap-x-4">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-24 lg:w-[160px] lg:max-w-none mb-6 lg:mb-0 mx-auto lg:mx-0"
            >
              <Image
                src={isDark ? "/images/white-profile.png" : "/images/black-profile.png"}
                alt="Portrait of Jose Gerry Acevedo"
                width={500}
                height={500}
                priority
                sizes="(min-width: 1024px) 160px, 96px"
                className="w-full h-auto hidden lg:block"
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-6"
              variants={containerVariants}
              initial={prefersReducedMotion ? false : "hidden"}
              animate="visible"
            >
              <motion.p
                custom={0}
                variants={itemVariants}
                className="text-xs font-mono uppercase tracking-widest text-muted flex items-center gap-2"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-[var(--present-dot)] animate-pulse" aria-hidden="true" />
                {time ? `Open to new work · ${time} in Manila` : "Open to new work"}
              </motion.p>

              <motion.h1
                custom={0.1}
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-6xl font-medium leading-tight tracking-tight text-foreground"
              >
                <BladeFlash as="span" trigger="load" delay={0.6} className="inline-block">
                  Hi, I'm Jose!
                </BladeFlash>{" "}
                <motion.span
                  ref={emojiRef}
                  className="inline-block"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transformOrigin: "bottom center",
                  }}
                  aria-hidden="true"
                  initial={{ y: 0 }}
                  animate={
                    paused
                      ? { y: 0 }
                      : {
                        y: [0, 0, -14, 0, -4, 0, 0],
                      }
                  }
                  transition={{
                    delay: START_DELAY,
                    duration: CYCLE,
                    ease: ["linear", "easeOut", "easeIn", "easeOut", "easeIn", "linear"],
                    times: [
                      0,
                      FLASH_END,
                      FLASH_END + JUMP_SPAN * 0.3,
                      FLASH_END + JUMP_SPAN * 0.6,
                      FLASH_END + JUMP_SPAN * 0.8,
                      FLASH_END + JUMP_SPAN,
                      1,
                    ],
                    repeat: Infinity,
                    repeatDelay: 0,
                  }}
                >
                  <span
                    className="inline-block"
                    style={{
                      animation: mounted
                        ? "pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both, wave 1s ease-in-out 0.6s infinite"
                        : "none",
                      transformOrigin: "70% 70%",
                    }}
                  >
                    👋
                  </span>
                </motion.span>
              </motion.h1>


              <motion.p
                custom={0.25}
                variants={itemVariants}
                className="text-base sm:text-lg text-foreground leading-relaxed max-w-xl"
              >
                I’m a software developer who builds thoughtful, reliable software for the web. I care about the details people feel but rarely notice.
              </motion.p>

              <motion.div
                custom={0.35}
                variants={itemVariants}
                className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-muted"
              >
                <a
                  href="https://github.com/josegerryacevedo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:scale-x-0 after:bg-foreground after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100"
                >
                  github
                </a>
                <span>/</span>
                <a
                  href="https://linkedin.com/in/josegerryacevedo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:scale-x-0 after:bg-foreground after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100"
                >
                  linkedin
                </a>
                <span>/</span>
                <a
                  href="https://x.com/josegerryacevedo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:scale-x-0 after:bg-foreground after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100"
                >
                  x
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 border border-border divide-y sm:divide-y-0 sm:divide-x divide-border"
            variants={containerVariants}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
          >
            {[
              { title: "3+ years", subtitle: "building software" },
              { title: "Web & Mobile", subtitle: "front to back" },
              { title: "Philippines", subtitle: "working remotely or on-site" },
            ].map((cell, i) => (
              <motion.div
                key={cell.title}
                custom={0.45 + i * 0.08}
                variants={itemVariants}
                className="bg-background p-6"
              >
                <span className="block font-medium text-foreground">{cell.title}</span>
                <span className="text-muted text-sm">{cell.subtitle}</span>
              </motion.div>
            ))}
          </motion.div>
        </SectionContainer>
      </div>

    </section>
  );
}
