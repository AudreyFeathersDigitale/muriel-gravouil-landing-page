import { cn } from "@/lib/utils";

type GlowVariant = "turquoise" | "gold" | "mixed";
type GlowSize = "sm" | "md" | "lg";

type GlowProps = {
  className?: string;
  variant?: GlowVariant;
  size?: GlowSize;
};

const variants: Record<GlowVariant, string> = {
  turquoise: "bg-[rgba(44,188,195,0.22)]",
  gold: "bg-[rgba(200,169,106,0.2)]",
  mixed:
    "bg-[radial-gradient(circle,rgba(44,188,195,0.22)_0%,rgba(200,169,106,0.14)_45%,transparent_72%)]",
};

const sizes: Record<GlowSize, string> = {
  sm: "size-48",
  md: "size-80",
  lg: "size-[32rem]",
};

export function Glow({
  className,
  variant = "turquoise",
  size = "md",
}: GlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        variants[variant],
        sizes[size],
        className,
      )}
    />
  );
}