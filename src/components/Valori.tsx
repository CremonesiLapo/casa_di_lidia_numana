"use client";

import { useInView } from "@/hooks/useInView";

const items = [
  { img: "/assets/icon_tazza.png", label: "COLAZIONE ALL'APERTO" },
  { img: "/assets/icon_conero.png", label: "VERDE DEL CONERO" },
  { img: "/assets/icon_family.png", label: "COME A CASA" },
  { img: "/assets/icon_beach.png", label: "A POCHI PASSI DAL MARE" },
  { img: "/assets/icon_beb.png", label: "CAMERE FRONTEMARE" },
  { img: "/assets/icon_appartamento.png", label: "APPARTAMENTI LUNGOMARE" },
];

export default function Valori() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-mare">
          Perché sceglierci
        </h2>
        <div className="w-12 h-0.5 bg-coral mx-auto mt-3" />
      </div>

      <div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
      >
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col items-center text-center group transition-all duration-500 ${
              inView
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-acqua/20 bg-white flex items-center justify-center mb-4 group-hover:bg-acqua/10 group-hover:border-acqua/40 transition-all duration-300 shadow-sm">
              <img src={item.img} alt="" className="w-12 h-auto" />
            </div>
            <h3 className="text-xs font-bold text-mare leading-snug tracking-wide">
              {item.label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
