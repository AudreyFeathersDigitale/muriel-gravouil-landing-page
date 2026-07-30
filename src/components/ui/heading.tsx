import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export function Heading({
  children,
  className,
}: HeadingProps) {
  return (
    <h2
      className={cn(
        "font-heading text-4xl md:text-5xl lg:text-6xl",
        "font-semibold leading-tight tracking-tight",
        "text-[var(--color-night)]",
        className
      )}
    >
      {children}
    </h2>
  );
}