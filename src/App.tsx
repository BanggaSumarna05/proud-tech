import React, { useState, FormEvent, useEffect, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PageLoader from "./components/PageLoader";
import { useLanguage } from "./context/LanguageContext";
import { MessageCircle, X, Send, ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import Lenis from "lenis";
import CursorGlow from "./components/effects/CursorGlow";
import NoiseOverlay from "./components/effects/NoiseOverlay";

// Lazy loaded components (Below the fold)
const ClientLogos = React.lazy(() => import("./components/ClientLogos"));
const Showcase = React.lazy(() => import("./components/Showcase"));
const Services = React.lazy(() => import("./components/Services"));
const WhyChooseUs = React.lazy(() => import("./components/WhyChooseUs"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const CaseStudyModal = React.lazy(() => import("./components/CaseStudyModal"));
const Process = React.lazy(() => import("./components/Process"));
const Motivation = React.lazy(() => import("./components/Motivation"));
const CTA = React.lazy(() => import("./components/CTA"));
const FAQ = React.lazy(() => import("./components/FAQ"));
const Testimonials = React.lazy(() => import("./components/Testimonials"));
const Footer = React.lazy(() => import("./components/Footer"));

// ── Helper: Smooth section reveal on scroll ──
function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {

  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [selectedPackForCTA, setSelectedPackForCTA] = useState<string | null>(null);
  const [isWhatsappBubbleOpen, setIsWhatsappBubbleOpen] = useState(false);
  const [customWaMessage, setCustomWaMessage] = useState("");
  const [selectedCaseStudyProject, setSelectedCaseStudyProject] = useState<string | null>(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loadBelowFold, setLoadBelowFold] = useState(false);
  const { language } = useLanguage();

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Defer loading heavy below-the-fold components
  useEffect(() => {
    const timer = setTimeout(() => setLoadBelowFold(true), 2000);
    const handleInteraction = () => {
      setLoadBelowFold(true);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('mousemove', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Show scroll-to-top button after 400px
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectProjectEnquiry = (projectName: string) => {
    // Scroll to pricing CTA block
    scrollToSection("pricing");
    // Trigger package alignment based on project category or set general info
    // Flash custom text in formulation fields (automatically handled by routing focus)
    const element = document.getElementById("user-business-input") as HTMLInputElement;
    if (element) {
      element.value = language === "id" ? `Tanya Portofolio: ${projectName}` : `Inquire Portfolio: ${projectName}`;
      // Trigger native input change so react hooks pick it up
      element.dispatchEvent(new Event("change", { bubbles: true }));
    }
    const nameElement = document.getElementById("user-name-input") as HTMLInputElement;
    if (nameElement) {
      nameElement.focus();
    }
  };

  const handleOpenConsultationDirectly = () => {
    scrollToSection("pricing");
    const nameElement = document.getElementById("user-name-input") as HTMLInputElement;
    if (nameElement) {
      nameElement.focus();
    }
  };

  const handleSendCustomBubbleMessage = (e: FormEvent) => {
    e.preventDefault();
    const defaultMsg = language === "id" 
      ? "Halo, saya ingin berkonsultasi terkait website/aplikasi dengan Proud Tech!"
      : "Hello, I would love to consult regarding custom websites and mobile application mockups with Proud Tech!";
    const finalText = customWaMessage || defaultMsg;
    const url = `https://wa.me/6285861985540?text=${encodeURIComponent(finalText)}`;
    window.open(url, "_blank", "noreferrer,noopener");
    setIsWhatsappBubbleOpen(false);
    setCustomWaMessage("");
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isInitialLoading && (
          <PageLoader onComplete={() => setIsInitialLoading(false)} />
        )}
      </AnimatePresence>

      <NoiseOverlay />
      <CursorGlow />

      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-brand-accent z-[9999] origin-left"
        style={{ scaleX }}
      />

      <div className={`relative min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-blue selection:text-white ${isInitialLoading ? "h-screen overflow-hidden" : ""}`}>
      
      {/* Navbar Container */}
      <Navbar 
        onScrollToSection={scrollToSection} 
        onOpenConsultation={handleOpenConsultationDirectly} 
      />

      {/* Main Pages */}
      <main>
        {/* 1. Hero Landing Block */}
        <Hero 
          onScrollToSection={scrollToSection} 
          onOpenConsultation={handleOpenConsultationDirectly} 
        />

        {/* Suspense Wrapper for Lazy Loaded Components */}
        {loadBelowFold && (
          <Suspense fallback={<div className="h-20 w-full flex items-center justify-center text-brand-blue animate-pulse">Loading...</div>}>
            {/* 1.5. Brand Client Logos Marquee */}
            <SectionReveal delay={0}><ClientLogos /></SectionReveal>

            {/* 2. Horizontal Tech Mockup Showcase */}
            <SectionReveal delay={0.05}><Showcase /></SectionReveal>

            {/* 3. Our Corporate Services */}
            <SectionReveal delay={0.05}>
              <Services 
                onOpenConsultation={handleOpenConsultationDirectly} 
              />
            </SectionReveal>

            {/* 4. Why Clients Trust Proud Tech */}
            <SectionReveal delay={0.05}><WhyChooseUs /></SectionReveal>

            {/* 5. Custom Live Portfolios with Interactive Case Studies */}
            <SectionReveal delay={0.05}>
              <Portfolio 
                onSelectProject={handleSelectProjectEnquiry} 
                onViewCaseStudy={(projectName) => {
                  setSelectedCaseStudyProject(projectName);
                  setIsCaseStudyOpen(true);
                }}
              />
            </SectionReveal>

            {/* Case Study Detailed Modal Overlay */}
            <CaseStudyModal 
              isOpen={isCaseStudyOpen}
              onClose={() => setIsCaseStudyOpen(false)}
              projectName={selectedCaseStudyProject}
              onConsult={handleSelectProjectEnquiry}
            />

            {/* 6. Dynamic Roadmap Process */}
            <SectionReveal delay={0.05}><Process /></SectionReveal>

            {/* 7. Centered Big Brand Slogan */}
            <SectionReveal delay={0.05}><Motivation /></SectionReveal>

            {/* Client Testimonial Carousel */}
            <SectionReveal delay={0.05}><Testimonials /></SectionReveal>

            {/* FAQ - Frequently Asked Questions Accordion Block */}
            <SectionReveal delay={0.05}><FAQ /></SectionReveal>

            {/* 8. Combined Pricing & Consultation */}
            <SectionReveal delay={0.05}>
              <CTA 
                initialSelectedPackage={selectedPackForCTA}
                onOpenConsultation={handleOpenConsultationDirectly} 
              />
            </SectionReveal>
          </Suspense>
        )}
      </main>

      {/* 9. Footer */}
      {loadBelowFold && (
        <Suspense fallback={null}>
          <Footer onScrollToSection={scrollToSection} />
        </Suspense>
      )}

      {/* ── Scroll-to-Top Button ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-6 z-50 w-11 h-11 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg hover:bg-brand-dark hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-white/10"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* FLOATING WHATSAPP CHAT POP-PANEL (Premium Extra recommended in brand kit) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        
        {/* Animated Pop-Up Window */}
        {isWhatsappBubbleOpen && (
          <div className="bg-white border border-brand-border/80 w-[320px] rounded-2xl shadow-xl overflow-hidden mb-3 animate-float-1 relative">
            
            {/* Header portion */}
            <div className="bg-brand-blue text-white p-4.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-accent hover:scale-105 transition-transform flex items-center justify-center text-brand-dark font-display font-black shadow-sm text-sm shrink-0">
                  PT
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-[12.5px] leading-tight font-display">Proud Tech Support</h4>
                  <p className="text-[10px] text-brand-accent font-mono tracking-wider font-semibold">● ONLINE • PROUD TECH</p>
                </div>
              </div>
              <button 
                onClick={() => setIsWhatsappBubbleOpen(false)}
                className="text-white hover:text-brand-accent transition-colors cursor-pointer"
                aria-label="Close Whatsapp Chat Support Pop-up"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Chat Body simulating direct convo */}
            <div className="p-4 bg-brand-bg max-h-[160px] overflow-y-auto text-xs space-y-3 font-medium">
              <div className="bg-white border border-brand-border/40 p-3 rounded-2xl rounded-tl-none text-brand-dark/80 relative shadow-sm leading-relaxed">
                {language === "id" ? (
                  <>
                    <p>Halo kak! Perkenalkan saya dari Proud Tech. 😊</p>
                    <p className="mt-1.5">Ada yang bisa saya bantu terkait konsep design website, company profile, atau aplikasi mobile impian kakak?</p>
                  </>
                ) : (
                  <>
                    <p>Hello! I am from Proud Tech. 😊</p>
                    <p className="mt-1.5">How can I assist you with your custom website design, official company profile, or mobile app ideas?</p>
                  </>
                )}
              </div>
            </div>

            {/* Input Send Area */}
            <form onSubmit={handleSendCustomBubbleMessage} className="p-3 bg-white border-t border-brand-border/60 flex gap-2">
              <input
                type="text"
                required
                placeholder={language === "id" ? "Ketik pesan konsultasimu..." : "Type your consultaion message..."}
                value={customWaMessage}
                onChange={(e) => setCustomWaMessage(e.target.value)}
                className="flex-1 bg-brand-bg rounded-xl py-2 px-3.5 text-xxs outline-none font-medium border border-transparent focus:border-brand-blue focus:bg-white text-brand-dark transition-all duration-300"
              />
              <button 
                type="submit"
                className="w-8 h-8 rounded-full bg-brand-accent hover:bg-brand-blue text-brand-dark hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Send custom Whatsapp query"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}

        {/* Floating Bubble Handler Button */}
        <button
          id="whatsapp-bubble-trigger"
          onClick={() => setIsWhatsappBubbleOpen(!isWhatsappBubbleOpen)}
          className="group w-14 h-14 rounded-full bg-brand-accent hover:bg-brand-blue hover:text-white text-brand-dark flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-90 relative cursor-pointer border border-brand-dark/10"
          aria-label="Open chat panel"
        >
          {isWhatsappBubbleOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-blue text-[8px] text-white font-mono font-bold items-center justify-center">1</span>
              </span>
            </>
          )}
        </button>

      </div>

    </div>
    </>
  );
}

