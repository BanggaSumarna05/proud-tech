import { motion } from "motion/react";
import { MessageSquare, ClipboardList, PenTool, Braces, Rocket } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Process() {
  const { language } = useLanguage();

  const steps = [
    {
      num: "01",
      title: language === "id" ? "Diskusi" : "Discovery",
      desc: language === "id"
        ? "Langkah awal bertukar ide, membedah visi produk, dan menganalisis profil bisnis Anda serta target audiens secara global."
        : "Dynamic idea swap to unearth product vision, review existing brand kits, and analyze global potential.",
      icon: MessageSquare,
    },
    {
      num: "02",
      title: language === "id" ? "Perencanaan" : "Planning",
      desc: language === "id"
        ? "Menyusun skema arsitektur informasi, sitemap, diagram fitur utama, estimasi anggaran, serta timeline pengerjaan detail."
        : "Compiling information architectures, responsive sitemaps, key features checklists, clear estimations, and delivery milestones.",
      icon: ClipboardList,
    },
    {
      num: "03",
      title: language === "id" ? "Desain" : "Design Process",
      desc: language === "id"
        ? "Mengubah konsep strategis menjadi rancangan high-fidelity (UI/UX) di figma dengan tipografi, warna brand, dan layout modern."
        : "Translating architectural targets into sleek High-Fidelity prototypes (UI/UX) in Figma using cohesive typography scales.",
      icon: PenTool,
    },
    {
      num: "04",
      title: language === "id" ? "Pengembangan" : "Development",
      desc: language === "id"
        ? "Mengonversi visual Figma menjadi kode TypeScript modular, clean-code, super cepat, SEO Friendly, dan responsif."
        : "Coding precise Figma screens into modular React workflows, using fast compilation layers and optimized scripts.",
      icon: Braces,
    },
    {
      num: "05",
      title: language === "id" ? "Peluncuran" : "Handover & Live",
      desc: language === "id"
        ? "Melakukan integrasi sistem, testing bug menyeluruh, rilis server produksi, optimasi PageSpeed, dan monitoring berkala."
        : "Performing comprehensive integration checks, speed compliance audits, production rollouts, and constant monitoring.",
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 px-6 relative bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Grid Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-display font-black text-xxs tracking-wider text-brand-blue bg-brand-blue/10 px-4 py-1.5 rounded-full border border-brand-blue/10 uppercase">
            {language === "id" ? "ALUR KERJA KAMI" : "OUR WORKFLOW"}
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark mt-4 tracking-tight uppercase">
            {language === "id" ? "BAGAIMANA KAMI BEKERJA" : "HOW WE WORK"}
          </h2>
          <p className="text-brand-dark/70 text-sm mt-3 leading-relaxed">
            {language === "id"
              ? "Metodologi pengembangan produk digital modern yang teratur demi menjamin ketepatan waktu pengiriman, performa tinggi, dan kepuasan utama Anda."
              : "A highly robust workflow model ensures reliable milestone deliveries, top performance scores, and pixel-perfect results."
            }
          </p>
        </div>

        {/* Step Cards Row (Timeline look) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          
          {/* Horizontal Line backdrop for Large Screens */}
          <div className="hidden lg:block absolute top-[44px] left-12 right-12 h-[2px] bg-gradient-to-r from-brand-blue via-brand-accent to-brand-blue opacity-30 z-0" />

          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-brand-border/80 hover:border-brand-blue/40 rounded-3xl p-6 shadow-sm flex flex-col justify-between h-full min-h-[250px] lg:min-h-[290px] relative z-10 transition-all duration-300 hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    {/* Circle Numerical Badge & Line marker */}
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 text-brand-blue font-display font-black text-sm flex items-center justify-center border border-brand-blue/5 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    
                    <span className="font-display font-black text-xs text-brand-dark/25 tracking-widest font-mono">
                      {language === "id" ? "LANGKAH" : "STEP"} {step.num}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-lg text-brand-dark tracking-tight uppercase mb-3">
                    {step.title}
                  </h3>
                  <p className="text-brand-dark/65 text-xs font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Card footer style marker */}
                <div className="h-1.5 w-8 rounded bg-brand-blue/20 mt-6 group-hover:w-full group-hover:bg-brand-blue transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
