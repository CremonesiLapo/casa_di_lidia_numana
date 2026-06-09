"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        const speed = 0.3;
        imgRef.current.style.transform = `translateY(${
          window.scrollY * speed
        }px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        ref={imgRef}
        src="/homepage_background.jpeg"
        alt="Spiaggia del Frate, Numana"
        className="absolute inset-0 w-full h-[120%] object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-mare/50 via-mare/10 to-mare/40" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <img
          src="/assets/logo-slider.png"
          alt="A Casa di Lidia"
          className="w-56 md:w-80 mb-6 drop-shadow-lg"
        />
        <p className="text-mare text-base md:text-xl font-semibold tracking-wide mb-10 max-w-xl bg-white/15 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg border border-white/30">
          Bed & Breakfast e Appartamenti sul lungomare di Numana
        </p>
        <a
          href="#camere"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-white/40 text-white font-semibold text-sm tracking-widest hover:bg-white/15 transition-all animate-pulse"
        >
          SCOPRI
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="absolute top-6 right-6 z-10">
        <a
          href="tel:+393488087007"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold hover:bg-white/20 transition-all"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          +39 348 8087007
        </a>
      </div>
    </section>
  );
}
