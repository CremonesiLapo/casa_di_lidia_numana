"use client";

import { useInView } from "@/hooks/useInView";
import { BASE } from "@/lib/constants";

const beaches = [
  {
    name: "LA SPIAGGIOLA",
    image: `${BASE}/spiagge/spiaggiola.jpg`,
    desc: 'La spiaggia di Numana alta, detta "La Spiaggiola", offre un colpo d\'occhio splendido, immersa nella natura del Parco del Conero, pur mantenendo tutte le comodità di una spiaggia attrezzata.',
  },
  {
    name: "SPIAGGIA DEL FRATE",
    image: `${BASE}/spiagge/spiaggia_frate.jpg`,
    desc: 'Una delle più riservate e affascinanti calette di Numana. Deve il nome al maestoso scoglio bianco che si staglia di fronte ad essa. Prevalentemente attrezzata.',
  },
  {
    name: "LE DUE SORELLE",
    image: `${BASE}/spiagge/sirolo-due-sorelle.jpg`,
    desc: "Due scogli gemelli emergono dalle acque limpidissime. Raggiungibile solo via mare, è un gioiello di natura incontaminata dove il solo rumore è quello del mare.",
  },
];

export default function Spiagge() {
  const { ref, inView } = useInView();

  return (
    <section
      id="spiagge"
      className="py-20 md:py-28 px-4 max-w-6xl mx-auto scroll-mt-20"
    >
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-5xl font-light text-mare">
          A 56 passi dal mare
        </h2>
        <div className="w-12 h-0.5 bg-coral mx-auto mt-3 mb-4" />
        <p className="text-mare/85 max-w-2xl mx-auto">
          Di fronte agli alloggi c&apos;è la comoda spiaggia di Numana Bassa. A
          sinistra, oltrepassato il Porto Turistico, la Spiaggiola e la Spiaggia
          del Frate.
        </p>
      </div>

      <div ref={ref} className="grid md:grid-cols-3 gap-6 mt-12">
        {beaches.map((b, i) => (
          <div
            key={b.name}
            className={`group relative rounded-3xl overflow-hidden shadow-lg h-[400px] transition-all duration-500 ${
              inView
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <img
              src={b.image}
              alt={b.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mare/80 via-mare/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-lg font-bold mb-2">{b.name}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
