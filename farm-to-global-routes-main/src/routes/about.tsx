import { createFileRoute } from "@tanstack/react-router";

import estateAsset from "@/assets/maggie-estate.jpg";
import { PageHero } from "@/components/site/PageHero";
import { audiences, company } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LeAlvin Global — Licensed Kenyan Coffee Dealer & Exporter" },
      {
        name: "description",
        content:
          "Le Alvin Enterprises Limited, trading as Le-Alvin Coffee: a licensed Kenyan coffee dealer sourcing at auction, growing at Maggie Estate and exporting worldwide.",
      },
      { property: "og:title", content: "About LeAlvin Global" },
      {
        property: "og:description",
        content:
          "Who we are: a registered Kenyan coffee dealer, exporter and importer built around quality and international trade.",
      },
    ],
  }),
  component: About,
});

const facts = [
  { label: "Legal entity", value: company.legalName },
  { label: "Trading identity", value: company.tradingName },
  { label: company.ceoTitle, value: company.ceo },
  { label: "Licence", value: "Registered coffee dealer, Kenya" },
  { label: "Head office", value: "Nairobi, Kenya" },
  { label: "Website", value: company.website },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Kenyan coffee house built for international trade."
        intro="Le Alvin Enterprises Limited is registered under Kenya's Companies Act and licensed through the coffee regulatory framework to operate as a coffee dealer — sourcing through local auctions and handling exports and imports."
        image={estateAsset}
        imageAlt="Coffee trees at Maggie Estate"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.2fr_1fr] lg:px-10">
          <div>
            <p className="eyebrow text-clay">Who we are</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] sm:text-4xl">
              Not a coffee shop. A coffee trading, processing and export business.
            </h2>
            <div className="gold-rule mt-8" />
            <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground lg:text-base">
              <p>
                We operate across the full length of the coffee chain: buying through the Kenyan
                coffee auction, growing and processing our own coffee at Maggie Estate, importing
                Arabica from Burundi, Uganda, Tanzania and Ethiopia, and exporting Kenyan original
                Arabica to customers around the world.
              </p>
              <p>
                Inside the business we keep our own quality function — a professional taste lab where
                certified liquorers sample and cup coffee so that each shipment meets the customer's
                expectations and complies with coffee board rules and regulations.
              </p>
              <p>
                Beyond trade, we work with farmers: training, promoting speciality coffee production,
                improving availability, reviving coffee and encouraging youth to enter the industry.
              </p>
              <p className="font-display text-2xl text-foreground">{company.slogan}</p>
            </div>
          </div>

          <aside className="h-fit rounded-sm border border-border bg-card p-8">
            <h3 className="eyebrow text-muted-foreground">Company facts</h3>
            <dl className="mt-6 divide-y divide-border">
              {facts.map((fact) => (
                <div key={fact.label} className="py-4">
                  <dt className="text-xs tracking-wide text-muted-foreground">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="surface-espresso py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="eyebrow text-gold">Who we supply</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl">
            Built for buyers who need consistency at volume.
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-espresso-foreground/10 bg-espresso-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <li key={audience} className="bg-espresso p-6 text-sm text-espresso-foreground">
                {audience}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
