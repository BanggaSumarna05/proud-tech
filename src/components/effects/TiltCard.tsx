import { useRef, ReactNode, useState, MouseEvent } from "react";
import { motion, useSpring, useTransform } from "motion/react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({ children, className = "", intensity = 15 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position states
  const x = useSpring(0, { stiffness: 150, damping: 20 });
  const y = useSpring(0, { stiffness: 150, damping: 20 });

  // Transform coordinates into rotations
  const rotateX = useTransform(y, [-100, 100], [intensity, -intensity]);
  const rotateY = useTransform(x, [-100, 100], [-intensity, intensity]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    
    // Normalize coordinates based on element size (so larger cards tilt similarly to smaller cards)
    // We map the distance from center to a -100 to 100 range
    x.set((mouseX / (rect.width / 2)) * 100);
    y.set((mouseY / (rect.height / 2)) * 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: isHovered ? "transform" : "auto"
      }}
      className={`relative [perspective:1000px] ${className}`}
    >
      {/* Glare effect */}
      <motion.div 
        className="absolute inset-0 z-50 pointer-events-none rounded-inherit"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)",
          opacity: isHovered ? 1 : 0,
          translateX: useTransform(x, [-100, 100], ["-20%", "20%"]),
          translateY: useTransform(y, [-100, 100], ["-20%", "20%"]),
        }}
        transition={{ duration: 0.2 }}
      />
      {children}
    </motion.div>
  );
}
