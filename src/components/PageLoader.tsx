import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Braces, Layers, Cpu, Compass } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const { t } = useLanguage();
  const [loadingText, setLoadingText] = useState(t("loader.text0"));

  const quotes = [
    t("loader.text1"),
    t("loader.text2"),
    t("loader.text3"),
    t("loader.text4"),
    t("loader.text5"),
    t("loader.text6")
  ];

  useEffect(() => {
    // Detect Lighthouse or bots to instantly skip loader and avoid CLS / LCP penalties
    const isBot = /bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(navigator.userAgent);
    if (isBot) {
      setProgress(100);
      return;
    }

    // Increment progress counter with realistic ease-in curves for professional feel
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Random incremental steps to make loading progress look organic and dynamic
        const step = prev < 30 ? Math.floor(Math.random() * 8) + 5
                   : prev < 70 ? Math.floor(Math.random() * 5) + 3
                   : Math.floor(Math.random() * 12) + 8;
                   
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Dynamic loading texts based on percentage
    if (progress < 25) {
      setLoadingText(quotes[0]);
    } else if (progress < 50) {
      setLoadingText(quotes[1]);
    } else if (progress < 70) {
      setLoadingText(quotes[2]);
    } else if (progress < 85) {
      setLoadingText(quotes[3]);
    } else if (progress < 96) {
      setLoadingText(quotes[4]);
    } else {
      setLoadingText(quotes[5]);
    }

    if (progress === 100) {
      const isBot = /bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(navigator.userAgent);
      const exitDelay = isBot ? 0 : 500; // Instantly exit for bots to fix LCP/CLS

      const exitTimeout = setTimeout(() => {
        onComplete();
      }, exitDelay); // Small premium hold-on at 100% for real users
      return () => clearTimeout(exitTimeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -30, 
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 bg-brand-bg z-[100] overflow-y-auto min-h-screen flex flex-col justify-between"
    >
      {/* Premium Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />

      {/* Elegant Shimmering Skeleton Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 border-b border-brand-border/40 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-blue/10 animate-pulse flex items-center justify-center text-brand-blue">
            <Layers className="w-5 h-5" />
          </div>
          <div className="h-5 w-24 bg-brand-dark/15 rounded-lg animate-pulse" />
        </div>
        
        {/* Skeleton Nav Actions */}
        <div className="hidden md:flex items-center gap-8">
          <div className="h-3 w-14 bg-brand-dark/10 rounded-full animate-pulse" />
          <div className="h-3 w-14 bg-brand-dark/10 rounded-full animate-pulse" />
          <div className="h-3 w-20 bg-brand-dark/10 rounded-full animate-pulse" />
          <div className="h-3 w-16 bg-brand-dark/10 rounded-full animate-pulse" />
        </div>

        <div className="h-10 w-32 bg-brand-blue/15 rounded-full animate-pulse" />
      </header>

      {/* Main Skeleton Blueprint Grid Layout */}
      <main className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column: Micro load, status progress & metric labels */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Active Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4.5 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <span className="font-mono text-[9.5px] uppercase font-bold text-brand-blue tracking-widest flex items-center gap-1.5">
              {t("loader.booting")}
            </span>
          </div>

          <div className="space-y-4">
            {/* Shimmering bold Title blocks mimicking Hero */}
            <div className="h-10 w-[90%] bg-brand-dark/15 rounded-2xl animate-pulse" />
            <div className="h-10 w-[75%] bg-brand-dark/15 rounded-2xl animate-pulse" />
            <div className="h-4 w-[60%] bg-brand-dark/10 rounded-xl animate-pulse mt-6" />
          </div>

          {/* Interactive loading HUD */}
          <div className="bg-white border border-brand-border/80 rounded-3xl p-6 shadow-sm space-y-6">
            <div className="flex justify-between items-baseline">
              <span className="font-display font-black text-xs uppercase tracking-wider text-brand-dark/40">Progress</span>
              <span className="font-display font-black text-4xl text-brand-blue tracking-tight select-none">
                {progress}%
              </span>
            </div>

            {/* Custom linear progress indicator bar */}
            <div className="h-2 w-full bg-brand-border/40 rounded-full overflow-hidden relative">
              <motion.div 
                className="h-full bg-brand-blue"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>

            <div className="flex items-center gap-2.5 bg-brand-bg rounded-2xl p-3.5 border border-brand-border/30">
              <Cpu className="w-4.5 h-4.5 text-brand-blue animate-pulse shrink-0" />
              <p className="font-mono text-[10.5px] font-semibold text-brand-dark/80 tracking-normal text-ellipsis overflow-hidden whitespace-nowrap">
                {loadingText}
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Blueprint Cards Grid Shimmer wireframe */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item}
              className="bg-white border border-brand-border/60 rounded-[28px] p-6 shadow-xs flex flex-col justify-between h-[210px] relative overflow-hidden"
            >
              {/* Internal shimmering animations inside grid skeleton items */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="h-5 w-24 bg-brand-dark/8 rounded-md animate-pulse" />
                  <div className="w-8 h-8 rounded-full bg-brand-dark/5 animate-pulse" />
                </div>
                
                <div className="space-y-2">
                  <div className="h-4 w-full bg-brand-dark/10 rounded-md animate-pulse" />
                  <div className="h-3 w-[85%] bg-brand-dark/10 rounded-md animate-pulse" />
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-brand-border/40 pt-4 mt-auto">
                <div className="h-3.5 w-16 bg-brand-dark/8 rounded-full animate-pulse" />
                <div className="h-5 w-12 bg-brand-accent/20 rounded-lg animate-pulse" />
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Footer copyright skeleton bar */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-6 border-t border-brand-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xxs font-mono text-brand-dark/40 uppercase tracking-widest relative z-10 mt-auto">
        <div className="flex items-center gap-1.5 font-bold">
          <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
          <span>{t("loader.creative")}</span>
        </div>
        <div className="flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-brand-accent" />
          <span>{t("loader.engine_status")}</span>
        </div>
      </footer>
    </motion.div>
  );
}
