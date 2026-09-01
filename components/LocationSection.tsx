"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./ui/Reveal";
import { invitation, mapsUrl } from "@/lib/config";

export default function LocationSection() {
  const reduce = useReducedMotion();
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-24">
      <Reveal>
        <p className="text-center font-sans text-xs uppercase tracking-widest2 text-golddark">
          ¿Dónde?
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <motion.div
          className="mt-8 flex justify-center"
          animate={reduce ? {} : { y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="34" height="44" viewBox="0 0 34 44" fill="none">
            <path
              d="M17 2C9.3 2 3 8.1 3 15.6 3 26 17 42 17 42s14-16 14-26.4C31 8.1 24.7 2 17 2Z"
              stroke="#B89445"
              strokeWidth="1.4"
            />
            <circle cx="17" cy="15.5" r="5" stroke="#D4AF67" strokeWidth="1.4" />
          </svg>
        </motion.div>
      </Reveal>

      <Reveal delay={0.3}>
        <h2 className="mt-6 text-center font-serif text-4xl font-medium text-ink sm:text-5xl">
          {invitation.venue}
        </h2>
      </Reveal>

      <Reveal delay={0.45}>
        <div className="mt-4 text-center font-cormorant text-xl text-ink/70">
          <p>{invitation.address.line1}</p>
          <p>{invitation.address.line2}</p>
        </div>
      </Reveal>

      <Reveal delay={0.6}>
        <a
          href={mapsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block border border-gold px-9 py-3 font-sans text-xs uppercase tracking-widest2 text-golddark transition-colors duration-500 hover:bg-gold hover:text-white"
        >
          Cómo llegar
        </a>
      </Reveal>
    </section>
  );
}
