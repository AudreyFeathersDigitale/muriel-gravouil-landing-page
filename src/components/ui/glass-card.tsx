import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function GlassCard({
  children,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/70",
        "bg-white/65 p-7 backdrop-blur-xl",
        "shadow-[0_24px_80px_rgba(14,90,102,0.11)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}