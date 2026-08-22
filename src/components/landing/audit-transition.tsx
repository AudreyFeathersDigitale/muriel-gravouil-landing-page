"use client";

import {
  BatteryCharging,
  Compass,
  MessageCircleMore,
  Sparkles,
} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

import { Container, Reveal } from "@/components/ui";

const pillars = [
  {
    number: "01",
    icon: BatteryCharging,
    title: "Ton énergie",
    description:
      "Ce qui te nourrit, ce qui t’épuise et ce que tu peux simplifier.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Tes décisions",
    description:
      "Comment sortir de la peur, de l’urgence et de la suranalyse.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Ton leadership",
    description:
      "Comment prendre ta place et assumer ce qui te rend différent.",
  },
  {
    number: "04",
    icon: MessageCircleMore,
    title: "Ta communication",
    description:
      "Ton style naturel, ton message et les formats qui te ressemblent.",
  },
];

export function AuditTransition() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-night-dark)] py-24 text-white sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(44,188,195,0.09)] blur-[130px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.25, 0.5, 0.25],
                scale: [0.96, 1.06, 0.96],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container>
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
                L’Audit Déclic Human Design
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mx-auto mt-7 max-w-4xl font-heading text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                Relier ton Human Design à{" "}
                <span className="text-[var(--color-turquoise)]">
                  ta réalité business.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
                Je ne me contente pas de décrire ta carte. Nous l’utilisons
                pour comprendre ce qui tourne en rond aujourd’hui et faire
                émerger une stratégie que tu peux réellement incarner.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <Reveal
                  key={pillar.title}
                  delay={0.08 * index}
                  className="h-full"
                >
                  <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[var(--color-turquoise)]/30 hover:bg-white/[0.075] sm:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex size-11 items-center justify-center rounded-full border border-[var(--color-turquoise)]/25 bg-[var(--color-turquoise)]/10 text-[var(--color-turquoise)]">
                        <Icon
                          aria-hidden="true"
                          className="size-5"
                          strokeWidth={1.8}
                        />
                      </div>

                      <span className="font-heading text-4xl font-semibold text-white/10">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-heading text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/60">
                      {pillar.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.35}>
            <p className="mx-auto mt-14 max-w-3xl text-center font-heading text-2xl font-medium leading-relaxed text-white/70 sm:text-3xl">
              Une analyse personnalisée de ton fonctionnement,
              de ta situation et de ton objectif.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}