import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  offset?: number;
}

export default function ParallaxImage({ src, alt, className = "", offset = 50 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y }}
        className={`absolute top-[-10%] left-0 w-full h-[120%] object-cover ${className}`}
      />
    </div>
  );
}
