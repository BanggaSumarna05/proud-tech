import { useEffect, useRef, useState } from "react";
import { useInView, useSpring, useTransform, motion } from "motion/react";

interface NumberCounterProps {
  value: number;
  duration?: number;
  className?: string;
}

export default function NumberCounter({ value, duration = 2, className = "" }: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Spring to animate the value
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1,
    duration: duration * 1000
  });

  // Transform the raw spring value to a rounded integer
  const rounded = useTransform(spring, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [rounded]);

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
    </motion.span>
  );
}
