import { motion } from "motion/react";
import { 
  MonitorSmartphone, Zap, Compass, Sparkles, 
  Headphones, TrendingUp, Cpu, Heart 
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function WhyChooseUs() {
  const { language } = useLanguage();

  const steps = [
    {
      title: language === "id" ? "Desain Responsif Modern" : "Modern Responsive Design",
      desc: language === "id"
        ? "Setiap antarmuka website dikalibrasi presisi agar menyajikan tampilan menawan di smartphone, tablet, maupun desktop. Diuji pada 10+ ukuran layar berbeda."
        : "Every interface is precisely calibrated for beautiful performance across smartphones, tablets, and desktops. Tested across 10+ screen sizes.",
      icon: MonitorSmartphone,
      color: "from-brand-blue/10 to-transparent",
    },
    {
      title: language === "id" ? "Performa Super Cepat" : "Lightning-Fast Performance",
      desc: language === "id"
        ? "Rata-rata Google PageSpeed Score kami di atas 92 — dengan load time halaman di bawah 1.5 detik untuk pengalaman pengguna kelas atas."
        : "Our average Google PageSpeed score exceeds 92 — with page load times under 1.5 seconds for a premium user experience.",
      icon: Zap,
      color: "from-brand-lime/15 to-transparent",
    },
    {
      title: language === "id" ? "Optimasi SEO Google" : "Google SEO Optimization",
      desc: language === "id"
        ? "Struktur SEO teknis yang benar: sitemap otomatis, schema markup, dan meta tag teroptimasi. Klien kami rata-rata masuk halaman 1 Google dalam 30-60 hari."
        : "Proper technical SEO: automated sitemaps, schema markup, and optimized meta tags. Our clients typically reach Google page 1 within 30-60 days.",
      icon: Compass,
      color: "from-brand-blue/10 to-transparent",
    },
    {
      title: language === "id" ? "UI/UX Premium" : "Premium UI/UX",
      desc: language === "id"
        ? "Desain yang langsung membangun kepercayaan. Lebih dari 85 klien membuktikan bahwa tampilan profesional meningkatkan konversi hingga 2-3x lipat."
        : "Design that instantly builds trust. Over 85 clients confirm that professional visuals increase conversion rates by 2-3x.",
      icon: Sparkles,
      color: "from-brand-lime/15 to-transparent",
    },
    {
      title: language === "id" ? "Dukungan Responsif" : "Responsive Support",
      desc: language === "id"
        ? "Respon konsultasi rata-rata di bawah 15 menit selama jam kerja. Garansi support gratis 30 hari penuh setelah website go-live."
        : "Average consultation response under 15 minutes during working hours. 30-day free support guarantee after your website goes live.",
      icon: Headphones,
      color: "from-brand-blue/10 to-transparent",
    },
    {
      title: language === "id" ? "Solusi Berorientasi Bisnis" : "Business-Oriented Solutions",
      desc: language === "id"
        ? "Setiap fitur kami bangun dengan tujuan nyata: meningkatkan penjualan dan kepercayaan. 2+ tahun pengalaman membangun solusi digital untuk UMKM Indonesia."
        : "Every feature built with one real goal: increasing sales and trust. 2+ years building digital solutions for Indonesian small-to-medium businesses.",
      icon: TrendingUp,
      color: "from-brand-lime/15 to-transparent",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-[#121215] text-white rounded-[32px] mx-4 sm:mx-6 my-12 relative overflow-hidden">
      
      {/* Absolute Decorative Circles */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-lime/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <span className="font-display font-semibold text-xs tracking-wider text-brand-lime bg-brand-lime/10 border border-brand-lime/20 px-4 py-1.5 rounded-full">
            {language === "id" ? "NILAI UTAMA KAMI" : "OUR CORE VALUES"}
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mt-6 tracking-tight uppercase">
            {language === "id" ? "MENGAPA MEMILIH KAMI" : "WHY CHOOSE US"}
          </h2>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            {language === "id"
              ? "Kami mendedikasikan waktu dan energi penuh untuk merekayasa produk digital berkecepatan tinggi, fungsional, dan bernilai jual premium bagi bisnis Anda."
              : "We dedicate our ultimate energy to engineering high-speed, highly functional, and premium value digital products for your business."
            }
          </p>
          {/* 3D Character with laptop floating on the side */}
          <motion.img
            src="/images/character-laptop.png"
            alt="3D Developer with laptop and screens"
            className="hidden xl:block absolute -right-64 top-1/2 -translate-y-1/2 w-[220px] h-[220px] object-contain drop-shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
          />
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-[#1c1d24] border border-white/5 p-8 rounded-[24px] hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Decorative Icon Circle */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 text-brand-lime border border-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>

                  <h3 className="font-display font-bold text-lg md:text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                {/* Micro accent corner border */}
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-transparent to-brand-blue/30 mt-6 rounded-b" />
              </motion.div>
            );
          })}
        </div>

        {/* Small Trust Seal Banner at Bottom */}
        <div className="mt-16 bg-[#1a1b21] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-lime/10 flex items-center justify-center text-brand-lime shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="font-display font-medium text-sm text-white">
                {language === "id" ? "Teknologi Utama Standar Modern 2026" : "State-Of-The-Art Technology Standard 2026"}
              </p>
              <p className="text-white/45 text-xxs font-mono uppercase tracking-wider mt-0.5 animate-pulse">
                {language === "id"
                  ? "React Engine Teroptimasi · Native ESM · Desain Aksesibilitas Tinggi"
                  : "Optimized React Engine · Native ESM · High Accessibility Design"
                }
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-start gap-1.5 bg-white/5 px-4 py-2.5 rounded-2xl sm:rounded-full border border-white/5 text-center">
            <Heart className="w-3.5 h-3.5 text-brand-lime fill-brand-lime animate-pulse shrink-0" />
            <span className="text-[10px] font-display font-bold text-white/80 uppercase">
              {language === "id" ? "Bangga Kami Mendukung UMKM" : "PROUDLY SUPPORTING SMALL BUSINESSES"}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
