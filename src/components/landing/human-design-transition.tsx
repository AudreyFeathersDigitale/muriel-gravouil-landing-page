"use client";

import { motion, useReducedMotion } from "motion/react";

import { Container, Reveal } from "@/components/ui";

const dnaRows = Array.from({ length: 15 }, (_, index) => index);

export function HumanDesignTransition() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="human-design"
      className="relative isolate overflow-hidden bg-[var(--color-night-dark)] py-28 text-white sm:py-36 lg:py-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(44,188,195,0.1)] blur-[120px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.12, 1],
                opacity: [0.35, 0.6, 0.35],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container>
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="font-heading text-3xl font-medium leading-tight text-white/60 sm:text-4xl">
              Chaque être humain…
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="mt-5 font-heading text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              fonctionne différemment.
            </h2>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mx-auto my-16 h-24 w-px bg-gradient-to-b from-transparent via-[var(--color-gold)]/60 to-transparent" />
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
              Pourtant
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mx-auto mt-8 max-w-4xl font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Nous avons tous appris à fonctionner de la même manière.
            </p>
          </Reveal>

          <div className="relative mx-auto my-24 h-[520px] w-64">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent"
            />

            {dnaRows.map((row) => {
              const progress = row / (dnaRows.length - 1);
              const angle = progress * Math.PI * 4;
              const offset = Math.sin(angle) * 64;
              const reverseOffset = -offset;

              return (
                <motion.div
                  key={row}
                  aria-hidden="true"
                  className="absolute left-1/2 flex w-full -translate-x-1/2 items-center justify-center"
                  style={{
                    top: `${progress * 100}%`,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.6,
                  }}
                  transition={{
                    delay: row * 0.055,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.span
                    className="absolute size-3 rounded-full border border-[var(--color-gold)]/70 bg-[var(--color-night-dark)] shadow-[0_0_24px_rgba(200,169,106,0.45)]"
                    style={{
                      x: offset,
                    }}
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            boxShadow: [
                              "0 0 12px rgba(200,169,106,0.25)",
                              "0 0 30px rgba(200,169,106,0.7)",
                              "0 0 12px rgba(200,169,106,0.25)",
                            ],
                          }
                    }
                    transition={{
                      duration: 4,
                      delay: row * 0.08,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <span
                    className="absolute h-px bg-gradient-to-r from-[var(--color-gold)]/45 via-white/25 to-[var(--color-turquoise)]/45"
                    style={{
                      left: `calc(50% + ${Math.min(offset, reverseOffset)}px)`,
                      width: `${Math.abs(offset - reverseOffset)}px`,
                    }}
                  />

                  <motion.span
                    className="absolute size-3 rounded-full border border-[var(--color-turquoise)]/70 bg-[var(--color-night-dark)] shadow-[0_0_24px_rgba(44,188,195,0.45)]"
                    style={{
                      x: reverseOffset,
                    }}
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            boxShadow: [
                              "0 0 12px rgba(44,188,195,0.25)",
                              "0 0 30px rgba(44,188,195,0.7)",
                              "0 0 12px rgba(44,188,195,0.25)",
                            ],
                          }
                    }
                    transition={{
                      duration: 4,
                      delay: 0.5 + row * 0.08,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--color-turquoise)]">
              La carte de ton fonctionnement naturel
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <h2 className="mt-7 font-heading text-6xl font-semibold tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">
              Human Design
            </h2>
          </Reveal>

          <Reveal delay={0.44}>
            <p className="mx-auto mt-8 max-w-3xl font-heading text-2xl font-medium leading-relaxed text-white/70 sm:text-3xl">
              Ce n’est pas un outil pour te changer.
              <br />
              C’est un outil pour te comprendre.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}