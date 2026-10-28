"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

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

  return (
    <section
      className="relative mx-auto flex w-full max-w-3xl flex-col justify-center gap-6 px-4 py-8 min-h-[calc(100dvh-var(--nav-height,3.5rem))] min-h-[calc(100svh-var(--nav-height,3.5rem))] sm:px-6 sm:py-10 md:px-8"
    >
      <div className="flex flex-col gap-6">
        <p className="text-xs font-mono uppercase tracking-widest text-muted flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
          {time ? `Open to new work · ${time} in Manila` : "Open to new work"}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium leading-tight tracking-tight text-foreground">
          Hi, I'm Jose!{" "}
          <span
            className="inline-block"
            style={{
              opacity: mounted ? 1 : 0,
              animation: mounted
                ? "pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both, wave 1s ease-in-out 0.6s infinite"
                : "none",
              transformOrigin: "70% 70%",
            }}
          >
            👋
          </span>
        </h1>
        <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-xl">
          I’m a software developer who builds thoughtful, reliable software for the web. I care about the details people feel but rarely notice.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-muted">
          <a
            href="https://github.com/josegerryacevedo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            github
          </a>
          <span>/</span>
          <a
            href="https://linkedin.com/in/josegerryacevedo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            linkedin
          </a>
          <span>/</span>
          <a
            href="https://x.com/josegerryacevedo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            x
          </a>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 border border-border divide-y sm:divide-y-0 sm:divide-x divide-border">
        <div className="bg-background p-6">
          <span className="block font-medium text-foreground">3+ years</span>
          <span className="text-muted text-sm">building software</span>
        </div>
        <div className="bg-background p-6">
          <span className="block font-medium text-foreground">Web &amp; Mobile</span>
          <span className="text-muted text-sm">front to back</span>
        </div>
        <div className="bg-background p-6">
          <span className="block font-medium text-foreground">Philippines</span>
          <span className="text-muted text-sm">working remotely or on-site</span>
        </div>
      </div>

      <hr className="mt-4 border-t border-border" aria-hidden="true" />
    </section>
  );
}
