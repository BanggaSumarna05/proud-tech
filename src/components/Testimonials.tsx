import { Star, Quote, Heart, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
  const { language } = useLanguage();

  const testimonials = [
    {
      id: "test-1",
      name: "Sidik Faturahman",
      role: language === "id" ? "Pemilik CJA Rent Car" : "Owner of CJA Rent Car",
      company: "CJA Rent Car",
      rating: 5,
      project: language === "id" ? "CJA Rent Car Web App" : "CJA Rent Car Web App",
      feedback: language === "id"
        ? "Aplikasi web rental mobil dari Proud Tech ini sangat luar biasa! Manajemen armada kami jadi termonitor penuh secara real-time dan calon pelanggan bisa langsung checkout cepat via WhatsApp. Bentrok jadwal sewa kini 0%!"
        : "This car rental web app by Proud Tech is absolutely outstanding! Fleet tracking is fully transparent in real-time, and customers checkout directly on WhatsApp. Booking double-bookings have dropped to 0%!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: "test-2",
      name: "Maudina Yasmin",
      role: language === "id" ? "Pemilik CV. Kerabat Wisata" : "Owner of CV. Kerabat Wisata",
      company: "CV. Kerabat Wisata",
      rating: 5,
      project: language === "id" ? "Dashboard Keuangan CV. Kerabat Wisata" : "Finance Dashboard",
      feedback: language === "id"
        ? "Sistem pembukuan kas rental kami jadi 3x lipat lebih rapi dan laporan bulanan selesai instan dalam hitungan detik. Kami sangat terbantu dengan analisis keuntungan otomatis yang disajikan di dashboard!"
        : "Our bookkeeping is now 3x more organized, and monthly cash flow statements generate instantly. The automated profit and loss analysis dashboards have completely upgraded our business control!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: "test-3",
      name: "Muhammad Iqbal Setiawan",
      role: language === "id" ? "Gubernur Mahasiswa BEM FIKES UMTAS 2024/2025" : "Governor of Student Board",
      company: "BEM FIKES UMTAS",
      rating: 5,
      project: language === "id" ? "Portal Sistem Informasi BEM FIKES UMTAS" : "Information System Portal BEM FIKES UMTAS",
      feedback: language === "id"
        ? "Desain portalnya sangat modern, cepat diakses, dan memudahkan pengumpulan berkas kegiatan mahasiswa. Kerja sama dengan tim developer Proud Tech berjalan sangat komunikatif dan terstruktur rapi!"
        : "The student portal design is exceptionally modern, fast, and makes event document submissions effortless. Collaborating with the developer team at Proud Tech was highly structured and professional!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: "test-4",
      name: "Elin Marlina", 
      role: language === "id" ? "Pemilik Usaha" : "Business Owner",
      company: "Warung PBM",
      rating: 5,
      project: language === "id" ? "Landing Page Warung PBM" : "Landing Page Warung PBM",
      feedback: language === "id"
        ? "Alhamdulillah, sekarang orderan saya lebih banyak dan lebih mudah dijangkau. Prosesnya cepat, timnya sabar menjelaskan, dan hasilnya jauh melampaui ekspektasi saya."
        : "Before getting a website from Proud Tech, I only got orders by word of mouth. Now orders come in daily from Google! The process was fast, the team was patient, and the results far exceeded my expectations.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: "test-5",
      name: "Irpan",
      role: language === "id" ? "Owner" : "Owner",
      company: "Kopi Bangga",
      rating: 5,
      project: language === "id" ? "Landing Page Kopi Bangga" : "Landing Page Kopi Bangga",
      feedback: language === "id"
        ? "Sebelum punya website dari Proud Tech, saya hanya dapat orderan dari mulut ke mulut. Sekarang orderan datang setiap hari dari Google! Prosesnya cepat, timnya sabar menjelaskan, dan hasilnya jauh melampaui ekspektasi saya."
        : "Before getting a website from Proud Tech, I only got orders by word of mouth. Now orders come in daily from Google! The process was fast, the team was patient, and the results far exceeded my expectations.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-28 px-4 sm:px-6 relative bg-brand-bg border-t border-brand-border/40 overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[200px] md:w-[350px] h-[200px] md:h-[350px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display font-medium text-xxs tracking-widest text-brand-blue bg-brand-blue/10 px-4.5 py-1.5 rounded-full border border-brand-blue/10 uppercase">
            {language === "id" ? "KREDIBILITAS NYATA" : "CLIENT REVIEWALS"}
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-brand-dark mt-4 tracking-tight uppercase">
            {language === "id" ? "APA KATA MEREKA" : "WHAT OUR CLIENTS SAY"}
          </h2>
          <p className="text-brand-dark/70 text-sm mt-3 leading-relaxed">
            {language === "id"
              ? "Ulasan jujur langsung dari para pemilik bisnis, pendiri UMKM, dan pimpinan instansi yang telah merasakan akselerasi digital bersama Proud Tech."
              : "Genuine, heartfelt reviews from business owners, SME founders, and education directors who have experienced stellar digital growth with Proud Tech."
            }
          </p>
        </div>

        {/* Testimonials Grid — handles 3 or 5 cards gracefully */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch max-w-7xl mx-auto">
          {testimonials.map((test, idx) => (
            <div 
              key={test.id}
              className={`bg-white border border-brand-border rounded-[28px] p-7 shadow-sm flex flex-col justify-between relative group hover:shadow-lg hover:border-brand-blue/30 transition-all duration-300 ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Huge quote dynamic bg */}
              <Quote className="absolute top-6 right-7 w-14 h-14 text-brand-blue/4 pointer-events-none" />

              <div>
                {/* Top row: Verified badge + Stars */}
                <div className="flex justify-between items-center mb-5">
                  <div className="flex items-center gap-1.5 bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full text-brand-blue font-display font-extrabold text-[9px] tracking-wider uppercase">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                    {language === "id" ? "Klien Terverifikasi" : "Verified Client"}
                  </div>
                  
                  {/* Stars Rating — enlarged */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                    ))}
                  </div>
                </div>

                {/* Feedback Quote */}
                <blockquote className="text-sm text-brand-dark/85 font-sans leading-relaxed font-semibold italic pl-3 border-l-2 border-brand-blue mb-6">
                  "{test.feedback}"
                </blockquote>
              </div>

              {/* Client Profile Footer */}
              <div className="flex items-center gap-4 mt-auto pt-5 border-t border-brand-border/60">
                {/* Avatar — enlarged */}
                <img 
                  src={test.avatar} 
                  alt={test.name}
                  loading="lazy"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-accent shadow-sm shrink-0"
                />
                <div className="text-left flex-1 min-w-0">
                  <h4 className="font-display font-black text-sm text-brand-dark leading-none mb-1">
                    {test.name}
                  </h4>
                  <p className="text-brand-dark/70 text-[10px] leading-tight font-semibold">
                    {test.role}
                  </p>
                  {/* Company badge — more prominent */}
                  <span className="inline-block mt-1.5 bg-brand-blue/8 border border-brand-blue/15 text-brand-blue font-mono text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-md">
                    {test.company}
                  </span>
                </div>
                {/* Project tag */}
                <span className="hidden sm:block text-right text-brand-blue/60 font-mono text-[8px] uppercase font-bold tracking-wider leading-tight max-w-[80px] shrink-0">
                  {test.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Small Bottom Brand signature */}
        <div className="mt-12 text-center text-xxs font-mono text-brand-dark/60 flex items-center justify-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
          Proud Tech Studio • Kepercayaan yang Dibangun Bersama
        </div>

      </div>
    </section>
  );
}
