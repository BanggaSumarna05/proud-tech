import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, Star, ChevronRight, Activity, Users, Flame } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export default function Hero({ onScrollToSection, onOpenConsultation }: HeroProps) {
  const { t, language } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 sm:pt-28 pb-12 overflow-hidden px-4 sm:px-6"
    >
      {/* Absolute Ambient Background Vectors & Sparks (like design reference) */}
      <motion.div 
        style={{ y: orbY }} 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/15 via-brand-blue/5 to-transparent blur-[120px] pointer-events-none" 
      />
      
      {/* Mesh Grid Backdrop */}
      <motion.div 
        style={{ y: meshY }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:48px_48px] pointer-events-none opacity-50" 
      />

      {/* Blue Sparkle/Asterisk Icons floating — CSS only for performance */}
      <div className="absolute top-28 left-8 md:left-24 text-brand-blue/30 scale-75 md:scale-100 pointer-events-none animate-float-1">
        <Star className="w-12 h-12 fill-brand-blue/10" aria-hidden="true" />
      </div>

      <div className="absolute top-44 right-6 md:right-28 text-brand-accent pointer-events-none animate-float-2">
        <Sparkles className="w-10 h-10 text-brand-blue" aria-hidden="true" />
      </div>

      <div className="absolute bottom-1/3 left-6 md:left-20 text-brand-blue/20 pointer-events-none animate-float-side">
        <div className="w-6 h-6 rounded-full border-4 border-dashed border-brand-blue/30" />
      </div>

      {/* Hero Content Wrapper */}
      <div className="max-w-6xl w-full z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
        
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">

          {/* Dynamic Glow Badge */} 
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-brand-blue hover:bg-brand-dark transition-all duration-300 px-5 py-2.5 rounded-full border border-white/10 shadow-md text-white mb-4 mt-6 transform hover:-translate-y-0.5"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span className="font-display font-bold text-xxs tracking-wider uppercase flex items-center gap-1">
              {t("hero.badge")}
              <Flame className="w-3.5 h-3.5 text-brand-accent fill-brand-accent ml-0.5" />
            </span>
          </motion.div>

          {/* Mobile-only: Maskot di bawah badge, sebelum headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="block lg:hidden relative w-full max-w-[300px] sm:max-w-[380px] aspect-square mx-auto my-2"
          >
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-brand-blue/15 via-brand-accent/10 to-transparent blur-2xl pointer-events-none" />
            <img
              src="/images/character-waving.webp"
              alt="Proud Tech 3D Mascot"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={380}
              height={380}
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl animate-float-1"
            />
            <div
              className="absolute top-6 right-2 bg-brand-accent text-brand-dark font-display font-black text-[9px] tracking-wider px-3 py-1.5 rounded-full shadow-lg border border-brand-dark/10 animate-float-2"
            >
              👋 {language === "id" ? "HALO!" : "HELLO!"}
            </div>
          </motion.div>

          {/* Big Bold Uppercase Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-[1.6rem] sm:text-4xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tighter text-brand-dark uppercase"
          >
            {t("hero.line1")} <br className="hidden md:block" />
            <span className="text-white bg-brand-blue px-3 sm:px-4 md:px-6 md:py-1 py-0.5 mx-1 sm:mx-2 rounded-xl sm:rounded-2xl border border-brand-blue/30 shadow-lg inline-block transform -rotate-1 text-[1.4rem] sm:text-4xl md:text-5xl lg:text-7xl">
              {t("hero.badge_website")}
            </span> 
            {t("hero.line2")} <br />
            {t("hero.line3")}
          </motion.h1>

          {/* Styled Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-brand-dark/80 text-base md:text-lg max-w-2xl leading-relaxed font-sans"
          >
            {t("hero.desc")}
          </motion.p>

          {/* CTA Button Layout */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            {/* Main CTA */}
            <button
              onClick={onOpenConsultation}
              className="group w-full sm:w-auto flex items-center justify-between gap-3 bg-brand-blue hover:bg-brand-dark text-white font-display font-bold text-sm tracking-tight px-8 py-4.5 rounded-full shadow-lg shadow-brand-blue/20 transition-all duration-300 cursor-pointer text-center hover:scale-105 active:scale-95 border border-white/5"
            >
              {t("hero.btn_start")}
              <span className="w-6 h-6 rounded-full bg-brand-accent text-brand-blue flex items-center justify-center group-hover:bg-white group-hover:text-brand-dark transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => onScrollToSection("portfolio")}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-brand-dark hover:text-white text-brand-dark font-display font-bold text-sm tracking-tight px-8 py-4.5 rounded-full border border-brand-border/80 shadow-sm transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
            >
              {t("hero.btn_view")}
              <ChevronRight className="w-4 h-4 text-brand-blue group-hover:text-brand-accent transition-colors" />
            </button>
          </motion.div>
        </div>

        {/* Right: 3D Character Mascot — Desktop Only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex flex-shrink-0 relative w-full max-w-[540px] aspect-square"
        >
          {/* Glowing backdrop circle behind character */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-brand-blue/15 via-brand-accent/10 to-transparent blur-2xl pointer-events-none" />
          <img
            src="/images/character-waving.webp"
            alt="Proud Tech 3D Mascot"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={540}
            height={540}
            className="relative z-10 w-full h-full object-contain drop-shadow-2xl animate-float-1"
          />
          {/* Small floating accent badge */}
          <div
            className="absolute top-6 right-2 bg-brand-accent text-brand-dark font-display font-black text-[9px] tracking-wider px-3 py-1.5 rounded-full shadow-lg border border-brand-dark/10 animate-float-2"
          >
            👋 {language === "id" ? "HALO!" : "HELLO!"}
          </div>
        </motion.div>
      </div>

      {/* Stats section below hero content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-brand-border/60 w-full max-w-6xl z-10 grid grid-cols-3 gap-4 sm:gap-6 items-center text-left"
      >
        {/* Small text helper info */}
        <div className="flex items-center gap-3">
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-brand-accent border border-brand-blue shrink-0" />
          <p className="font-display font-semibold text-[9px] sm:text-xs text-brand-dark/70 tracking-wide uppercase">
            {t("hero.badge")}
          </p>
        </div>

        {/* Stat Item 1 */}
        <div className="flex items-center gap-2 sm:gap-4 justify-center border-l border-brand-border/60 pl-3 sm:pl-6">
          <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue shrink-0">
            <Activity className="w-4 sm:w-5 h-4 sm:h-5" />
          </div>
          <div>
            <div className="font-display font-black text-lg sm:text-2xl text-brand-dark leading-none">50+</div>
            <div className="text-[8px] sm:text-[10px] text-brand-dark/70 font-bold uppercase tracking-wider mt-0.5 sm:mt-1">{t("hero.stats_done")}</div>
          </div>
        </div>

        {/* Stat Item 2 */}
        <div className="flex items-center gap-2 sm:gap-4 justify-center border-l border-brand-border/60 pl-3 sm:pl-6">
          <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-brand-accent/15 flex items-center justify-center text-brand-blue shrink-0">
            <Users className="w-4 sm:w-5 h-4 sm:h-5" />
          </div>
          <div>
            <div className="font-display font-black text-lg sm:text-2xl text-brand-dark leading-none">20+</div>
            <div className="text-[8px] sm:text-[10px] text-brand-dark/70 font-bold uppercase tracking-wider mt-0.5 sm:mt-1">{t("hero.stats_happy")}</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
