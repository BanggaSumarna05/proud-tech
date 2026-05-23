import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Check, ArrowUpRight, MessageSquare, Phone, Info, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface CTAProps {
  initialSelectedPackage?: string | null;
  onOpenConsultation: () => void;
}

export default function CTA({ initialSelectedPackage, onOpenConsultation }: CTAProps) {
  const [selectedTier, setSelectedTier] = useState<"STARTER" | "BUSINESS" | "PROFESSIONAL" | "PREMIUM">("BUSINESS");
  const [userName, setUserName] = useState("");
  const [userBusiness, setUserBusiness] = useState("");
  const { language } = useLanguage();

  // Pricing Data with dynamic bilingual configurations
  const packages = {
    STARTER: {
      name: language === "id" ? "Paket Starter" : "Starter Package",
      price: "Rp 1.500.000",
      target: language === "id" ? "Cocok untuk UMKM dan bisnis kecil." : "Ideal for small scale local operations.",
      duration: language === "id" ? "⏱️ Pengerjaan: 3 - 5 Hari Kerja" : "⏱️ Delivery: 3 - 5 Business Days",
      features: language === "id" 
        ? [
            "Landing Page Modern",
            "Responsive Mobile Design",
            "WhatsApp Live Integration",
            "Basic SEO Optimization",
            "Free Setup Domain & Hosting",
          ]
        : [
            "Modern Landing Page",
            "Responsive Mobile Layout",
            "WhatsApp Chat Integration",
            "Basic SEO Optimization",
            "Complimentary Domain & Hot Hosting Setup",
          ],
      whatsappMsg: language === "id" 
        ? "Halo Proud Tech, saya tertarik dengan Paket Starter (Rp 1.500.000) untuk bisnis saya. Mohon info lebih lengkap ya!"
        : "Hello Proud Tech, I am interested in the Starter Package for my business. I would love to learn more!",
    },
    BUSINESS: {
      name: language === "id" ? "Paket Bisnis" : "Business Package",
      price: "Rp 3.500.000",
      target: language === "id" ? "Cocok untuk Company Profile resmi." : "Best fit for official company profile sites.",
      duration: language === "id" ? "⏱️ Pengerjaan: 7 - 10 Hari Kerja" : "⏱️ Delivery: 7 - 10 Business Days",
      features: language === "id"
        ? [
            "Multi Page Website (Up to 5 Pages)",
            "Premium Layout & Typography",
            "SEO Optimization & Submision",
            "Basic Admin Panel System",
            "Contact Form Integrasi Email",
            "Free Maintenance 1 Bulan",
          ]
        : [
            "Multi Page Website (Up to 5 Pages)",
            "Premium Layout & Typography Scale",
            "SEO Setup & Google Index Submission",
            "Basic Admin Panel Console",
            "Email-Integrated Support Webform",
            "Free Maintenance (1 Month)",
          ],
      whatsappMsg: language === "id"
        ? "Halo Proud Tech, saya tertarik dengan Paket Bisnis (Rp 3.500.000) untuk company profile bisnis saya. Mohon informasi kelanjutannya!"
        : "Hello Proud Tech, I am interested in the Business Package for our official brand. Please advise on custom setups!",
    },
    PROFESSIONAL: {
      name: language === "id" ? "Paket Profesional" : "Professional Package",
      price: "Rp 7.000.000",
      target: language === "id" ? "Cocok untuk bisnis berkembang." : "Designed for expanding growth brands.",
      duration: language === "id" ? "⏱️ Pengerjaan: 14 - 21 Hari Kerja" : "⏱️ Delivery: 14 - 21 Business Days",
      features: language === "id"
        ? [
            "Fully Custom Website Design",
            "Advanced CSS Interaktivitas & Framer Motion",
            "CMS (Content Management System) Integration",
            "Modern Interactive Dashboard System",
            "Premium UI/UX Polish",
            "Priority 24/7 Support",
          ]
        : [
            "Fully Custom Website Solutions",
            "Advanced Motion Animations",
            "CMS Core (Content Manager) Integrations",
            "Modern Analytical Client Dashboards",
            "Vibrant, High-Contrast UI/UX",
            "24/7 Premium Priority Support Desk Code",
          ],
      whatsappMsg: language === "id"
        ? "Halo Proud Tech, saya ingin berkonsultasi mengenai Paket Profesional (Rp 7.000.000) untuk platform kustom saya. Kapan kita bisa diskusi?"
        : "Hello Proud Tech, I want to inquire about the Professional Package for building custom web experiences. Let's talk!",
    },
    PREMIUM: {
      name: language === "id" ? "Paket Kustom Premium" : "Premium Custom Stack",
      price: language === "id" ? "Harga Kustom" : "Custom Tariff",
      target: language === "id" ? "Cocok untuk startup & sistem kustom." : "Best for startups & specialized custom tools.",
      duration: language === "id" ? "⏱️ Pengerjaan: 30+ Hari / Kustom" : "⏱️ Delivery: 30+ Days / Custom Scope",
      features: language === "id"
        ? [
            "Full Custom Web Development",
            "Full Web App Architecture",
            "Third-party API & OAuth Integrations",
            "Sleek Admin Management Dashboards",
            "Consultancy & Database Optimization",
            "Highly Scalable Cloud Architecture",
          ]
        : [
            "Custom-Architected Web Applications",
            "Enterprise API & OAuth Protocols",
            "Secure, Scalable Serverless Integrations",
            "Sleek Interactive Real-time Statistics Screen",
            "Bespoke System Infrastructure Audits",
            "Modern Container & CDN Load Balancing",
          ],
      whatsappMsg: language === "id"
        ? "Halo Proud Tech, bisnis kami membutuhkan solusi sistem kustom berskala besar (Paket Premium). Saya ingin mendiskusikan kebutuhan arsitektur kami."
        : "Hello Proud Tech, our enterprise requires bespoke digital solutions. Let's schedule a dedicated scoping call.",
    },
  };

  const handleWhatsAppRedirect = (e: FormEvent) => {
    e.preventDefault();
    const pkg = packages[selectedTier];
    const greetingText = language === "id"
      ? `Halo Proud Tech. Nama saya *${userName || "Pengunjung"}*${userBusiness ? ` dari *${userBusiness}*` : ""}.\n\nSaya tertarik dengan *${pkg.name} (${pkg.price})*.\n\n_Pesan:_ ${pkg.whatsappMsg}`
      : `Hello Proud Tech. My name is *${userName || "Guest"}*${userBusiness ? ` from *${userBusiness}*` : ""}.\n\nI am interested in the *${pkg.name} (${pkg.price})* plan.\n\n_Message:_ ${pkg.whatsappMsg}`;
    
    const encodedText = encodeURIComponent(greetingText);
    const waUrl = `https://wa.me/6285861985540?text=${encodedText}`;
    
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="pricing" className="py-20 md:py-28 px-6 relative">
      
      {/* Decorative background vectors */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-brand-lime/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-display font-medium text-xxs tracking-widest text-brand-blue bg-brand-blue/10 px-4.5 py-1.5 rounded-full border border-brand-blue/10 uppercase">
            {language === "id" ? "PAKET INVESTASI DIGITAL" : "DIGITAL PLANS & RATES"}
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark mt-4 tracking-tight uppercase">
            {language === "id" ? "PAKET KONSULTASI & HARGA" : "CONSULTATION pricing"}
          </h2>
          <p className="text-brand-dark/75 text-sm mt-3 leading-relaxed">
            {language === "id"
              ? "Pilihlah skema paket investas yang paling ideal dengan visi pertumbuhan bisnis Anda. Konsultasikan modifikasi fitur sesuka hati."
              : "Choose the pricing layout that best aligns with your business goals. Realize modifications freely with our friendly engineers."
            }
          </p>
        </div>

        {/* Dynamic Grid Layout (Pricing on left, Form + CTA on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: PRICING TAB SELECTION & INFRASTRUCTURE (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white border border-brand-border rounded-[32px] p-8 shadow-sm">
            
            <div>
              {/* Custom Package Selector Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 bg-[#eeeeea] p-1.5 rounded-2xl border border-brand-border/40">
                {(Object.keys(packages) as Array<keyof typeof packages>).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`py-3 px-2 rounded-xl text-center font-display font-black text-xxs tracking-normal uppercase transition-all cursor-pointer ${
                      selectedTier === tier
                        ? "bg-brand-blue text-white shadow-md scale-102"
                        : "text-brand-dark/65 hover:text-brand-blue hover:bg-black/5"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>

              {/* Active Package Details View */}
              <motion.div
                key={selectedTier}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-black text-3xl text-brand-dark uppercase tracking-tight">
                      {packages[selectedTier].name}
                    </h3>
                    <p className="text-brand-dark/65 text-xs font-sans mt-0.5">
                      {packages[selectedTier].target}
                    </p>
                    <div className="flex flex-wrap items-center gap-2.5 mt-3">
                      <span className="bg-brand-blue/5 border border-brand-blue/10 px-3 py-1 rounded-full text-[10px] font-display font-extrabold text-brand-blue">
                        {packages[selectedTier].duration}
                      </span>
                      <span className="bg-brand-lime/10 border border-brand-lime/25 px-3 py-1 rounded-full text-[10px] font-display font-extrabold text-brand-blue flex items-center gap-1">
                        🛡️ {language === "id" ? "Garansi Revisi Sepuasnya" : "Unlimited Revisions"}
                      </span>
                    </div>
                  </div>
                  
                  {/* Huge Styled Price Badge */}
                  <div className="bg-brand-lime/35 border border-brand-lime/80 px-6 py-3 rounded-2xl text-right">
                    <span className="font-sans font-medium text-[9px] text-[#1f1f1f]/60 uppercase tracking-widest block font-bold">
                      {language === "id" ? "INVESTASI MULAI" : "INVESTMENT STARTS FROM"}
                    </span>
                    <span className="font-display font-black text-xl md:text-2xl text-brand-blue block tracking-tight">{packages[selectedTier].price}</span>
                  </div>
                </div>

                <div className="h-px bg-brand-border/60" />

                {/* Features List with animated Check indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {packages[selectedTier].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-brand-blue/10 border border-brand-blue/15 flex items-center justify-center shrink-0 text-brand-blue mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-medium text-brand-dark/85 leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            </div>

            {/* Small note panel */}
            <div className="mt-8 bg-brand-bg border border-brand-border/80 rounded-2xl p-4 flex gap-3.5 items-start">
              <Info className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div className="text-xxs leading-relaxed text-brand-dark/60 font-medium">
                <span className="font-bold text-brand-dark uppercase">{language === "id" ? "KUSTOMISASI BEBAS:" : "ENTIRE FREEDOM:"}</span>{" "}
                {language === "id"
                  ? "Semua skema di atas menggunakan domain berkualitas .com/.id selama 1 tahun penuh, server cloud SSD, keamanan SSL, dan optimasi load cepat dari tim internal Proud Tech."
                  : "Every active package includes clean hosting frameworks, SSD storage systems, premium SSL configurations, and optimized loading speed protocols from our in-house team."
                }
              </div>
            </div>

          </div>

          {/* RIGHT: CONTACT FORM & INTERACTIVE CTA (5 Columns) */}
          <div className="lg:col-span-5 bg-[#121215] text-white border border-brand-border/10 rounded-[32px] p-8 shadow-lg relative overflow-hidden flex flex-col justify-between">
            {/* Ambient glowing spotlight background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/30 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Character + Header Row */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-brand-lime fill-brand-lime animate-pulse" />
                    <span className="font-display font-bold text-xxs tracking-widest text-[#D9FF3F] uppercase">
                      {language === "id" ? "KONSULTASI INSTAN" : "INSTANT SCENE CONSULTATION"}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight leading-tight uppercase mb-4">
                    {language === "id" ? "SIAP MENGEMBANGKAN BISNIS ANDA?" : "READY TO GROW YOUR BRAND?"}
                  </h3>
                </div>
                {/* 3D Character sitting with laptop */}
                <motion.img
                  src="/images/character-sitting.jpg"
                  alt="3D Character with laptop"
                  className="hidden sm:block w-[120px] h-[120px] object-contain rounded-2xl flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                />
              </div>

              <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                {language === "id"
                  ? "Bangun website modern dan profesional untuk meningkatkan branding bisnis Anda. Isi data untuk direct konsultasi WhatsApp instan dengan Proud Tech."
                  : "Establish a responsive digital presence to upgrade your branding authority. File your brief below to talk with our lead consultant instantly."
                }
              </p>

              {/* Contact Form wrapper */}
              <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="user-name-input" className="block text-[10px] font-mono tracking-widest text-white/50 uppercase">
                    {language === "id" ? "Nama Anda" : "Your Full Name"}
                  </label>
                  <input
                    id="user-name-input"
                    type="text"
                    required
                    placeholder={language === "id" ? "Budi Santoso" : "Johnathan Doe"}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-[#1c1d24] border border-white/10 rounded-2xl py-3.5 px-4 text-xs focus:border-brand-lime outline-none text-white transition-all/300 font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="user-business-input" className="block text-[10px] font-mono tracking-widest text-white/50 uppercase">
                    {language === "id" ? "Nama Bisnis & Bidang" : "Brand Name & Business Sector"}
                  </label>
                  <input
                    id="user-business-input"
                    type="text"
                    placeholder={language === "id" ? "Kuliner Sambal Mandiri" : "Modern Retail Group"}
                    value={userBusiness}
                    onChange={(e) => setUserBusiness(e.target.value)}
                    className="w-full bg-[#1c1d24] border border-white/10 rounded-2xl py-3.5 px-4 text-xs focus:border-brand-lime outline-none text-white transition-all/300 font-medium"
                  />
                </div>

                <button
                  id="direct-consultation-submit"
                  type="submit"
                  className="w-full group mt-2 flex items-center justify-between bg-brand-lime text-brand-dark font-display font-bold text-xs tracking-wider uppercase px-5 py-4 rounded-full border border-brand-dark/10 shadow-md transition-all duration-300 hover:bg-brand-blue hover:text-white cursor-pointer hover:scale-102 active:scale-98"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    {language === "id" ? "KONSULTASI VIA WHATSAPP" : "TELEPORT VIA WHATSAPP"}
                  </span>
                  <span className="w-5 h-5 rounded-full bg-brand-dark text-brand-lime group-hover:bg-brand-lime group-hover:text-brand-blue flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>
                
                {/* Frictionless Trust Badges */}
                <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-[10px] text-white/50 font-mono">
                  <span className="flex items-center gap-1 text-brand-lime font-bold">
                    ⚡ {language === "id" ? "Respon Cepat < 15 Menit" : "Fast Response < 15 Mins"}
                  </span>
                  <span>•</span>
                  <span className="font-bold">🛡️ {language === "id" ? "100% Garansi Kepuasan" : "100% Satisfaction Guarantee"}</span>
                </div>
              </form>
            </div>

            {/* Direct Line Badge */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-white/40 text-xxs font-mono">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-brand-lime" aria-hidden="true" />
                {language === "id" ? "Dukungan Telepon Aktif" : "Direct Hotline Available"}
              </span>
              <span className="text-brand-lime">+62 858-6198-5540</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
