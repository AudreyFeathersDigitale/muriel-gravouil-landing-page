"use client";

import { motion, useReducedMotion } from "motion/react";

import { Container, Reveal } from "@/components/ui";

export function AuditTransition() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-night-dark)] py-28 text-white sm:py-36 lg:py-44">
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
                scale: [0.95, 1.08, 0.95],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container>
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
              Connaître sa carte est un début
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-8 max-w-4xl font-heading text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Mais une carte ne suffit pas toujours à retrouver sa direction.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/60 sm:text-xl">
              Tu peux connaître ton Type, ton Autorité ou ton Profil…
              sans encore savoir comment les appliquer dans ton quotidien,
              tes décisions et tes relations.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mx-auto my-16 h-28 w-px bg-gradient-to-b from-transparent via-[var(--color-gold)]/70 to-transparent" />
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mx-auto max-w-3xl font-heading text-3xl font-medium leading-relaxed text-white/75 sm:text-4xl">
              La vraie transformation commence lorsque ta carte devient
              <span className="text-[var(--color-turquoise)]">
                {" "}
                concrète.
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="mx-auto mt-9 max-w-3xl font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
              C’est précisément le rôle de l’Audit Déclic.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}