import {
  ArrowRight,
  Check,
  Compass,
  FileText,
  Lightbulb,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import {
  Badge,
  Button,
  Container,
  Heading,
  Paragraph,
  Reveal,
  Section,
} from "@/components/ui";

const auditBenefits = [
  {
    icon: Compass,
    title: "Comprendre ta manière naturelle d’avancer",
    description:
      "Tu identifies les mécanismes qui influencent ton énergie, tes décisions et ta direction.",
  },
  {
    icon: Lightbulb,
    title: "Mettre des mots sur ce que tu vis",
    description:
      "Tu comprends enfin pourquoi certains schémas reviennent, même lorsque tu essaies de les dépasser.",
  },
  {
    icon: Sparkles,
    title: "Faire émerger ton prochain déclic",
    description:
      "Tu repars avec des clés concrètes pour commencer à fonctionner avec davantage de fluidité.",
  },
];

const auditIncludes = [
  {
    icon: FileText,
    title: "Analyse personnalisée",
    description:
      "Une lecture structurée de ton fonctionnement Human Design et de ses mécanismes essentiels.",
  },
  {
    icon: MessageCircle,
    title: "Restitution claire et accessible",
    description:
      "Muriel traduit ta carte sans jargon inutile et la relie directement à ce que tu traverses.",
  },
  {
    icon: Compass,
    title: "Pistes concrètes d’intégration",
    description:
      "Des repères simples pour expérimenter ton Design dans ta vie personnelle et professionnelle.",
  },
];

const reassuranceItems = [
  "Lecture entièrement personnalisée",
  "Approche concrète et sans jargon",
  "Espace confidentiel et bienveillant",
  "Paiement sécurisé",
];

export function AuditSection() {
  return (
    <Section
      id="audit"
      className="relative isolate overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-10 size-[36rem] rounded-full bg-[rgba(200,169,106,0.1)] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-0 size-[38rem] rounded-full bg-[rgba(44,188,195,0.1)] blur-3xl"
      />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge>L’Audit Déclic Human Design</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <Heading className="mt-7 text-balance">
              Ta carte ne te donne pas une nouvelle identité.
              <span className="block text-[var(--color-gold)]">
                Elle t’aide à retrouver la tienne.
              </span>
            </Heading>
          </Reveal>

          <Reveal delay={0.16}>
            <Paragraph className="mx-auto mt-7 max-w-3xl">
              Une lecture individuelle avec Muriel pour comprendre ton
              fonctionnement, éclairer ce que tu traverses actuellement et
              identifier les ajustements qui peuvent réellement changer ta
              manière d’avancer.
            </Paragraph>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {auditBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal
                key={benefit.title}
                delay={index * 0.1}
                className="h-full"
              >
                <article className="h-full rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-cream)]/70 p-8">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-[var(--color-turquoise)]/20 bg-white text-[var(--color-night)] shadow-sm">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-7 font-heading text-2xl font-semibold leading-tight tracking-[-0.025em] text-[var(--color-night)]">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {benefit.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-24 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                Ce que tu vas recevoir
              </p>

              <h3 className="mt-6 font-heading text-4xl font-semibold leading-tight tracking-[-0.035em] text-[var(--color-night)] sm:text-5xl">
                Une lecture qui relie enfin la théorie à ta réalité.
              </h3>

              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)]">
                L’objectif n’est pas de t’enfermer dans une étiquette. Muriel
                utilise ton Human Design comme une grille de compréhension,
                puis le met en perspective avec ton vécu, tes questionnements
                et ton contexte actuel.
              </p>
            </div>
          </Reveal>

          <div className="space-y-5">
            {auditIncludes.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.1}>
                  <article className="group rounded-[2rem] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1 hover:border-[var(--color-turquoise)]/30 sm:p-9">
                    <div className="flex gap-5">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-night)] text-white">
                        <Icon className="size-5" strokeWidth={1.8} />
                      </div>

                      <div>
                        <h4 className="font-heading text-2xl font-semibold tracking-[-0.025em] text-[var(--color-night)]">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="relative mt-24 overflow-hidden rounded-[2.75rem] bg-[var(--color-night-dark)] px-7 py-12 text-white shadow-[0_40px_120px_rgba(14,90,102,0.2)] sm:px-12 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-12rem] top-[-12rem] size-[30rem] rounded-full bg-[rgba(44,188,195,0.16)] blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[-14rem] left-[-10rem] size-[28rem] rounded-full bg-[rgba(200,169,106,0.13)] blur-3xl"
            />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                  Audit Déclic Human Design
                </p>

                <h3 className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
                  Un temps pour te comprendre.
                  <span className="block text-white/60">
                    Un déclic pour avancer autrement.
                  </span>
                </h3>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
                  Une lecture personnalisée pour mettre en lumière ton
                  fonctionnement naturel et retrouver une direction plus
                  alignée avec qui tu es.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {reassuranceItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/75"
                    >
                      <span className="flex size-6 items-center justify-center rounded-full bg-white/10 text-[var(--color-turquoise)]">
                        <Check className="size-3.5" strokeWidth={2.2} />
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl sm:p-9 lg:w-[22rem]">
                <p className="text-sm font-medium text-white/55">
                  L’Audit Déclic
                </p>

                <div className="mt-3 flex items-end gap-2">
                  <span className="font-heading text-6xl font-semibold tracking-[-0.05em] text-white">
                    299 €
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  Une lecture personnalisée centrée sur ton fonctionnement et
                  ta situation actuelle.
                </p>

                <Button
                  href="/audit"
                  className="mt-8 w-full justify-center"
                >
                  Découvrir l’Audit
                  <ArrowRight className="size-4" />
                </Button>

                <p className="mt-4 text-center text-xs text-white/40">
                  Paiement sécurisé
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}