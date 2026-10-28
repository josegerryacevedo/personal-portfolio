"use client";

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="flex items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-2">
          <div className="bg-primary w-1 h-1"></div>
          <p className="!text-ink-40 !m-0 shrink-0 tabular-nums" aria-live="polite">
             
          </p>
        </div>
        <div className="flex items-center gap-6 sm:gap-8">
          <a
            href="https://www.linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target text-[15px] text-ink-40 hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <button
            type="button"
            data-cursor="email"
            className="tap-target text-[15px] text-ink-40 hover:text-primary transition-colors"
          >
            Email
          </button>
          <a
            href="https://x.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target text-[15px] text-ink-40 hover:text-primary transition-colors"
          >
            X
          </a>
          <a
            href="https://www.instagram.com/your-username/"
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target text-[15px] text-ink-40 hover:text-primary transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://devpost.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target text-[15px] text-ink-40 hover:text-primary transition-colors"
          >
            Devpost
          </a>
        </div>
      </div>
    </footer>
  );
}
