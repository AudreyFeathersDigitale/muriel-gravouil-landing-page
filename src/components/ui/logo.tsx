import Link from "next/link";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Accueil Muriel Gravouil"
      className={cn(
        "group inline-flex items-center gap-3",
        className,
      )}
    >
      <div
        className={cn(
          "flex size-10 items-center justify-center rounded-full",
          "border border-[var(--color-gold)]/40 bg-white/70",
          "transition duration-300",
          "group-hover:rotate-6 group-hover:border-[var(--color-gold)]",
        )}
      >
        <Sparkles
          aria-hidden="true"
          className="size-4 text-[var(--color-gold)]"
        />
      </div>

      <div>
        <p className="font-heading text-base font-semibold tracking-[0.03em] text-[var(--color-night)]">
          Muriel Gravouil
        </p>

        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Zone de Génie
        </p>
      </div>
    </Link>
  );
}