import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <div className="flex h-24 items-center justify-between">
          <Logo />

          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-8 lg:flex"
          >
            <a
              href="#diagnostic"
              className="text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-night)]"
            >
              Le diagnostic
            </a>

            <a
              href="#human-design"
              className="text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-night)]"
            >
              Human Design
            </a>

            <a
              href="#audit"
              className="text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-night)]"
            >
              Audit Déclic
            </a>
          </nav>

          <Button
            href="/diagnostic"
            className="hidden min-h-11 px-5 py-3 text-sm sm:inline-flex"
            showArrow={false}
          >
            Faire le diagnostic
          </Button>
        </div>
      </Container>
    </header>
  );
}