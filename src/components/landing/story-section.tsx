import { Quote } from "lucide-react";

import {
  Badge,
  Container,
  GlassCard,
  Glow,
  Reveal,
  Section,
} from "@/components/ui";

export function StorySection() {
  return (
    <Section
      id="declic"
      className="relative isolate overflow-hidden bg-[var(--color-night-dark)] text-white"
    >
      <Glow
        variant="turquoise"
        size="lg"
        className="-right-64 -top-52 opacity-50"
      />

      <Glow
        variant="gold"
        size="lg"
        className="-bottom-72 -left-64 opacity-40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]"
      />

      <Container>
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <div className="flex justify-center">
              <Badge className="border-white/15 bg-white/5 text-white">
                Le véritable déclic
              </Badge>
            </div>
          </Reveal>

          <div className="mt-16 space-y-8 text-center">
            <Reveal delay={0.08}>
              <h2 className="font-heading text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                Et si le problème n’était pas ton manque de discipline ?
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto max-w-4xl font-heading text-balance text-3xl font-semibold leading-tight text-[var(--color-gold)] sm:text-4xl lg:text-5xl">
                Tu appliques peut-être une stratégie que tu ne peux pas
                réellement incarner.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mx-auto max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
                Plus tu forces, plus ton énergie baisse. Et plus ton message
                devient difficile à tenir dans la durée.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.38}>
            <div className="mx-auto my-16 h-20 w-px bg-gradient-to-b from-transparent via-[var(--color-gold)]/60 to-transparent" />
          </Reveal>

          <Reveal delay={0.44}>
            <GlassCard className="relative mx-auto max-w-4xl overflow-hidden border-white/10 bg-white/[0.07] px-8 py-12 text-center shadow-[0_30px_100px_rgba(0,0,0,0.2)] sm:px-14 sm:py-16">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(44,188,195,0.15),transparent_55%)]"
              />

              <div className="relative">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-[var(--color-gold)]/30 bg-white/5">
                  <Quote
                    aria-hidden="true"
                    className="size-6 text-[var(--color-gold)]"
                  />
                </div>

                <p className="mt-8 font-heading text-3xl font-semibold leading-snug text-white sm:text-4xl">
                  Tu n’avais pas besoin d’être corrigé
                  <span className="text-[var(--color-turquoise)]">(e)</span>.
                </p>

                <p className="mt-5 font-heading text-3xl font-semibold leading-snug text-white sm:text-4xl">
                  Tu avais besoin d’être{" "}
                  <span className="text-[var(--color-gold)]">
                    compris(e).
                  </span>
                </p>

                <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                  Ton fonctionnement n’est pas un défaut à gommer.
                  C’est une logique à comprendre.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}