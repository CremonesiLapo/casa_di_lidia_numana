"use client";

import { useInView } from "@/hooks/useInView";

export default function Recensione() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 px-4 bg-crema">
      <div
        ref={ref}
        className={`max-w-xl mx-auto text-center bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-sabbia/20 transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <img
          src="/assets/trip-advisor-recensione.png"
          alt="TripAdvisor"
          className="h-6 mx-auto mb-4"
        />
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote className="text-lg md:text-xl text-mare/95 italic leading-relaxed mb-4">
          &ldquo;Tutto Fantastico! Ho alloggiato nel b&amp;b in coppia con il
          mio ragazzo. Camere veramente carine e proprio attaccate alla
          spiaggia! Un grazie ai titolari che sono stati sempre carini e
          disponibili.&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-3 pt-2">
          <div className="w-10 h-10 rounded-full bg-acqua/20 flex items-center justify-center text-acqua font-bold text-sm">
            M
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-mare">Martina</p>
            <p className="text-xs text-mare/60">TripAdvisor • Agosto 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}
