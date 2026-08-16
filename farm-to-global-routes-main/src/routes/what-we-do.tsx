import { Link, createFileRoute } from "@tanstack/react-router";

import logistics from "@/assets/logistics.jpg";
import tasteLab from "@/assets/taste-lab.jpg";
import { PageHero } from "@/components/site/PageHero";
import { quality, services } from "@/data/site";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — Bulking, Blending, Roasting, Packing & Export" },
      {
        name: "description",
        content:
          "Bulking, blending, roasting, packing, general supply and fresh home cup deliveries — plus private label packaging and international logistics coordination.",
      },
      { property: "og:title", content: "What We Do — LeAlvin Global" },
      {
        property: "og:description",
        content:
          "Coffee services from bulking and blending to roasting, packing, private label and delivery to your port of destination.",
      },
    ],
  }),
  component: WhatWeDo,
});

function WhatWeDo() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="We source, prepare, quality-control, package and deliver."
        intro="Everything between the auction floor and your warehouse — handled by one licensed dealer, to one specification."
        image={logistics}
        imageAlt="Container port at dusk"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="eyebrow text-clay">Services</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.1] sm:text-4xl">
            Coffee prepared the way your business needs it.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-card p-8">
                <h3 className="text-xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow text-clay">Private Label & Custom Packaging</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] sm:text-4xl">
              Your brand. Our coffee and preparation.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Private labelling and packaging options are available to suit customer needs — from
              retail pouches carrying your own branding to export bags prepared to your marks and
              specification. Ideal for roasters, distributors and hospitality groups launching an own
              label programme.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              {[
                "Own-brand retail pouches: 250g, 500g, 1kg",
                "Roast profile developed and matched to your brief",
                "Export bags to your marks and net weights",
                "Blends repeated lot after lot",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-10 inline-block rounded-sm bg-primary px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Discuss private label
            </Link>
          </div>
          <div className="grid gap-6">
            <img
              src={tasteLab}
              alt="Coffee cupping in the in-house taste lab"
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-4/3 w-full rounded-sm object-cover"
            />
            <div className="rounded-sm border border-border bg-card p-8">
              <h3 className="eyebrow text-muted-foreground">Quality assurance</h3>
              <ul className="mt-5 divide-y divide-border">
                {quality.map((item) => (
                  <li key={item.title} className="py-3">
                    <p className="text-sm">{item.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-espresso py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <p className="eyebrow text-gold">Logistics</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] sm:text-4xl">
              Delivered to your port of destination.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-espresso-muted">
              Our logistics team works with international freight partners, including Africa Global
              Logistics, to keep documentation, bookings and sailings aligned. The commitment is
              simple: timely deliveries, to the destination named in the contract.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-espresso-foreground/10 bg-espresso-foreground/10 sm:grid-cols-3">
              {[
                { title: "Documentation", body: "Export paperwork prepared and checked" },
                { title: "Freight", body: "Bookings coordinated with partners" },
                { title: "Delivery", body: "To your named port of destination" },
              ].map((item) => (
                <div key={item.title} className="bg-espresso p-6">
                  <p className="text-sm text-espresso-foreground">{item.title}</p>
                  <p className="mt-1 text-xs text-espresso-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={logistics}
            alt="Shipping containers being loaded at a port"
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-4/3 w-full rounded-sm object-cover"
          />
        </div>
      </section>
    </>
  );
}
