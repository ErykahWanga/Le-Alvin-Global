interface MarqueeProps {
  items: string[];
}

/** Continuous scrolling ribbon — pure CSS animation, no layout thrash. */
export function Marquee({ items }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="surface-espresso overflow-hidden border-y border-espresso-foreground/10 py-6">
      <div className="marquee-track flex w-max items-center gap-10">
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 font-display text-2xl tracking-wide text-espresso-foreground/80 sm:text-3xl"
          >
            {item}
            <span aria-hidden className="text-gold">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
