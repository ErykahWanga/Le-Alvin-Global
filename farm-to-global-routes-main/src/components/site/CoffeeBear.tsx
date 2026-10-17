import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type CoffeeBearProps = {
  className?: string;
  /** Raises the left paw and waves hello. */
  waving?: boolean;
  /** Quicker head tilt and wandering eyes while "thinking". */
  thinking?: boolean;
  /** Gentle floating bob of the whole bear. */
  float?: boolean;
};

const ease = "easeInOut" as const;

const VIEW_W = 120;
const VIEW_H = 132;

/**
 * Pivot for rotate/scale, in SVG user units. motion ignores a plain
 * `transformOrigin` style, so the origin goes through originX / originY
 * (fractions of the viewBox, because transform-box is `view-box`).
 */
const around = (x: number, y: number) => ({
  transformBox: "view-box" as const,
  originX: x / VIEW_W,
  originY: y / VIEW_H,
});

/**
 * Beanie — the LeAlvin coffee bear. Pure SVG, animated with motion:
 * floating bob, ear wiggle, blinking, drifting steam, a waving paw and a
 * "thinking" state. All motion switches off for prefers-reduced-motion.
 */
export function CoffeeBear({
  className,
  waving = false,
  thinking = false,
  float = true,
}: CoffeeBearProps) {
  const reduce = useReducedMotion() ?? false;
  const animated = !reduce;

  return (
    <motion.svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      role="img"
      aria-label="Beanie, the LeAlvin coffee bear"
      className={cn("block overflow-visible", className)}
      animate={animated && float ? { y: [0, -3, 0] } : { y: 0 }}
      transition={{ duration: 3.4, repeat: Infinity, ease }}
    >
      {/* soft ground shadow */}
      <ellipse cx="60" cy="128" rx="30" ry="3" className="bear-ink" opacity="0.12" />

      {/* body */}
      <ellipse cx="60" cy="102" rx="29" ry="25" className="bear-fur" />
      <ellipse cx="60" cy="106" rx="17" ry="15" className="bear-muzzle" opacity="0.85" />

      {/* feet */}
      <ellipse cx="42" cy="125" rx="10" ry="5.5" className="bear-fur-dark" />
      <ellipse cx="78" cy="125" rx="10" ry="5.5" className="bear-fur-dark" />

      {/* left arm — waves hello */}
      <motion.g
        style={around(38, 98)}
        animate={animated && waving ? { rotate: [0, 88, 60, 92, 60, 88, 0] } : { rotate: 0 }}
        transition={
          waving
            ? { duration: 2, ease, times: [0, 0.18, 0.34, 0.5, 0.66, 0.82, 1] }
            : { duration: 0.35, ease }
        }
      >
        <path
          d="M38 98 Q27 104 25 114"
          fill="none"
          strokeWidth="16"
          strokeLinecap="round"
          className="bear-stroke-fur-dark"
        />
        <path
          d="M38 98 Q27 104 25 114"
          fill="none"
          strokeWidth="13.5"
          strokeLinecap="round"
          className="bear-stroke-fur"
        />
        <circle cx="25" cy="115" r="3.4" className="bear-ear" opacity="0.7" />
      </motion.g>

      {/* coffee cup */}
      <g>
        <path
          d="M82 106 q10 0 10 8 q0 8 -10 8"
          fill="none"
          strokeWidth="3.4"
          strokeLinecap="round"
          className="bear-stroke-cup"
        />
        <path d="M45 103 h30 v11 a15 15 0 0 1 -30 0 z" className="bear-cup" />
        <path
          d="M45 113 h30"
          fill="none"
          strokeWidth="2"
          style={{ stroke: "var(--gold)" }}
          opacity="0.9"
        />
        <path
          d="M60 124 c-4.5 -3 -6.5 -5 -6.5 -7.2 a3.3 3.3 0 0 1 6.5 -0.8 a3.3 3.3 0 0 1 6.5 0.8 c0 2.2 -2 4.2 -6.5 7.2 z"
          className="bear-ear"
        />
        <ellipse cx="60" cy="103" rx="15" ry="3.8" className="bear-cup" />
        <ellipse cx="60" cy="103.4" rx="12.6" ry="2.7" className="bear-coffee" />
      </g>

      {/* right arm + paw gripping the cup */}
      <path
        d="M82 97 Q92 104 85 112"
        fill="none"
        strokeWidth="16"
        strokeLinecap="round"
        className="bear-stroke-fur-dark"
      />
      <path
        d="M82 97 Q92 104 85 112"
        fill="none"
        strokeWidth="13.5"
        strokeLinecap="round"
        className="bear-stroke-fur"
      />

      {/* steam */}
      {[
        { x: 52, delay: 0 },
        { x: 60, delay: 0.7 },
        { x: 68, delay: 1.4 },
      ].map((wisp) => (
        <motion.path
          key={wisp.x}
          d={`M${wisp.x} 97 q-3.5 -4.5 0 -9 t0 -9`}
          fill="none"
          strokeWidth="2.2"
          strokeLinecap="round"
          style={{ stroke: "var(--clay)" }}
          initial={{ opacity: 0, y: 0 }}
          animate={animated ? { opacity: [0, 0.85, 0], y: [3, -4, -11] } : { opacity: 0.55, y: 0 }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: wisp.delay,
            ease: "easeOut",
            times: [0, 0.4, 1],
          }}
        />
      ))}

      {/* head */}
      <motion.g
        style={around(60, 74)}
        animate={animated ? { rotate: thinking ? [-7, 7, -7] : [-2, 2, -2] } : { rotate: 0 }}
        transition={{ duration: thinking ? 1.1 : 4.2, repeat: Infinity, ease }}
      >
        {/* ears */}
        <motion.g
          style={around(30, 38)}
          animate={animated ? { rotate: [0, -9, 0, 5, 0] } : { rotate: 0 }}
          transition={{ duration: 5, repeat: Infinity, ease, repeatDelay: 2 }}
        >
          <circle cx="29" cy="27" r="13" className="bear-fur" />
          <circle cx="29" cy="28" r="7" className="bear-ear" />
        </motion.g>
        <motion.g
          style={around(90, 38)}
          animate={animated ? { rotate: [0, 9, 0, -5, 0] } : { rotate: 0 }}
          transition={{ duration: 5, repeat: Infinity, ease, repeatDelay: 2, delay: 0.4 }}
        >
          <circle cx="91" cy="27" r="13" className="bear-fur" />
          <circle cx="91" cy="28" r="7" className="bear-ear" />
        </motion.g>

        {/* face */}
        <ellipse cx="60" cy="50" rx="35" ry="29" className="bear-fur" />

        {/* cheeks */}
        <circle cx="39" cy="58" r="5.5" className="bear-blush" opacity="0.55" />
        <circle cx="81" cy="58" r="5.5" className="bear-blush" opacity="0.55" />

        {/* muzzle */}
        <ellipse cx="60" cy="60" rx="15" ry="11" className="bear-muzzle" />

        {/* eyes */}
        <motion.g
          style={around(60, 46)}
          animate={
            animated
              ? { scaleY: [1, 1, 0.08, 1, 1], x: thinking ? [0, 2.5, 0, -2.5, 0] : 0 }
              : { scaleY: 1, x: 0 }
          }
          transition={{
            scaleY: { duration: 4, repeat: Infinity, times: [0, 0.46, 0.5, 0.54, 1], ease },
            x: { duration: 1.6, repeat: Infinity, ease },
          }}
        >
          <ellipse cx="46" cy="46" rx="3.6" ry="4.2" className="bear-ink" />
          <ellipse cx="74" cy="46" rx="3.6" ry="4.2" className="bear-ink" />
          <circle cx="47.2" cy="44.4" r="1.2" fill="white" />
          <circle cx="75.2" cy="44.4" r="1.2" fill="white" />
        </motion.g>

        {/* nose + smile */}
        <ellipse cx="60" cy="55.5" rx="5.2" ry="3.6" className="bear-ink" />
        <ellipse cx="58.6" cy="54.4" rx="1.5" ry="0.9" fill="white" opacity="0.55" />
        <path
          d="M60 59 v2.4 M60 61.4 q-4.5 4.2 -8.5 0 M60 61.4 q4.5 4.2 8.5 0"
          fill="none"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="bear-stroke-ink"
        />
      </motion.g>
    </motion.svg>
  );
}
