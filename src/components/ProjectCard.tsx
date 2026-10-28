interface ProjectCardProps {
  title: string;
  status: string;
  href: string;
  thumbnailColor: string;
}

export default function ProjectCard({
  title,
  status,
  href,
  thumbnailColor,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="group block transition-all duration-300 ease-in-out !opacity-100"
      data-cursor="case-study"
    >
      <div className="flex flex-col gap-2">
        <div className="relative w-full">
          <div
            className="thumbnail-inset-border relative w-full"
            style={{ backgroundColor: thumbnailColor }}
            role="img"
            aria-label={`Project thumbnail for ${title}`}
          >
            <div
              className="w-full aspect-video animate-pulse"
              style={{ backgroundColor: thumbnailColor, opacity: 0.25 }}
              aria-label="Loading project preview"
            ></div>
          </div>
          <div
            className="absolute inset-0 bg-transparent transition-colors duration-300 ease-in-out group-hover:bg-overlay-light"
          ></div>
        </div>
        <div className="!text-[14px] !m-0 flex items-center gap-1.5">
          <p className="text-ink-100!">{title}</p>
          <p className="text-ink-25!"> / </p>
          <p className="text-ink-45">{status}</p>
        </div>
      </div>
    </a>
  );
}
