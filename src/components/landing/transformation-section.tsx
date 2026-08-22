import {
  ArrowRight,
  Check,
  Compass,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import {
  Badge,
  Button,
  Container,
  Reveal,
  Section,
} from "@/components/ui";

const transformations = [
  {
    icon: Compass,
    before: "Avant",
    beforeText:
      "Tu hésites, tu analyses et tu repousses certaines décisions.",
    after: "Après",
    afterText:
      "Tu sais mieux reconnaître ce qui est juste pour toi et avancer avec plus de clarté.",
  },
  {
    icon: MessageCircle,
    before: "Avant",
    beforeText:
      "Tu cherches les bons mots et tu adaptes ton message pour plaire.",
    after: "Après",
    afterText:
      "Tu communiques d’une manière plus naturelle, plus claire et plus cohérente avec qui tu es.",
  },
  {
    icon: Sparkles,
    before: "Avant",
    beforeText:
      "Tu regardes ce que font les autres pour savoir quelle direction prendre.",
    after: "Après",
    afterText:
      "Tu comprends davantage ta propre manière d’avancer et ce sur quoi concentrer ton énergie.",
  },
];

export function TransformationSection() {
  return (
    <Section className="relative isolate overflow-hidden bg-[var(--color-cream)]">
      {/* HALOS DE FOND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-56 top-20 size-[34rem] rounded-full bg-[rgba(200,169,106,0.09)] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 bottom-10 size-[36rem] rounded-full bg-[rgba(44,188,195,0.09)] blur-3xl"
      />

      <Container>
        {/* INTRO */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge>Avant / Après</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-7 font-heading text-4xl font-semibold leading-tight tracking-[-0.04em] text-[var(--color-night-dark)] sm:text-5xl lg:text-6xl">
              Tu ne repars pas avec plus d’informations.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Tu repars avec une compréhension plus claire de ton
              fonctionnement et surtout une manière concrète de l’utiliser
              dans ton activité.
            </p>
          </Reveal>
        </div>

        {/* AVANT / APRÈS */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {transformations.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.afterText}
                delay={index * 0.08}
                className="h-full"
              >
                <article className="group relative h-full overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1 hover:border-[var(--color-turquoise)]/30">
                  {/* ICÔNE */}
                  <div className="flex size-11 items-center justify-center rounded-full bg-[var(--color-turquoise-light)] text-[var(--color-night-dark)]">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* AVANT */}
                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      {item.before}
                    </p>

                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {item.beforeText}
                    </p>
                  </div>

                  {/* SÉPARATION */}
                  <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-[var(--color-border)]" />

                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 text-[var(--color-gold)]"
                    />

                    <div className="h-px flex-1 bg-[var(--color-border)]" />
                  </div>

                  {/* APRÈS */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-dark)]">
                      {item.after}
                    </p>

                    <p className="mt-3 font-heading text-xl font-semibold leading-snug text-[var(--color-night-dark)]">
                      {item.afterText}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* RÉSULTAT */}
        <Reveal delay={0.25}>
          <div className="mx-auto mt-16 max-w-4xl rounded-[2.5rem] border border-[var(--color-gold)]/25 bg-white px-7 py-10 text-center shadow-[var(--shadow-soft)] sm:px-12 sm:py-12">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[var(--color-gold-light)]">
              <Check
                aria-hidden="true"
                className="size-5 text-[var(--color-gold-dark)]"
              />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-dark)]">
              Le vrai résultat
            </p>

            <h3 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-[-0.03em] text-[var(--color-night-dark)] sm:text-4xl">
              Moins de dispersion.
              <br />
              Plus de clarté sur ce qui mérite vraiment ton énergie.
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              L’objectif n’est pas de devenir quelqu’un d’autre, mais de
              construire ton activité d’une manière plus cohérente avec ton
              fonctionnement naturel.
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                href="/diagnostic"
                className="w-full sm:w-auto"
              >
                Découvrir mon fonctionnement
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}