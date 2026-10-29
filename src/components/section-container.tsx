import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  id?: string;
};

export function SectionContainer({
  children,
  className = "",
  as: Tag = "div",
  id,
}: SectionContainerProps) {
  return (
    <div id={id} className={`mx-auto w-full max-w-3xl px-5 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default SectionContainer;