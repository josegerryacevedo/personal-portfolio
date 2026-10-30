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
            className="absolute inset-0 bg-transparent transition-colors duration-300 ease-in-out group-hover:bg-foreground/10 dark:group-hover:bg-foreground/20"
          ></div>
        </div>
        <div className="!text-[14px] !m-0 flex items-center gap-1.5">
          <p className="text-foreground">{title}</p>
          <p className="text-muted-light"> / </p>
          <p className="text-muted">{status}</p>
        </div>
      </div>
    </a>
  );
}
