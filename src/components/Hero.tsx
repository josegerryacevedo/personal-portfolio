"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-3xl px-6 py-20 md:px-8 text-foreground">
      <div className="grid gap-8 md:gap-12 items-center md:grid-cols-2">
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl">
          <Image
            src="/profile.png"
            alt="Portrait of Jose Acevedo"
            className="w-full h-full object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-foreground">
            Jose Acevedo
          </h1>
          <p className="text-base text-foreground leading-relaxed max-w-md">
            I'm a full-stack engineer. I build modern web & mobile apps, and these
            days I'm focused on generative AI.
          </p>

          <p className="text-base text-muted leading-relaxed max-w-md">
            I turn rough ideas into working software.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono text-muted">
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
      </div>

      <hr
        className="mt-12 border-t border-border"
        aria-hidden="true"
      />
    </section>
  );
}
