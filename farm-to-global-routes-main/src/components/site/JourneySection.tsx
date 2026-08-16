import { motion } from "motion/react";

import { journey } from "@/data/site";

export function JourneySection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <p className="eyebrow text-clay">Our Journey</p>
        <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.05] sm:text-5xl">
          From farm to port, under one roof.
        </h2>
        <div className="gold-rule mt-8" />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((stage, index) => (
            <motion.li
              key={stage.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
              className="group bg-card p-8 transition-colors hover:bg-sand"
            >
              <span className="font-display text-3xl text-accent">{stage.step}</span>
              <h3 className="mt-4 text-xl">{stage.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
            </motion.li>
          ))}
          <li className="hidden bg-card p-8 lg:block">
            <span className="eyebrow text-muted-foreground">Coffee Is Us</span>
            <p className="mt-4 font-display text-2xl">Quality Is Us.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
