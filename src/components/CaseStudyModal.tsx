import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, TrendingUp, Clock, Code, Award, ExternalLink, ShieldAlert, Zap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ProjectCaseStudy {
  title: string;
  category: string;
  client: string;
  stats: string;
  color: string;
  challenge: {
    id: string;
    en: string;
  };
  solution: {
    id: string;
    en: string;
  };
  duration: string;
  roi: {
    id: string;
    en: string;
  };
  techStack: string[];
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string | null;
  onConsult: (projectName: string) => void;
}

export default function CaseStudyModal({ isOpen, onClose, projectName, onConsult }: CaseStudyModalProps) {
  const { language } = useLanguage();

  const caseStudiesData: Record<string, ProjectCaseStudy> = {
    "Kopi Bangga": {
      title: "Kopi Bangga",
      category: "AESTHETICS & BRANDING",
      client: "Kopi Bangga",
      stats: "Katalog Kreatif • Desain Estetik",
      color: "from-amber-800 to-amber-950",
      challenge: {
        id: "Kedai kopi artisan Kopi Bangga membutuhkan platform web estetis untuk memajang varietas biji kopi pilihan dan menu racikan kopi khas tanpa kehilangan identitas premium brand.",
        en: "Artisan coffee brand Kopi Bangga lacked an online aesthetic platform to display their coffee roasting varieties and daily barista menu choices while preserving their luxury design feel.",
      },
      solution: {
        id: "Merancang landing page ber-vibes premium dark-warm dengan tipografi elegan, katalog menu kopi interaktif, galeri foto racikan beresolusi tinggi, dan tombol WhatsApp direct order.",
        en: "Curated a premium dark-warm thematic coffee shop landing page showcasing high-fidelity item catalogs, roasting step visualizers, and direct reservations on WhatsApp.",
      },
      duration: "7 Hari / Days",
      roi: {
        id: "Meningkatkan ketertarikan pelanggan baru terhadap cita rasa kopi lokal, serta mempercepat proses pemesanan kopi siap saji via WhatsApp hingga +30%.",
        en: "Spiked local coffee brand recognition metrics and accelerated click-to-order WhatsApp speeds by +30%.",
      },
      techStack: ["React 18", "Tailwind CSS", "Figma Design Assets", "Interactive Menu Grid", "WhatsApp Checkout API"],
    },
    "Landing Page Warung PBM": {
      title: "Landing Page Warung PBM",
      category: "LOCAL COMMERCE LANDINGS",
      client: "Warung PBM",
      stats: "Maps Routing • Katalog Cepat",
      color: "from-[#0D5B41] to-[#043322]",
      challenge: {
        id: "Toko grosir kelontong lokal kesulitan menampilkan promo produk harian, jam operasional toko, dan peta petunjuk lokasi yang akurat untuk pembeli lokal.",
        en: "Local community store Warung PBM struggled to inform neighbors of daily product discounts, shop timetables, and exact storefront map locations online.",
      },
      solution: {
        id: "Membangun landing page minimalis bertema segar (fresh green) dengan kompresi gambar promo cepat, navigasi peta petunjuk lokasi terintegrasi, dan pemesanan WhatsApp terstruktur.",
        en: "Built a lightweight fresh-themed grocery landing page with instant image compressors for promotions, Google Maps router integration, and structured WhatsApp chat templates.",
      },
      duration: "5 Hari / Days",
      roi: {
        id: "Pengunjung lokal yang mampir belanja langsung naik +25% karena navigasi lokasi toko sangat akurat dan terpercaya.",
        en: "Foot traffic to the neighborhood store rose by +25% due to high-precision geolocation routing and clear daily stock visibility.",
      },
      techStack: ["Vite Tooling", "Google Maps Geolocation", "Tailwind 4 Styles", "Image Compress Pipelines", "WhatsApp Booking Engine"],
    },
    "CJA Rent Car Web App": {
      title: "CJA Rent Car Web App",
      category: "WEB & APP",
      client: "CJA Rent Car",
      stats: "Pemesanan WhatsApp • Real-time",
      color: "from-blue-600 to-indigo-950",
      challenge: {
        id: "Pengelolaan ketersediaan unit mobil dan konfirmasi pemesanan masih manual, menyebabkan bentrok jadwal sewa dan lambatnya respon ke pelanggan.",
        en: "Fleet scheduling and order validation were managed manually on paper, leading to double-bookings and massive response delays over chat channels.",
      },
      solution: {
        id: "Membangun aplikasi web responsive dengan manajemen armada real-time, integrasi database MySQL, kalkulator harga otomatis, dan tombol checkout langsung WhatsApp.",
        en: "Built a modern responsive web app with central fleet dashboards, instant calculation systems, and streamlined checkout templates directed to WhatsApp.",
      },
      duration: "30 Hari / Days",
      roi: {
        id: "Kejadian bentrok jadwal turun menjadi 0% dan kecepatan konversi pesanan pelanggan meningkat hingga 35%.",
        en: "Schedule conflicts reduced to 0% and lead-to-booking conversions improved by 35% in the first 30 days.",
      },
      techStack: ["React TS", "Tailwind CSS", "Vite Engine", "WhatsApp Checkout API", "State Scheduler"],
    },
    "Dashboard Keuangan CV. Kerabat Wisata": {
      title: "Dashboard Keuangan CV. Kerabat Wisata",
      category: "FINANCIAL SYSTEMS",
      client: "CV. Kerabat Wisata",
      stats: "Arus Kas Otomatis • Laporan Instan",
      color: "from-emerald-800 to-teal-950",
      challenge: {
        id: "Pencatatan kas masuk-keluar rental mobil masih manual menggunakan kertas/Excel biasa, rawan selisih angka dan laporan bulanan butuh waktu berhari-hari.",
        en: "Cash flow logs were manually typed in isolated spreadsheets, making audited tax reporting extremely slow and highly prone to clerical human errors.",
      },
      solution: {
        id: "Pengembangan dashboard keuangan digital terpusat dengan grafik analitik interaktif, otomasi perhitungan profit & loss, dan ekspor laporan instan PDF/Excel.",
        en: "Engineered an interactive financial analytics dashboard featuring automated Profit & Loss calculation modules and instant PDF/Excel exports.",
      },
      duration: "14 Hari / Days",
      roi: {
        id: "Laporan kas bulanan kini selesai dalam 3 detik (hemat waktu 98%) dan selisih pembukuan ditekan hingga 0%.",
        en: "Monthly ledger calculation times fell from 3 days to under 3 seconds with absolute 0% bookkeeping discrepancies.",
      },
      techStack: ["React 18", "Chart.js", "Financial Math Engine", "Excel Export API", "Typescript"],
    },
    "Sistem Informasi BEM FIKES": {
      title: "Sistem Informasi BEM FIKES",
      category: "PORTAL MAHASISWA",
      client: "BEM FIKES UMTAS",
      stats: "Portal Terpadu • Akses Cepat",
      color: "from-purple-950 to-brand-blue",
      challenge: {
        id: "Penyebaran informasi akademik dan pengumpulan administrasi kegiatan mahasiswa Fakultas Kesehatan UMTAS terhambat karena kanal informasi terpisah-pisah.",
        en: "Information dissemination and academic event document collection were highly scattered across unstructured chat groups, confusing health students.",
      },
      solution: {
        id: "Pembangunan portal resmi terintegrasi untuk berita, data mahasiswa, pengajuan dokumen digital, dan sistem autentikasi aman.",
        en: "Created a centralized health student union information portal with secure student portals, news feeds, document submissions, and fast load times.",
      },
      duration: "20 Hari / Days",
      roi: {
        id: "Partisipasi mahasiswa dalam program BEM meningkat +60% dan proses administrasi selesai 4x lebih cepat.",
        en: "Student participation metrics increased by +60% and document processing cycles were completed 4x faster.",
      },
      techStack: ["React Framework", "Clean Grid Layout", "Student Secure Auth", "Tailwind Forms", "API Integration"],
    },
    "Sistem Informasi NAWADIKTI": {
      title: "Sistem Informasi NAWADIKTI",
      category: "DATABASE AKADEMIK",
      client: "NAWADIKTI",
      stats: "Data Terpusat • Skala Besar",
      color: "from-amber-700 to-rose-950",
      challenge: {
        id: "Kesulitan dalam pendataan akademik terpadu, publikasi jurnal ilmiah dosen, dan status sertifikasi akreditasi perguruan tinggi karena data tersebar.",
        en: "Aggregating academic research data, professor publications, and college accreditation compliance files was highly unstructured and prone to loss.",
      },
      solution: {
        id: "Mengembangkan sistem basis data relasional terpusat dengan filter pencarian instan, analitik sebaran jurnal, dan audit status akreditasi.",
        en: "Configured a centralized relational database architecture with instant query filters, publication trackers, and accreditation checklist consoles.",
      },
      duration: "20 Hari / Days",
      roi: {
        id: "Proses pencarian dan audit data dosen dipercepat hingga 90%, data tersimpan aman di cloud server terenkripsi.",
        en: "Data retrieval and academic audit cycles accelerated by +90%, secured safely with database encryption.",
      },
      techStack: ["TypeScript", "Relational DB Grid", "Cloud Storage Ready", "Advanced Search Filters", "Vite Tools"],
    },
    "SaaS Rental Mobil": {
      title: "SaaS Rental Mobil",
      category: "SAAS & ENTERPRISE",
      client: "Multi-tenant Fleet SaaS",
      stats: "Multi-tenant • Cloud ERP",
      color: "from-[#17161a] to-[#252329]",
      challenge: {
        id: "Pemilik rental mobil cabang kesulitan mendelegasikan armada dan melacak laporan laba-rugi operasional harian secara real-time dari pusat.",
        en: "Enterprise fleet operators lacked remote multi-branch management systems to accurately trace daily profit-and-loss sheets and branch performance.",
      },
      solution: {
        id: "Arsitektur SaaS multi-tenant lengkap dengan otorisasi cabang terpusat, analitik grafis real-time, pencatatan biaya operasional, dan laporan P&L otomatis.",
        en: "Designed a high-end multi-tenant SaaS fleet system featuring isolated branch delegation, real-time metrics, expense logs, and P&L automatons.",
      },
      duration: "25 Hari / Days",
      roi: {
        id: "Efisiensi manajemen cabang meningkat +40%, biaya operasional terpantau penuh, meminimalisir kebocoran anggaran.",
        en: "Branch delegation efficiency improved by +40%, tracking operating margins instantly and eliminating budget leakage.",
      },
      techStack: ["React 18", "Multi-tenant Architecture", "Branch Delegation Control", "Advanced Charting", "Tailwind CSS"],
    },
  };

  const caseStudy = projectName ? caseStudiesData[projectName] : null;

  return (
    <AnimatePresence>
      {isOpen && caseStudy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-md"
          />

          {/* Modal Card Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative bg-white w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl border border-brand-border/60 z-10 flex flex-col max-h-[90vh]"
          >
            
            {/* Header Gradient Accent */}
            <div className={`p-6 md:p-8 bg-gradient-to-br ${caseStudy.color} text-white relative`}>
              {/* Grid backdrop overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] opacity-35" />
              
              <div className="relative flex justify-between items-start gap-4">
                <div>
                  <span className="text-[9px] font-mono tracking-widest bg-white/20 text-brand-lime font-black py-1 px-3 rounded-full uppercase">
                    ⚡ STUDI KASUS PROYEK / CASE STUDY
                  </span>
                  <h3 className="font-display font-black text-2xl md:text-3xl mt-3 tracking-tight uppercase leading-none">
                    {caseStudy.title}
                  </h3>
                  <p className="text-white/60 text-xs font-mono tracking-wider mt-1.5 uppercase font-bold">
                    Klien: {caseStudy.client}
                  </p>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-colors cursor-pointer select-none"
                  aria-label="Close Case Study Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable details area */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 font-medium text-brand-dark/80">
              
              {/* Challenge Portion */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-xxs tracking-wider text-red-500 uppercase flex items-center gap-1.5 font-mono">
                  <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
                  {language === "id" ? "Tantangan Utama (The Challenge)" : "The Main Challenge"}
                </h4>
                <p className="text-sm leading-relaxed text-brand-dark/80 font-sans pl-5 border-l-2 border-red-200">
                  {caseStudy.challenge[language]}
                </p>
              </div>

              {/* Solution Portion */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-xxs tracking-wider text-brand-blue uppercase flex items-center gap-1.5 font-mono">
                  <Code className="w-4 h-4 text-brand-blue shrink-0" />
                  {language === "id" ? "Solusi & Implementasi Teknis" : "Technical & Visual Solution"}
                </h4>
                <p className="text-sm leading-relaxed text-brand-dark/85 font-sans pl-5 border-l-2 border-brand-blue/30">
                  {caseStudy.solution[language]}
                </p>
              </div>

              {/* ROI Business Outcome Impact */}
              <div className="p-5 rounded-2xl bg-brand-lime/10 border border-brand-lime/30 space-y-2">
                <h4 className="font-display font-bold text-xxs tracking-wider text-brand-dark uppercase flex items-center gap-1.5 font-mono">
                  <TrendingUp className="w-4 h-4 text-brand-blue shrink-0" />
                  {language === "id" ? "Hasil & Dampak Bisnis (Business ROI)" : "Business ROI & Outcome"}
                </h4>
                <p className="text-sm leading-relaxed text-brand-dark font-sans font-bold pl-5 border-l-2 border-brand-blue/40">
                  {caseStudy.roi[language]}
                </p>
              </div>

              {/* Technical Specifications Grid details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                {/* Tech Stack bullet items */}
                <div className="space-y-1.5">
                  <h5 className="font-display font-bold text-xxs tracking-wider text-brand-dark/60 uppercase font-mono">
                    🛠️ Tech Stack
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {caseStudy.techStack.map((tech) => (
                      <span key={tech} className="text-[8.5px] font-mono bg-brand-bg px-2 py-0.5 rounded border border-brand-border/60 hover:text-brand-blue transition-colors font-bold uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Duration item */}
                <div className="space-y-1.5 sm:pl-4 sm:border-l border-l-0 pl-0 border-brand-border/60">
                  <h5 className="font-display font-bold text-xxs tracking-wider text-brand-dark/60 uppercase font-mono">
                    ⏱️ {language === "id" ? "Waktu Pengerjaan" : "Delivery Timeline"}
                  </h5>
                  <div className="flex items-center gap-1.5 text-brand-dark font-display font-extrabold text-sm uppercase">
                    <Clock className="w-3.5 h-3.5 text-brand-blue" />
                    <span>{caseStudy.duration}</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Sticky Action Footer */}
            <div className="p-6 border-t border-brand-border bg-brand-bg/50 flex flex-col sm:flex-row items-center gap-3.5 justify-between shrink-0 select-none">
              <span className="text-[10px] font-mono text-brand-dark/45 font-bold uppercase flex items-center gap-1">
                <Award className="w-4 h-4 text-brand-blue animate-pulse" />
                {language === "id" ? "Sertifikasi Hasil 100% Valid" : "Verified Project Certification"}
              </span>

              <button
                onClick={() => {
                  onConsult(caseStudy.title);
                  onClose();
                }}
                className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-dark text-white font-display font-bold text-xxs tracking-wider uppercase px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-md"
              >
                {language === "id" ? "Konsultasikan Project Seperti Ini" : "Enquire Similar Project"}
                <span className="w-4.5 h-4.5 rounded-full bg-brand-lime text-brand-blue flex items-center justify-center group-hover:bg-white group-hover:text-brand-dark transition-colors shrink-0">
                  <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
