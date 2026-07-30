"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: RevealDirection;
  distance?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 24,
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const offsets: Record<
    RevealDirection,
    { x: number; y: number }
  > = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = offsets[direction];

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}