import { BASE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-mare-light text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-bold text-white text-sm tracking-widest mb-4">
            CONTATTI
          </h4>
          <div className="w-8 h-0.5 bg-coral mb-4" />
          <p className="leading-relaxed text-sm mb-3">
            Via della Sirena, 4
            <br />
            60026 Numana (AN)
          </p>
          <p className="text-sm mb-1">
            <a
              href="mailto:richieste@acasadilidianumana.it"
              className="hover:text-white transition-colors"
            >
              richieste@acasadilidianumana.it
            </a>
          </p>
          <p className="text-sm">
            Tel.{" "}
            <a
              href="tel:+393488087007"
              className="hover:text-white transition-colors"
            >
              +39 348 8087007
            </a>
          </p>
          <p className="mt-4 text-xs text-white/60">
            Ubicati a pochi passi dal porto turistico di Numana.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src={`${BASE}/assets/logo-footer-300x101.png`}
            alt="A Casa di Lidia"
            className="h-16 w-auto mb-6"
          />
        </div>

        <div className="flex flex-col items-end justify-center text-xs text-white/60">
          <p className="mb-1">CIN: IT042032C2QZWJ2EL9</p>
          <p>CIN: IT042032C1HR9U3P3I</p>
          <p className="mt-6 text-[10px] text-white/40">
            © {new Date().getFullYear()} A Casa di Lidia
          </p>
        </div>
      </div>
    </footer>
  );
}
