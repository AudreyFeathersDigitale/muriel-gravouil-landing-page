"use client";

import { motion, useReducedMotion } from "motion/react";

import { Container, Reveal } from "@/components/ui";

const dnaOffsets = [
  0,
  50,
  62,
  28,
  -28,
  -62,
  -50,
  0,
  50,
  62,
  28,
  -28,
  -62,
  -50,
  0,
] as const;

export function HumanDesignTransition() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="human-design"
      className="relative isolate overflow-hidden bg-[var(--color-night-dark)] py-20 text-white sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(44,188,195,0.1)] blur-[120px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.55, 0.3],
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
            <p className="font-heading text-2xl font-medium leading-tight text-white/60 sm:text-3xl">
              Chaque être humain fonctionne différemment.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="mx-auto mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Pourtant, nous avons tous appris à fonctionner de la même manière.
            </h2>
          </Reveal>

          <div className="relative mx-auto my-14 h-[300px] w-64">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent"
            />

            {dnaOffsets.map((offset, row) => {
              const progress = row / (dnaOffsets.length - 1);
              const reverseOffset = -offset;
              const leftOffset = Math.min(offset, reverseOffset);
              const connectionWidth = Math.abs(offset - reverseOffset);

              return (
                <motion.div
                  key={`${row}-${offset}`}
                  aria-hidden="true"
                  className="absolute left-1/2 flex w-full -translate-x-1/2 items-center justify-center"
                  style={{
                    top: `${Math.round(progress * 10000) / 100}%`,
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
                    amount: 0.5,
                  }}
                  transition={{
                    delay: row * 0.045,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.span
                    className="absolute size-3 rounded-full border border-[var(--color-gold)]/70 bg-[var(--color-night-dark)] shadow-[0_0_24px_rgba(200,169,106,0.45)]"
                    style={{
                      transform: `translateX(${offset}px)`,
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
                      left: `calc(50% + ${leftOffset}px)`,
                      width: `${connectionWidth}px`,
                    }}
                  />

                  <motion.span
                    className="absolute size-3 rounded-full border border-[var(--color-turquoise)]/70 bg-[var(--color-night-dark)] shadow-[0_0_24px_rgba(44,188,195,0.45)]"
                    style={{
                      transform: `translateX(${reverseOffset}px)`,
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
              Human Design
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <h2 className="mx-auto mt-6 max-w-4xl font-heading text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Comprendre ton fonctionnement,
              <span className="text-[var(--color-gold)]">
                {" "}
                pour construire une stratégie que tu peux réellement incarner.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              Ton Human Design met en lumière ton énergie, tes décisions,
              ta manière naturelle de communiquer et ce qui devient possible
              lorsque ton business cesse de te demander de jouer un rôle.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}