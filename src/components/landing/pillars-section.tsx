import {
  BatteryCharging,
  Check,
  Compass,
  Crown,
  Eye,
  MessageCircleMore,
} from "lucide-react";

import {
  Badge,
  Container,
  Reveal,
  Section,
} from "@/components/ui";

const pillars = [
  {
    number: "01",
    icon: BatteryCharging,
    eyebrow: "Pilier 1",
    title: "Reconnecte-toi à ce qui te donne réellement de l’énergie.",
    intro:
      "Nous observons ton rythme, ta communication, ta prospection, tes offres et les obligations que tu t’imposes.",
    points: [
      {
        title: "Ce qui te nourrit",
        text: "Les activités, les clients et les formats qui réveillent ton énergie et ta créativité.",
      },
      {
        title: "Ce qui t’épuise",
        text: "Les actions que tu tiens par peur, habitude ou obligation, sans vrai retour.",
      },
      {
        title: "Ce que tu peux simplifier",
        text: "Les tâches, offres ou stratégies à arrêter, réduire ou déléguer.",
      },
    ],
    result:
      "Tu sais où arrêter de forcer et où remettre ton énergie.",
  },
  {
    number: "02",
    icon: Compass,
    eyebrow: "Pilier 2",
    title: "Prends tes décisions avec plus de confiance.",
    intro:
      "Nous relions ton Autorité Human Design aux décisions concrètes de ton activité : offre, prix, communication, partenariat, rythme ou prochaine étape.",
    points: [
      {
        title: "Sortir de l’urgence",
        text: "Reconnaître les décisions prises pour se rassurer, faire plaisir ou éviter une peur.",
      },
      {
        title: "Écouter ton bon signal",
        text: "Identifier la manière dont une décision juste se présente réellement chez toi.",
      },
      {
        title: "Tester sans tout bouleverser",
        text: "Choisir le prochain pas concret plutôt que d’attendre une certitude absolue.",
      },
    ],
    result:
      "Moins de suranalyse. Plus de décisions que tu peux réellement assumer.",
  },
  {
    number: "03",
    icon: Crown,
    eyebrow: "Pilier 3",
    title: "Prends ta place sans devenir quelqu’un d’autre.",
    intro:
      "Ton leadership n’est pas une posture à copier. C’est la manière dont tu transmets ta vision, inspires confiance et assumes la valeur de ton approche.",
    points: [
      {
        title: "Ta posture naturelle",
        text: "La façon dont tu guides, expliques, provoques un déclic ou rassures.",
      },
      {
        title: "Ta valeur visible",
        text: "Ce que tu minimises encore alors que c’est précisément ce que tes clients recherchent.",
      },
      {
        title: "Ta place assumée",
        text: "Comment exprimer une opinion, un prix et une différence sans t’excuser d’exister.",
      },
    ],
    result:
      "Tu ne repars pas avec une nouvelle identité. Tu apprends à mieux utiliser la tienne.",
  },
  {
    number: "04",
    icon: MessageCircleMore,
    eyebrow: "Pilier 4",
    title: "Révèle ton style naturel de communication.",
    intro:
      "Nous cherchons la manière la plus claire et la plus naturelle de montrer ta valeur pour que les bons clients puissent se reconnaître dans ton message.",
    points: [
      {
        title: "Ton message",
        text: "Ce que tu dois davantage nommer pour être compris rapidement.",
      },
      {
        title: "Ton ton",
        text: "La manière de parler qui crée confiance sans te faire jouer un personnage.",
      },
      {
        title: "Tes formats",
        text: "Les contenus et prises de parole qui respectent le mieux ton énergie.",
      },
      {
        title: "Tes clients",
        text: "Les personnes à qui ton message peut réellement parler.",
      },
    ],
    result:
      "Communiquer avec plus de clarté pour attirer des clients qui comprennent déjà la valeur de ton approche.",
  },
];

const blockers = [
  "Peur du regard des autres",
  "Manque de légitimité",
  "Peur de vendre ou d’être trop visible",
  "Tendance à minimiser ta valeur",
  "Croyances sur l’argent et la réussite",
  "Besoin d’être totalement prêt(e) avant d’agir",
];

