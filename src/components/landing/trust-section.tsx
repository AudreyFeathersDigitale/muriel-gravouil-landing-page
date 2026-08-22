import {
  Check,
  Quote,
} from "lucide-react";

import {
  Badge,
  Container,
  Reveal,
  Section,
} from "@/components/ui";

const testimonials = [
  {
    quote:
      "Ajoute ici un retour qui montre un déclic précis, une décision prise et une action concrète mise en place.",
    name: "Témoignage 1",
    meta: "Nom · activité",
  },
  {
    quote:
      "Une phrase courte et précise sur sa communication, sa légitimité ou sa prise de décision.",
    name: "Témoignage 2",
    meta: "Nom · activité",
  },
  {
    quote:
      "Insérer ici une vraie capture ou un retour montrant une prise de conscience ou une avancée concrète.",
    name: "Capture WhatsApp",
    meta: "Nom · activité",
  },
];

const murielPrinciples = [
  {
    title: "Sans étiquette",
    text: "Ton vécu reste toujours prioritaire sur la théorie.",
  },
  {
    title: "Sans jargon",
    text: "Je traduis ta carte en mots simples et en décisions concrètes.",
  },
];

export function TrustSection() {
  return (
    <Section className="relative isolate overflow-hidden bg-[var(--color-cream)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-56 top-20 size-[34rem] rounded-full bg-[rgba(200,169,106,0.09)] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 bottom-20 size-[36rem] rounded-full bg-[rgba(44,188,195,0.09)] blur-3xl"
      />

      <Container>
        {/* TÉMOIGNAGES */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge>Témoignages</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-7 font-heading text-4xl font-semibold leading-tight tracking-[-0.04em] text-[var(--color-night-dark)] sm:text-5xl lg:text-6xl">
              Elles ont arrêté de{" "}
              <span className="text-[var(--color-gold)]">
                tourner en rond.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Ici, on veut surtout montrer des déclics précis :
              ce qui a été compris, décidé ou mis en place concrètement.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 0.08}
              className="h-full"
            >
              <article className="h-full rounded-[2rem] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-soft)]">
                <div className="flex size-11 items-center justify-center rounded-full bg-[var(--color-gold-light)] text-[var(--color-gold-dark)]">
                  <Quote
                    aria-hidden="true"
                    className="size-5"
                  />
                </div>

                <p className="mt-6 text-sm leading-7 text-[var(--color-night-dark)]">
                  “{testimonial.quote}”
                </p>

                <div className="mt-7 h-px bg-[var(--color-border)]" />

                <p className="mt-5 font-heading text-lg font-semibold text-[var(--color-night-dark)]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-[var(--color-muted)]">
                  {testimonial.meta}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* MURIEL */}
        <Reveal delay={0.24}>
          <div className="relative mt-20 overflow-hidden rounded-[2.5rem] bg-[var(--color-night-dark)] px-7 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
            <div
              aria-hidden="true"
              className="absolute -right-36 -top-36 size-[26rem] rounded-full bg-[rgba(44,188,195,0.14)] blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 text-center">
                <div className="mx-auto flex size-24 items-center justify-center rounded-full border border-[var(--color-gold)]/30 bg-white/5">
                  <span className="font-heading text-3xl font-semibold text-[var(--color-gold)]">
                    MG
                  </span>
                </div>

                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/45">
                  Photo professionnelle à intégrer
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                  Qui va t’accompagner ?
                </p>

                <h3 className="mt-4 font-heading text-4xl font-semibold leading-tight text-white">
                  Je suis Muriel.
                </h3>

                <p className="mt-5 text-base leading-8 text-white/65">
                  Coach intuitive, art-thérapeute et mentor Human Design,
                  j’aide les entrepreneurs à comprendre ce qui les épuise,
                  révéler leur manière naturelle de fonctionner et transformer
                  cette compréhension en actions concrètes.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {murielPrinciples.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                    >
                      <div className="flex items-center gap-3">
                        <Check
                          aria-hidden="true"
                          className="size-4 text-[var(--color-turquoise)]"
                        />

                        <p className="font-heading text-lg font-semibold text-white">
                          {item.title}
                        </p>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-white/55">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-7 font-heading text-2xl font-medium leading-relaxed text-white/80">
                  Comprendre son fonctionnement, c’est bien.
                  <span className="text-[var(--color-gold)]">
                    {" "}
                    Savoir quoi en faire lundi matin, c’est encore mieux.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}