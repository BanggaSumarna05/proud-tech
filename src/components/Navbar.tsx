import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X, MessageSquare, Compass, Settings, UserCheck, HelpCircle, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Magnetic from "./effects/Magnetic";

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export default function Navbar({ onScrollToSection, onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isAlertVisible, setIsAlertVisible] = useState(true);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { name: t("nav.home"), id: "home", icon: Compass },
    { name: t("nav.services"), id: "services", icon: Settings },
    { name: t("nav.about"), id: "about", icon: UserCheck },
    { name: t("nav.portfolio"), id: "portfolio", icon: MessageSquare },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      // Hide announcement bar after scrolling 120px
      if (window.scrollY > 120) {
        setIsAlertVisible(false);
      } else {
        setIsAlertVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0.15,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sectionIds = ["home", "services", "about", "portfolio"];
    const observedIds = new Set<string>();

    const observeElements = () => {
      sectionIds.forEach((id) => {
        if (!observedIds.has(id)) {
          const el = document.getElementById(id);
          if (el) {
            observer.observe(el);
            observedIds.add(id);
          }
        }
      });
    };

    observeElements();
    // Poll to observe lazy-loaded elements
    const intervalId = setInterval(observeElements, 500);

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, []);

  const handleItemClick = (id: string) => {
    setActiveSection(id);
    onScrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 2026 High Prestige Top Feature Alert Bar */}
      <div className={`fixed top-0 inset-x-0 z-50 h-7 bg-[#111115] flex items-center justify-center text-[10px] font-mono text-brand-accent font-bold tracking-widest px-4 border-b border-white/5 select-none uppercase transition-transform duration-300 ${isAlertVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <span className="flex items-center gap-1.5 animate-pulse">
          <Sparkles className="w-3 h-3 text-brand-accent fill-brand-accent shrink-0" />
          {language === "id" 
            ? "Membangun Website Premium 2026 — Hubungi Proud Tech" 
            : "Engineering Premium 2026 Web Solutions — Contact Proud Tech"
          }
        </span>
      </div>

      <header
        className={`fixed inset-x-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? "top-10 px-4 sm:px-6" : "top-7 px-6 py-2"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ease-out ${
            isScrolled
              ? "max-w-5xl bg-white/90 backdrop-blur-md border border-brand-border/80 shadow-xl shadow-brand-blue/5 rounded-full px-6 py-2.5"
              : "max-w-7xl bg-white/50 backdrop-blur-xs border border-brand-border/40 shadow-sm rounded-full px-6 py-3.5"
          } flex items-center justify-between`}
        >
          
          {/* Left Menu / Logo Area */}
          <div className="flex items-center gap-10">
            <Magnetic strength={0.1}>
              <button
                id="navbar-logo"
                onClick={() => handleItemClick("home")}
                className="flex items-center gap-2.5 group cursor-pointer selection:bg-transparent text-left"
                aria-label="Proud Tech Logo"
              >
                <img 
                  src="/images/Kebutuhan Website/Logo Proud Tech di nav.webp" 
                  alt="Proud Tech Logo"
                  loading="eager"
                  decoding="async"
                  width={80}
                  height={24}
                  className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            </Magnetic>
 
            {/* Left Nav Menu Items (Desktop Only) */}
            <nav className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Magnetic key={item.id} strength={0.2}>
                    <button
                      onClick={() => handleItemClick(item.id)}
                      className={`relative py-1.5 px-3 font-display font-black text-xxs tracking-wider uppercase transition-all duration-300 cursor-pointer rounded-full ${
                        isActive 
                          ? "text-brand-blue bg-brand-blue/8" 
                          : "text-brand-dark/75 hover:text-brand-blue hover:bg-brand-blue/5"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="navActiveIndicator"
                          className="absolute bottom-0 inset-x-3 h-0.5 bg-brand-accent rounded-full"
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        />
                      )}
                    </button>
                  </Magnetic>
                );
              })}
            </nav>
          </div>

          {/* Right Menu (Desktop Only) */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Dynamic Sliding Language Capsule Selector */}
            <div className="relative flex items-center bg-black/5 hover:bg-black/10 transition-colors p-1 rounded-full border border-brand-border/40 text-[9px] font-bold font-mono select-none">
              <button
                onClick={() => setLanguage("id")}
                className={`relative z-10 px-2.5 py-1 rounded-full text-center transition-colors cursor-pointer duration-300 ${
                  language === "id" ? "text-white animate-pulse-slow" : "text-brand-dark/50 hover:text-brand-dark"
                }`}
              >
                ID
                {language === "id" && (
                  <motion.span
                    layoutId="activeLangBg"
                    className="absolute inset-0 bg-brand-blue rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`relative z-10 px-2.5 py-1 rounded-full text-center transition-colors cursor-pointer duration-300 ${
                  language === "en" ? "text-white animate-pulse-slow" : "text-brand-dark/50 hover:text-brand-dark"
                }`}
              >
                EN
                {language === "en" && (
                  <motion.span
                    layoutId="activeLangBg"
                    className="absolute inset-0 bg-brand-blue rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
              </button>
            </div>

            <Magnetic strength={0.3}>
              <button
                id="desktop-contact-btn"
                onClick={onOpenConsultation}
                className="group flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white font-display font-extrabold text-xs tracking-tight uppercase px-5 py-2.5 rounded-full shadow-md ring-2 ring-brand-accent/40 transition-all duration-300 cursor-pointer hover:scale-102 active:scale-98 hover:ring-brand-accent/70"
              >
                {t("nav.contact_us")}
                <span className="w-5 h-5 rounded-full bg-brand-accent text-brand-dark group-hover:bg-white group-hover:text-brand-blue flex items-center justify-center transition-colors duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </Magnetic>
          </div>

          {/* Mobile Navigation Interface Panel */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLanguage(language === "id" ? "en" : "id")}
              className="text-[9px] font-bold font-mono px-3 py-1.5 rounded-full border border-brand-border bg-white text-brand-dark flex items-center justify-center cursor-pointer shadow-xs uppercase hover:bg-brand-blue hover:text-white transition-colors"
            >
              🌐 {language}
            </button>
            <button
              id="menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brand-dark border border-brand-border/50 rounded-full hover:bg-brand-dark/5 transition-colors cursor-pointer flex items-center justify-center"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-brand-dark/60 backdrop-blur-md md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer Container */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-xs bg-white border-l border-brand-border/60 z-50 p-8 flex flex-col justify-between overflow-y-auto md:hidden transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
          isMobileMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 mt-12">
          
          <div className="flex items-center justify-between border-b border-brand-border/50 pb-5">
            <span className="font-display font-black text-xxs tracking-widest text-brand-dark/40 uppercase">{t("nav.navigation")}</span>
            
            {/* Language toggle capsule for mobile drawer */}
            <div className="flex items-center bg-black/5 p-0.5 rounded-full border border-brand-border/40 text-[9px] font-bold font-mono">
              <button
                onClick={() => setLanguage("id")}
                className={`px-2 py-1 rounded-full transition-all ${
                  language === "id"
                    ? "bg-brand-blue text-white"
                    : "text-brand-dark/60"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded-full transition-all ${
                  language === "en"
                    ? "bg-brand-blue text-white"
                    : "text-brand-dark/60"
                }`}
              >
                EN
              </button>
            </div>
          </div>
          
          {/* Nav List links */}
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`flex items-center gap-3.5 font-display font-extrabold text-[#111115] hover:text-brand-blue transition-colors text-left py-1.5 uppercase ${
                    isActive ? "text-brand-blue font-black" : ""
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                    isActive 
                      ? "bg-brand-blue/10 border-brand-blue text-brand-blue" 
                      : "bg-brand-bg border-brand-border/60 text-brand-dark/60"
                  }`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm tracking-wide">{item.name}</span>
                </button>
              );
            })}
          </div>
          
          <div className="h-px bg-brand-border/60" />
          
          {/* Headquarters Contacts */}
          <div className="flex flex-col gap-3 text-brand-dark/70 text-xxs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-brand-accent" />
              <span className="font-bold">📍 PANGANDARAN, INDONESIA</span>
            </div>
            <div className="text-brand-dark/50">📩 PROUDETECH@GMAIL.COM</div>
            <div className="text-brand-dark/50">📞 +62 858-6198-5540</div>
          </div>
        </div>

        {/* Free consultation action */}
        <div className="border-t border-brand-border/50 pt-5">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full group flex items-center justify-between bg-brand-accent text-brand-dark font-display font-black text-xxs tracking-wider uppercase px-4.5 py-4 rounded-full border border-brand-dark/10 shadow-sm hover:bg-brand-blue hover:text-white transition-colors cursor-pointer"
          >
            {t("nav.free_consultation")}
            <span className="w-5 h-5 rounded-full bg-brand-dark text-brand-accent flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
