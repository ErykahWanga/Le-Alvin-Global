export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="surface-espresso relative isolate overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        width={1280}
        height={960}
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-espresso/60" />
      <div className="relative mx-auto max-w-7xl px-5 pt-40 pb-24 lg:px-10 lg:pt-48 lg:pb-32">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.03] text-balance-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-espresso-muted lg:text-base">
          {intro}
        </p>
      </div>
    </section>
  );
}
