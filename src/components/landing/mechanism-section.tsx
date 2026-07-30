import {
  BatteryCharging,
  Compass,
  Sparkles,
} from "lucide-react";

import {
  Badge,
  Button,
  Card,
  Container,
  Heading,
  IconCircle,
  Paragraph,
  Reveal,
  Section,
} from "@/components/ui";

const mechanisms = [
  {
    number: "01",
    icon: BatteryCharging,
    title: "Ton énergie",
    description:
      "Comprendre la manière dont ton énergie se construit, se dépense et se renouvelle naturellement.",
    highlight: "Arrêter de t’épuiser à contre-courant.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Tes décisions",
    description:
      "Identifier ton mécanisme intérieur pour prendre des décisions qui ne viennent plus de la peur ou du mental.",
    highlight: "Retrouver une direction qui te ressemble.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Ta Zone de Génie",
    description:
      "Reconnaître les talents, les qualités et la contribution qui émergent lorsque tu fonctionnes selon ta nature.",
    highlight: "Créer davantage de fluidité.",
  },
];

export function MechanismSection() {
  return (
    <Section className="relative isolate overflow-hidden bg-[var(--color-cream)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-60 top-20 size-[34rem] rounded-full bg-[rgba(200,169,106,0.11)] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-60 bottom-0 size-[34rem] rounded-full bg-[rgba(44,188,195,0.11)] blur-3xl"
      />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge>Ton mode d’emploi intérieur</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <Heading className="mt-7 text-balance">
              Pendant des années, tu as essayé de{" "}
              <span className="text-[var(--color-gold)]">
                changer ton comportement.
              </span>
            </Heading>
          </Reveal>

          <Reveal delay={0.16}>
            <Paragraph className="mx-auto mt-7 max-w-3xl">
              Le Human Design te propose une autre question : et si tu
              comprenais d’abord ton fonctionnement, avant de chercher
              à le corriger ?
            </Paragraph>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {mechanisms.map((mechanism, index) => {
            const Icon = mechanism.icon;

            return (
              <Reveal
                key={mechanism.title}
                delay={index * 0.1}
                className="h-full"
              >
                <Card className="group relative h-full overflow-hidden p-8 transition duration-500 hover:-translate-y-1.5 hover:border-[var(--color-turquoise)]/35 hover:shadow-[0_28px_80px_rgba(14,90,102,0.12)]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-turquoise)] transition-transform duration-500 group-hover:scale-x-100"
                  />

                  <div className="flex items-start justify-between gap-5">
                    <IconCircle
                      icon={Icon}
                      className="transition duration-500 group-hover:rotate-3 group-hover:scale-105 group-hover:bg-[var(--color-turquoise-light)]"
                    />

                    <span className="font-heading text-4xl font-semibold text-[var(--color-night)]/10">
                      {mechanism.number}
                    </span>
                  </div>

                  <h3 className="mt-8 font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--color-night)]">
                    {mechanism.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                    {mechanism.description}
                  </p>

                  <div className="my-7 h-px bg-[var(--color-border)]" />

                  <p className="font-heading text-xl font-semibold leading-snug text-[var(--color-gold-dark)]">
                    {mechanism.highlight}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.25}>
          <div className="mx-auto mt-20 max-w-4xl rounded-[2.5rem] border border-[var(--color-border)] bg-white px-7 py-12 text-center shadow-[var(--shadow-soft)] sm:px-14 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
              Ton premier déclic commence ici
            </p>

            <h3 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-[-0.035em] text-[var(--color-night)] sm:text-5xl">
              Découvre ce que ton fonctionnement naturel révèle déjà
              sur toi.
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
              Quelques minutes suffisent pour commencer à identifier
              les mécanismes qui influencent tes choix, ton énergie et
              ta manière d’avancer.
            </p>

            <div className="mt-9 flex justify-center">
              <Button
                href="/diagnostic"
                className="w-full sm:w-auto"
              >
                Commencer mon diagnostic
              </Button>
            </div>

            <p className="mt-5 text-xs text-[var(--color-muted)]">
              Gratuit · Personnalisé · Sans engagement
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}