import {
  ArrowDown,
  Clock3,
  Compass,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { DnaVisual } from "@/components/landing/dna-visual";
import {
  Badge,
  Button,
  Container,
  FloatingCard,
  GlassCard,
  GradientBackground,
  Heading,
  IconCircle,
  Paragraph,
  Reveal,
} from "@/components/ui";

const reassuranceItems = [
  {
    icon: Clock3,
    title: "3 minutes",
    description: "Rapide et intuitif",
  },
  {
    icon: Compass,
    title: "Personnalisé",
    description: "Un résultat qui te ressemble",
  },
  {
    icon: ShieldCheck,
    title: "100 % gratuit",
    description: "Sans engagement",
  },
];

export function Hero() {
  return (
    <GradientBackground showGrid>
      <section className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-36 lg:pb-24 lg:pt-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] xl:gap-24">
            <div className="relative z-20">
              <Reveal>
                <Badge>Transforme tes pépins en pépites</Badge>
              </Reveal>

              <Reveal delay={0.08}>
                <Heading
                  className={`
                    mt-7 max-w-[800px]
                    text-[clamp(3rem,5vw,5.2rem)]
                    leading-[0.98]
                    tracking-[-0.045em]
                  `}
                >
                  Tu n’es pas perdu
                  <span className="text-[var(--color-turquoise)]">
                    (e).
                  </span>

                  <br />

                  <span className="mt-3 inline-block">
                    Tu fonctionnes simplement{" "}
                    <span className="text-[var(--color-gold)]">
                      contre ta nature.
                    </span>
                  </span>
                </Heading>
              </Reveal>

              <Reveal delay={0.16}>
                <Paragraph className="mt-8 max-w-2xl text-base sm:text-lg">
                  Découvre pourquoi tu doutes, t’épuises ou tournes en
                  rond, puis fais un premier pas vers une vie et une
                  activité qui respectent enfin ton fonctionnement
                  naturel.
                </Paragraph>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button
                    href="/diagnostic"
                    className="w-full sm:w-auto"
                  >
                    Je découvre pourquoi
                  </Button>

                  <a
                    href="#comprendre"
                    className={`
                      group inline-flex min-h-14 items-center
                      justify-center gap-3 rounded-full px-6
                      text-sm font-medium text-[var(--color-night)]
                      transition hover:bg-white/60
                    `}
                  >
                    Comprendre avant de commencer

                    <ArrowDown
                      aria-hidden="true"
                      className="size-4 transition group-hover:translate-y-1"
                    />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="mt-12 grid gap-5 sm:grid-cols-3">
                  {reassuranceItems.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3"
                    >
                      <IconCircle icon={item.icon} />

                      <div>
                        <p className="text-sm font-semibold text-[var(--color-night)]">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal
              direction="left"
              delay={0.18}
              className="relative z-10 mx-auto w-full max-w-[540px]"
            >
              <div className="relative">
                <DnaVisual className="-left-20 top-12 hidden opacity-70 xl:block" />

                <div
                  aria-hidden="true"
                  className={`
                    absolute -inset-10 rounded-[4rem]
                    bg-[radial-gradient(circle_at_center,rgba(44,188,195,0.16),transparent_66%)]
                    blur-2xl
                  `}
                />

                <GlassCard
                  className={`
                    relative min-h-[540px] overflow-hidden
                    border-white/80 p-0
                  `}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(44,188,195,0.24),transparent_42%)]" />

                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/50 to-transparent" />

                  <div className="relative flex min-h-[540px] items-center justify-center px-8 py-16 text-center">
                    <div>
                      <div className="mx-auto flex size-28 items-center justify-center rounded-full border border-[var(--color-gold)]/45 bg-white/70 shadow-[0_20px_70px_rgba(14,90,102,0.1)]">
                        <Sparkles
                          aria-hidden="true"
                          className="size-10 text-[var(--color-gold)]"
                        />
                      </div>

                      <p className="mt-8 font-heading text-3xl font-semibold text-[var(--color-night)]">
                        Photo de Muriel
                      </p>

                      <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-[var(--color-muted)]">
                        Le portrait professionnel sera intégré ici,
                        avec un détourage doux et une lumière naturelle.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <FloatingCard className="absolute -bottom-7 left-3 sm:-left-8">
                  <p className="text-sm font-semibold text-[var(--color-night)]">
                    Ta Zone de Génie
                  </p>

                  <p className="mt-1 text-xs text-[var(--color-muted)]">
                    Clarté · Confiance · Direction
                  </p>
                </FloatingCard>

                <FloatingCard
                  delay={1.2}
                  className="absolute right-3 top-10 sm:-right-7"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-gold)]">
                    Déclic
                  </p>

                  <p className="mt-1 text-sm text-[var(--color-night)]">
                    Comprendre avant de changer
                  </p>
                </FloatingCard>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </GradientBackground>
  );
}