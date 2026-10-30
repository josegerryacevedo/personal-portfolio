"use client";

import { Reveal, RevealItem } from "@/components/reveal";

export default function Footer() {
  return (
    <footer className="w-full pb-[calc(6rem+env(safe-area-inset-bottom))] md:pb-6 py-6 mt-auto">
      <Reveal className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 md:px-8">
        <RevealItem>
          <div className="flex items-center gap-2">
            <div className="bg-accent w-1 h-1"></div>
            <p className="text-muted !m-0 shrink-0 tabular-nums" aria-live="polite">
               
            </p>
          </div>
        </RevealItem>
        <RevealItem>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target text-[15px] text-muted hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <button
              type="button"
              data-cursor="email"
              className="tap-target text-[15px] text-muted hover:text-accent transition-colors"
            >
              Email
            </button>
            <a
              href="https://x.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target text-[15px] text-muted hover:text-accent transition-colors"
            >
              X
            </a>
            <a
              href="https://www.instagram.com/your-username/"
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target text-[15px] text-muted hover:text-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://devpost.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target text-[15px] text-muted hover:text-accent transition-colors"
            >
              Devpost
            </a>
          </div>
        </RevealItem>
      </Reveal>
    </footer>
  );
}