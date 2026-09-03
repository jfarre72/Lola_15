"use client";

import Reveal from "./ui/Reveal";
import { invitation, whatsappUrl } from "@/lib/config";

export default function RSVPSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-24">
      <Reveal>
        <h2 className="text-gold-gradient text-center font-serif text-5xl font-medium sm:text-6xl">
          ¿Venís?
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-6 text-center font-cormorant text-2xl italic text-ink/70">
          Me encantaría compartir esta noche con vos
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block bg-gold px-10 py-4 font-sans text-xs uppercase tracking-widest2 text-white shadow-[0_12px_30px_-12px_rgba(120,90,20,0.6)] transition-colors duration-500 hover:bg-golddark"
        >
          Confirmar asistencia
        </a>
      </Reveal>

      <Reveal delay={0.55}>
        <p className="mt-6 text-center font-sans text-[0.62rem] uppercase tracking-widest2 text-golddark">
          Confirmar antes del {invitation.rsvpDeadline}
        </p>
      </Reveal>
    </section>
  );
}
