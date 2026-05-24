import { ReactNode } from "react";
import { motion } from "motion/react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function TextReveal({ children, delay = 0, className = "" }: TextRevealProps) {
  // If children is a string, split by words. If not, just animate the whole block.
  if (typeof children === "string") {
    const words = children.split(" ");
    return (
      <span className={`inline-block ${className}`}>
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden pb-1 mr-[0.25em]">
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + index * 0.05,
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  // Fallback for non-string children (like React elements)
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}
