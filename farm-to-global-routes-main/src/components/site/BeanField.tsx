import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

import beanA from "@/assets/bean-a.png";
import beanB from "@/assets/bean-b.png";

type Bean = {
  src: string;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  spin: number;
  reverse: boolean;
};

const SPRITES = [beanA, beanB];

/** Deterministic pseudo-random so SSR and client render the same field. */
function rand(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function makeLayer(count: number, seed: number, min: number, max: number): Bean[] {
  return Array.from({ length: count }, (_, i) => {
    const s = seed * 100 + i * 7;
    return {
      src: SPRITES[i % SPRITES.length] as string,
      left: rand(s + 1) * 100,
      top: rand(s + 2) * 100,
      size: min + rand(s + 3) * (max - min),
      delay: -rand(s + 4) * 40,
      duration: 26 + rand(s + 5) * 26,
      spin: 18 + rand(s + 6) * 24,
      reverse: rand(s + 7) > 0.5,
    };
  });
}

const LAYERS = [
  { beans: makeLayer(22, 1, 14, 26), blur: 5, opacity: 0.34, parallax: 40, spinBoost: 90 },
  { beans: makeLayer(16, 2, 30, 52), blur: 1.6, opacity: 0.5, parallax: 90, spinBoost: 160 },
  { beans: makeLayer(9, 3, 58, 96), blur: 0, opacity: 0.62, parallax: 160, spinBoost: 240 },
];

/**
 * Cinematic, scroll-reactive cloud of roasted coffee beans.
 * Three depth layers drift and tumble continuously; scroll adds parallax and spin.
 */
export function BeanField() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 24, mass: 0.5 });

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-espresso" />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 12%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%), radial-gradient(70% 60% at 82% 88%, color-mix(in oklab, var(--clay) 18%, transparent), transparent 72%)",
        }}
      />

      {LAYERS.map((layer, index) => (
        <BeanLayer key={index} layer={layer} progress={smooth} reduced={Boolean(reduced)} />
      ))}

      {/* Vignette keeps content legible over the field */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 40%, transparent 0%, color-mix(in oklab, var(--espresso) 72%, transparent) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "color-mix(in oklab, var(--espresso) 45%, transparent)" }}
      />
    </div>
  );
}

function BeanLayer({
  layer,
  progress,
  reduced,
}: {
  layer: (typeof LAYERS)[number];
  progress: import("motion/react").MotionValue<number>;
  reduced: boolean;
}) {
  const y = useTransform(progress, [0, 1], [0, reduced ? 0 : -layer.parallax]);
  const rotate = useTransform(progress, [0, 1], [0, reduced ? 0 : layer.spinBoost]);

  return (
    <motion.div
      className="absolute inset-[-12%]"
      style={{ y, filter: layer.blur ? `blur(${layer.blur}px)` : undefined }}
    >
      {layer.beans.map((bean, i) => (
        <motion.span
          key={i}
          className="absolute block"
          style={{
            left: `${bean.left.toFixed(3)}%`,
            top: `${bean.top.toFixed(3)}%`,
            width: `${bean.size.toFixed(2)}px`,
            height: `${bean.size.toFixed(2)}px`,
            opacity: layer.opacity,
            rotate,
          }}
        >
          <img
            src={bean.src}
            alt=""
            loading="lazy"
            decoding="async"
            width={816}
            height={816}
            className="size-full object-contain will-change-transform"
            style={
              reduced
                ? undefined
                : {
                    animationName: "bean-drift, bean-tumble",
                    animationDuration: `${bean.duration.toFixed(2)}s, ${bean.spin.toFixed(2)}s`,
                    animationTimingFunction: "ease-in-out, linear",
                    animationDelay: `${bean.delay.toFixed(2)}s, ${bean.delay.toFixed(2)}s`,
                    animationIterationCount: "infinite, infinite",
                    animationDirection: `normal, ${bean.reverse ? "reverse" : "normal"}`,
                  }
            }
          />
        </motion.span>

      ))}
    </motion.div>
  );
}
