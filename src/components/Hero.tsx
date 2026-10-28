"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-16 md:px-8 lg:px-12 text-background">
      <div className="grid gap-8 md:gap-12 items-center md:grid-cols-2">
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
            alt="Portrait of Jose Acevedo"
            className="w-full h-full object-cover grayscale opacity-80"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-foreground">
            Jose Acevedo
          </h1>
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
