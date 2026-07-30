import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function Card({
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-[var(--color-border)]",
        "bg-white p-7",
        "shadow-[var(--shadow-soft)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}