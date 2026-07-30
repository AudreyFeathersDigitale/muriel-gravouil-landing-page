"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type FloatingCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FloatingCard({
  children,
  className,
  delay = 0,
}: FloatingCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "rounded-3xl border border-white/70",
        "bg-white/80 p-5 backdrop-blur-xl",
        "shadow-[0_20px_60px_rgba(14,90,102,0.12)]",
        className,
      )}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, -7, 0],
            }
      }
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -5,
              scale: 1.015,
            }
      }
      transition={{
        y: {
          duration: 5,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.3,
        },
      }}
    >
      {children}
    </motion.div>
  );
}