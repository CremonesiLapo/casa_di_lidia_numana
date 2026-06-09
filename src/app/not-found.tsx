import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-crema rounded-3xl p-12 shadow-lg border border-sabbia/20">
          <div className="w-20 h-20 rounded-full bg-acqua/15 flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl font-bold text-acqua">404</span>
          </div>

          <h1 className="text-2xl font-bold text-mare mb-3">
            Pagina non trovata
          </h1>

          <p className="text-mare/70 text-sm mb-8 leading-relaxed">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>

          <div className="w-12 h-0.5 bg-coral mx-auto mb-8" />

          <Link
            href="/"
            className="inline-block bg-acqua hover:bg-acqua/90 text-white font-bold px-8 py-3 rounded-xl transition-all text-sm tracking-widest hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            TORNA ALLA HOME
          </Link>
        </div>

        <p className="text-mare/40 text-xs mt-8">
          A Casa di Lidia — Bed & Breakfast e Appartamenti a Numana
        </p>
      </div>
    </div>
  );
}
