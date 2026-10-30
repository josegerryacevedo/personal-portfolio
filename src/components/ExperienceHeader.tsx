type ExperienceHeaderProps = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
};

export default function ExperienceHeader({
  title,
  company,
  location,
  startDate,
  endDate,
}: ExperienceHeaderProps) {
  const isPresent = endDate.toLowerCase() === "present";

  return (
    <header className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-4 gap-y-1 min-w-0">
      <h3 className="text-base font-semibold text-foreground min-w-0 [overflow-wrap:anywhere]">
        {title}
      </h3>
      <p className="text-sm text-muted min-w-0 [overflow-wrap:anywhere]">
        {company}
      </p>
{location ? (
        <p className="text-[13px] text-muted min-w-0 [overflow-wrap:anywhere]">
          {location}
        </p>
      ) : null}
      <time className="text-[13px] font-mono text-muted tabular-nums whitespace-nowrap sm:col-start-2 sm:row-start-1 sm:text-right sm:self-start">
        {startDate ? `${startDate} – ` : ""}
        {isPresent ? (
          <>
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--present-dot)] align-middle"
              aria-hidden="true"
            />{" "}
            Present
          </>
        ) : (
          endDate
        )}
      </time>
    </header>
  );
}