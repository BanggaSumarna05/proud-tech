import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Check, ArrowUpRight, MessageSquare, Phone, Info, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface CTAProps {
  initialSelectedPackage?: string | null;
  onOpenConsultation: () => void;
}

export default function CTA({ initialSelectedPackage, onOpenConsultation }: CTAProps) {
  const [selectedTier, setSelectedTier] = useState<"STARTER" | "PROFESIONAL" | "CUSTOM" | "MOBILE">("PROFESIONAL");
  const [userName, setUserName] = useState("");
  const [userBusiness, setUserBusiness] = useState("");
  const { language } = useLanguage();

  // Pricing Data sesuai price list resmi Proud Tech
  const packages = {
    STARTER: {
      name: language === "id" ? "Paket Starter" : "Starter Package",
      price: language === "id" ? "Rp 800.000 – 1.500.000" : "IDR 800K – 1.5M",
      target: language === "id" ? "Cocok untuk: UMKM, Personal Branding, Iklan Ads." : "Ideal for: SMEs, personal branding, and ad campaigns.",
      duration: language === "id" ? "Pengerjaan: 3 – 5 Hari Kerja" : "Delivery: 3 – 5 Business Days",
      features: language === "id"
        ? [
            "Landing Page (1 Halaman)",
            "Desain Modern & Responsive Mobile",
            "CTA WhatsApp Terintegrasi",
            "Basic SEO",
            "Integrasi Google Maps",
            "Gratis Domain .my.id (1 Tahun)",
            "Gratis Hosting (1 Tahun)",
            "Revisi 2x",
          ]
        : [
            "Landing Page (1 Page)",
            "Modern Design & Mobile Responsive",
            "WhatsApp CTA Integration",
            "Basic SEO Setup",
            "Google Maps Integration",
            "Free .my.id Domain (1 Year)",
            "Free Hosting (1 Year)",
            "2x Revisions",
          ],
      whatsappMsg: language === "id"
        ? "Halo Proud Tech, saya tertarik dengan *Paket Starter Website (Rp 800.000 – 1.500.000)* untuk bisnis saya. Mohon info lebih lengkap!"
        : "Hello Proud Tech, I am interested in the *Starter Website Package (IDR 800K – 1.5M)* for my business. Please share more details!",
    },
    PROFESIONAL: {
      name: language === "id" ? "Paket Profesional" : "Professional Package",
      price: language === "id" ? "Rp 2.000.000 – 3.500.000" : "IDR 2M – 3.5M",
      target: language === "id" ? "Cocok untuk: Company Profile, Jasa, Kontraktor." : "Best for: company profiles, service businesses, contractors.",
      duration: language === "id" ? "Pengerjaan: 7 – 14 Hari Kerja" : "Delivery: 7 – 14 Business Days",
      features: language === "id"
        ? [
            "5–10 Halaman Website",
            "Custom Design Premium",
            "CMS / Admin Panel",
            "Optimasi Kecepatan Website",
            "SEO On Page Lengkap",
            "Integrasi WhatsApp & Email",
            "Galeri & Halaman Testimoni",
            "Gratis Domain .com (1 Tahun)",
            "Gratis Hosting (1 Tahun)",
            "Revisi 4x",
          ]
        : [
            "5–10 Page Website",
            "Custom Premium Design",
            "CMS / Admin Panel",
            "Website Speed Optimization",
            "Full On-Page SEO",
            "WhatsApp & Email Integration",
            "Gallery & Testimonials Page",
            "Free .com Domain (1 Year)",
            "Free Hosting (1 Year)",
            "4x Revisions",
          ],
      whatsappMsg: language === "id"
        ? "Halo Proud Tech, saya tertarik dengan *Paket Profesional Website (Rp 2.000.000 – 3.500.000)* untuk company profile bisnis saya. Mohon informasi lebih lanjut!"
        : "Hello Proud Tech, I'm interested in the *Professional Website Package (IDR 2M – 3.5M)* for our company profile. Please advise!",
    },
    CUSTOM: {
      name: language === "id" ? "Paket Custom" : "Custom Package",
      price: language === "id" ? "Disesuaikan " : "Customized",
      target: language === "id" ? "Cocok untuk: Rental, Sekolah, Properti, Perusahaan." : "Built for: rentals, schools, property, enterprises.",
      duration: language === "id" ? "Pengerjaan: Sesuai Scope Project" : "Delivery: Based on Project Scope",
      features: language === "id"
        ? [
            "Web App Custom Full",
            "Sistem Sesuai Kebutuhan Bisnis",
            "API Integration",
            "Multi Role Management",
            "Dashboard Analytics",
            "Security Optimization",
            "Scalability Support",
            "Maintenance & Support Prioritas",
            "Gratis Domain & Hosting Premium",
            "Source Code Full Diserahkan",
          ]
        : [
            "Full Custom Web Application",
            "Business-Specific System Architecture",
            "API Integration",
            "Multi-Role User Management",
            "Analytics Dashboard",
            "Security Optimization",
            "Scalability Support",
            "Priority Maintenance & Support",
            "Free Premium Domain & Hosting",
            "Full Source Code Handover",
          ],
      whatsappMsg: language === "id"
        ? "Halo Proud Tech, bisnis saya butuh *Paket Custom Website/App* (mulai Rp 4.000.000). Saya ingin mendiskusikan kebutuhan spesifik sistem kami lebih lanjut!"
        : "Hello Proud Tech, I need a *Custom Website/App Package* (from IDR 4M). I'd like to discuss our specific system requirements!",
    },
    MOBILE: {
      name: language === "id" ? "Aplikasi Mobile" : "Mobile App",
      price: language === "id" ? "Mulai Rp 2.500.000" : "Starting IDR 2.5M",
      target: language === "id" ? "Cocok untuk: UMKM, Toko Online, Layanan Jasa." : "Perfect for: SMEs, online stores, and service businesses.",
      duration: language === "id" ? "Pengerjaan: 7 – 21 Hari Kerja" : "Delivery: 7 – 21 Business Days",
      features: language === "id"
        ? [
            "Android & iOS (1 atau 2 Platform)",
            "Desain UI Modern & Responsif",
            "Navigasi Bottom Tab",
            "Login & Registrasi User",
            "Integrasi REST API / Backend",
            "Push Notification",
            "Integrasi WhatsApp & Social",
            "Hingga 15 Halaman/Screen",
            "Revisi 2–4x",
          ]
        : [
            "Android & iOS (1 or 2 Platforms)",
            "Modern & Responsive UI Design",
            "Bottom Tab Navigation",
            "User Login & Registration",
            "REST API / Backend Integration",
            "Push Notifications",
            "WhatsApp & Social Integration",
            "Up to 15 Screens/Pages",
            "2–4x Revisions",
          ],
      whatsappMsg: language === "id"
        ? "Halo Proud Tech, saya tertarik dengan *Paket Aplikasi Mobile* (mulai Rp 2.500.000). Mohon informasi lebih lengkap mengenai fitur dan paket yang tersedia!"
        : "Hello Proud Tech, I'm interested in the *Mobile App Package* (starting IDR 2.5M). Please share more info about available features and plans!",
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
            {language === "id" ? "PAKET & HARGA LAYANAN" : "PLANS & PRICING"}
          </h2>
          <p className="text-brand-dark/75 text-sm mt-3 leading-relaxed">
            {language === "id"
              ? "Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda. Semua harga termasuk domain, hosting, dan konsultasi gratis."
              : "Choose the package that best fits your business. All plans include domain, hosting, and a free consultation session."
            }
          </p>
        </div>

        {/* Dynamic Grid Layout (Pricing on left, Form + CTA on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: PRICING TAB SELECTION & INFRASTRUCTURE (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white border border-brand-border rounded-[32px] p-6 sm:p-8 shadow-sm">
            
            <div>
              {/* Custom Package Selector Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 bg-[#eeeeea] p-1.5 rounded-2xl border border-brand-border/40">
                {(Object.keys(packages) as Array<keyof typeof packages>).map((tier) => {
                  const tabLabels: Record<keyof typeof packages, { id: string; en: string }> = {
                    STARTER:    { id: "Starter",       en: "Starter" },
                    PROFESIONAL:{ id: "Profesional",   en: "Professional" },
                    CUSTOM:     { id: "Custom",         en: "Custom" },
                    MOBILE:     { id: "Mobile App",     en: "Mobile App" },
                  };
                  return (
                    <button
                      key={tier}
                      onClick={() => setSelectedTier(tier)}
                      className={`py-3 px-2 rounded-xl text-center font-display font-black text-xxs tracking-normal uppercase transition-all cursor-pointer ${
                        selectedTier === tier
                          ? "bg-brand-blue text-white shadow-md scale-102"
                          : "text-brand-dark/65 hover:text-brand-blue hover:bg-black/5"
                      }`}
                    >
                      {language === "id" ? tabLabels[tier].id : tabLabels[tier].en}
                    </button>
                  );
                })}
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
                  </div>
                  
                  {/* Huge Styled Price Badge */}
                  <div className="bg-brand-lime/35 border border-brand-lime/80 px-6 py-3 rounded-2xl text-left sm:text-right w-full sm:w-auto shrink-0">
                    <span className="font-sans font-medium text-[9px] text-[#1f1f1f]/60 uppercase tracking-widest block font-bold">
                      {language === "id" ? "INVESTASI MULAI" : "INVESTMENT STARTS FROM"}
                    </span>
                    <span className="font-display font-black text-xl md:text-2xl text-brand-blue block tracking-tight">{packages[selectedTier].price}</span>
                  </div>
                </div>

                {/* Delivery Time + Revision guarantee — prominent block */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="flex items-center gap-2 bg-brand-blue/5 border border-brand-blue/15 px-3.5 py-2 rounded-xl">
                    <span className="text-brand-blue text-sm">⏱️</span>
                    <span className="text-[11px] font-display font-extrabold text-brand-blue">
                      {packages[selectedTier].duration.replace('⏱️ ', '')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-brand-lime/10 border border-brand-lime/25 px-3.5 py-2 rounded-xl">
                    <span className="text-sm">🛡️</span>
                    <span className="text-[11px] font-display font-extrabold text-brand-blue">
                      {language === "id" ? "Garansi Revisi Sepuasnya" : "Unlimited Revisions"}
                    </span>
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

            {/* Note panel with add-ons */}
            <div className="mt-8 bg-brand-bg border border-brand-border/80 rounded-2xl p-4 flex gap-3.5 items-start">
              <Info className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div className="text-xxs leading-relaxed text-brand-dark/60 font-medium space-y-1">
                <p>
                  <span className="font-bold text-brand-dark uppercase">{language === "id" ? "SUDAH TERMASUK:" : "ALL PLANS INCLUDE:"}</span>{" "}
                  {language === "id"
                    ? "Domain, hosting SSD, SSL gratis, setup teknis awal, dan garansi support 30 hari setelah go-live."
                    : "Domain, SSD hosting, free SSL, initial technical setup, and 30-day post-launch support."
                  }
                </p>
                <p>
                  <span className="font-bold text-brand-blue uppercase">{language === "id" ? "ADD-ON TERSEDIA:" : "ADD-ONS AVAILABLE:"}</span>{" "}
                  {language === "id"
                    ? "Blog/Artikel Rp500rb · Sistem Booking Rp1.5jt · Multi Bahasa Rp750rb · Membership/Login Rp1jt · Maintenance Bulanan mulai Rp250rb/bln"
                    : "Blog System IDR 500K · Booking System IDR 1.5M · Multi-Language IDR 750K · Membership/Login IDR 1M · Monthly Maintenance from IDR 250K/mo"
                  }
                </p>
              </div>
            </div>

            {/* Post-pricing direct WhatsApp CTA */}
            <a
              href={`https://wa.me/6285861985540?text=${encodeURIComponent(packages[selectedTier].whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 text-brand-blue font-display font-extrabold text-xs tracking-wide hover:underline underline-offset-4 cursor-pointer group"
            >
              <span>{language === "id" ? `Tanya langsung soal ${packages[selectedTier].name} →` : `Ask us about ${packages[selectedTier].name} directly →`}</span>
            </a>

          </div>

          {/* RIGHT: CONTACT FORM & INTERACTIVE CTA (5 Columns) */}
          <div className="lg:col-span-5 bg-[#121215] text-white border border-brand-border/10 rounded-[32px] p-6 sm:p-8 shadow-lg relative overflow-hidden flex flex-col justify-between">
            {/* Ambient glowing spotlight background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/30 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Urgency strip */}
              <div className="mb-5 flex items-center gap-2.5 bg-red-500/10 border border-red-400/30 rounded-2xl px-4 py-2.5">
                <span className="text-base animate-bounce">🔥</span>
                <p className="text-[11px] font-display font-extrabold text-red-400 uppercase tracking-wide">
                  {language === "id" ? "Slot Pengerjaan Bulan Ini Hampir Penuh — Konsultasi Sekarang!" : "This Month's Dev Slots Almost Full — Book Your Spot Now!"}
                </p>
              </div>

              {/* Character + Header Row */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-brand-lime fill-brand-lime animate-pulse" />
                    <span className="font-display font-bold text-xxs tracking-widest text-[#D9FF3F] uppercase">
                      {language === "id" ? "KONSULTASI GRATIS — TANPA BIAYA" : "FREE CONSULTATION — ZERO COST"}
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
