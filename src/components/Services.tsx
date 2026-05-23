import { motion } from "motion/react";
import { ArrowUpRight, Monitor, Smartphone, Palette, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ServicesProps {
  onOpenConsultation: () => void;
}

export default function Services({ onOpenConsultation }: ServicesProps) {
  const { t, language } = useLanguage();

  const services = [
    {
      id: "web-dev",
      title: language === "id" ? "Pengembangan Website" : "Website Development",
      description: language === "id"
        ? "Kami membangun website profil perusahaan, e-commerce, dan landing page modern yang cepat, aman, dan dioptimasi penuh untuk konversi penjualan."
        : "We build modern, fast, secure corporate websites, e-commerce, and high-converting landing pages fully optimized for sales.",
      benefit: language === "id" 
        ? "🎯 Bisnis Tampil Kredibel & Banjir Orderan 24 Jam" 
        : "🎯 High Brand Authority & 24/7 Global Sales Flow",
      icon: Monitor,
      features: language === "id"
        ? [
            "Desain Kustom & Eksklusif",
            "Optimasi Kecepatan Mutakhir",
            "Terintegrasi Chat WhatsApp",
            "Struktur SEO Friendly",
          ]
        : [
            "Custom & Exclusive Design",
            "State-of-the-Art Speed Optimization",
            "WhatsApp & Chat Integration",
            "SEO-Friendly Architecture",
          ],
      highlight: false,
    },
    {
      id: "mob-app",
      title: language === "id" ? "Aplikasi Mobile" : "Mobile App Development",
      description: language === "id"
        ? "Pengembangan aplikasi Android & iOS native/cross-platform dengan performa lancar, antarmuka premium, dan pengalaman pengguna tingkat tinggi."
        : "Native & cross-platform Android & iOS app development with fluid performance, premium interfaces, and rich user experiences.",
      benefit: language === "id" 
        ? "🎯 Retensi Pelanggan Kuat & Akses Instan Genggaman" 
        : "🎯 Maximum Customer Loyalty & Push-Sales Power",
      icon: Smartphone,
      features: language === "id"
        ? [
            "Aplikasi Android & iOS",
            "Notifikasi Push Interaktif",
            "Navigasi Cepat & Responsif",
            "Integrasi API & Database",
          ]
        : [
            "Native/Cross-Platform iOS & Android",
            "Interactive Push Notifications",
            "Fluid & Responsive Navigation",
            "Database & Robust API Integration",
          ],
      highlight: true,
    },
    {
      id: "uiux-des",
      title: language === "id" ? "Desain UI/UX" : "UI/UX Design",
      description: language === "id"
        ? "Kami merancang wireframe, user flow, hingga visual interface yang menawan, intuitif, serta mencerminkan kepribadian unik brand Anda."
        : "We craft gorgeous, intuitive wireframes, user flows, and visual interfaces that deeply express your brand's unique identity.",
      benefit: language === "id" 
        ? "🎯 Konversi Melejit dengan Keindahan Visual Premium" 
        : "🎯 Double Visual Conversion Rates with High-End UI",
      icon: Palette,
      features: language === "id"
        ? [
            "Riset User & Target Pasar",
            "Wireframing & Prototyping",
            "Desain UI Modern & Bersih",
            "Aset Desain Siap Developer",
          ]
        : [
            "User & Target Market Research",
            "Wireframing & Interactive Prototyping",
            "Clean, Modern Minimalist Design",
            "Developer-Ready Assets & Specs",
          ],
      highlight: false,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Section Header with Left-Right Distribution */}
        <div className="bg-white border border-brand-border rounded-[32px] p-8 md:p-12 mb-16 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm relative overflow-hidden">
          <div className="md:max-w-md">
            <span className="font-display font-medium text-xs tracking-widest text-brand-blue uppercase bg-brand-blue/10 px-4.5 py-2 rounded-full border border-brand-blue/10">
              {language === "id" ? "⚡ LAYANAN UTAMA" : "⚡ MAIN SERVICES"}
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark mt-6 tracking-tight uppercase">
              {language === "id" ? "LAYANAN KAMI" : "OUR SERVICES"}
            </h2>
          </div>
          <div className="h-px w-full md:w-px md:h-16 bg-brand-border/80 md:block hidden" />
          <div className="md:max-w-lg flex items-center gap-6">
            <p className="text-brand-dark/70 text-base md:text-lg leading-relaxed font-sans flex-1">
              {language === "id" 
                ? "Solusi digital modern untuk membantu bisnis tampil semakin profesional, meningkatkan reputasi brand, serta menjangkau lebih banyak pelanggan secara optimal."
                : "Modern digital solutions to empower your business to stand out professionally, build brand authority, and acquire prospective clients smoothly."
              }
            </p>
            {/* 3D Character with holographic screen */}
            <motion.img
              src="/images/character-holographic.png"
              alt="3D Character with holographic interface"
              className="hidden lg:block w-[160px] h-[160px] object-contain drop-shadow-xl flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
          </div>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`relative rounded-[28px] p-8 flex flex-col justify-between transition-all duration-300 shadow-md ${
                  service.highlight
                    ? "bg-brand-blue text-white border-2 border-brand-lime"
                    : "bg-white text-brand-dark border border-brand-border/80"
                }`}
              >
                {/* Accent Background Spark for Highlighted Card */}
                {service.highlight && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />
                )}

                <div>
                  <div className="flex justify-between items-start mb-8">
                    {/* Icon Circle - Larger Size */}
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner ${
                        service.highlight
                          ? "bg-brand-lime text-brand-blue"
                          : "bg-brand-blue/5 text-brand-blue"
                      }`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>

                    {/* Arrow Button */}
                    <button
                      onClick={onOpenConsultation}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer ${
                        service.highlight
                          ? "bg-brand-lime text-brand-dark hover:bg-white hover:text-brand-blue border-transparent"
                          : "bg-transparent border-brand-border/80 text-brand-dark hover:bg-brand-blue hover:text-white"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-black text-2xl tracking-tight uppercase mb-2">
                    {service.title}
                  </h3>
                  
                  {/* Benefit Badge - Explains why this is important */}
                  <div className={`py-2 px-3.5 rounded-xl text-[10px] font-display font-extrabold tracking-wide mb-4 ${
                    service.highlight 
                      ? "bg-white/10 text-brand-lime border border-white/5" 
                      : "bg-brand-blue/5 text-brand-blue border border-brand-blue/10"
                  }`}>
                    {service.benefit}
                  </div>

                  <p
                    className={`text-sm mb-6 leading-relaxed font-sans ${
                      service.highlight ? "text-white/85" : "text-brand-dark/70"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="h-px bg-brand-border/30 my-6" />

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 ${
                            service.highlight ? "text-brand-lime" : "text-brand-blue"
                          }`}
                        />
                        <span
                          className={`text-xs font-semibold tracking-wide ${
                            service.highlight ? "text-white/90" : "text-brand-dark/80"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Interactive CTA trigger - Redesigned to be highly solid & prominent */}
                <button
                  onClick={onOpenConsultation}
                  className={`w-full text-center py-4 rounded-full font-display font-black text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    service.highlight
                      ? "bg-brand-lime text-brand-blue hover:bg-white hover:text-brand-blue border-transparent shadow-md hover:scale-102"
                      : "bg-[#121215] text-white hover:bg-brand-blue border-transparent shadow-md hover:scale-102"
                  }`}
                >
                  {language === "id" ? "Pesan Layanan ini" : "Order This Service"}
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
