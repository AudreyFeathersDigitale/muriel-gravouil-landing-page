import {
  Compass,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  Badge,
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
    icon: Compass,
    title: "Plus de clarté",
    description:
      "Tu comprends ce qui bloque aujourd’hui et tu sais enfin où concentrer ton énergie.",
    highlight: "Tu arrêtes de t’éparpiller.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Plus de confiance",
    description:
      "Tu prends tes décisions avec des repères adaptés à ton fonctionnement, plutôt qu’en suivant ce que tu crois devoir faire.",
    highlight: "Tu avances avec plus de certitude.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Plus d’impact",
    description:
      "Ta communication reflète davantage ta valeur, ta différence et la manière dont tu accompagnes réellement.",
    highlight: "Les bonnes personnes te comprennent plus vite.",
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
            <Badge>Une stratégie que tu peux incarner</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <Heading className="mt-7 text-balance text-[var(--color-night-dark)]">
              Ton business n’a pas besoin{" "}
              <span className="text-[var(--color-gold)]">
                d’un personnage de plus.
              </span>
            </Heading>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-5 font-heading text-3xl font-semibold text-[var(--color-night-dark)] sm:text-4xl">
              Il a besoin de davantage de toi.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <Paragraph className="mx-auto mt-7 max-w-3xl">
              L’Audit Déclic t’aide à faire émerger une manière
              d’entreprendre, de décider et de communiquer que tu peux
              tenir dans la durée — sans copier les autres ni jouer un rôle.
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
                      className="text-[var(--color-night-dark)] transition duration-500 group-hover:rotate-3 group-hover:scale-105 group-hover:bg-[var(--color-turquoise-light)]"
                    />

                    <span className="font-heading text-4xl font-semibold text-[var(--color-night-dark)]/10">
                      {mechanism.number}
                    </span>
                  </div>

                  <h3 className="mt-8 font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--color-night-dark)]">
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

        <Reveal delay={0.3}>
          <div className="mx-auto mt-16 max-w-4xl text-center">
            <p className="font-heading text-3xl font-semibold leading-tight text-[var(--color-night-dark)] sm:text-4xl">
              Moins de forcing.
              <span className="text-[var(--color-gold)]">
                {" "}
                Plus de clarté, de confiance et d’impact.
              </span>
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}