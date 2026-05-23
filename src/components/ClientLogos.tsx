import { motion } from "motion/react";
import { Sparkles, Building2, Zap, Shield, Globe, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ClientLogos() {
  const { language } = useLanguage();

  const brands = [
    { name: "BEM FIKES", image: "/images/Kebutuhan Website/logo mitra/logo BEM Fikes.png" },
    { name: "CJA Rent Car", image: "/images/Kebutuhan Website/logo mitra/logo CJA Ren Car.JPG" },
    { name: "Proud Tech", image: "/images/Kebutuhan Website/Logo Proud Tech di nav.png" },
  ];

  return (
    <section className="py-10 bg-white border-y border-brand-border/60 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Helper title */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <span className="font-display font-black text-xxs tracking-widest text-brand-dark/40 uppercase">
              {language === "id" ? "MITRA KLAIM PRESTASI" : "TRUSTED BY HIGH-PERFORMANCE BRANDS"}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-brand-blue font-bold font-mono">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue fill-brand-blue animate-pulse" />
            <span>2026 DIGITAL ECOSYSTEM READY</span>
          </div>
        </div>

        {/* Brand infinite marquee wrapper */}
        <div className="relative mt-8 mb-2 overflow-hidden w-full">
          {/* Edge shadow overlay vignettes */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Flex Outer Ribbon */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex gap-5 md:gap-8 py-2 select-none">
              {/* Duplicate multiple times to guarantee full width filling and infinite cycle smoothness */}
              {[...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands].map((brand, idx) => {
                return (
                  <div
                    key={`${brand.name}-${idx}`}
                    className="flex items-center justify-center p-3.5 bg-white border border-brand-border/60 hover:border-brand-blue/30 rounded-2xl transition-all duration-300 w-[140px] md:w-[180px] h-16 md:h-20 shrink-0 select-none group relative overflow-hidden"
                  >
                    <img 
                      src={brand.image} 
                      alt={brand.name}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 shrink-0"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
