import { useState, FormEvent } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import Showcase from "./components/Showcase";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import CaseStudyModal from "./components/CaseStudyModal";
import Process from "./components/Process";
import Motivation from "./components/Motivation";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import { useLanguage } from "./context/LanguageContext";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [selectedPackForCTA, setSelectedPackForCTA] = useState<string | null>(null);
  const [isWhatsappBubbleOpen, setIsWhatsappBubbleOpen] = useState(false);
  const [customWaMessage, setCustomWaMessage] = useState("");
  const [selectedCaseStudyProject, setSelectedCaseStudyProject] = useState<string | null>(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const { language } = useLanguage();

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

        {/* 1.5. Brand Client Logos Marquee */}
        <ClientLogos />

        {/* 2. Horizontal Tech Mockup Showcase */}
        <Showcase />

        {/* 3. Our Corporate Services */}
        <Services 
          onOpenConsultation={handleOpenConsultationDirectly} 
        />

        {/* 4. Why Clients Trust Proud Tech */}
        <WhyChooseUs />

        {/* 5. Custom Live Portfolios with Interactive Case Studies */}
        <Portfolio 
          onSelectProject={handleSelectProjectEnquiry} 
          onViewCaseStudy={(projectName) => {
            setSelectedCaseStudyProject(projectName);
            setIsCaseStudyOpen(true);
          }}
        />

        {/* Case Study Detailed Modal Overlay */}
        <CaseStudyModal 
          isOpen={isCaseStudyOpen}
          onClose={() => setIsCaseStudyOpen(false)}
          projectName={selectedCaseStudyProject}
          onConsult={handleSelectProjectEnquiry}
        />

        {/* 6. Dynamic Roadmap Process */}
        <Process />

        {/* 7. Centered Big Brand Slogan */}
        <Motivation />

        {/* Client Testimonial Carousel */}
        <Testimonials />

        {/* FAQ - Frequently Asked Questions Accordion Block */}
        <FAQ />

        {/* 8. Combined Pricing & Consultation */}
        <CTA 
          initialSelectedPackage={selectedPackForCTA}
          onOpenConsultation={handleOpenConsultationDirectly} 
        />
      </main>

      {/* 9. Footing */}
      <Footer onScrollToSection={scrollToSection} />

      {/* FLOATING WHATSAPP CHAT POP-PANEL (Premium Extra recommended in brand kit) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        
        {/* Animated Pop-Up Window */}
        {isWhatsappBubbleOpen && (
          <div className="bg-white border border-brand-border/80 w-[320px] rounded-2xl shadow-xl overflow-hidden mb-3 animate-float-1 relative">
            
            {/* Header portion */}
            <div className="bg-brand-blue text-white p-4.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-lime hover:scale-105 transition-transform flex items-center justify-center text-brand-dark font-display font-black shadow-sm text-sm shrink-0">
                  PT
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-[12.5px] leading-tight font-display">Proud Tech Support</h4>
                  <p className="text-[10px] text-brand-lime font-mono tracking-wider font-semibold">● ONLINE • PROUD TECH</p>
                </div>
              </div>
              <button 
                onClick={() => setIsWhatsappBubbleOpen(false)}
                className="text-white hover:text-brand-lime transition-colors cursor-pointer"
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
                className="w-8 h-8 rounded-full bg-brand-lime hover:bg-brand-blue text-brand-dark hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
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
          className="group w-14 h-14 rounded-full bg-brand-lime hover:bg-brand-blue hover:text-white text-brand-dark flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-90 relative cursor-pointer border border-brand-dark/10"
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