export function PillarsSection() {
  return (
    <Section className="relative isolate overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-60 top-24 size-[34rem] rounded-full bg-[rgba(200,169,106,0.09)] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-60 bottom-20 size-[36rem] rounded-full bg-[rgba(44,188,195,0.09)] blur-3xl"
      />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge>Les 4 piliers de ton Audit</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-7 font-heading text-4xl font-semibold leading-tight tracking-[-0.04em] text-[var(--color-night-dark)] sm:text-5xl lg:text-6xl">
              On ne cherche pas à tout changer.
              <span className="block text-[var(--color-gold)]">
                On cherche ce qui mérite vraiment ton énergie.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              L’Audit relie ton Human Design à quatre dimensions très concrètes
              de ton activité pour faire émerger les ajustements qui ont
              réellement du sens pour toi.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <Reveal
                key={pillar.title}
                delay={index * 0.08}
                className="h-full"
              >
                <article className="group relative h-full overflow-hidden rounded-[2.25rem] border border-[var(--color-border)] bg-[var(--color-cream)]/55 p-7 transition duration-500 hover:-translate-y-1 hover:border-[var(--color-turquoise)]/30 hover:shadow-[0_28px_80px_rgba(14,90,102,0.10)] sm:p-9">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-turquoise)] transition-transform duration-500 group-hover:scale-x-100"
                  />

                  <div className="flex items-start justify-between gap-5">
                    <div className="flex size-12 items-center justify-center rounded-full border border-[var(--color-turquoise)]/20 bg-white text-[var(--color-night-dark)] shadow-sm">
                      <Icon
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.8}
                      />
                    </div>

                    <span className="font-heading text-4xl font-semibold text-[var(--color-night-dark)]/10">
                      {pillar.number}
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-dark)]">
                    {pillar.eyebrow}
                  </p>

                  <h3 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-[-0.03em] text-[var(--color-night-dark)]">
                    {pillar.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                    {pillar.intro}
                  </p>

                  <div className="mt-7 space-y-5">
                    {pillar.points.map((point) => (
                      <div key={point.title} className="flex gap-3">
                        <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-turquoise-light)] text-[var(--color-night-dark)]">
                          <Check
                            aria-hidden="true"
                            className="size-3.5"
                            strokeWidth={2.2}
                          />
                        </span>

                        <div>
                          <p className="font-heading text-lg font-semibold text-[var(--color-night-dark)]">
                            {point.title}
                          </p>

                          <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
                            {point.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="my-7 h-px bg-[var(--color-border)]" />

                  <p className="font-heading text-xl font-semibold leading-snug text-[var(--color-gold-dark)]">
                    {pillar.result}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.25}>
          <div className="relative mt-20 overflow-hidden rounded-[2.5rem] bg-[var(--color-night-dark)] px-7 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
            <div
              aria-hidden="true"
              className="absolute -right-32 -top-32 size-[24rem] rounded-full bg-[rgba(44,188,195,0.14)] blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-40 -left-28 size-[24rem] rounded-full bg-[rgba(200,169,106,0.12)] blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="flex size-12 items-center justify-center rounded-full border border-[var(--color-gold)]/25 bg-white/5">
                  <Eye
                    aria-hidden="true"
                    className="size-5 text-[var(--color-gold)]"
                  />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                  Ce qui bloque derrière la stratégie
                </p>

                <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Une bonne stratégie peut rester bloquée par ce que tu
                  n’oses pas encore assumer.
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  Pendant l’Audit, nous mettons aussi en lumière les
                  mécanismes qui empêchent ta stratégie d’être pleinement
                  incarnée.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {blockers.map((blocker) => (
                  <div
                    key={blocker}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[var(--color-turquoise)]">
                      <Check
                        aria-hidden="true"
                        className="size-3.5"
                        strokeWidth={2.2}
                      />
                    </span>

                    <span className="text-sm leading-6 text-white/75">
                      {blocker}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="relative mt-9 text-center font-heading text-xl font-medium text-white/75 sm:text-2xl">
              Parce que changer la couleur de ton logo ne suffit pas toujours
              à régler une peur d’être visible.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}