"use client";

import { motion, useReducedMotion } from "motion/react";
import React from "react";

type BladeFlashProps = {
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  once?: boolean;
  trigger?: "load" | "view";
  className?: string;
  children: React.ReactNode;
};

export function BladeFlash({
  as = "h2",
  delay = 0,
  once = true,
  trigger = "view",
  className,
  children,
}: BladeFlashProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    const Tag = as as React.ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as as keyof typeof motion] as React.ElementType;

  const style = {
    "--flash-base": "var(--foreground)",
    "--flash-color": "#9fd8ff",
    backgroundImage:
      "linear-gradient(110deg, var(--flash-base) 40%, var(--flash-color) 50%, var(--flash-base) 60%)",
    backgroundSize: "250% 100%",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundPosition: "150% 0",
  } as React.CSSProperties;

  const animationProps =
    trigger === "load"
      ? {
          initial: { backgroundPosition: "150% 0" },
          animate: { backgroundPosition: "-50% 0" },
        }
      : {
          initial: { backgroundPosition: "150% 0" },
          whileInView: { backgroundPosition: "-50% 0" },
          viewport: { once, amount: 0.6 },
        };

  return (
    <MotionTag
      className={className}
      style={style}
      {...animationProps}
      transition={{ delay, duration: 2.5, ease: [0.4, 0, 0.2, 1], repeat: Infinity, repeatDelay: 0.5 }}
    >
      {children}
    </MotionTag>
  );
}