"use client";

import Reveal from "./ui/Reveal";
import { invitation } from "@/lib/config";

export default function DressCodeSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-24">
      <Reveal>
        <p className="text-center font-sans text-xs uppercase tracking-widest2 text-golddark">
          Dress code
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 flex justify-center gap-10">
          {/* Ilustración lineal minimalista: vestido + esmoquin */}
          <svg width="60" height="120" viewBox="0 0 60 120" fill="none" aria-hidden>
            <path
              d="M22 8h16l-4 10 8 78c0 4-30 4-30 0l8-78-4-10Z"
              stroke="#B89445"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path d="M26 8c0 3 8 3 8 0" stroke="#D4AF67" strokeWidth="1.2" />
            <path d="M30 20v70" stroke="#D4AF67" strokeWidth="0.8" opacity="0.6" />
          </svg>
          <svg width="56" height="120" viewBox="0 0 56 120" fill="none" aria-hidden>
            <path
              d="M14 12h28v100H14V12Z"
              stroke="#B89445"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path d="M28 12l-9 26 9 6 9-6-9-26Z" stroke="#D4AF67" strokeWidth="1.1" />
            <circle cx="28" cy="58" r="1.4" fill="#B89445" />
            <circle cx="28" cy="72" r="1.4" fill="#B89445" />
            <circle cx="28" cy="86" r="1.4" fill="#B89445" />
          </svg>
        </div>
      </Reveal>

      <Reveal delay={0.35}>
        <h2 className="text-gold-gradient mt-10 text-center font-serif text-5xl font-medium sm:text-6xl">
          {invitation.dressCode.charAt(0) +
            invitation.dressCode.slice(1).toLowerCase()}
        </h2>
      </Reveal>

      <Reveal delay={0.5}>
        <p className="mt-6 text-center font-cormorant text-2xl italic text-ink/70">
          Preparate para una noche especial
        </p>
      </Reveal>
    </section>
  );
}
