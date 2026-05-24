import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Star, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Motivation() {
  const { language } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} id="motivation" className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#121215] text-white rounded-[32px] mx-4 sm:mx-6 my-16 text-center">
      
      {/* Decorative Glowing Gradients under typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-brand-accent/10 blur-[120px] pointer-events-none animate-pulse-slow" />

      {/* Blue Floating Stars */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-12 md:left-32 text-brand-accent/30"
      >
        <Star className="w-8 h-8 md:w-12 md:h-12 fill-brand-accent/10" aria-hidden="true" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -45, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 right-12 md:right-32 text-brand-blue/40"
      >
        <Star className="w-10 h-10 md:w-14 md:h-14 fill-brand-blue/25 text-brand-blue" aria-hidden="true" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10 py-6">
        
        {/* Playful mini intro with sparkle */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4.5 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-brand-accent animate-spin" style={{ animationDuration: "10s" }} />
          <span className="font-display font-medium text-xxs tracking-wider text-white/80 uppercase">
            {language === "id" ? "MANIFESTO UTAMA KAMI" : "OUR MAIN MANIFESTO"}
          </span>
        </div>

        {/* Huge Bold Uppercase typography matching design guidelines */}
        {language === "id" ? (
          <motion.h2 style={{ scale, opacity }} className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight sm:leading-[0.95] tracking-tighter text-white uppercase max-w-5xl mx-auto">
            TERUS MEMBANGUN <br className="hidden sm:block" />
            HINGGA <span className="text-brand-accent hover:text-brand-blue transition-colors duration-300 bg-brand-accent/10 px-3 sm:px-4.5 py-0.5 my-1 mx-1 sm:mx-1.5 rounded-xl sm:rounded-2xl border border-brand-accent/25 inline-block transform rotate-1">BRAND</span> ANDA <br className="hidden sm:block" />
            MENJADI <span className="text-brand-blue bg-white px-3 sm:px-5 py-0.5 rounded-xl sm:rounded-2xl border border-white/20 inline-block transform -rotate-1">DIGITAL</span>.
          </motion.h2>
        ) : (
          <motion.h2 style={{ scale, opacity }} className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight sm:leading-[0.95] tracking-tighter text-white uppercase max-w-5xl mx-auto">
            CONTINUOUSLY BUILDING <br className="hidden sm:block" />
            UNTIL YOUR <span className="text-brand-accent hover:text-brand-blue transition-colors duration-300 bg-brand-accent/10 px-3 sm:px-4.5 py-0.5 my-1 mx-1 sm:mx-1.5 rounded-xl sm:rounded-2xl border border-brand-accent/25 inline-block transform rotate-1">BRAND</span> EVOLVES <br className="hidden sm:block" />
            INTO <span className="text-brand-blue bg-white px-3 sm:px-5 py-0.5 rounded-xl sm:rounded-2xl border border-white/20 inline-block transform -rotate-1">DIGITAL</span>.
          </motion.h2>
        )}

        {/* Thin minimalist helper stats */}
        <p className="text-white/45 font-mono text-[9.5px] uppercase tracking-widest mt-10">
          PROUD TECH · PANGANDARAN EST. 2026 · DIGITAL FREEDOM
        </p>

      </div>
    </section>
  );
}
