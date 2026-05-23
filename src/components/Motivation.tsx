import { motion } from "motion/react";
import { Star, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Motivation() {
  const { language } = useLanguage();

  return (
    <section id="motivation" className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#121215] text-white rounded-[32px] mx-6 my-16 text-center">
      
      {/* Decorative Glowing Gradients under typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-brand-lime/10 blur-[120px] pointer-events-none animate-pulse-slow" />

      {/* Blue Floating Stars */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-12 md:left-32 text-brand-lime/30"
      >
        <Star className="w-8 h-8 md:w-12 md:h-12 fill-brand-lime/10" aria-hidden="true" />
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
          <Sparkles className="w-4 h-4 text-brand-lime animate-spin" style={{ animationDuration: "10s" }} />
          <span className="font-display font-medium text-xxs tracking-wider text-white/80 uppercase">
            {language === "id" ? "MANIFESTO UTAMA KAMI" : "OUR MAIN MANIFESTO"}
          </span>
        </div>

        {/* Huge Bold Uppercase typography matching design guidelines */}
        {language === "id" ? (
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tighter text-white uppercase max-w-4xl mx-auto">
            TERUS MEMBANGUN <br />
            HINGGA <span className="text-brand-lime hover:text-brand-blue transition-colors duration-300 bg-brand-lime/10 px-4.5 py-0.5 my-1 mx-1.5 rounded-2xl border border-brand-lime/25 inline-block transform rotate-1">BRAND</span> ANDA <br />
            MENJADI <span className="text-brand-blue bg-white px-5 py-0.5 rounded-2xl border border-white/20 inline-block transform -rotate-1">DIGITAL</span>.
          </h2>
        ) : (
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tighter text-white uppercase max-w-4xl mx-auto">
            CONTINUOUSLY BUILDING <br />
            UNTIL YOUR <span className="text-brand-lime hover:text-brand-blue transition-colors duration-300 bg-brand-lime/10 px-4.5 py-0.5 my-1 mx-1.5 rounded-2xl border border-brand-lime/25 inline-block transform rotate-1">BRAND</span> EVOLVES <br />
            INTO <span className="text-brand-blue bg-white px-5 py-0.5 rounded-2xl border border-white/20 inline-block transform -rotate-1">DIGITAL</span>.
          </h2>
        )}

        {/* Thin minimalist helper stats */}
        <p className="text-white/45 font-mono text-[9.5px] uppercase tracking-widest mt-10">
          PROUD TECH · PANGANDARAN EST. 2026 · DIGITAL FREEDOM
        </p>

      </div>
    </section>
  );
}
