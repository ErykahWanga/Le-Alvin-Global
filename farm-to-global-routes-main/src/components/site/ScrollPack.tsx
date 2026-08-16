import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

import packBack from "@/assets/pack-back.png";
import packFront from "@/assets/pack-front.png";

const stages = [
  { label: "Front", note: "Single origin, fully traceable" },
  { label: "Side", note: "Bulked to container quantity" },
  { label: "Back", note: "Cup-cleared by certified liquorers" },
  { label: "Side", note: "Private label & custom packaging" },
];

/**
 * Scroll-driven 360° rotation of the LeAlvin pack.
 * Built with CSS 3D transforms so it stays light and works without WebGL.
 */
export function ScrollPack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });
  const rotateY = useTransform(smooth, [0, 1], [0, 360]);
  const scale = useTransform(smooth, [0, 0.5, 1], [0.94, 1.03, 0.94]);
  const glow = useTransform(smooth, [0, 0.5, 1], [0.25, 0.6, 0.25]);
  const activeIndex = useTransform(smooth, (v) => Math.min(3, Math.floor(v * 4)));

  return (
    <section ref={sectionRef} className="surface-espresso relative h-[320vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute top-1/2 left-1/2 size-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <div className="order-2 lg:order-1">
            <p className="eyebrow text-gold">The LeAlvin Pack</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Every side of the
              <span className="block text-gold">same standard.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-espresso-muted">
              Scroll to turn the pack. Whatever the format — 60kg jute for importers or a private
              label retail pouch — the coffee inside is graded, cupped and cleared to the same
              specification.
            </p>

            <ul className="mt-10 space-y-4">
              {stages.map((stage, index) => (
                <StageRow key={index} index={index} activeIndex={activeIndex} note={stage.note} />
              ))}
            </ul>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div
              className="relative h-[46vh] w-[min(58vw,340px)] sm:h-[56vh]"
              style={{ perspective: "1400px" }}
            >
              <motion.div
                className="relative size-full"
                style={{ rotateY, scale, transformStyle: "preserve-3d" }}
              >
                <PackFace src={packFront} alt="LeAlvin Global coffee pack, front" depth={34} />
                <PackFace src={packBack} alt="LeAlvin Global coffee pack, back" depth={-34} flipped />
                <Gusset rotate={90} depth={34} />
                <Gusset rotate={-90} depth={34} />
              </motion.div>
              <motion.div
                aria-hidden
                className="absolute -bottom-8 left-1/2 h-10 w-2/3 -translate-x-1/2 rounded-full bg-gold blur-2xl"
                style={{ opacity: glow }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PackFace({
  src,
  alt,
  depth,
  flipped = false,
}: {
  src: string;
  alt: string;
  depth: number;
  flipped?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      width={1008}
      height={1408}
      className="absolute inset-0 size-full object-contain drop-shadow-2xl [backface-visibility:hidden]"
      style={{
        transform: `translateZ(${depth}px)${flipped ? " rotateY(180deg)" : ""}`,
      }}
    />
  );
}

function Gusset({ rotate, depth }: { rotate: number; depth: number }) {
  return (
    <div
      aria-hidden
      className="absolute inset-y-[4%] left-1/2 w-[68px] rounded-sm"
      style={{
        transform: `translateX(-50%) rotateY(${rotate}deg) translateZ(${depth}px)`,
        backgroundImage:
          "linear-gradient(90deg, oklch(0.16 0.03 42) 0%, oklch(0.24 0.045 44) 18%, oklch(0.32 0.055 48) 50%, oklch(0.22 0.04 44) 82%, oklch(0.14 0.025 42) 100%)",
        boxShadow: "inset 0 0 0 1px oklch(0.72 0.11 82 / 0.28)",
      }}
    />
  );
}


function StageRow({
  index,
  activeIndex,
  note,
}: {
  index: number;
  activeIndex: import("motion/react").MotionValue<number>;
  note: string;
}) {
  const opacity = useTransform(activeIndex, (v) => (v === index ? 1 : 0.35));
  const width = useTransform(activeIndex, (v) => (v === index ? "3.5rem" : "1rem"));

  return (
    <motion.li className="flex items-center gap-4" style={{ opacity }}>
      <motion.span className="h-px bg-gold" style={{ width }} />
      <span className="text-sm text-espresso-foreground">{note}</span>
    </motion.li>
  );
}
