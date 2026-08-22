import {
  Check,
  ClipboardList,
  Gift,
  MessageCircle,
  PlayCircle,
  Sparkles,
  Video,
  X,
} from "lucide-react";

import {
  Badge,
  Container,
  Reveal,
  Section,
} from "@/components/ui";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Questionnaire préparatoire",
    description:
      "Ta situation, ton objectif, tes informations de naissance et ce qui te fait tourner en rond aujourd’hui.",
  },
  {
    number: "02",
    icon: Video,
    title: "Analyse personnalisée",
    description:
      "Je prépare ta carte et une vidéo privée de 15 à 20 minutes sur ton énergie, tes décisions, ton leadership et ta communication.",
  },
  {
    number: "03",
    icon: PlayCircle,
    title: "Audit Déclic — 90 min",
    description:
      "Nous relions ton Human Design à ton activité, tes blocages et tes décisions concrètes.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Plan d’action",
    description:
      "Tu repars avec une vision claire, ta prochaine étape et trois priorités personnalisées.",
  },
];

const yesItems = [
  "Tu es entrepreneur, coach, thérapeute ou accompagnant",
  "Tu travailles beaucoup, mais tu t’éparpilles",
  "Ta communication ne reflète pas encore pleinement ta valeur",
  "Tu veux attirer des clients plus adaptés à ton approche",
  "Tu veux prendre ta place sans copier les autres",
];

const noItems = [
  "Tu cherches une recette miracle sans rien mettre en pratique",
  "Tu veux une lecture Human Design générique",
  "Tu attends qu’une carte prenne les décisions à ta place",
  "Tu veux cinquante nouvelles tâches à ajouter à ton agenda",
];

export function ProcessSection() {
  return (
    <Section className="relative isolate overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-56 top-20 size-[34rem] rounded-full bg-[rgba(200,169,106,0.09)] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 bottom-20 size-[36rem] rounded-full bg-[rgba(44,188,195,0.09)] blur-3xl"
      />

      <Container>
        {/* COMMENT ÇA SE PASSE */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge>Comment ça se passe</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-7 font-heading text-4xl font-semibold leading-tight tracking-[-0.04em] text-[var(--color-night-dark)] sm:text-5xl lg:text-6xl">
              Un parcours simple,
              <span className="text-[var(--color-gold)]">
                {" "}personnalisé et concret.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Tu peux réserver même sans avoir fait le quiz : ta carte sera
              créée à partir de tes informations de naissance.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal
                key={step.title}
                delay={index * 0.08}
                className="h-full"
              >
                <article className="group relative h-full overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-cream)]/55 p-7 transition duration-500 hover:-translate-y-1 hover:border-[var(--color-turquoise)]/30 hover:shadow-[0_24px_70px_rgba(14,90,102,0.09)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-11 items-center justify-center rounded-full bg-white text-[var(--color-night-dark)] shadow-sm">
                      <Icon
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.8}
                      />
                    </div>

                    <span className="font-heading text-3xl font-semibold text-[var(--color-night-dark)]/10">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-heading text-2xl font-semibold leading-tight tracking-[-0.025em] text-[var(--color-night-dark)]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* BONUS */}
        <Reveal delay={0.22}>
          <div className="relative mt-20 overflow-hidden rounded-[2.5rem] bg-[var(--color-night-dark)] px-7 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
            <div
              aria-hidden="true"
              className="absolute -right-32 -top-32 size-[24rem] rounded-full bg-[rgba(44,188,195,0.14)] blur-3xl"
            />

            <div className="relative">
              <div className="text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-[var(--color-gold)]/25 bg-white/5">
                  <Gift
                    aria-hidden="true"
                    className="size-5 text-[var(--color-gold)]"
                  />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                  Deux bonus pour passer à l’action
                </p>

                <h3 className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl">
                  Comprendre, c’est bien.
                  <span className="text-[var(--color-turquoise)]">
                    {" "}Appliquer, c’est là que tout change.
                  </span>
                </h3>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                    Bonus 1
                  </p>

                  <h4 className="mt-3 font-heading text-2xl font-semibold text-white">
                    Ta Boussole Human Design
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    Une fiche claire et visuelle avec ton énergie, ton
                    Autorité, tes forces, ton leadership, ta communication
                    et tes points de vigilance.
                  </p>

                  <p className="mt-5 text-sm font-medium leading-7 text-white/80">
                    À ressortir lorsque ton mental décide de rouvrir quinze
                    directions différentes.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7">
                  <div className="flex items-center gap-3">
                    <MessageCircle
                      aria-hidden="true"
                      className="size-5 text-[var(--color-turquoise)]"
                    />

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                      Bonus 2
                    </p>
                  </div>

                  <h4 className="mt-3 font-heading text-2xl font-semibold text-white">
                    7 jours de suivi WhatsApp
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    Pendant une semaine, tu peux partager tes questions,
                    tes hésitations, les actions mises en place et les
                    ajustements dont tu as besoin.
                  </p>

                  <p className="mt-5 text-sm font-medium leading-7 text-white/80">
                    L’objectif : transformer tes trois priorités en premières
                    actions réelles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* POUR QUI */}
        <div className="mx-auto mt-20 max-w-4xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold-dark)]">
              Est-ce que cet Audit est pour toi ?
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 font-heading text-4xl font-semibold tracking-[-0.04em] text-[var(--color-night-dark)] sm:text-5xl">
              Tu devrais rapidement savoir si
              <span className="text-[var(--color-gold)]">
                {" "}c’est la bonne prochaine étape.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="h-full rounded-[2.25rem] border border-[var(--color-turquoise)]/25 bg-[var(--color-turquoise-light)]/35 p-7 sm:p-9">
              <p className="font-heading text-2xl font-semibold text-[var(--color-night-dark)]">
                Oui, si…
              </p>

              <div className="mt-7 space-y-4">
                {yesItems.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-turquoise)] text-white">
                      <Check
                        aria-hidden="true"
                        className="size-3.5"
                        strokeWidth={2.3}
                      />
                    </span>

                    <p className="text-sm leading-6 text-[var(--color-night-dark)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <article className="h-full rounded-[2.25rem] border border-[var(--color-border)] bg-[var(--color-cream)]/65 p-7 sm:p-9">
              <p className="font-heading text-2xl font-semibold text-[var(--color-night-dark)]">
                Pas vraiment, si…
              </p>

              <div className="mt-7 space-y-4">
                {noItems.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-night-dark)]/5 text-[var(--color-muted)]">
                      <X
                        aria-hidden="true"
                        className="size-3.5"
                        strokeWidth={2}
                      />
                    </span>

                    <p className="text-sm leading-6 text-[var(--color-muted)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}