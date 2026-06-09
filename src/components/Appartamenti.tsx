"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { BASE } from "@/lib/constants";

const apartmentImages = [
  `${BASE}/appartamento/camera-appartamento-via-risorgimento-600x538.jpg`,
  `${BASE}/appartamento/cucina-appartamento-via-risorgimento-600x538.jpg`,
  `${BASE}/appartamento/bagno-appartamento-via-risorgimento-600x538.jpg`,
];

const services = [
  { label: "Cucina attrezzata", icon: "🍳" },
  { label: "Bagno privato", icon: "🚿" },
  { label: "WiFi gratis", icon: "📶" },
  { label: "Vista mare", icon: "🌊" },
  { label: "Aria condizionata", icon: "❄️" },
  { label: "Posto auto", icon: "🅿️" },
];

function ApartmentCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<number>(0);

  const next = useCallback(() => {
    setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  useEffect(() => {
    timerRef.current = window.setInterval(next, 4000);
    return () => window.clearInterval(timerRef.current);
  }, [next]);

  return (
    <div className="relative h-full min-h-[300px] overflow-hidden">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}

      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
          window.clearInterval(timerRef.current);
          timerRef.current = window.setInterval(next, 4000);
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/70 hover:bg-white text-mare flex items-center justify-center text-lg shadow transition-all opacity-0 group-hover/card:opacity-100 z-10"
        aria-label="Precedente"
      >
        ‹
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
          window.clearInterval(timerRef.current);
          timerRef.current = window.setInterval(next, 4000);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/70 hover:bg-white text-mare flex items-center justify-center text-lg shadow transition-all opacity-0 group-hover/card:opacity-100 z-10"
        aria-label="Successiva"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(i);
              window.clearInterval(timerRef.current);
              timerRef.current = window.setInterval(next, 4000);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-mare text-xs font-bold px-3 py-1 rounded-full shadow z-10">
        {current + 1}/{images.length}
      </div>
    </div>
  );
}

export default function Appartamenti() {
  const { ref, inView } = useInView();

  return (
    <section
      id="appartamenti"
      className="py-20 md:py-28 px-4 bg-crema scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-light text-mare">
            Appartamenti frontemare
          </h2>
          <div className="w-12 h-0.5 bg-coral mx-auto mt-3 mb-4" />
          <p className="text-mare/80 max-w-2xl mx-auto">
            Atmosfera familiare, ampie stanze che si affacciano sul mare e
            tutti i comfort di casa. Per 4 o 5 persone, in zona tranquilla e
            vicino ai servizi.
          </p>
        </div>

        <div
          ref={ref}
          className={`group/card mt-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-sabbia/20 transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3">
              <ApartmentCarousel images={apartmentImages} />
            </div>
            <div className="md:col-span-2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-mare mb-1">
                Via Risorgimento
              </h3>
              <p className="text-sm text-mare/50 mb-4">4/5 persone</p>
              <p className="text-mare/85 text-sm leading-relaxed mb-6">
                Soluzione ottimale per gruppi di amici o famiglie, per soggiorni
                di 4 o 5 ospiti. Vicinissimo al mare e ben collegato con i
                servizi principali. Sole, mare e relax a volontà!
              </p>

              <div className="grid grid-cols-3 gap-2 mb-6">
                {services.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-1 bg-crema rounded-xl p-2"
                  >
                    <span className="text-lg">{s.icon}</span>
                    <span className="text-[10px] text-mare/60 text-center leading-tight">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
