import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number; // duration in seconds for one full loop
  className?: string;
  reverse?: boolean;
}

export default function Marquee({ children, speed = 20, className = "", reverse = false }: MarqueeProps) {
  return (
    <div className={`overflow-hidden flex whitespace-nowrap ${className}`}>
      <div
        className="flex shrink-0 min-w-full items-center animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
