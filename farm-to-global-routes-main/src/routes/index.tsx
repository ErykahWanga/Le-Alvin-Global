import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import estateAsset from "@/assets/maggie-estate.jpg";
import greenCoffee from "@/assets/green-coffee.jpg";
import hero from "@/assets/hero-estate.jpg";
import tasteLab from "@/assets/taste-lab.jpg";
import { GlobalReach } from "@/components/site/GlobalReach";
import { JourneySection } from "@/components/site/JourneySection";
import { ScrollPack } from "@/components/site/ScrollPack";
import { company, products, quality, services, sustainability } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LeAlvin Global — African Origin. Global Reach. Exceptional Coffee." },
      {
        name: "description",
        content:
          "Licensed Kenyan coffee dealer sourcing, processing, roasting, packing and exporting Kenyan and East African coffee to international buyers.",
      },
      { property: "og:title", content: "LeAlvin Global — East African Coffee Export & Trade" },
      {
        property: "og:description",
        content:
          "From Maggie Estate and the Kenyan auction to your port of destination — green and roasted coffee, cup-cleared by certified liquorers.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="surface-espresso relative isolate flex min-h-screen items-end overflow-hidden">
        <img
          src={hero}
          alt="Ripe coffee cherries on a Kenyan highland estate at sunrise"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-40 pb-20 lg:px-10 lg:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-gold"
          >
            Kenya · East Africa · Global Markets
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] text-balance-tight sm:text-6xl lg:text-8xl"
          >
            African Origin.
            <span className="block text-gold">Global Reach.</span>
            Exceptional Coffee.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-xl text-sm leading-relaxed text-espresso-muted lg:text-base"
          >
            {company.brand} sources, processes, cups, roasts, packs and exports Kenyan and East
            African coffee — connecting responsibly sourced African origin with buyers around the
            world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/coffee"
              className="rounded-sm bg-gold px-7 py-4 text-[0.7rem] font-semibold tracking-[0.2em] text-gold-foreground uppercase transition-opacity hover:opacity-90"
            >
              Explore our coffee
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border border-espresso-foreground/30 px-7 py-4 text-[0.7rem] font-semibold tracking-[0.2em] text-espresso-foreground uppercase transition-colors hover:border-gold hover:text-gold"
            >
              Partner with us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow text-clay">Le Alvin Enterprises Limited</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
              From African soil to global markets.
            </h2>
            <div className="gold-rule mt-8" />
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Registered under Kenya's Companies Act and licensed as a coffee dealer, we buy through
              the Kenyan coffee auction, grow our own coffee at Maggie Estate and import Arabica
              from Burundi, Uganda, Tanzania and Ethiopia. Every lot is milled, graded and cup-cleared
              before it leaves for a customer's port of destination.
            </p>
            <p className="mt-6 font-display text-2xl">{company.slogan}</p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { value: "10+", label: "Coffee grades" },
                { value: "5", label: "Sourcing origins" },
                { value: "1", label: "Own estate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-clay">{stat.value}</p>
                  <p className="mt-2 text-xs tracking-wide text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={estateAsset}
              alt="Maggie Estate coffee farm in Kenya"
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-4/5 w-full rounded-sm object-cover shadow-elevated"
            />
            <div className="absolute -bottom-6 -left-6 hidden bg-card p-6 shadow-elevated lg:block">
              <p className="eyebrow text-muted-foreground">Our estate</p>
              <p className="mt-2 font-display text-2xl">Maggie Estate</p>
            </div>
          </div>
        </div>
      </section>

      <ScrollPack />

      {/* Products */}
      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-clay">Our Coffee</p>
              <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.05] sm:text-5xl">
                Green and roasted coffee, graded to your brief.
              </h2>
            </div>
            <Link
              to="/coffee"
              className="group inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-[0.7rem] font-semibold tracking-[0.2em] uppercase"
            >
              All products
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.article
                key={product.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className="group flex flex-col justify-between rounded-sm border border-border bg-card p-8 transition-colors hover:border-accent"
              >
                <div>
                  <h3 className="text-2xl">{product.name}</h3>
                  <p className="mt-2 text-xs tracking-wide text-muted-foreground">
                    {product.origin}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {product.note}
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {product.grades.slice(0, 5).map((grade) => (
                    <span
                      key={grade}
                      className="rounded-sm bg-secondary px-2.5 py-1 text-[0.65rem] tracking-[0.14em] text-secondary-foreground uppercase"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <JourneySection />

      {/* Quality */}
      <section className="surface-espresso py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-10">
          <img
            src={tasteLab}
            alt="Certified liquorer cupping coffee samples in the LeAlvin taste lab"
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-4/3 w-full rounded-sm object-cover"
          />
          <div>
            <p className="eyebrow text-gold">Quality Is Us</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
              Quality you can taste.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-espresso-muted">
              Our in-house professional taste lab exists for one reason: so that what you approve in
              the sample is what arrives at your port. Certified liquorers sample and cup each lot,
              with strict attention to detail and adherence to coffee board rules and regulations.
            </p>
            <ul className="mt-10 divide-y divide-espresso-foreground/10 border-y border-espresso-foreground/10">
              {quality.map((item) => (
                <li key={item.title} className="py-4">
                  <p className="text-espresso-foreground">{item.title}</p>
                  <p className="mt-1 text-xs text-espresso-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="eyebrow text-clay">What We Do</p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.05] sm:text-5xl">
            Sourcing, preparation and supply — handled end to end.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-card p-8">
                <h3 className="text-xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalReach />

      {/* Sustainability */}
      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="eyebrow text-clay">Sustainability & Community</p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.05] sm:text-5xl">
            Growing more than coffee.
          </h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {sustainability.map((item) => (
              <div key={item.title} className="rounded-sm border border-border bg-card p-8">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden">
        <img
          src={greenCoffee}
          alt="Jute sacks of Kenyan green coffee in an export warehouse"
          loading="lazy"
          width={1280}
          height={960}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/80" />
        <div className="relative mx-auto max-w-3xl px-5 py-28 text-center lg:px-10">
          <h2 className="font-display text-4xl leading-[1.05] text-espresso-foreground sm:text-5xl">
            Ready to source with us?
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-espresso-muted">
            Tell us the origin, grade, quantity and packaging you need. Our trade desk will respond
            with availability, samples and pricing to your port of destination.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block rounded-sm bg-gold px-8 py-4 text-[0.7rem] font-semibold tracking-[0.2em] text-gold-foreground uppercase transition-opacity hover:opacity-90"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
