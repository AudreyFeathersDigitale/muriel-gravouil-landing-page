import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "gold" | "secondary";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
};

type LinkButtonProps = BaseProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children">;

type NativeButtonProps = BaseProps & {
  href?: never;
} & Omit<ComponentPropsWithoutRef<"button">, "children">;

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-turquoise)] text-white shadow-[var(--shadow-button)] hover:bg-[var(--color-turquoise-dark)]",
  gold:
    "bg-[var(--color-gold)] text-[var(--color-night-dark)] hover:bg-[var(--color-gold-dark)] hover:text-white",
  secondary:
    "border border-[var(--color-border)] bg-white text-[var(--color-night)] hover:border-[var(--color-turquoise)] hover:bg-[var(--color-turquoise-light)]",
};

export function Button({
  children,
  className,
  variant = "primary",
  showArrow = true,
  ...props
}: ButtonProps) {
  const styles = cn(
    "group inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 py-4",
    "font-medium transition duration-300 ease-out",
    "hover:-translate-y-0.5 active:translate-y-0",
    "focus-ring",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>

      {showArrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-5 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link className={styles} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {content}
    </button>
  );
}