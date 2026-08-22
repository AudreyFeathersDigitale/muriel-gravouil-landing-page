import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <div className="flex h-24 items-center justify-between">
          <Logo />

        </div>
      </Container>
    </header>
  );
}