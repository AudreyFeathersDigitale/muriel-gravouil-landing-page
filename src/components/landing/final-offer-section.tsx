"use client";

import {
  Check,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

import {
  Button,
  Container,
  Reveal,
  Section,
} from "@/components/ui";

const offerItems = [
  "Questionnaire préparatoire",
  "Vidéo personnalisée 15 à 20 min",
  "Audit individuel de 90 min",
  "Plan d’action personnalisé",
  "Boussole Human Design",
  "7 jours de suivi WhatsApp",
];

const faqs = [
  {
    question: "Dois-je avoir fait le quiz ?",
    answer:
      "Non. Il est utile pour découvrir tes premières clés, mais tu peux réserver directement.",
  },
  {
    question: "Est-ce une lecture générique ?",
    answer:
      "Non. Ta carte est reliée à ton activité, tes objectifs, tes décisions et tes blocages actuels.",
  },
  {
    question: "Vais-je repartir avec une stratégie complète ?",
    answer:
      "Tu repars avec une direction claire, une prochaine étape et trois priorités personnalisées.",
  },
  {
    question: "L’Audit garantit-il des clients ?",
    answer:
      "Non. Il t’aide à clarifier ta communication pour que les bons clients comprennent mieux ta valeur.",
  },
];

export function FinalOfferSection() {
  return (
    <Section
      id="audit"
      className="relative isolate overflow-hidden bg-white"
    >
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.75rem] bg-[var(--color-night-dark)] px-7 py-12 text-white shadow-[0_40px_120px_rgba(14,90,102,0.18)] sm:px-12 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-40 -top-40 size-[30rem] rounded-full bg-[rgba(44,188,195,0.15)] blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-40 -left-32 size-[28rem] rounded-full bg-[rgba(200,169,106,0.12)] blur-3xl"
            />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_22rem] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                  Audit Déclic Human Design
                </p>

                <h2 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Révèle ta manière naturelle de prendre ta place et
                  <span className="text-[var(--color-turquoise)]">
                    {" "}
                    d’attirer les bons clients.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
                  Une analyse personnalisée pour comprendre ce qui bloque
                  aujourd’hui, clarifier ta communication et repartir avec
                  trois priorités concrètes.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {offerItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[var(--color-turquoise)]">
                        <Check
                          aria-hidden="true"
                          className="size-3.5"
                          strokeWidth={2.3}
                        />
                      </span>

                      <span className="text-sm text-white/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl sm:p-9">
                <p className="text-sm text-white/50">
                  L’Audit Déclic
                </p>

                <div className="mt-3">
                  <span className="font-heading text-6xl font-semibold tracking-[-0.05em] text-white">
                    299 €
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/55">
                  Une analyse individuelle centrée sur ton fonctionnement
                  et ta situation actuelle.
                </p>

                <Button
                  href="#reservation"
                  className="mt-8 w-full whitespace-nowrap"
                >
                  Réserver mon Audit
                </Button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/40">
                  <ShieldCheck
                    aria-hidden="true"
                    className="size-4"
                  />
                  Paiement sécurisé · Espace confidentiel
                </div>

                <a
                  href="/diagnostic"
                  className="mt-6 block text-center text-sm font-medium text-[var(--color-turquoise)] transition hover:text-white"
                >
                  Commencer par le quiz gratuit →
                </a>

                <p className="mt-3 text-center text-xs text-white/35">
                  Tu peux réserver même sans avoir fait le quiz.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-20 max-w-4xl">
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold-dark)]">
                Questions fréquentes
              </p>

              <h2 className="mt-5 font-heading text-4xl font-semibold tracking-[-0.04em] text-[var(--color-night-dark)] sm:text-5xl">
                Tu as encore une question ?
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.05}>
                <details className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)]/45 px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading text-lg font-semibold text-[var(--color-night-dark)]">
                    <span>{faq.question}</span>

                    <ChevronDown
                      aria-hidden="true"
                      className="size-5 shrink-0 text-[var(--color-gold-dark)] transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-muted)]">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.22}>
            <div className="mt-14 text-center">
              <p className="font-heading text-3xl font-semibold leading-tight text-[var(--color-night-dark)] sm:text-4xl">
                Tu n’as pas besoin d’une nouvelle stratégie à copier.
              </p>

              <p className="mt-3 font-heading text-3xl font-semibold leading-tight text-[var(--color-gold)] sm:text-4xl">
                Tu as besoin d’une stratégie que tu peux réellement incarner.
              </p>

              <div className="mt-8 flex justify-center">
                <Button href="#reservation">
                  Je réserve mon Audit Déclic
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}