"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useInView } from "@/hooks/useInView";

export default function RichiediDisponibilita() {
  const { ref, inView } = useInView();
  const [state, handleSubmit] = useForm("mzdqgvdy");

  if (state.succeeded) {
    return (
      <section id="richiedi" className="py-20 md:py-28 px-4 scroll-mt-20">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto bg-crema rounded-3xl p-8 md:p-12 shadow-lg border border-sabbia/20 transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-acqua/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-acqua" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-mare mb-2">
              Richiesta inviata!
            </h3>
            <p className="text-mare/70 text-sm max-w-md mx-auto">
              Grazie per averci contattato. Ti risponderemo al più presto per
              confermare la disponibilità.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="richiedi" className="py-20 md:py-28 px-4 scroll-mt-20">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto bg-crema rounded-3xl p-8 md:p-12 shadow-lg border border-sabbia/20 transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light text-mare">
            Richiedi disponibilità
          </h2>
          <div className="w-12 h-0.5 bg-coral mx-auto mt-3" />
          <p className="text-mare/85 text-sm mt-4 max-w-lg mx-auto">
            Invia il form <strong>senza impegno</strong> per scoprire la
            disponibilità nelle date che ti interessano.
          </p>
        </div>

        {state.errors && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-sm text-red-700">
            Si è verificato un errore. Controlla i campi sottostanti e riprova.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                required
                name="nome"
                placeholder="Nome *"
                className="w-full bg-white border border-sabbia/40 rounded-xl px-4 py-3 text-sm text-mare placeholder:text-mare/30 focus:outline-none focus:ring-2 focus:ring-acqua/30 focus:border-acqua/50 transition-all"
              />
              <ValidationError field="nome" errors={state.errors} />
            </div>
            <div>
              <input
                required
                name="cognome"
                placeholder="Cognome *"
                className="w-full bg-white border border-sabbia/40 rounded-xl px-4 py-3 text-sm text-mare placeholder:text-mare/30 focus:outline-none focus:ring-2 focus:ring-acqua/30 focus:border-acqua/50 transition-all"
              />
              <ValidationError field="cognome" errors={state.errors} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                required
                type="email"
                name="email"
                placeholder="Email *"
                className="w-full bg-white border border-sabbia/40 rounded-xl px-4 py-3 text-sm text-mare placeholder:text-mare/30 focus:outline-none focus:ring-2 focus:ring-acqua/30 focus:border-acqua/50 transition-all"
              />
              <ValidationError field="email" errors={state.errors} />
            </div>
            <input
              type="tel"
              name="telefono"
              placeholder="Telefono"
              className="w-full bg-white border border-sabbia/40 rounded-xl px-4 py-3 text-sm text-mare placeholder:text-mare/30 focus:outline-none focus:ring-2 focus:ring-acqua/30 focus:border-acqua/50 transition-all"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="tipo_alloggio"
              className="w-full bg-white border border-sabbia/40 rounded-xl px-4 py-3 text-sm text-mare/90 focus:outline-none focus:ring-2 focus:ring-acqua/30 focus:border-acqua/50 transition-all"
            >
              <option value="">Tipo alloggio</option>
              <option value="camere">Camera</option>
              <option value="appartamenti">Appartamento</option>
            </select>
            <select
              name="adulti"
              className="w-full bg-white border border-sabbia/40 rounded-xl px-4 py-3 text-sm text-mare/90 focus:outline-none focus:ring-2 focus:ring-acqua/30 focus:border-acqua/50 transition-all"
            >
              <option value="">N° Adulti</option>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-mare/65 mb-1.5 ml-1">
                Data di arrivo
              </label>
              <input
                type="date"
                name="arrivo"
                className="w-full bg-white border border-sabbia/40 rounded-xl px-4 py-3 text-sm text-mare focus:outline-none focus:ring-2 focus:ring-acqua/30 focus:border-acqua/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs text-mare/65 mb-1.5 ml-1">
                Data di partenza
              </label>
              <input
                type="date"
                name="partenza"
                className="w-full bg-white border border-sabbia/40 rounded-xl px-4 py-3 text-sm text-mare focus:outline-none focus:ring-2 focus:ring-acqua/30 focus:border-acqua/50 transition-all"
              />
            </div>
          </div>

          <textarea
            name="richieste"
            placeholder="Richieste speciali"
            rows={4}
            className="w-full bg-white border border-sabbia/40 rounded-xl px-4 py-3 text-sm text-mare placeholder:text-mare/30 focus:outline-none focus:ring-2 focus:ring-acqua/30 focus:border-acqua/50 transition-all resize-none"
          />

          <label className="flex items-start gap-3 text-xs text-mare/75">
            <input
              type="checkbox"
              name="privacy"
              required
              className="mt-0.5"
            />
            <span>
              Accetto la{" "}
              <a href="#" className="text-acqua underline hover:text-acqua/80">
                Privacy Policy
              </a>{" "}
              *
            </span>
          </label>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-acqua hover:bg-acqua/90 text-white font-bold py-4 rounded-xl transition-all text-sm tracking-widest hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {state.submitting ? "INVIO IN CORSO..." : "RICHIEDI DISPONIBILITÀ"}
          </button>
        </form>
      </div>
    </section>
  );
}
