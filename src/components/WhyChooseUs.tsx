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
        ? "Setiap antarmuka website dikalibrasi presisi agar menyajikan tampilan menawan dan responsif di smartphone, tablet, maupun layar desktop."
        : "Every interface is precisely calibrated to deliver beautiful, responsive performance across smartphones, tablets, and desktop displays.",
      icon: MonitorSmartphone,
      color: "from-brand-blue/10 to-transparent",
    },
    {
      title: language === "id" ? "Performa Cepat" : "Fast Performance",
      desc: language === "id"
        ? "Menghasilkan kecepatan load secepat kilat dengan optimalisasi aset, code-splitting, dan best practices performa web terkini."
        : "Delivering lightning-fast load times through optimized assets, smart code-splitting, and modern web performance best practices.",
      icon: Zap,
      color: "from-brand-lime/15 to-transparent",
    },
    {
      title: language === "id" ? "Optimasi SEO" : "SEO Optimization",
      desc: language === "id"
        ? "Optimasi tag meta SEO, data terstruktur, dan performa tinggi agar website Anda mudah ditemukan di halaman pertama Google."
        : "Meta tag optimization, structured data, and high velocity metrics to ensure your website secures high Google search results.",
      icon: Compass,
      color: "from-brand-blue/10 to-transparent",
    },
    {
      title: language === "id" ? "UI/UX Premium" : "Premium UI/UX",
      desc: language === "id"
        ? "Fokus mendalam pada tipografi, visual rhythm, dan animasi interaktif mikro yang meningkatkan prestise serta reputasi bisnis Anda."
        : "Deep attention to elegant typography, visual rhythm, and micro-interactions that elevate your brand's authority.",
      icon: Sparkles,
      color: "from-brand-lime/15 to-transparent",
    },
    {
      title: language === "id" ? "Dukungan Cepat" : "Fast Support",
      desc: language === "id"
        ? "Bantuan konsultasi gratis, respons tanggap keluhan, dan dukungan teknis harian pasca serah terima project yang ramah."
        : "Complimentary consulting, responsive troubleshooting, and daily friendly support long after project handover.",
      icon: Headphones,
      color: "from-brand-blue/10 to-transparent",
    },
    {
      title: language === "id" ? "Solusi Berorientasi Bisnis" : "Business-Oriented Solutions",
      desc: language === "id"
        ? "Setiap fitur kami bangun secara efisien dengan tujuan murni membantu pertumbuhan penjualan dan kepercayaan klien."
        : "Every line of code and visual component is engineered with one core objective: helping your business drive conversions.",
      icon: TrendingUp,
      color: "from-brand-lime/15 to-transparent",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-[#121215] text-white rounded-[32px] mx-6 my-12 relative overflow-hidden">
      
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
          <div className="flex items-center gap-1 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <Heart className="w-3.5 h-3.5 text-brand-lime fill-brand-lime animate-pulse" />
            <span className="text-[10px] font-display font-bold text-white/80 uppercase">
              {language === "id" ? "Bangga Kami Mendukung UMKM" : "PROUDLY SUPPORTING SMALL BUSINESSES"}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
