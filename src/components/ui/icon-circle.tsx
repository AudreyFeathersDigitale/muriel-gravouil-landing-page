import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconCircleProps = {
  icon: LucideIcon;
  className?: string;
};

export function IconCircle({
  icon: Icon,
  className,
}: IconCircleProps) {
  return (
    <div
      className={cn(
        "flex size-10 shrink-0 items-center justify-center",
        "rounded-full border border-[var(--color-border)]",
        "bg-white/75 text-[var(--color-night)]",
        "shadow-[0_8px_20px_rgba(14,90,102,0.06)]",
        className,
      )}
    >
      <Icon aria-hidden="true" className="size-4" />
    </div>
  );
}