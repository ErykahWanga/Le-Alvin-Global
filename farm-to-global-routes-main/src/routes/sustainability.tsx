import { createFileRoute } from "@tanstack/react-router";

import farmers from "@/assets/farmers.jpg";
import { PageHero } from "@/components/site/PageHero";
import { sustainability } from "@/data/site";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability & Community — Farmer and Youth Empowerment" },
      {
        name: "description",
        content:
          "Training farmers, promoting speciality coffee production, reviving coffee availability and empowering youth in the Kenyan coffee industry.",
      },
      { property: "og:title", content: "Sustainability & Community — LeAlvin Global" },
      {
        property: "og:description",
        content: "Growing communities, sustaining coffee: farmers, youth and speciality production.",
      },
    ],
  }),
  component: Sustainability,
});

function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability & Community"
        title="Growing communities. Sustaining coffee."
        intro="Coffee only has a future where farming has one. We train farmers, promote speciality production, support coffee revival and create openings for young people."
        image={farmers}
        imageAlt="Farmer training session on a coffee farm"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="eyebrow text-clay">Our commitments</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl">
            Growing more than coffee.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {sustainability.map((item) => (
              <article key={item.title} className="rounded-sm border border-border bg-card p-8">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-espresso py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-10">
          <img
            src={farmers}
            alt="Agronomist training coffee farmers"
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-4/3 w-full rounded-sm object-cover"
          />
          <div>
            <p className="eyebrow text-gold">Farmer support</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] sm:text-4xl">
              Better farming makes better coffee.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-espresso-muted">
              We work directly with farmers on agronomy, harvesting discipline and post-harvest
              handling, so that more of the crop reaches speciality standard and more of the value
              returns to the people who grew it. Improving availability and quality at the same time
              is what keeps Kenyan coffee competitive.
            </p>
            <ul className="mt-10 divide-y divide-espresso-foreground/10 border-y border-espresso-foreground/10">
              {[
                "Training and extension support for growers",
                "Promotion of speciality coffee production",
                "Initiatives to revive and improve coffee availability",
                "Opportunities for youth entering the coffee industry",
              ].map((item) => (
                <li key={item} className="py-4 text-sm text-espresso-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
