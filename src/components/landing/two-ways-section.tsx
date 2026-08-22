import {
  ArrowRight,
  Compass,
  Sparkles,
} from "lucide-react";

import {
  Badge,
  Button,
  Container,
  Reveal,
  Section,
} from "@/components/ui";

const ways = [
  {
    number: "01",
    icon: Compass,
    title: "Tu connais déjà ton Human Design",
    description:
      "Tu peux réserver directement l’Audit. Je vérifie ta carte, j’analyse ta situation et nous travaillons sur ton énergie, tes décisions, ton leadership et ta communication.",
    cta: "Réserver directement",
    href: "#audit",
    primary: true,
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Tu ne connais pas encore ton Human Design",
    description:
      "Commence par le quiz gratuit. Il crée ta carte, te donne ton Type, ton Autorité et quelques premiers conseils avant de découvrir l’Audit.",
    cta: "Faire le quiz gratuit",
    href: "/diagnostic",
    primary: false,
  },
];

export function TwoWaysSection() {
  return (
    <Section className="relative isolate overflow-hidden bg-[var(--color-cream)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-10 size-[32rem] rounded-full bg-[rgba(200,169,106,0.09)] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-0 size-[34rem] rounded-full bg-[rgba(44,188,195,0.09)] blur-3xl"
      />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge>Deux façons de commencer</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-7 font-heading text-4xl font-semibold leading-tight tracking-[-0.035em] text-[var(--color-night-dark)] sm:text-5xl lg:text-6xl">
              Tu peux arriver ici de deux manières.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Dans les deux cas, l’objectif reste le même : relier ton Human
              Design à ta situation réelle et repartir avec une direction
              claire.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {ways.map((way, index) => {
            const Icon = way.icon;

            return (
              <Reveal
                key={way.title}
                delay={0.1 * index}
                className="h-full"
              >
                <article
                  className={`
                    group relative h-full overflow-hidden rounded-[2rem]
                    border bg-white p-7 transition duration-500
                    sm:p-9
                    ${
                      way.primary
                        ? "border-[var(--color-turquoise)] shadow-[0_22px_70px_rgba(44,188,195,0.10)]"
                        : "border-[var(--color-border)] shadow-[var(--shadow-soft)]"
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`
                        flex size-11 items-center justify-center rounded-full border
                        ${
                          way.primary
                            ? "border-[var(--color-turquoise)]/25 bg-[var(--color-turquoise-light)] text-[var(--color-night-dark)]"
                            : "border-[var(--color-gold)]/25 bg-[var(--color-gold-light)] text-[var(--color-gold-dark)]"
                        }
                      `}
                    >
                      <Icon className="size-4" strokeWidth={1.8} />
                    </div>

                    <span className="font-heading text-3xl font-semibold text-[var(--color-night-dark)]/10">
                      {way.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-heading text-2xl font-semibold leading-tight tracking-[-0.025em] text-[var(--color-night-dark)]">
                    {way.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                    {way.description}
                  </p>

                  <div className="mt-8">
                    {way.primary ? (
                      <Button href={way.href}>
                        {way.cta}
                      </Button>
                    ) : (
                      <a
                        href={way.href}
                        className="
                          group/cta inline-flex min-h-14 items-center justify-center
                          gap-3 rounded-full border border-[var(--color-turquoise)]
                          bg-white px-7 py-4 text-sm font-medium
                          text-[var(--color-night-dark)] transition duration-300
                          hover:-translate-y-0.5 hover:bg-[var(--color-turquoise-light)]
                        "
                      >
                        <span>{way.cta}</span>

                        <ArrowRight
                          aria-hidden="true"
                          className="size-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                        />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.22}>
          <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-6 text-[var(--color-muted)]">
            Le quiz est une porte d’entrée, pas un passage obligatoire avant
            l’Audit.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}