import { cn } from "@/lib/utils";

type DnaVisualProps = {
  className?: string;
};

const dnaPoints = Array.from({ length: 11 }, (_, index) => index);

export function DnaVisual({ className }: DnaVisualProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute",
        "h-[420px] w-52",
        className,
      )}
    >
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--color-gold)]/30 to-transparent" />

      {dnaPoints.map((point) => {
        const top = point * 9.5;
        const offset = Math.sin(point * 0.9) * 48;

        return (
          <div
            key={point}
            className="absolute left-1/2 flex -translate-x-1/2 items-center"
            style={{
              top: `${top}%`,
              transform: `translateX(calc(-50% + ${offset}px))`,
            }}
          >
            <span className="size-2.5 rounded-full border border-[var(--color-gold)]/50 bg-white shadow-sm" />

            <span className="mx-2 h-px w-12 bg-gradient-to-r from-[var(--color-gold)]/40 to-[var(--color-turquoise)]/40" />

            <span className="size-2.5 rounded-full border border-[var(--color-turquoise)]/50 bg-white shadow-sm" />
          </div>
        );
      })}
    </div>
  );
}