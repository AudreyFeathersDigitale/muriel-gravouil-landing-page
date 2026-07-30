import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

export function Paragraph({
  children,
  className,
}: ParagraphProps) {
  return (
    <p
      className={cn(
        "text-lg leading-8",
        "text-[var(--color-muted)]",
        className
      )}
    >
      {children}
    </p>
  );
}