import type { HTMLAttributes, ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  showIcon?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function Badge({
  children,
  className,
  showIcon = true,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full",
        "border border-[var(--color-border)]",
        "bg-white/70 px-4 py-2 backdrop-blur-md",
        "text-xs font-semibold uppercase tracking-[0.18em]",
        "text-[var(--color-night)]",
        "shadow-[0_10px_30px_rgba(14,90,102,0.06)]",
        className,
      )}
      {...props}
    >
      {showIcon && (
        <Sparkles
          aria-hidden="true"
          className="size-4 text-[var(--color-gold)]"
        />
      )}

      <span>{children}</span>
    </div>
  );
}