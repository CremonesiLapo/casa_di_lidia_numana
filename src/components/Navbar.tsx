"use client";

import { useState, useEffect } from "react";
import { BASE } from "@/lib/constants";

const links = [
  { href: "#camere", label: "CAMERE" },
  { href: "#appartamenti", label: "APPARTAMENTI" },
  { href: "#spiagge", label: "A 56 PASSI DAL MARE" },
  { href: "#richiedi", label: "RICHIEDI DISPONIBILITÀ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4">
      <div
        className={`max-w-6xl mx-auto mt-3 rounded-2xl pointer-events-auto transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg"
            : "bg-white/15 backdrop-blur-md shadow-md"
        }`}
      >
        <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6">
          <a href="#" className="flex items-center gap-2">
            <img
              src={`${BASE}/assets/a-casa-di-lidia-numana-bb.png`}
              alt="A Casa di Lidia"
              className={`transition-all ${
                scrolled ? "h-7" : "h-9"
              } w-auto`}
            />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.slice(0, -1).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-3 py-2 text-xs font-semibold tracking-widest transition-colors ${
                  scrolled ? "text-mare" : "text-white"
                } hover:text-acqua after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-acqua after:transition-all hover:after:w-3/4`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={links[3].href}
              className={`ml-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest transition-all ${
                scrolled
                  ? "bg-coral text-white hover:bg-coral/90"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {links[3].label}
            </a>
          </div>

          <button
            className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
              scrolled ? "text-mare" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-0.5 bg-current transition-all ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-all ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {open && (
          <div className="md:hidden px-4 pb-5 pt-1 flex flex-col gap-3 text-sm font-semibold tracking-widest text-mare">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-acqua transition-colors px-2 py-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
