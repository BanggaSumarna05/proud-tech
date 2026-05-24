import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Language = "en" | "id";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, replacementValue?: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  id: {
    // Navbar
    "nav.home": "BERANDA",
    "nav.services": "LAYANAN",
    "nav.about": "TENTANG",
    "nav.portfolio": "PORTOFOLIO",
    "nav.navigation": "NAVIGASI",
    "nav.free_consultation": "KONSULTASI GRATIS",
    "nav.contact_us": "HUBUNGI KAMI",
    "nav.faq": "FAQ",
    "nav.hq": "📍 PANGANDARAN, INDONESIA",
    // Hero
    "hero.badge": "⚡ JASA PEMBUATAN WEBSITE",
    "hero.line1": "BANGUN",
    "hero.badge_website": "WEBSITE",
    "hero.line2": "& APLIKASI",
    "hero.line3": "UNTUK BISNIS ANDA.",
    "hero.desc": "Kami merekayasa website SEO friendly dengan estetika modern kelas dunia, arsitektur kode super cepat, dan optimasi konversi tingkat tinggi. Dirancang khusus oleh web developer Indonesia terpercaya untuk membawa bisnis Anda memenangkan pasar digital.",
    "hero.btn_start": "MULAI PROYEK",
    "hero.btn_view": "LIHAT PORTOFOLIO",
    "hero.stats_done": "PROYEK SELESAI",
    "hero.stats_happy": "KLIEN PUAS",

    // Showcase
    "showcase.badge": "KARYA PROUD TECH",
    "showcase.title": "Dibuat dengan Presisi Estetika & Kode",
    "showcase.desc": "Intip workspace interaktif dan mockups platform yang dirancang dengan performa maksimal, antarmuka premium, dan UI/UX modern.",
    "showcase.web_build": "PEMBUATAN WEBSITE",
    "showcase.arch_title": "Landing Page Portofolio Arsitek",
    "showcase.arch_desc": "Desain web minimalis yang dioptimalkan untuk konversi visual tinggi.",
    "showcase.view": "LIHAT",
    "showcase.mobile_app": "APLIKASI MOBILE",
    "showcase.fitness_title": "UI Aplikasi Kebugaran Mobile",
    "showcase.fitness_desc": "Aplikasi Flutter lintas-platform dengan pelacakan biometrik real-time.",
    "showcase.fitness_metrics": "METRIK HARIAN",
    "showcase.fitness_active": "AKTIF",
    "showcase.fitness_steps": "LANGKAH HARI INI",
    "showcase.fitness_hr": "Detak Jantung",
    "showcase.fitness_cal": "Kalori",
    "showcase.dev_engine": "MESIN PENGEMBANG",
    "showcase.engine_title": "Mesin Utama Proud Tech",
    "showcase.engine_desc": "Integrasi 3D dashboard, visual model, dan performa tinggi yang disesuaikan secara dinamis.",
    "showcase.engine_active": "MESIN AKTIF v2.1",
    "showcase.engine_stable": "STABIL",
    "showcase.engine_clients": "20+ Klien",
    "showcase.engine_projects": "50+ Proyek",
    "showcase.saas_badge": "DASHBOARD SAAS",
    "showcase.saas_title": "Pelacak Konversi & Penjualan",
    "showcase.saas_desc": "Panel analitik kustom untuk melacak prospek dan tingkat retensi pengguna pada aplikasi multi-platform.",
    "showcase.saas_conversion": "Konversi: 4.8%",
    "showcase.saas_kpi": "KPI Tercapai",
    "showcase.react_badge": "MESIN REACT REUSABLE",
    "showcase.react_title": "Arsitektur Kode Responsif",
    "showcase.react_desc": "Arsitektur React yang bersih dan modular untuk memastikan kecepatan kode optimal dan kemudahan penskalaan.",
    "showcase.react_compiled": "✔ Server Dev Terkompilasi (1.2s)",
    "showcase.react_hmr": "HMR Aktif",

    // Services
    "services.badge": "⚡ SOLUSI TEKNOLOGI KAMI",
    "services.title": "LAYANAN UTAMA DIGITAL AGENCY KAMI",
    "services.web_title": "Jasa Pembuatan Website & Landing Page Profesional",
    "services.web_desc": "Kami membangun website company profile premium, e-commerce interaktif, dan landing page profesional yang responsive, loading secepat kilat (skor PageSpeed 95%+), dan teroptimasi penuh untuk konversi leads serta SEO Google Indonesia.",
    "services.mobile_title": "Jasa Pembuatan Aplikasi Web Kustom",
    "services.mobile_desc": "Rekayasa aplikasi berbasis web kustom, sistem informasi korporat, hingga platform SaaS multi-tenant dengan keamanan data tingkat tinggi, arsitektur database skalabel, dan visualisasi panel dashboard analitik yang intuitif.",
    "services.uiux_title": "Desain UI/UX & Prototyping Premium",
    "services.uiux_desc": "Perancangan visual sistem informasi, user flow interaktif, serta high-fidelity mockup di Figma. Fokus pada konsistensi identitas brand, kemudahan navigasi, dan micro-animations premium yang memikat perhatian audiens Anda.",

    // Why Choose Us
    "why.badge": "STANDAR KUALITAS KAMI",
    "why.title": "REKAYASA DIGITAL TERBAIK UNTUK BISNIS ANDA",
    "why.desc": "Sebagai partner agency digital andalan, kami menolak template instan murah. Kami mendedikasikan energi penuh untuk membangun produk digital berkecepatan tinggi, aman, dan berorientasi murni pada ROI bisnis Anda.",
    "why.item1_title": "Desain Responsive Modern",
    "why.item1_desc": "Dikalibrasi presisi dengan grid modern agar tampil sangat premium di smartphone, tablet, maupun layar desktop ultra-lebar.",
    "why.item2_title": "Kecepatan Akses Kilat",
    "why.item2_desc": "Optimasi total gambar, bundling kode modular, dan serverless CDN agar website Anda termuat penuh dalam kurang dari 1.5 detik.",
    "why.item3_title": "Optimasi SEO Friendly",
    "why.item3_desc": "Dilengkapi sitemap otomatis, struktur kode semantik, kompresi aset, dan meta tag berkinerja tinggi agar website Anda mudah berada di halaman pertama Google.",
    "why.item4_title": "UI/UX Kelas Premium",
    "why.item4_desc": "Sentuhan tipografi elegan, ritme layout yang lega, serta animasi mikro interaktif yang mendongkrak kredibilitas dan kelas brand Anda.",
    "why.item5_title": "Dukungan Teknis Responsif",
    "why.item5_desc": "Bantuan konsultasi gratis berkala, pemeliharaan server harian, dan respons tanggap keluhan pasca serah terima proyek agar bisnis Anda terus berjalan stabil.",
    "why.item6_title": "Solusi Berorientasi Penjualan",
    "why.item6_desc": "Seluruh fitur kami rekayasa secara strategis untuk mengarahkan pengunjung menjadi prospek nyata atau direct checkout WhatsApp yang efisien.",
    "why.core_tech": "Teknologi Utama Standar Modern 2026",
    "why.core_tech_desc": "React Engine Teroptimasi · Native ESM · Desain Aksesibilitas Tinggi",

    // Portfolios
    "portfolio.badge": "PORTOFOLIO PILIHAN",
    "portfolio.title": "PROYEK SUKSES YANG KAMI BANGUN",
    "portfolio.all_projects": "SEMUA PROYEK",
    "portfolio.project_prefix": "PROYEK ",
    "portfolio.view_details": "LIHAT RINCIAN",

    // Processes
    "process.badge": "ALUR KERJA TRANSPARAN",
    "process.title": "BAGAIMANA PROYEK DIGITAL ANDA DIGARAP",
    "process.desc": "Kami menerapkan metodologi modern yang terjadwal rapi guna menjamin ketepatan waktu pengiriman, performa sistem optimal, dan kepuasan utama Anda.",
    "process.step_prefix": "LANGKAH",
    "process.step1_title": "Diskusi & Konsultasi Strategis",
    "process.step1_desc": "Kami membedah visi produk, target pasar, serta strategi positioning yang tepat untuk brand Anda di dunia digital.",
    "process.step2_title": "Perencanaan Arsitektur & Sitemap",
    "process.step2_desc": "Penyusunan diagram alur pengguna (user flow), sitemap navigasi, skema fungsionalitas, estimasi biaya, dan timeline proyek.",
    "process.step3_title": "Desain UI/UX High-Fidelity",
    "process.step3_desc": "Mentransformasi konsep strategis ke dalam visual mockup interaktif premium di Figma dengan sentuhan estetik terkini.",
    "process.step4_title": "Pengembangan Kode (Coding)",
    "process.step4_desc": "Pengodean modular dengan standar clean-code, ramah SEO, berkinerja tinggi, dan super responsif di semua perangkat.",
    "process.step5_title": "Pengujian & Peluncuran (Go Live)",
    "process.step5_desc": "Pengujian bug lintas browser, audit PageSpeed Google, instalasi domain dan hosting premium, serta penyerahan panduan CMS.",

    // Motivation
    "motivation.badge": "MANIFESTO UTAMA KAMI",
    "motivation.text1": "TERUS MEMBANGUN",
    "motivation.text2": "HINGGA",
    "motivation.text3": "BRAND ANDA",
    "motivation.text4": "MENJADI",
    "motivation.text5": "DIGITAL.",

    // CTA
    "cta.badge": "KONSULTASI INSTAN",
    "cta.title": "SIAP MEMBAWA BISNIS ANDA KE LEVEL DIGITAL BERIKUTNYA?",
    "cta.desc": "Bangun website website modern, responsive, dan profesional untuk melipatgandakan branding serta penjualan bisnis Anda. Isi form konsultasi instan di bawah ini untuk berdiskusi langsung dengan tim arsitek digital Proud Tech secara gratis!",
    "cta.star_tag": "PILIHAN TERBAIK",
    "cta.tier_select": "PILIH",
    "cta.tier_selected": "REKOMENDASI ANDA",
    "cta.sub_title": "SIAP MENGEMBANGKAN BISNIS ANDA?",
    "cta.sub_desc": "Bangun website modern dan profesional untuk meningkatkan branding bisnis Anda. Isi data untuk direct konsultasi WhatsApp instan dengan Proud Tech.",
    "cta.placeholder_name": "Nama lengkap Anda...",
    "cta.placeholder_biz": "Nama bisnis/organisasi Anda...",
    "cta.label_name": "Nama Anda",
    "cta.label_biz": "Nama Bisnis",
    "cta.btn_select_first": "Pilih skema paket di atas terlebih dahulu",
    "cta.btn_ready": "KONSULTASI SEKARANG VIA WHATSAPP",

    // Footer
    "footer.pages": "Halaman Langsung",
    "footer.pages_home": "Beranda",
    "footer.pages_services": "Layanan Kami",
    "footer.pages_about": "Mengapa Memilih Kami",
    "footer.pages_portfolio": "Portofolio Proyek",
    "footer.pages_pricing": "Paket Investasi & Harga",
    "footer.hq": "Kantor Pusat",
    "footer.addr_line1": "Pangandaran,",
    "footer.addr_line2": "Jawa Barat, Indonesia 46396",
    "footer.uptime": "⏰ RESPON CEPAT: 08:00 - 21:00 WIB",
    "footer.creative": "⚡ KREATIF SETIAP HARI",
    "footer.copyright": "Hak Cipta Dilindungi.",
    "footer.powered_by": "Dibuat dengan React & Tailwind oleh",

    // Loader
    "loader.booting": "PROUD CORE v2026 • BOOTING...",
    "loader.text0": "Menyiapkan arsitektur sistem...",
    "loader.text1": "Menyelaraskan grid presisi...",
    "loader.text2": "Menginisialisasi modul React modern...",
    "loader.text3": "Mengoptimasi performa rendering...",
    "loader.text4": "Merender asset estetika ultra-premium...",
    "loader.text5": "Menyelesaikan kalibrasi tata letak...",
    "loader.text6": "Sistem Proud Tech siap diluncurkan...",
    "loader.creative": "PROUD TECH CREATIVE WORKSPACE",
    "loader.engine_status": "EST. 2026 • ALL ENGINE STATUS OPERATIONAL",

    // Package Titles & Targets (These are bound on packages list inside CTA)
    "pkg.starter.name": "Paket Starter",
    "pkg.starter.target": "Cocok untuk UMKM dan bisnis kecil.",
    "pkg.starter.msg": "Halo Proud Tech, saya tertarik dengan Paket Starter (Rp 1.500.000) untuk bisnis saya. Mohon info lebih lengkap ya!",
    
    "pkg.business.name": "Paket Bisnis",
    "pkg.business.target": "Cocok untuk Company Profile resmi.",
    "pkg.business.msg": "Halo Proud Tech, saya tertarik dengan Paket Bisnis (Rp 3.500.000) untuk company profile bisnis saya. Mohon informasi kelanjutannya!",
    
    "pkg.pro.name": "Paket Profesional",
    "pkg.pro.target": "Cocok untuk bisnis berkembang.",
    "pkg.pro.msg": "Halo Proud Tech, saya ingin berkonsultasi mengenai Paket Profesional (Rp 7.000.000) untuk platform kustom saya. Kapan kita bisa diskusi?",
    
    "pkg.premium.name": "Paket Kustom Premium",
    "pkg.premium.price": "Harga Kustom",
    "pkg.premium.target": "Cocok untuk startup & sistem kustom.",
    "pkg.premium.msg": "Halo Proud Tech, bisnis kami membutuhkan solusi sistem kustom berskala besar (Paket Premium). Saya ingin mendiskusikan kebutuhan arsitektur kami.",

    // Whatsapp Float
    "ws.bubble_msg1": "Halo kak! Perkenalkan saya dari Proud Tech. 😊",
    "ws.bubble_msg2": "Ada yang bisa saya bantu terkait konsep design website, company profile, atau aplikasi mobile impian kakak?",
    "ws.placeholder": "Ketik pesan konsultasimu..."
  },
  en: {
    // Navbar
    "nav.home": "HOME",
    "nav.services": "SERVICES",
    "nav.about": "ABOUT ",
    "nav.portfolio": "PORTFOLIO",
    "nav.navigation": "NAVIGATION",
    "nav.free_consultation": "FREE CONSULTATION",
    "nav.contact_us": "CONTACT US",
    "nav.faq": "FAQ",
    "nav.hq": "📍 PANGANDARAN, INDONESIA",

    // Hero
    "hero.badge": "Helping businesses grow digitally",
    "hero.line1": "BUILD",
    "hero.badge_website": "WEBSITES",
    "hero.line2": "& APPS",
    "hero.line3": "FOR YOUR BUSINESS.",
    "hero.desc": "We design cutting-edge digital experiences combining clean React grids with flawless premium interactive aesthetics. Built specifically for ultimate conversion rates.",
    "hero.btn_start": "START PROJECT",
    "hero.btn_view": "VIEW PORTFOLIO",
    "hero.stats_done": "COMPLETED PROJECTS",
    "hero.stats_happy": "HAPPY CLIENTS",

    // Showcase
    "showcase.badge": "PROUD TECH SHOWCASE",
    "showcase.title": "Crafted with Precision",
    "showcase.desc": "Take a look at interactive workspaces and platform mockups designed with maximum performance and modern UI/UX.",
    "showcase.web_build": "WEBSITE BUILD",
    "showcase.arch_title": "Architect Portfolio Landing Page",
    "showcase.arch_desc": "Minimalist web design optimized for high visual conversion.",
    "showcase.view": "VIEW",
    "showcase.mobile_app": "MOBILE APPLICATION",
    "showcase.fitness_title": "Mobile Fitness App UI",
    "showcase.fitness_desc": "Cross-platform Flutter application with real-time biometric tracking.",
    "showcase.fitness_metrics": "DAILY METRICS",
    "showcase.fitness_active": "ACTIVE",
    "showcase.fitness_steps": "STEPS TODAY",
    "showcase.fitness_hr": "Heart Rate",
    "showcase.fitness_cal": "Calories",
    "showcase.dev_engine": "DEVELOPER ENGINE",
    "showcase.engine_title": "Proud Tech Core Engine",
    "showcase.engine_desc": "Integration of 3D dashboard, visual model, and high performance dynamically adjusted.",
    "showcase.engine_active": "ACTIVE ENGINE v2.1",
    "showcase.engine_stable": "STABLE",
    "showcase.engine_clients": "20+ Clients",
    "showcase.engine_projects": "50+ Projects",
    "showcase.saas_badge": "SAAS DASHBOARD",
    "showcase.saas_title": "Conversion & Sales Tracker",
    "showcase.saas_desc": "Custom analytical dashboard tracking leads and user retention rates on multi-platform apps.",
    "showcase.saas_conversion": "Conversion: 4.8%",
    "showcase.saas_kpi": "KPI Reached",
    "showcase.react_badge": "REUSABLE REACT ENGINE",
    "showcase.react_title": "Responsive Code Architecture",
    "showcase.react_desc": "Clean and modular React architecture ensuring optimal code speed and ease of scaling.",
    "showcase.react_compiled": "✔ Dev Server Compiled (1.2s)",
    "showcase.react_hmr": "HMR Active",

    // Services
    "services.badge": "⚡ CORE SERVICES",
    "services.title": "OUR SERVICES",
    "services.web_title": "Website Development",
    "services.web_desc": "We build official company profiles, e-commerce, and high-performance landing pages that are secure, responsive, and oriented towards generating leads.",
    "services.mobile_title": "Mobile Applications",
    "services.mobile_desc": "Publish iOS & Android cross-platform solutions utilizing slick React Native or Flutter frameworks with native speeds.",
    "services.uiux_title": "UI/UX Design",
    "services.uiux_desc": "We plan structured interactive blueprints, wireframes, and gorgeous components to amplify brand loyalty and visual storytelling.",

    // Why Choose Us
    "why.badge": "OUR CORES",
    "why.title": "WHY CHOOSE US",
    "why.desc": "We dedicatedly commit our energy to engineers digital outputs with elite rendering speeds, complete fluid layout response, and premium fidelity.",
    "why.item1_title": "Modern Responsive Design",
    "why.item1_desc": "Every single page dashboard is scaled and structured to output a spectacular user view on smartphones, tablets, or broadscreens.",
    "why.item2_title": "Ultimate Speed",
    "why.item2_desc": "Harvest superb loading score via meticulous modular component trees, code-splitting structures, and assets compression protocols.",
    "why.item3_title": "SEO Optimizations",
    "why.item3_desc": "Clean structural syntax, semantic headings layout, and ultra-high lighthouse metrics optimize rankings on web index pages.",
    "why.item4_title": "Premium Aesthetics",
    "why.item4_desc": "Harmonious balance of premium display grids, beautiful negative spacing proportions, and elegant typography choices.",
    "why.item5_title": "Speedy Support",
    "why.item5_desc": "Professional consultant lines, daily performance checks, and highly welcoming response lines to sustain uptime.",
    "why.item6_title": "Corporate Focus",
    "why.item6_desc": "We sculpt features intentionally aligned to secure conversions, brand authority, and digital business expansion.",
    "why.core_tech": "Modern 2026 Full Standard Technology Stack",
    "why.core_tech_desc": "Turbocharged React Rendering • Native Fast ESM Modules • Optimized Accessibility",

    // Portfolios
    "portfolio.badge": "OUR FEATURED PORTFOLIOS",
    "portfolio.title": "PORTFOLIO SHOWCASE",
    "portfolio.all_projects": "ALL PROJECTS",
    "portfolio.project_prefix": "PROJECT ",
    "portfolio.view_details": "VIEW DETAILS",

    // Processes
    "process.badge": "OUR WORKFLOW",
    "process.title": "HOW WE WORK",
    "process.desc": "Rigorous and disciplined workflow timelines that ensure zero-delay project delivery, high performance limits, and transparent updates.",
    "process.step_prefix": "STEP",
    "process.step1_title": "Discussion",
    "process.step1_desc": "Initial ideation alignment to evaluate goals, targeted audients, and formulate detailed strategy visions.",
    "process.step2_title": "Planning",
    "process.step2_desc": "Mapping precise informational flow, structural features, complete blueprint sitemaps, and timeline milestones.",
    "process.step3_title": "Design",
    "process.step3_desc": "Translate strategy blueprints into modern high-fidelity prototypes in Figma decorated with corporate identities.",
    "process.step4_title": "Development",
    "process.step4_desc": "Convert visual components into fast, typesafe modular components backed by reliable and scalable rendering.",
    "process.step5_title": "Launching",
    "process.step5_desc": "System testing protocols, extensive bug evaluation, high performance server deployment, metadata setup, and continuous tracking.",

    // Motivation
    "motivation.badge": "OUR BRAND MANIFESTO",
    "motivation.text1": "KEEP BUILDING",
    "motivation.text2": "UNTIL YOUR",
    "motivation.text3": "BRAND",
    "motivation.text4": "BECOMES",
    "motivation.text5": "DIGITAL.",

    // CTA
    "cta.badge": "DIGITAL INVESTMENT PLAN",
    "cta.title": "PRICING PLANS & CONSULTATION",
    "cta.desc": "Select the custom investment tier that matches your corporate growth pace. Modify or replace any feature modules seamlessly.",
    "cta.star_tag": "RECOMMENDED CHOICE",
    "cta.tier_select": "SELECT",
    "cta.tier_selected": "YOUR SELECTION",
    "cta.sub_title": "READY TO SCALE YOUR BUSINESS?",
    "cta.sub_desc": "Build an elite business application to amplify your brand scale. Submit credentials for responsive instant chat with Proud Tech.",
    "cta.placeholder_name": "Your full name...",
    "cta.placeholder_biz": "Your organization/business name...",
    "cta.label_name": "Your Name",
    "cta.label_biz": "Business Name",
    "cta.btn_select_first": "Please select a pricing package structure above first",
    "cta.btn_ready": "CONNECT DIRECTLY ON WHATSAPP",

    // Footer
    "footer.pages": "Direct Pages",
    "footer.pages_home": "Home Page",
    "footer.pages_services": "Our Services",
    "footer.pages_about": "Why Choose Us",
    "footer.pages_portfolio": "Projects Portfolio",
    "footer.pages_pricing": "Pricing Packages",
    "footer.hq": "HQ Office",
    "footer.addr_line1": "Pangandaran Regency,",
    "footer.addr_line2": "West Java, Indonesia 46396",
    "footer.uptime": "⏰ FAST RESPOND: 08:00 - 21:00 UTC+7",
    "footer.creative": "⚡ PROUDLY CREATIVE EVERY DAY",
    "footer.copyright": "All rights reserved.",
    "footer.powered_by": "Built with React & Tailwind by",

    // Loader
    "loader.booting": "PROUD CORE v2026 • BOOTING IN EN...",
    "loader.text0": "Preparing core platform files...",
    "loader.text1": "Calculating pixel-perfect responsiveness grids...",
    "loader.text2": "Initializing React module trees...",
    "loader.text3": "Calibrating web rendering parameters...",
    "loader.text4": "Cofiguring high-performance caching servers...",
    "loader.text5": "Polishing layout visual components...",
    "loader.text6": "Proud Tech platform is fully operational...",
    "loader.creative": "PROUD TECH INDUSTRIAL WORKSPACE",
    "loader.engine_status": "EST. 2026 • ENGINE STACK REPORTING COMPLIANT STATUS",

    // Package Titles & Targets
    "pkg.starter.name": "Starter Package",
    "pkg.starter.target": "Perfect for startup micro-companies & small enterprises.",
    "pkg.starter.msg": "Hi Proud Tech, I am interested in the Starter Package (Rp 1.500.000) for my business directory. Please guide me through it!",
    
    "pkg.business.name": "Business Package",
    "pkg.business.target": "Highly perfect for an established business company profile.",
    "pkg.business.msg": "Hi Proud Tech, I would love to build a corporate Business Package (Rp 3.500.000) to map out our services. Please send the roadmap!",
    
    "pkg.pro.name": "Professional Tier",
    "pkg.pro.target": "Engineered for complex apps & scaling projects.",
    "pkg.pro.msg": "Hi Proud Tech, our scaling brand is looking into the Professional Tier (Rp 7.000.000) for high performance layout. When is the first sprint discussion?",
    
    "pkg.premium.name": "Premium Custom Tier",
    "pkg.premium.price": "Custom Price",
    "pkg.premium.target": "Full-stack tailored SaaS platform & backend databases.",
    "pkg.premium.msg": "Hi Proud Tech, we need a custom enterprise-grade architecture (Premium Tier) built. Let's arrange a strategic Zoom/GMeet consult.",

    // Whatsapp Float
    "ws.bubble_msg1": "Good day! I am from Proud Tech. 😊",
    "ws.bubble_msg2": "Is there anything I can outline, conceptualize, or solve regarding your brand's digital journey?",
    "ws.placeholder": "Type your message here..."
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Let's set default language to ID as user default but permit English switch
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    // Read cached language if exists
    const stored = localStorage.getItem("proud_tech_lang") as Language;
    if (stored === "en" || stored === "id") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("proud_tech_lang", lang);
  };

  const t = (key: string, replacementValue?: string): string => {
    const text = translations[language]?.[key];
    if (text !== undefined) {
      return text;
    }
    // Fallback to replacement value or key itself
    return replacementValue !== undefined ? replacementValue : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
