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

type LinkButtonProps = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "children" | "className"> & {
    href: ComponentPropsWithoutRef<typeof Link>["href"];
  };

type NativeButtonProps = BaseProps &
  Omit<
    ComponentPropsWithoutRef<"button">,
    "children" | "className" | "href"
  > & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-turquoise)] text-white shadow-[var(--shadow-button)] hover:bg-[var(--color-turquoise-dark)]",
  gold:
    "bg-[var(--color-gold)] text-[var(--color-night-dark)] hover:bg-[var(--color-gold-dark)] hover:text-white",
  secondary:
    "border border-[var(--color-border)] bg-white text-[var(--color-night)] hover:border-[var(--color-turquoise)] hover:bg-[var(--color-turquoise-light)]",
};

function ButtonContent({
  children,
  showArrow,
}: {
  children: ReactNode;
  showArrow: boolean;
}) {
  return (
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
}

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = "primary",
    showArrow = true,
  } = props;

  const styles = cn(
    "group inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 py-4",
    "font-medium transition duration-300 ease-out",
    "hover:-translate-y-0.5 active:translate-y-0",
    "focus-ring",
    variants[variant],
    className,
  );

  if (props.href !== undefined) {
    const {
      children: _children,
      className: _className,
      variant: _variant,
      showArrow: _showArrow,
      href,
      ...linkProps
    } = props;

    return (
      <Link href={href} className={styles} {...linkProps}>
        <ButtonContent showArrow={showArrow}>{children}</ButtonContent>
      </Link>
    );
  }

  const {
    children: _children,
    className: _className,
    variant: _variant,
    showArrow: _showArrow,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button type={type} className={styles} {...buttonProps}>
      <ButtonContent showArrow={showArrow}>{children}</ButtonContent>
    </button>
  );
}