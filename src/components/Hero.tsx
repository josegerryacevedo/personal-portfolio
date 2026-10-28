"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
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
    <section className="relative mx-auto max-w-3xl px-6 py-24 md:px-8">
      <div className="flex flex-col gap-6">
        <p className="text-xs font-mono uppercase tracking-widest text-muted flex items-center gap-2 mt-8">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
          {time ? `Open to new work · ${time} in Manila` : "Open to new work"}
        </p>
        <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight text-foreground">
          Hi, I'm Jose!
        </h1>
        <p className="text-lg text-foreground leading-relaxed max-w-xl">
          I’m a software developer who builds thoughtful, reliable software for the web. I care about the details people feel but rarely notice.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-muted">
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

      <div className="mt-16 grid gap-3 sm:grid-cols-3">
        <div className="text-sm text-foreground">
          <span className="block font-medium">3+ years</span>
          <span className="text-muted">building software</span>
        </div>
        <div className="text-sm text-foreground">
          <span className="block font-medium">Web &amp; Mobile</span>
          <span className="text-muted">front to back</span>
        </div>
        <div className="text-sm text-foreground">
          <span className="block font-medium">Philippines</span>
          <span className="text-muted">working remotely or on-site</span>
        </div>
      </div>

      <hr className="mt-16 border-t border-border" aria-hidden="true" />
    </section>
  );
}
