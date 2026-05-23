import { motion } from "motion/react";
import { 
  Laptop, Smartphone, Layout, Code, Eye, 
  ArrowUpRight, Play, CheckCircle2, Award, 
  Users, Activity, Circle, Layers, Sparkles 
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Showcase() {
  const { t } = useLanguage();

  return (
    <section id="showcase-cards" className="relative py-16 md:py-24 overflow-hidden px-6">
      {/* Decorative Blur Ambient Blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-brand-lime/10 blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-brand-blue/10 blur-[90px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-display font-bold text-xxs tracking-widest text-brand-blue bg-brand-blue/10 px-4 py-1.5 rounded-full border border-brand-blue/10">
            {t("showcase.badge")}
          </span>
          <h3 className="font-display font-black text-3xl md:text-4xl text-brand-dark mt-4 tracking-tight uppercase">
            {t("showcase.title")}
          </h3>
          <p className="text-brand-dark/60 text-sm max-w-lg mx-auto mt-2">
            {t("showcase.desc")}
          </p>
        </div>

        {/* 3 Premium Showcase Cards Grid (Redesigned for clean & premium focal point) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-12">
          
          {/* CARD 1: FIGMA & UI/UX CRAFTSMANSHIP */}
          <motion.div
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-[#1e1e24] text-white rounded-[32px] border border-brand-blue/20 p-8 flex flex-col justify-between min-h-[460px] h-full shadow-lg relative group overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-brand-blue/20 blur-3xl group-hover:bg-brand-blue/35 transition-colors duration-300" />
            
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#a19fff] px-3 py-1.5 rounded-full bg-brand-blue/20 uppercase font-bold">
                  ESTETIKA & UI/UX
                </span>
                <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-brand-lime group-hover:bg-brand-lime group-hover:text-brand-dark transition-colors duration-300">
                  <Layers className="w-4.5 h-4.5" />
                </span>
              </div>
              <h4 className="font-display font-black text-2xl leading-tight uppercase tracking-tight">
                Desain UI/UX & Prototyping Figma
              </h4>
              <p className="text-xs text-white/60 mt-3 leading-relaxed">
                Antarmuka visual premium yang memadukan tipografi elegan, ritme tata letak yang lega, serta konsistensi identitas brand kelas dunia untuk memikat prospek Anda.
              </p>
            </div>

            {/* Visual Focal Point: Figma interactive canvas preview */}
            <div className="mt-6 bg-[#121215] rounded-2xl border border-white/10 p-4 h-48 overflow-hidden relative shadow-inner flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-[8px] font-mono text-white/40">figma-canvas_v2.fig</span>
              </div>
              
              <div className="space-y-3 flex-1 flex flex-col justify-center">
                <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-brand-lime/20 flex items-center justify-center text-brand-lime">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 w-20 bg-white/30 rounded" />
                      <div className="h-1.5 w-12 bg-white/10 rounded" />
                    </div>
                  </div>
                  <div className="h-5 w-14 bg-brand-blue text-white font-display font-bold text-[8px] rounded-lg flex items-center justify-center tracking-wider">
                    ACTIVE
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/5 p-2 rounded-xl border border-white/5 text-center">
                    <span className="text-[7px] text-white/40 block uppercase font-mono">Grid System</span>
                    <span className="text-xxs text-brand-lime font-bold font-mono">12-Col Responsive</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/5 text-center">
                    <span className="text-[7px] text-white/40 block uppercase font-mono">Interactivity</span>
                    <span className="text-xxs text-[#a19fff] font-bold font-mono">Spring Physics</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: SPEED, PERFORMANCE & SEO (CORE ADVANTAGE) */}
          <motion.div
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-[#0c0d12] text-white rounded-[32px] border-2 border-brand-blue p-8 flex flex-col justify-between min-h-[460px] h-full shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-full blur-3xl group-hover:bg-brand-lime/20 transition-all duration-500" />
            <div className="absolute -bottom-10 left-1/4 w-40 h-40 bg-brand-blue/30 rounded-full blur-3xl group-hover:bg-brand-blue/45 transition-all duration-500" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono tracking-widest text-brand-lime bg-brand-lime/10 px-3 py-1.5 rounded-full border border-brand-lime/20 uppercase font-bold">
                  PERFORMA & SEO
                </span>
                <span className="w-9 h-9 rounded-full bg-brand-blue text-brand-lime flex items-center justify-center shadow-lg shadow-brand-blue/50 group-hover:rotate-12 transition-transform duration-300">
                  <Code className="w-4.5 h-4.5" />
                </span>
              </div>
              <h4 className="font-display font-black text-2xl leading-tight uppercase tracking-tight text-white">
                Kode Bersih & Performa Kilat
              </h4>
              <p className="text-xs text-white/70 mt-3 leading-relaxed">
                Kami membangun website SEO friendly menggunakan arsitektur modular standar industri dengan kecepatan muat kurang dari 1.5 detik demi mendominasi indeksasi Google.
              </p>
            </div>

            {/* Visual Focal Point: PageSpeed score circular indicator + IDE mockup */}
            <div className="mt-6 bg-[#141622] rounded-2xl border border-white/10 p-4 h-48 overflow-hidden relative flex flex-col justify-between shadow-inner">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:10px_10px] opacity-40 pointer-events-none" />
              
              <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-brand-lime" />
                  <span className="text-[7.5px] font-mono text-brand-lime font-bold tracking-widest">GOOGLE PAGESPEED</span>
                </div>
                <span className="text-[8px] font-mono text-brand-lime">CORE WEB VITALS: PASSED</span>
              </div>

              <div className="relative z-10 flex items-center justify-around my-auto gap-4">
                {/* Circular Score */}
                <div className="relative w-22 h-22 flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 rounded-full border border-dashed border-brand-lime/30 animate-spin" style={{ animationDuration: "16s" }} />
                  <div className="absolute inset-2 rounded-full border-2 border-brand-lime flex items-center justify-center bg-brand-blue/20">
                    <span className="text-xl font-mono font-black text-white">100</span>
                  </div>
                </div>
                
                {/* Metrics detail list */}
                <div className="space-y-1.5 text-[8.5px] font-mono text-white/80 w-full">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>First Contentful Paint:</span>
                    <span className="text-brand-lime font-bold">0.4s</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Speed Index:</span>
                    <span className="text-brand-lime font-bold">0.8s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Largest Contentful Paint:</span>
                    <span className="text-brand-lime font-bold">1.1s</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[#c5f53d] text-[8px] font-mono">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime" />
                  <span>Dev Server Compiled (1.2s)</span>
                </div>
                <span className="text-white/30">HMR Active</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 3: SAAS & ANALYTICS DASHBOARD */}
          <motion.div
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-[#16161a] text-white rounded-[32px] border border-brand-border/20 p-8 flex flex-col justify-between min-h-[460px] h-full shadow-lg relative group overflow-hidden"
          >
            <div className="absolute top-1/2 -right-12 w-36 h-36 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-blue/30 transition-all" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#a19fff] px-3 py-1.5 rounded-full bg-[#a19fff]/10 uppercase font-bold">
                  SISTEM & DASHBOARD
                </span>
                <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[#d1d5db] group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <Layout className="w-4.5 h-4.5" />
                </span>
              </div>
              <h4 className="font-display font-black text-2xl leading-tight uppercase tracking-tight">
                Integrasi Dashboard & SaaS
              </h4>
              <p className="text-xs text-white/60 mt-3 leading-relaxed">
                Panel administrasi kustom yang memudahkan Anda memantau konversi prospek, memperbarui data produk secara mandiri, dan mengelola database bisnis dengan ringkas.
              </p>
            </div>

            {/* Visual Focal Point: Beautiful analytical bar charts */}
            <div className="mt-6 bg-[#0a0b0e] rounded-2xl border border-white/10 p-4 h-48 overflow-hidden flex flex-col justify-between shadow-inner">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-[8px] font-mono text-white/50 uppercase tracking-widest font-bold">METRIK RETENSI BISNIS</span>
                <span className="text-[9px] text-brand-lime font-mono font-black">+48.2%</span>
              </div>

              {/* Analytical bar charts */}
              <div className="grid grid-cols-6 gap-2.5 items-end h-22 pt-2 px-1">
                {[35, 60, 50, 80, 65, 95].map((val, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1.5">
                    <div className="w-full rounded-md bg-brand-blue/20 h-16 relative overflow-hidden">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${val}%` }}
                        transition={{ delay: idx * 0.1, duration: 1 }}
                        className="absolute bottom-0 left-0 right-0 bg-brand-blue rounded-md"
                        style={{ height: `${val}%` }}
                      >
                        {idx === 5 && <div className="absolute inset-0 bg-brand-lime opacity-30 animate-pulse" />}
                      </motion.div>
                    </div>
                    <span className="text-[6.5px] font-mono text-white/30">M{idx + 1}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2 text-[8px] font-mono">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  <span className="text-white/60">Konversi: 4.8%</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  <span className="text-[#D9FF3F] font-bold">KPI Tercapai</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
