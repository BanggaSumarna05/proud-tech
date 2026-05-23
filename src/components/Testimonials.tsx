import { Star, Quote, Heart, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
  const { language } = useLanguage();

  const testimonials = [
    {
      id: "test-1",
      name: "Budi Setiawan",
      role: language === "id" ? "Direktur Utama" : "Managing Director",
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
      name: "Clarissa Putri",
      role: language === "id" ? "Pendiri & Pemilik" : "Founder & CEO",
      company: "CV. Kerabat Wisata",
      rating: 5,
      project: language === "id" ? "Dashboard Keuangan CV. Kerabat Wisata" : "Dashboard Keuangan CV. Kerabat Wisata",
      feedback: language === "id"
        ? "Sistem pembukuan kas rental kami jadi 3x lipat lebih rapi dan laporan bulanan selesai instan dalam hitungan detik. Kami sangat terbantu dengan analisis keuntungan otomatis yang disajikan di dashboard!"
        : "Our bookkeeping is now 3x more organized, and monthly cash flow statements generate instantly. The automated profit and loss analysis dashboards have completely upgraded our business control!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: "test-3",
      name: "Hendra Wijaya",
      role: language === "id" ? "Ketua Umum" : "President of Student Board",
      company: "BEM FIKES UMTAS",
      rating: 5,
      project: language === "id" ? "Sistem Informasi BEM FIKES" : "Sistem Informasi BEM FIKES",
      feedback: language === "id"
        ? "Desain portalnya sangat modern, cepat diakses, dan memudahkan pengumpulan berkas kegiatan mahasiswa. Kerja sama dengan tim developer Proud Tech berjalan sangat komunikatif dan terstruktur rapi!"
        : "The student portal design is exceptionally modern, fast, and makes event document submissions effortless. Collaborating with the developer team at Proud Tech was highly structured and professional!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 px-6 relative bg-brand-bg border-t border-brand-border/40 overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-brand-lime/5 blur-[120px] pointer-events-none" />
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

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {testimonials.map((test) => (
            <div 
              key={test.id}
              className="bg-white border border-brand-border rounded-[32px] p-8 shadow-sm flex flex-col justify-between relative group hover:shadow-md hover:border-brand-blue/30 transition-all duration-300"
            >
              {/* Huge quote dynamic bg */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-brand-blue/5 pointer-events-none" />

              <div>
                {/* Verified Lencana */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-1.5 bg-brand-lime/10 border border-brand-lime/20 px-3 py-1 rounded-full text-brand-blue font-display font-extrabold text-[9px] tracking-wider uppercase">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                    {language === "id" ? "Kemitraan Terverifikasi" : "Verified Client"}
                  </div>
                  
                  {/* Stars Rating */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" />
                    ))}
                  </div>
                </div>

                {/* Feedback Quote */}
                <blockquote className="text-sm md:text-base text-brand-dark/85 font-sans leading-relaxed font-semibold italic pl-3 border-l-2 border-brand-blue mb-8">
                  "{test.feedback}"
                </blockquote>
              </div>

              {/* Client Profile Card Header */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-brand-border/60">
                <img 
                  src={test.avatar} 
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-lime shadow-sm shrink-0"
                />
                <div className="text-left">
                  <h4 className="font-display font-black text-sm text-brand-dark leading-none mb-1">
                    {test.name}
                  </h4>
                  <p className="text-brand-dark/50 text-[10px] leading-tight font-semibold">
                    {test.role}, <span className="text-brand-dark/80 font-bold">{test.company}</span>
                  </p>
                  <p className="text-brand-blue font-mono text-[9px] uppercase font-bold tracking-wider mt-1">
                    {test.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Bottom Brand signature */}
        <div className="mt-12 text-center text-xxs font-mono text-brand-dark/40 flex items-center justify-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
          Proud Tech Studio • Kepercayaan yang Dibangun Bersama
        </div>

      </div>
    </section>
  );
}
