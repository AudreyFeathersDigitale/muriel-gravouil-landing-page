import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-24 md:py-32",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}