import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import greenCoffee from "@/assets/green-coffee.jpg";
import retailFlyer from "@/assets/lealvin-coffee-flyer.png";
import retailVideo from "@/assets/lealvin-coffee-retail.mp4";
import { BeanField } from "@/components/site/BeanField";
import { PageHero } from "@/components/site/PageHero";
import { company, grades, products } from "@/data/site";

export const Route = createFileRoute("/coffee")({
  head: () => ({
    meta: [
      { title: "Our Coffee — Kenyan Arabica, Ugandan Robusta & Green Coffee Grades" },
      {
        name: "description",
        content:
          "Kenyan Arabica AA, AB, PB, C, TT, T, UG, MH, ML and Ugandan Robusta — green and freshly roasted coffee supplied to international buyers.",
      },
      { property: "og:title", content: "Our Coffee — LeAlvin Global" },
      {
        property: "og:description",
        content:
          "Explore origins, grades, processing and packaging options, then request a quotation for your programme.",
      },
    ],
  }),
  component: Coffee,
});

function Coffee() {
  const [open, setOpen] = useState<string | null>(products[0]?.slug ?? null);

  return (
    <>
      <PageHero
        eyebrow="Our Coffee"
        title="Origins, grades and formats — select what fits your programme."
        intro="We deal in a full range of Kenyan grades alongside imported East African Arabica and Ugandan Robusta, supplied as green beans or freshly roasted coffee."
        image={greenCoffee}
        imageAlt="Jute sacks of Kenyan green coffee beans"
      />

      <div className="surface-espresso relative isolate overflow-hidden">
        <BeanField />

        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="divide-y divide-espresso-foreground/15 border-y border-espresso-foreground/15">
              {products.map((product) => {
                const isOpen = open === product.slug;
                return (
                  <article key={product.slug}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : product.slug)}
                      aria-expanded={isOpen}
                      className="flex w-full items-baseline justify-between gap-6 py-8 text-left"
                    >
                      <span>
                        <h2 className="font-display text-3xl sm:text-4xl">{product.name}</h2>
                        <span className="mt-2 block text-xs tracking-wide text-espresso-muted">
                          {product.origin}
                        </span>
                      </span>
                      <span className="eyebrow shrink-0 text-gold">
                        {isOpen ? "Close" : "Details"}
                      </span>
                    </button>

                    {isOpen ? (
                      <div className="grid gap-8 pb-10 lg:grid-cols-[1.2fr_1fr]">
                        <div>
                          <p className="text-sm leading-relaxed text-espresso-muted lg:text-base">
                            {product.note}
                          </p>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {product.grades.map((grade) => (
                              <span
                                key={grade}
                                className="rounded-sm bg-espresso-foreground/10 px-3 py-1.5 text-[0.65rem] tracking-[0.16em] text-espresso-foreground uppercase"
                              >
                                {grade}
                              </span>
                            ))}
                          </div>
                          <Link
                            to="/contact"
                            className="mt-8 inline-block rounded-sm bg-gold px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] text-gold-foreground uppercase transition-opacity hover:opacity-90"
                          >
                            Request quotation
                          </Link>
                        </div>
                        <dl className="divide-y divide-espresso-foreground/15 rounded-sm border border-espresso-foreground/15 bg-espresso/70 p-6 backdrop-blur-sm">
                          {[
                            ["Processing", product.processing],
                            ["Availability", product.availability],
                            ["Packaging", product.packaging],
                          ].map(([label, value]) => (
                            <div key={label} className="py-3 first:pt-0 last:pb-0">
                              <dt className="text-xs tracking-wide text-espresso-muted">{label}</dt>
                              <dd className="mt-1 text-sm">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <p className="eyebrow text-gold">Grade reference</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl">
              The grades we deal in.
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-espresso-foreground/15 bg-espresso-foreground/15 sm:grid-cols-2 lg:grid-cols-5">
              {grades.map((grade) => (
                <div key={grade.code} className="bg-espresso/80 p-6 backdrop-blur-sm">
                  <p className="font-display text-2xl text-gold">{grade.code}</p>
                  <p className="mt-2 text-xs leading-relaxed text-espresso-muted">{grade.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="relative bg-sand py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
            <video
              src={retailVideo}
              autoPlay
              loop
              muted
              playsInline
              aria-label="Le-Alvin Coffee Dark Roast and Medium Roast retail pouches"
              className="aspect-9/16 w-full rounded-sm object-cover shadow-elevated"
            />
            <img
              src={retailFlyer}
              alt="Le-Alvin Coffee retail flyer — Dark Roast and Medium Roast, 100% Arabica"
              loading="lazy"
              width={672}
              height={1581}
              className="absolute -right-8 -bottom-10 hidden w-32 rounded-sm shadow-elevated ring-4 ring-background sm:block lg:-right-10 lg:w-40"
            />
          </div>
          <div>
            <p className="eyebrow text-clay">Le-Alvin Coffee — Retail Line</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.05] sm:text-5xl">
              The same coffee, roasted and packed for your cup.
            </h2>
            <div className="gold-rule mt-8" />
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Beyond bulk export, we roast, pack and deliver under our own Le-Alvin Coffee label
              — Dark Roast and Medium Roast, 100% Arabica, prepared to the same standard as every
              export lot and sealed in retail-ready pouches.
            </p>
            <p className="mt-6 font-display text-2xl text-clay">{company.slogan}</p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              {[
                "Dark Roast & Medium Roast, ground or whole bean",
                "250g / 500g / 1kg retail pouches, private label available",
                "Fresh home cup deliveries for homes, offices and hospitality",
                "Licensed by the Coffee Board of Kenya",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-10 inline-block rounded-sm bg-gold px-7 py-4 text-[0.7rem] font-semibold tracking-[0.2em] text-gold-foreground uppercase transition-opacity hover:opacity-90"
            >
              Order Le-Alvin Coffee
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}