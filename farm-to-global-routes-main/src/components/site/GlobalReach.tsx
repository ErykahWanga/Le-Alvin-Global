import { motion } from "motion/react";

import { markets } from "@/data/site";

const kenya = markets[0]!;

export function GlobalReach() {
  return (
    <section className="surface-espresso relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">Global Reach</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
            From East Africa to the World.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-espresso-muted">
            We export Kenyan Arabica internationally and import Arabica from Burundi, Uganda,
            Tanzania and Ethiopia — supplying buyers according to their own requirements, with
            operations and partners spanning Kenya, Uganda, Ethiopia, the UAE and the UK.
          </p>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-sm border border-espresso-foreground/10 bg-espresso">
          <div className="relative aspect-[16/9] w-full">
            <WorldDots />
            <svg
              viewBox="0 0 100 56"
              className="absolute inset-0 size-full"
              preserveAspectRatio="none"
              aria-hidden
            >
              {markets.slice(1).map((market, index) => {
                const x1 = kenya.x;
                const y1 = kenya.y * 0.56;
                const x2 = market.x;
                const y2 = market.y * 0.56;
                const cx = (x1 + x2) / 2;
                const cy = Math.min(y1, y2) - 6;
                return (
                  <motion.path
                    key={market.name}
                    d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth={0.25}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.2 + index * 0.25, ease: "easeInOut" }}
                  />
                );
              })}
            </svg>

            {markets.map((market, index) => (
              <motion.div
                key={market.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${market.x}%`, top: `${market.y}%` }}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
              >
                <span className="relative flex size-2.5 items-center justify-center">
                  <span className="absolute size-6 animate-ping rounded-full bg-gold/20" />
                  <span className="size-2.5 rounded-full bg-gold" />
                </span>
                <span className="absolute top-4 left-1/2 -translate-x-1/2 text-center text-[0.6rem] tracking-[0.16em] whitespace-nowrap text-espresso-foreground uppercase">
                  {market.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-espresso-foreground/10 bg-espresso-foreground/10 sm:grid-cols-2 lg:grid-cols-5">
          {markets.map((market) => (
            <div key={market.name} className="bg-espresso p-6">
              <h3 className="text-lg text-espresso-foreground">{market.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-espresso-muted">{market.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Abstract dotted landmass field — a decorative stand-in for a world map. */
function WorldDots() {
  const dots: Array<{ x: number; y: number; o: number }> = [];
  for (let row = 0; row < 26; row += 1) {
    for (let col = 0; col < 46; col += 1) {
      const x = (col / 45) * 100;
      const y = (row / 25) * 100;
      const inLand =
        // Americas
        (x > 8 && x < 30 && y > 18 && y < 78 && Math.sin(x * 0.6) + Math.cos(y * 0.4) > -1.2) ||
        // Europe / Africa
        (x > 40 && x < 66 && y > 14 && y < 82 && Math.cos(x * 0.5) + Math.sin(y * 0.3) > -1.4) ||
        // Asia / Oceania
        (x > 62 && x < 94 && y > 16 && y < 74 && Math.sin(x * 0.4) + Math.cos(y * 0.5) > -1.3);
      if (inLand) dots.push({ x, y, o: 0.16 + ((row * col) % 5) * 0.03 });
    }
  }

  return (
    <div className="absolute inset-0" aria-hidden>
      {dots.map((dot, index) => (
        <span
          key={index}
          className="absolute size-[3px] rounded-full bg-espresso-foreground"
          style={{ left: `${dot.x}%`, top: `${dot.y}%`, opacity: dot.o }}
        />
      ))}
    </div>
  );
}
