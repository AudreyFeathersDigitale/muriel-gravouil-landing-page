import {
  BatteryLow,
  BrainCircuit,
  CircleHelp,
  Compass,
  Repeat2,
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
    icon: BrainCircuit,
    title: "Tu analyses tout",
    description:
      "Tu cherches la bonne décision, mais plus tu réfléchis, moins tu sais ce qui est juste pour toi.",
  },
  {
    icon: BatteryLow,
    title: "Tu t’épuises à tenir",
    description:
      "Tu avances, tu assures, tu prends sur toi… jusqu’au moment où ton énergie ne suit plus.",
  },
  {
    icon: CircleHelp,
    title: "Tu doutes de toi",
    description:
      "Même lorsque tu sais faire, une partie de toi continue de demander confirmation.",
  },
  {
    icon: Repeat2,
    title: "Tu répètes les mêmes schémas",
    description:
      "Tu changes de stratégie, de rythme ou de direction, mais la même tension finit par revenir.",
  },
  {
    icon: Compass,
    title: "Tu ne sais plus dans quelle direction aller",
    description:
      "Tu sens qu’un autre chemin existe, sans réussir à identifier clairement lequel.",
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
            <Badge>Ce que tu vis n’est pas un hasard</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <Heading className="mt-7 text-balance">
              Et si le problème n’était pas ton{" "}
              <span className="text-[var(--color-gold)]">
                manque de confiance
              </span>
              ?
            </Heading>
          </Reveal>

          <Reveal delay={0.16}>
            <Paragraph className="mx-auto mt-7 max-w-3xl">
              Tu as peut-être essayé de mieux t’organiser, de lâcher
              prise, de réfléchir davantage ou de devenir plus
              discipliné(e). Pourtant, quelque chose continue de
              résister.
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
                    : index === 3
                      ? "lg:col-span-3"
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
                    className="transition duration-500 group-hover:scale-105 group-hover:bg-[var(--color-turquoise-light)]"
                  />

                  <h3 className="mt-6 font-heading text-2xl font-semibold tracking-[-0.025em] text-[var(--color-night)]">
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

        <Reveal delay={0.22}>
          <div className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-[var(--color-gold)]/25 bg-[var(--color-gold-light)]/55 px-7 py-8 text-center sm:px-12 sm:py-10">
            <p className="font-heading text-2xl font-semibold leading-snug text-[var(--color-night)] sm:text-3xl">
              Et si tu n’avais pas besoin de devenir une meilleure
              version de toi-même…
            </p>

            <p className="mt-3 font-heading text-2xl font-semibold leading-snug text-[var(--color-gold-dark)] sm:text-3xl">
              mais simplement de comprendre comment tu fonctionnes ?
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}