import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, MessageCircle, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface FAQItem {
  id: string;
  question: {
    id: string;
    en: string;
  };
  answer: {
    id: string;
    en: string;
  };
}

export default function FAQ() {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      id: "faq-1",
      question: {
        id: "Berapa lama waktu pengerjaan proyek?",
        en: "How long does typical project delivery take?",
      },
      answer: {
        id: "Pengerjaan landing page standar biasanya memakan waktu 5-7 hari kerja. Proyek website multipage atau Company Profile resmi memakan waktu 2-3 minggu, sedangkan pengembangan sistem kustom/aplikasi mobile premium berkisar antara 4-8 minggu sejak seluruh aset materi diserahterimakan.",
        en: "Standard landing page projects typically deliver in 5-7 business days. Multipage corporate websites or official Company Profiles require 2-3 weeks, while bespoke custom systems or premium mobile apps range between 4-8 weeks from complete asset receipt.",
      },
    },
    {
      id: "faq-2",
      question: {
        id: "Apakah biaya pembuatan sudah termasuk domain dan hosting?",
        en: "Are domain and hosting fees included in your packages?",
      },
      answer: {
        id: "Ya, seluruh paket investasi (Starter, Bisnis, Pro, Premium) sudah termasuk domain berkualitas (.com atau .id) selama 1 tahun penuh, didukung cloud server SSD super cepat, sertifikat keamanan SSL gratis, serta setup konfigurasi teknis awal agar website Anda siap diakses publik.",
        en: "Yes, all of our active plans (Starter, Business, Pro, Premium) include a premium international domain (.com or .id) for 1 full year, fast cloud SSD web servers, free SSL certificates, and complete initial system configurations to ensure your site is immediately public-ready.",
      },
    },
    {
      id: "faq-3",
      question: {
        id: "Apakah kami bisa mengedit data website sendiri setelah serah terima?",
        en: "Can we modify and update website contents ourselves?",
      },
      answer: {
        id: "Sangat bisa. Kami mendesain website dengan Admin Panel atau CMS yang sangat ramah pengguna (user-friendly). Kami juga membekali Anda atau tim Anda dengan panduan materi praktis agar bisa dengan mudah mengedit teks, mengunggah foto portofolio baru, memperbarui materi layanan, mengubah harga, atau mempublikasikan artikel blog.",
        en: "Absolutely. We design and structure websites using custom intuitive Admin Panels or user-friendly Content Management Systems (CMS). We also provide you and your team with step-by-step documentation pointers to easily adjust copy, upload fresh showcase images, update service offerings, and publish blog posts without needing any code.",
      },
    },
    {
      id: "faq-4",
      question: {
        id: "Bagaimana Proud Tech memastikan website dioptimasi untuk Google?",
        en: "How does Proud Tech ensure our website is SEO optimized?",
      },
      answer: {
        id: "Setiap baris kode kami dikalibrasi sesuai standar modern dengan target kecepatan muat tinggi (rata-rata skor Google PageSpeed di atas 90%), optimasi gambar responsif, tag heading hierarki yang rapi, kompresi berkas, sitemap.xml otomatis, serta pendaftaran manual langsung ke mesin indeksasi Google Search Console.",
        en: "Every line of code is structured to ensure fast rendering speeds (regularly securing Google PageSpeed metric scores above 90%), using responsive image optimization, semantic heading layouts, custom assets caching, automated xml sitemaps, and manual index submissions directly to Google Search Console.",
      },
    },
    {
      id: "faq-5",
      question: {
        id: "Bagaimana termin skema pembayaran pengerjaan proyeknya?",
        en: "How is the project payment milestone structured?",
      },
      answer: {
        id: "Sistem pembayaran kami menggunakan model termin transparan: Uang Muka (DP) sebesar 50% dibayarkan di awal saat kesepakatan riset desain dimulai, dan sisa pelunasan 50% dibayarkan setelah seluruh fitur website selesai dirakit, divalidasi presisi sesuai keinginan Anda, dan siap diluncurkan di server produksi (Go Live).",
        en: "We align project payments transparently inside a 2-stage milestone: a 50% Down Payment at project kickoff to lock detailed UI prototypes, and the final 50% balance after complete development has been tested, finalized to your absolute satisfaction, and is ready for production rollout (Go Live).",
      },
    },
    {
      id: "faq-6",
      question: {
        id: "Bagaimana dukungan dukungan/maintenance setelah website aktif?",
        en: "What level of support or maintenance is available post-launch?",
      },
      answer: {
        id: "Kami menyediakan garansi gratis pencadangan berkas, pembaruan keamanan, dan konsultasi teknis darurat selama 30 hari pertama pasca Go Live secara penuh. Untuk jangka panjang, kami menyediakan paket pemeliharaan bulanan opsional yang sangat terjangkau agar sistem backend Anda terus stabil, aman, dan dioptimalkan secara berkala.",
        en: "We provide 30 days of free complementary tech support, data backup monitoring, system core updates, and consulting after the official project launch. For long-term peace of mind, highly scalable monthly maintenance retainers are optionally available so your system remains protected, up-to-date, and fully optimized.",
      },
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactClick = () => {
    const el = document.getElementById("pricing");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-6 relative bg-white border-t border-brand-border/40">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/3 left-0 w-[200px] h-[200px] bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[200px] h-[200px] bg-brand-lime/10 rounded-full blur-[80px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-display font-medium text-xxs tracking-widest text-brand-blue bg-brand-blue/10 px-4.5 py-1.5 rounded-full border border-brand-blue/10 uppercase">
            {language === "id" ? "INFORMASI KLIEN" : "CLIENT BRIEFINGS"}
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-brand-dark mt-4 tracking-tight uppercase">
            {language === "id" ? "PERTANYAAN POPULER" : "FREQUENTLY ASKED FAQs"}
          </h2>
          <p className="text-brand-dark/70 text-sm mt-3 leading-relaxed">
            {language === "id"
              ? "Temukan rangkuman jawaban praktis mengenai alur kerjasama, server hosting, optimasi metadata Google, dan sistem termin pembayaran di Proud Tech."
              : "Discover detailed, transparent answers regarding development timelines, SSD cloud hosting, SEO indexing, and our simple contract stages."
            }
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            const questionText = language === "id" ? item.question.id : item.question.en;
            const answerText = language === "id" ? item.answer.id : item.answer.en;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "bg-brand-bg/30 border-brand-blue shadow-sm" 
                    : "bg-white border-brand-border/70 hover:border-brand-blue/30"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between text-left p-6 gap-4 cursor-pointer selection:bg-transparent"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-btn-${idx}`}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="hidden sm:flex w-6 h-6 rounded-lg bg-brand-blue/5 text-brand-blue font-mono text-[10px] font-bold items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-sm sm:text-base text-brand-dark pr-4 tracking-tight">
                      {questionText}
                    </h3>
                  </div>
                  
                  {/* Chevron Icon Container */}
                  <div className="w-8 h-8 rounded-full bg-brand-bg/50 border border-brand-border/40 flex items-center justify-center shrink-0 text-brand-dark/70 transition-colors duration-300">
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-brand-blue" : "text-brand-dark/60"
                      }`} 
                    />
                  </div>
                </button>

                {/* Accordion Body with Framer Motion height expansion */}
                <motion.div
                  id={`faq-answer-${idx}`}
                  initial={false}
                  animate={{ 
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.3, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-1 sm:pl-16 text-xs sm:text-sm text-brand-dark/70 leading-relaxed font-sans font-medium">
                    {answerText}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Micro CTA Footer */}
        <div className="mt-12 text-center bg-brand-bg/50 border border-brand-border/60 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
              <HelpCircle className="w-5 h-5 animate-pulse" />
            </div>
            <div className="text-left">
              <p className="font-display font-bold text-xs text-brand-dark uppercase tracking-wide">
                {language === "id" ? "Punya Pertanyaan Spesifik?" : "HAVE ANOTHER QUESTION?"}
              </p>
              <p className="text-brand-dark/60 text-xxs font-sans">
                {language === "id" 
                  ? "Hubungi Proud Tech secara langsung untuk mendiskusikan integrasi kustom."
                  : "Talk with Proud Tech directly on securing tailored app components."
                }
              </p>
            </div>
          </div>

          <button
            onClick={handleContactClick}
            className="group shrink-0 inline-flex items-center gap-2 bg-[#1c1d24] text-white hover:bg-brand-blue transition-all duration-300 font-display font-bold text-xxs tracking-wider uppercase px-4.5 py-3 rounded-full cursor-pointer hover:scale-102"
          >
            <span>{language === "id" ? "AJUKAN PERTANYAAN" : "ASK QUESTION NOW"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-lime" />
          </button>
        </div>

      </div>
    </section>
  );
}
