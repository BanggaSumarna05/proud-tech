import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springing for the cursor
  const springX = useSpring(mousePosition.x, { stiffness: 100, damping: 25, mass: 0.5 });
  const springY = useSpring(mousePosition.y, { stiffness: 100, damping: 25, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      
      // Detect if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button, a, input, select, textarea, [role="button"]');
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-0 hidden lg:block"
      style={{
        x: springX,
        y: springY,
        opacity: isVisible ? 1 : 0,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
    >
      <div 
        className="w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 52, 168, 0.05) 0%, rgba(217, 255, 63, 0.02) 40%, rgba(0,0,0,0) 70%)"
        }}
      />
    </motion.div>
  );
}
