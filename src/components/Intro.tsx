"use client";

import { useInView } from "@/hooks/useInView";

const stats = [
  { number: "56", label: "passi dal mare" },
  { number: "3", label: "camere B&B" },
  { number: "2", label: "appartamenti" },
];

export default function Intro() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 md:py-28 px-4 bg-crema">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
          inView
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-light text-mare mb-4 leading-tight">
            B&B con Camere e Appartamenti sul lungomare di{" "}
            <span className="text-acqua font-semibold">Numana</span>
          </h1>
          <div className="w-16 h-1 bg-coral mb-6" />
          <p className="text-mare/90 leading-relaxed mb-4">
            Ci troviamo <strong>affacciati sul lungomare di Numana</strong>,
            meravigliosa località ai piedi del Conero. Offriamo soggiorni nelle
            nostre camere in soluzione B&B, oppure comode sistemazioni in
            appartamento.
          </p>
          <p className="text-mare/90 leading-relaxed mb-4">
            Vi piacerebbe un risveglio energetico con colazione all&apos;aperto
            e a seguire un bel tuffo? Nel nostro bed&amp;breakfast a Numana
            potrete fare tutto questo! Avvolti in un&apos;
            <strong>atmosfera calda e familiare</strong>, che vi accompagnerà
            per tutta la permanenza <strong>A Casa di Lidia</strong>.
          </p>
          <p className="text-mare/90 leading-relaxed">
            Mare, splendide località, divertimento per tutti i gusti e una
            vacanza piena di comfort nella{" "}
            <strong>Riviera del Conero</strong>, dove enogastronomia, natura
            incontaminata e splendidi borghi si uniscono insieme.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/homepage_background.jpeg"
              alt="Vista sul mare di Numana"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-4 text-center shadow-sm"
              >
                <p className="text-3xl md:text-4xl font-bold text-acqua">
                  {s.number}
                </p>
                <p className="text-xs text-mare/70 mt-1 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
