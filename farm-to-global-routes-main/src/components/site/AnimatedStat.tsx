import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

interface AnimatedStatProps {
  /** Numeric portion of the stat, e.g. 10 for "10+". */
  value: number;
  /** Text rendered immediately after the number, e.g. "+". */
  suffix?: string;
  label: string;
}

export function AnimatedStat({ value, suffix = "", label }: AnimatedStatProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(
    () =>
      spring.on("change", (latest) => {
        if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }),
    [spring, suffix],
  );

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p ref={ref} className="font-display text-3xl text-clay">
        0{suffix}
      </p>
      <p className="mt-2 text-xs tracking-wide text-muted-foreground">{label}</p>
    </motion.div>
  );
}
