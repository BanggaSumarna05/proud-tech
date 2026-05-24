import { useState } from "react";
import { Compass, Instagram, Mail, Phone, Heart, Award, ArrowUp, Copy, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com/proudtech.id", icon: Instagram },
    { name: "Direct WhatsApp", url: "https://wa.me/6285861985540", icon: Phone },
  ];

  const handleScrollToTop = () => {
    onScrollToSection("home");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("proudetech@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="footer" className="relative bg-[#090a0f] border-t border-white/10 pt-20 pb-20 sm:pb-8 px-4 sm:px-6 overflow-hidden text-white">
      
      {/* Decorative Grid backdrop */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

      {/* Radiant Glowing Ambient lights */}
      <div className="absolute top-0 left-10 w-72 h-72 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-60 h-60 rounded-full bg-brand-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Logo & Manifesto Description (5 Columns) */}
          <div className="md:col-span-5 space-y-6">
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-2.5 group hover:scale-102 transition-transform cursor-pointer"
            >
              <img 
                src="/images/Kebutuhan Website/Logo Proud Tech di nav.webp" 
                alt="Proud Tech Logo"
                loading="lazy"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>
            
            <p className="text-white/60 text-sm max-w-sm leading-relaxed font-sans font-medium">
              {language === "id"
                ? "Proud Tech adalah digital agency lokal modern yang berdedikasi tinggi membantu UMKM dan korporasi tumbuh naik kelas melalui solusi teknologi visual interaktif, website supercepat, dan app premium."
                : "Proud Tech is a highly dedicated digital agency empowering local and enterprise brands to scale up using creative branding designs, lightning-fast web projects, and premium mobile applications."
              }
            </p>

            {/* Micro email interactive copy block */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#a1a1b5] block mb-2 font-bold">
                {language === "id" ? "KONTAK DIREK / COPY EMAIL" : "DIRECT EMAIL CLIENTS"}
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2.5 bg-white/5 border border-white/10 hover:border-brand-blue/60 hover:bg-white/10 text-white pl-4.5 pr-3 py-2 rounded-xl transition-all text-xs font-mono select-none cursor-pointer group"
              >
                <span>proudetech@gmail.com</span>
                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-brand-blue/30 transition-colors shrink-0">
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-brand-accent" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
                  )}
                </div>
              </button>
            </div>
            
            {/* Social Accounts list icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-brand-blue hover:text-white hover:border-transparent transition-colors flex items-center justify-center text-white/80 cursor-pointer"
                    aria-label={`Open Proud Tech ${social.name}`}
                  >
                    <IconComponent className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hidden md:block md:col-span-1" />

          {/* Quick Nav Links (3 Columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-[#9da5d4] text-xs tracking-wider uppercase">
              {language === "id" ? "Halaman Langsung" : "Quick Index"}
            </h4>
            <div className="flex flex-col gap-3 font-sans text-xs">
              <button onClick={() => onScrollToSection("home")} className="text-white/60 hover:text-brand-accent hover:underline text-left cursor-pointer transition-colors font-medium">
                {language === "id" ? "Beranda" : "Home"}
              </button>
              <button onClick={() => onScrollToSection("services")} className="text-white/60 hover:text-brand-accent hover:underline text-left cursor-pointer transition-colors font-medium">
                {language === "id" ? "Layanan Kami" : "Our Services"}
              </button>
              <button onClick={() => onScrollToSection("about")} className="text-white/60 hover:text-brand-accent hover:underline text-left cursor-pointer transition-colors font-medium">
                {language === "id" ? "Mengapa Memilih Kami" : "Why Choose Us"}
              </button>
              <button onClick={() => onScrollToSection("portfolio")} className="text-white/60 hover:text-brand-accent hover:underline text-left cursor-pointer transition-colors font-medium">
                {language === "id" ? "Portofolio Proyek" : "Featured Projects"}
              </button>
              <button onClick={() => onScrollToSection("testimonials")} className="text-white/60 hover:text-brand-accent hover:underline text-left cursor-pointer transition-colors font-medium">
                {language === "id" ? "Testimoni Klien" : "Client Testimonials"}
              </button>
              <button onClick={() => onScrollToSection("faq")} className="text-white/60 hover:text-brand-accent hover:underline text-left cursor-pointer transition-colors font-medium">
                {language === "id" ? "Tanya Jawab (FAQ)" : "Questions & Answers (FAQ)"}
              </button>
              <button onClick={() => onScrollToSection("pricing")} className="text-white/60 hover:text-brand-accent hover:underline text-left cursor-pointer transition-colors font-medium">
                {language === "id" ? "Paket Investasi & Harga" : "Investment Plans & Rates"}
              </button>
            </div>
          </div>

          {/* Location / Meta Details (3 Columns) */}
          <div className="md:col-span-3 space-y-4 text-xs">
            <h4 className="font-display font-extrabold text-[#9da5d4] text-xs tracking-wider uppercase">
              {language === "id" ? "Kantor Pusat" : "Headquarters"}
            </h4>
            <p className="text-white/60 font-sans leading-relaxed font-medium">
              Pangandaran,<br />
              Jawa Barat, Indonesia 46396
            </p>
            <div className="pt-2 h-px bg-white/10" />
            <div className="space-y-1 text-xxs font-mono uppercase tracking-wider text-brand-accent font-bold">
              <div>⏰ {language === "id" ? "RESPON CEPAT: 08:00 - 21:00 WIB" : "FAST RESPONSE: 08:00 - 21:00 UTC+7"}</div>
              <div>⚡ {language === "id" ? "KREATIF SETIAP HARI" : "PASSIONATE EVERY DAY"}</div>
            </div>
          </div>

        </div>

        {/* Separator Line */}
        <div className="h-px bg-white/10 w-full my-8" />

        {/* Bottom Footer Credits layout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-white/50 font-medium">
          <div className="flex items-center gap-1.5 order-2 sm:order-1">
            <span>© {new Date().getFullYear()} Proud Tech. {language === "id" ? "Hak Cipta Dilindungi." : "All Rights Reserved."}</span>
          </div>
          
          <div className="flex items-center gap-1.5 order-1 sm:order-2 font-semibold text-white/70">
            <span>{language === "id" ? "Dibuat dengan React & Tailwind oleh" : "Crafted with React & Tailwind by"}</span>
            <span className="text-brand-accent font-bold">Proud Tech</span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <span className="text-xxs font-mono text-brand-accent">2026</span>
          </div>

          {/* Top Anchor Button */}
          <button
            onClick={handleScrollToTop}
            className="group bg-white/5 hover:bg-brand-blue border border-white/10 text-white transition-all rounded-full p-2.5 flex items-center justify-center shrink-0 cursor-pointer text-xs"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
