import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Glow } from "./glow";

type GradientBackgroundProps = {
  children: ReactNode;
  className?: string;
  showGrid?: boolean;
};

export function GradientBackground({
  children,
  className,
  showGrid = false,
}: GradientBackgroundProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden",
        "bg-[linear-gradient(145deg,#ffffff_0%,#fcfaf6_45%,#f1fbfb_100%)]",
        className,
      )}
    >
      <Glow
        variant="turquoise"
        size="lg"
        className="-right-52 -top-52"
      />

      <Glow
        variant="gold"
        size="lg"
        className="-bottom-72 -left-52"
      />

      <Glow
        variant="mixed"
        size="md"
        className="left-1/2 top-1/3 -translate-x-1/2"
      />

      {showGrid && (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 opacity-[0.025]",
            "bg-[linear-gradient(to_right,#0e5a66_1px,transparent_1px),linear-gradient(to_bottom,#0e5a66_1px,transparent_1px)]",
            "bg-[size:48px_48px]",
          )}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}