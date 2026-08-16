import { Link, createFileRoute } from "@tanstack/react-router";

import estateAsset from "@/assets/maggie-estate.jpg";
import { JourneySection } from "@/components/site/JourneySection";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/farm")({
  head: () => ({
    meta: [
      { title: "Maggie Estate — Our Own Coffee Farm in Kenya | LeAlvin Global" },
      {
        name: "description",
        content:
          "At Maggie Estate we grow, harvest, process and market our own Kenyan coffee — the origin story behind every LeAlvin Global shipment.",
      },
      { property: "og:title", content: "Maggie Estate — LeAlvin Global" },
      {
        property: "og:description",
        content:
          "Grown, harvested, processed and marketed by us: the farm at the centre of our coffee story.",
      },
    ],
  }),
  component: Farm,
});

const pillars = [
  { title: "Grown", body: "Coffee cultivated on our own land, managed for cup quality rather than volume alone." },
  { title: "Harvested", body: "Ripe cherry selectively picked and moved quickly to processing." },
  { title: "Processed", body: "Pulped, fermented, washed and dried under our own supervision." },
  { title: "Marketed", body: "Our own produce marketed directly to buyers, with full traceability." },
];

function Farm() {
  return (
    <>
      <PageHero
        eyebrow="Our Farm"
        title="Maggie Estate — where our coffee story starts."
        intro="We do not only buy coffee from others. At Maggie Estate we grow it, harvest it, process it and market our own produce."
        image={estateAsset}
        imageAlt="Maggie Estate coffee farm"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
          <img
            src={estateAsset}
            alt="Rows of coffee trees at Maggie Estate"
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-4/5 w-full rounded-sm object-cover shadow-elevated"
          />
          <div>
            <p className="eyebrow text-clay">From our estate</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] sm:text-4xl">
              Owning the origin changes what we can promise.
            </h2>
            <div className="gold-rule mt-8" />
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Because we farm as well as trade, we understand a lot before it is ever offered to a
              buyer: how it was picked, how it was processed, how it dried and how it cups. That
              knowledge carries into everything we source at auction and import from the region.
            </p>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {pillars.map((pillar) => (
                <li key={pillar.title} className="py-5">
                  <p className="text-lg">{pillar.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{pillar.body}</p>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-10 inline-block rounded-sm bg-primary px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Request estate samples
            </Link>
          </div>
        </div>
      </section>

      <JourneySection />
    </>
  );
}
