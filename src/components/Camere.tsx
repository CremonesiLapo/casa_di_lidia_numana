"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { BASE } from "@/lib/constants";

const rooms = [
  {
    id: "indaco",
    name: "INDACO",
    desc: "La camera è perfetta per 2 persone, munita di letto matrimoniale, bagno privato, con tanto di balcone fornito di tavolo e sedie.",
    size: "25mq",
    guests: "2 persone",
    images: [
      `${BASE}/indaco/indaco_letto.jpg`,
      `${BASE}/indaco/indaco_parete.jpg`,
      `${BASE}/indaco/indaco_bagno.jpg`,
    ],
  },
  {
    id: "corallo",
    name: "CORALLO",
    desc: "Questa camera ha al suo interno letto matrimoniale, bagno privato e magica vista mare dalla finestra.",
    size: "25mq",
    guests: "2/3 persone",
    images: [
      `${BASE}/corallo/corallo_letto.jpg`,
      `${BASE}/corallo/corallo_parete.jpg`,
      `${BASE}/corallo/corallo_bagno.jpg`,
    ],
  },
  {
    id: "oltremare",
    name: "OLTREMARE",
    desc: "Questa camera ha al suo interno letto matrimoniale, divano, bagno privato e magica vista mare dalle finestre.",
    size: "50mq",
    guests: "2 persone",
    images: [
      `${BASE}/oltremare/oltremare_letto.jpg`,
      `${BASE}/oltremare/oltremare_parete.jpg`,
      `${BASE}/oltremare/oltremare_bagno.jpg`,
    ],
  },
];

function RoomCarousel({ images }: { images: string[] }) {
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
    <div className="relative aspect-[4/3] overflow-hidden">
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
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/70 hover:bg-white text-mare flex items-center justify-center text-lg shadow transition-all opacity-0 group-hover/card:opacity-100"
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
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/70 hover:bg-white text-mare flex items-center justify-center text-lg shadow transition-all opacity-0 group-hover/card:opacity-100"
        aria-label="Successiva"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
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
        {images[current] ? `${current + 1}/${images.length}` : ""}
      </div>
    </div>
  );
}

export default function Camere() {
  const { ref, inView } = useInView();

  return (
    <section
      id="camere"
      className="py-20 md:py-28 px-4 max-w-6xl mx-auto scroll-mt-20"
    >
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-5xl font-light text-mare">
          Le nostre camere
        </h2>
        <div className="w-12 h-0.5 bg-coral mx-auto mt-3 mb-4" />
        <p className="text-mare/85 max-w-2xl mx-auto">
          Tre camere fronte mare a Numana, moderne e colorate per un fresco
          soggiorno a pochi passi dalla spiaggia. Arricchite di tutti i comfort
          per un sano riposo.
        </p>
      </div>

      <div ref={ref} className="grid md:grid-cols-3 gap-8 mt-12">
        {rooms.map((room, i) => (
          <div
            key={room.id}
            className={`group/card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-sabbia/20 ${
              inView
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <RoomCarousel images={room.images} />
            <div className="p-6">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-bold text-mare">{room.name}</h3>
                <span className="text-xs text-mare/60">{room.guests}</span>
              </div>
              <p className="text-mare/90 text-sm leading-relaxed">
                {room.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
