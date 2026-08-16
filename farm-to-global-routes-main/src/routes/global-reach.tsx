import { createFileRoute } from "@tanstack/react-router";

import logistics from "@/assets/logistics.jpg";
import { GlobalReach } from "@/components/site/GlobalReach";
import { PageHero } from "@/components/site/PageHero";
import { audiences } from "@/data/site";

export const Route = createFileRoute("/global-reach")({
  head: () => ({
    meta: [
      { title: "Global Reach — Exporting Kenyan Coffee Worldwide | LeAlvin Global" },
      {
        name: "description",
        content:
          "Exporters and importers of coffee internationally: Kenyan Arabica exports, East African sourcing and operations spanning Kenya, Uganda, Ethiopia, the UAE and the UK.",
      },
      { property: "og:title", content: "Global Reach — LeAlvin Global" },
      {
        property: "og:description",
        content: "From East Africa to the world — international coffee export and import.",
      },
    ],
  }),
  component: GlobalReachPage,
});

function GlobalReachPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Reach"
        title="Exporters and importers of coffee, internationally."
        intro="We export Kenyan original Arabica around the world and import Arabica from Burundi, Uganda, Tanzania and Ethiopia, exporting according to customer requirements."
        image={logistics}
        imageAlt="International container port"
      />

      <GlobalReach />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="eyebrow text-clay">Who we work with</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl">
            One supplier, several markets.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <div key={audience} className="rounded-sm border border-border bg-card p-6 text-sm">
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
