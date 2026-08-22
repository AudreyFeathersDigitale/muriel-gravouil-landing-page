import {
  BriefcaseBusiness,
  MessageSquareMore,
  HandCoins,
  CircleHelp,
  RefreshCw,
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

const symptoms = [
  {
    icon: BriefcaseBusiness,
    title: "Tu travailles beaucoup",
    description:
      "Tu donnes énormément d’énergie à ton activité, mais les résultats ne suivent pas toujours à la hauteur de tes efforts.",
  },
  {
    icon: MessageSquareMore,
    title: "Tu communiques sans te différencier",
    description:
      "Tu sais ce que tu veux transmettre, mais ton message ne reflète pas encore pleinement ce qui te rend unique.",
  },
  {
    icon: HandCoins,
    title: "Tu forces pour vendre",
    description:
      "Tu as parfois l’impression de devoir convaincre, insister ou en faire plus pour attirer les bons clients.",
  },
  {
    icon: CircleHelp,
    title: "Tu doutes de ta valeur",
    description:
      "Tu sais que tu as quelque chose à apporter, mais tu hésites encore à prendre pleinement ta place.",
  },
  {
    icon: RefreshCw,
    title: "Tu changes souvent de direction",
    description:
      "Tu testes de nouvelles stratégies, de nouvelles idées ou de nouveaux positionnements sans toujours savoir quoi garder.",
  },
];

export function RecognitionSection() {
  return (
    <Section
      id="comprendre"
      className="relative overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-36 size-[32rem] rounded-full bg-[rgba(200,169,106,0.1)] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-0 size-[32rem] rounded-full bg-[rgba(44,188,195,0.1)] blur-3xl"
      />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge>Ce que tu vis peut-être déjà</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <Heading className="mt-7 text-balance text-[var(--color-night-dark)]">
              Tu fais déjà beaucoup…
              <span className="text-[var(--color-gold)]">
                {" "}
                mais ça ne se transforme pas toujours en clients.
              </span>
            </Heading>
          </Reveal>

          <Reveal delay={0.16}>
            <Paragraph className="mx-auto mt-7 max-w-3xl">
              Ce n’est pas forcément un manque de travail.
              C’est souvent un problème de direction, de message
              ou de posture.
            </Paragraph>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {symptoms.map((symptom, index) => {
            const Icon = symptom.icon;

            return (
              <Reveal
                key={symptom.title}
                delay={0.08 * index}
                className={
                  index < 3
                    ? "lg:col-span-2"
                    : "lg:col-span-3"
                }
              >
                <Card
                  className={`
                    group h-full p-7
                    transition duration-500
                    hover:-translate-y-1
                    hover:border-[var(--color-turquoise)]/35
                    hover:shadow-[0_26px_70px_rgba(14,90,102,0.11)]
                  `}
                >
                  <IconCircle
                    icon={Icon}
                    className="text-[var(--color-night-dark)] transition duration-500 group-hover:scale-105 group-hover:bg-[var(--color-turquoise-light)]"
                  />

                  <h3 className="mt-6 font-heading text-2xl font-semibold tracking-[-0.025em] text-[var(--color-night-dark)]">
                    {symptom.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {symptom.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}