import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Monitor, Smartphone, Database, CheckCircle2, ChevronRight, Sliders } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface PortfolioProps {
  onSelectProject: (projectName: string) => void;
  onViewCaseStudy: (projectName: string) => void;
}

export default function Portfolio({ onSelectProject, onViewCaseStudy }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState<"ALL" | "WEB" | "APP" | "UIUX">("ALL");
  const { language } = useLanguage();

  const projects = [
    {
      title: "Kopi Bangga",
      category: "WEB",
      client: language === "id" ? "Kopi Bangga" : "Kopi Bangga",
      desc: language === "id"
        ? "Landing page eksklusif dengan katalog menu interaktif, galeri racikan kopi khas premium, dan integrasi pesan instan WhatsApp."
        : "Exclusive artisan coffee shop landing page showcasing interactive menus, roasting galleries, and seamless WhatsApp reservations.",
      stats: language === "id" ? "Katalog Kreatif · Desain Estetik" : "Creative Catalog · Aesthetic Layout",
      color: "from-amber-800 to-amber-950",
      featured: false,
      image: "/images/Kebutuhan Website/foto portofolio/Kopi Bangga/Screenshot (547).png",
      features: ["Aesthetic Layout", "Artisan Catalog", "Mobile Responsive"],
    },
    {
      title: "Landing Page Warung PBM",
      category: "WEB",
      client: language === "id" ? "Warung PBM" : "Warung PBM",
      desc: language === "id"
        ? "Landing page informatif yang memajang produk kelontong pilihan unggulan, promo harian, dan peta lokasi operasional terintegrasi."
        : "Informative neighborhood grocery landing page featuring highlighted product catalogs, daily discounts, and Google Maps routing.",
      stats: language === "id" ? "Navigasi Google Maps · Katalog Cepat" : "Maps Routing · Lightning Load",
      color: "from-[#0D5B41] to-[#043322]",
      featured: false,
      image: "/images/Kebutuhan Website/foto portofolio/Landing Page Warung PBM/Screenshot (306) - Salin.png",
      features: ["Interactive Google Map", "Product Showcases", "Fast Load Speed"],
    },
    {
      title: "CJA Rent Car Web App",
      category: "APP",
      client: language === "id" ? "CJA Rent Car" : "CJA Rent Car",
      desc: language === "id"
        ? "Aplikasi rental mobil modern berbasis web dengan kelola armada, ketersediaan unit real-time, dan pemesanan WhatsApp otomatis."
        : "Modern web application for car rental featuring fleet management, real-time unit availability, and automated WhatsApp booking.",
      stats: language === "id" ? "Booking Cepat · Kelola Armada" : "Fast Booking · Fleet Management",
      color: "from-blue-600 to-indigo-900",
      featured: true,
      image: "/images/Kebutuhan Website/foto portofolio/Cja Rent Car Web App/Screenshot (389).png",
      features: ["Fleet Control", "WhatsApp Integration", "Fast Load"],
    },
    {
      title: "Dashboard Keuangan CV. Kerabat Wisata",
      category: "WEB",
      client: language === "id" ? "CV. Kerabat Wisata" : "CV. Kerabat Wisata",
      desc: language === "id"
        ? "Sistem pencatatan kas masuk dan keluar rental mobil terintegrasi laporan keuangan bulanan otomatis dan grafik analitik."
        : "Financial monitoring dashboard for car rental & travel operations featuring automatic cash flow reports and visual analytics.",
      stats: language === "id" ? "Arus Kas Otomatis · Laporan Instan" : "Auto Cash Flow · Instant Reports",
      color: "from-emerald-800 to-teal-900",
      featured: false,
      image: "/images/Kebutuhan Website/foto portofolio/Dashboard Keuangan CV. Kerabat Wisata/Sistem Informasi Kas Masuk dan Keluar Rental CV.Kerabat Wisata.png",
      features: ["Financial Audit", "Analytical Charts", "Secure Database"],
    },
    {
      title: "Sistem Informasi BEM FIKES",
      category: "WEB",
      client: language === "id" ? "BEM FIKES UMTAS" : "BEM FIKES UMTAS",
      desc: language === "id"
        ? "Portal informasi resmi dan administrasi terpadu mahasiswa Fakultas Ilmu Kesehatan UMTAS dengan arsitektur modern."
        : "Official information and academic administration portal for the Faculty of Health Sciences UMTAS built on modern web stack.",
      stats: language === "id" ? "Portal Informasi · Administrasi Mahasiswa" : "Info Portal · Student Admin",
      color: "from-purple-950 to-brand-blue",
      featured: true,
      image: "/images/Kebutuhan Website/foto portofolio/Sistem Informasi BEM FIKES/Sistem Informasi BEM FIKES UMTAS.png",
      features: ["Integrated API", "News & Event Hub", "Clean Layout"],
    },
    {
      title: "Sistem Informasi NAWADIKTI",
      category: "APP",
      client: language === "id" ? "NAWADIKTI" : "NAWADIKTI",
      desc: language === "id"
        ? "Sistem informasi database terpadu untuk pendataan akademik, penelitian ilmiah, dan sertifikasi perguruan tinggi."
        : "Integrated database information system for higher education academic records, research publications, and certification.",
      stats: language === "id" ? "Data Terpusat · Database Skalabel" : "Centralized Data · Scalable Database",
      color: "from-amber-700 to-rose-950",
      featured: false,
      image: "/images/Kebutuhan Website/foto portofolio/Sistem Infornasi NAWADIKTI/Sistem Infomasi NAWADIKTI.png",
      features: ["Data Analytics", "Auth Security", "Cloud Ready"],
    },
    {
      title: "SaaS Rental Mobil",
      category: "WEB",
      client: language === "id" ? "Multi-tenant Rental" : "Multi-tenant Fleet SaaS",
      desc: language === "id"
        ? "Platform Software-as-a-Service multi-cabang terpadu untuk efisiensi bisnis rental mobil skala menengah ke atas."
        : "Multi-tenant Software-as-a-Service platform for mid-to-large scale car rental operators featuring complete branch delegation.",
      stats: language === "id" ? "SaaS Multi-tenant · Cloud ERP" : "Multi-tenant SaaS · Cloud ERP",
      color: "from-[#17161a] to-[#252329]",
      featured: false,
      image: "/images/Kebutuhan Website/foto portofolio/saas rental mobil/Screenshot (435).png",
      features: ["SaaS Architecture", "Branch Delegation", "P&L Statements"],
    },
  ];

  const filteredProjects = activeTab === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-20 md:py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-display font-bold text-xxs tracking-widest text-brand-blue bg-brand-blue/10 px-4 py-1.5 rounded-full border border-brand-blue/10">
              {language === "id" ? "KARYA PILIHAN KAMI" : "OUR FEATURED WORKS"}
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark mt-4 tracking-tight uppercase">
              {language === "id" ? "GALERI PORTOFOLIO" : "PORTFOLIO GALLERY"}
            </h2>
          </div>
          
          {/* Navigation Category Filters */}
          <div className="flex flex-nowrap items-center gap-2 bg-[#eeeeea] border border-brand-border/60 p-1.5 rounded-full shadow-inner overflow-x-auto scrollbar-none max-w-full">
            {(["ALL", "WEB", "APP", "UIUX"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 px-5 py-2 rounded-full font-display font-bold text-xxs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-brand-blue text-white shadow-sm"
                    : "text-brand-dark/60 hover:text-brand-blue hover:bg-black/5"
                }`}
              >
                {tab === "ALL" 
                  ? (language === "id" ? "SEMUA PROYEK" : "ALL PROJECTS") 
                  : tab
                }
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-[28px] overflow-hidden border border-brand-border bg-white p-6 flex flex-col justify-between shadow-md group relative hover:border-brand-blue/30 transition-all"
            >
              <div>
                {/* Visual Card Graphic representation with gradient bg inside */}
                <div 
                  onClick={() => onViewCaseStudy(project.title)}
                  className={`relative h-48 md:h-56 rounded-2xl bg-gradient-to-br ${project.color} overflow-hidden mb-6 flex items-center justify-center border border-black/10 shadow-inner group-hover:-translate-y-1 transition-transform duration-300 cursor-pointer group/image`}
                >
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <>
                      {/* Grid Lines Overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:12px_12px] opacity-40" />
                      
                      {/* Large glowing central vector representing tech */}
                      <div className="absolute w-28 h-28 rounded-full bg-white/5 blur-2xl animate-pulse-slow" />
                      
                      <div className="relative text-center p-6 text-white max-w-xs flex flex-col items-center group-hover/image:scale-95 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-brand-lime border border-white/15 mb-3 group-hover:scale-110 transition-transform duration-300">
                          {project.category === "WEB" ? <Monitor className="w-6 h-6" /> : 
                           project.category === "APP" ? <Smartphone className="w-6 h-6" /> : 
                           <Database className="w-6 h-6" />}
                        </div>
                        <span className="text-[9px] font-mono tracking-widest text-brand-lime font-black uppercase">
                          {project.client}
                        </span>
                        <h4 className="font-display font-black text-lg uppercase tracking-tight mt-1 line-clamp-1">
                          {project.title}
                        </h4>
                      </div>
                    </>
                  )}

                  {/* Absolute Click to open premium hover overlay */}
                  <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm opacity-0 group-hover/image:opacity-100 flex flex-col justify-between p-6 transition-all duration-300 ease-out z-20">
                    {/* Top: Category and Client */}
                    <div className="flex justify-between items-center transform translate-y-3 group-hover/image:translate-y-0 transition-transform duration-300">
                      <span className="text-[9px] font-mono tracking-widest text-brand-lime font-bold uppercase">
                        {project.category} Proyek
                      </span>
                      <span className="text-[9px] font-mono text-white/50">{project.client}</span>
                    </div>

                    {/* Middle: Title & Metrics */}
                    <div className="text-left my-auto transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300">
                      <h4 className="font-display font-black text-white text-lg leading-tight uppercase tracking-tight line-clamp-1 mb-2">
                        {project.title}
                      </h4>
                      <p className="text-[10px] text-white/60 line-clamp-2 leading-relaxed">
                        {project.desc}
                      </p>
                      
                      {/* Metric Stat Badge */}
                      <div className="mt-3 inline-flex items-center gap-1 bg-brand-lime/10 border border-brand-lime/20 px-2.5 py-1 rounded text-brand-lime text-[8.5px] font-mono font-bold uppercase">
                        ⚡ {project.stats}
                      </div>
                    </div>

                    {/* Bottom: Action CTA Button */}
                    <div className="transform translate-y-3 group-hover/image:translate-y-0 transition-transform duration-300">
                      <span className="w-full justify-center bg-brand-lime text-brand-dark font-display font-black text-[9px] tracking-widest uppercase py-2.5 rounded-full shadow-lg flex items-center gap-1.5 hover:bg-white hover:text-brand-blue transition-colors duration-300">
                        {language === "id" ? "Buka Studi Kasus ➔" : "Open Case Study ➔"}
                      </span>
                    </div>
                  </div>

                  {/* Absolute Corner Pill with speed stats */}
                  <span className="absolute bottom-3 left-3 bg-[#121215]/80 backdrop-blur-md border border-white/15 text-[8.5px] font-mono text-brand-lime font-bold py-1 px-3 rounded-full animate-pulse">
                    ⚡ {project.stats}
                  </span>
                </div>

                {/* Info Area */}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-brand-blue font-bold px-2 py-0.5 rounded bg-brand-blue/10">
                    {language === "id" ? `PROYEK ${project.category}` : `${project.category} PROJECT`}
                  </span>
                </div>
                
                <h3 
                  onClick={() => onViewCaseStudy(project.title)}
                  className="font-display font-extrabold text-xl text-brand-dark tracking-tight line-clamp-1 cursor-pointer hover:text-brand-blue transition-colors"
                >
                  {project.title}
                </h3>
                <p className="text-brand-dark/70 text-xs mt-2.5 leading-relaxed font-sans line-clamp-3 font-medium">
                  {project.desc}
                </p>

                {/* Sub Features Bullet points */}
                <div className="flex flex-wrap gap-1.5 mt-4 mb-6">
                  {project.features.map((feat) => (
                    <span key={feat} className="text-[8px] font-mono border border-brand-border px-2 py-0.5 rounded-full text-brand-dark/60 bg-brand-bg font-bold uppercase">
                      • {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* Studi Kasus Button */}
                <button
                  onClick={() => onViewCaseStudy(project.title)}
                  className="group flex items-center justify-center gap-1.5 bg-brand-bg hover:bg-[#1f1f1f]/5 text-brand-dark cursor-pointer py-3 px-3 rounded-full transition-all border border-brand-border hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="font-display font-black text-[10px] uppercase tracking-wide">
                    {language === "id" ? "Studi Kasus" : "Case Study"}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-blue group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* WhatsApp Consult Button */}
                <button
                  onClick={() => onSelectProject(project.title)}
                  className="group flex items-center justify-center gap-1.5 bg-brand-blue hover:bg-brand-dark text-white cursor-pointer py-3 px-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/5"
                >
                  <span className="font-display font-black text-[10px] uppercase tracking-wide">
                    {language === "id" ? "Konsultasi" : "Consult"}
                  </span>
                  <span className="w-4 h-4 rounded-full bg-brand-lime text-brand-blue group-hover:bg-brand-lime group-hover:text-brand-blue flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
