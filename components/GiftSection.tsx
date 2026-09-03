"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./ui/Reveal";
import { invitation } from "@/lib/config";

export default function GiftSection() {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(invitation.gift.alias);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* silencioso */
    }
  };

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-24">
      <Reveal>
        <p className="text-center font-sans text-xs uppercase tracking-widest2 text-golddark">
          Tu presencia es mi regalo
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <motion.div
          className="mt-8 flex justify-center"
          animate={reduce ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Ícono lineal de regalo */}
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden>
            <rect x="6" y="16" width="30" height="20" stroke="#B89445" strokeWidth="1.3" />
            <path d="M4 16h34v5H4z" stroke="#B89445" strokeWidth="1.3" />
            <path d="M21 12v24" stroke="#D4AF67" strokeWidth="1.3" />
            <path
              d="M21 12c-3-6-11-4-8 0 2 2.5 8 0 8 0Zm0 0c3-6 11-4 8 0-2 2.5-8 0-8 0Z"
              stroke="#D4AF67"
              strokeWidth="1.2"
            />
          </svg>
        </motion.div>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="mt-6 max-w-sm text-center font-cormorant text-2xl italic leading-relaxed text-ink/70">
          Si querés hacerme un regalo, podés colaborar con este alias
        </p>
      </Reveal>

      <Reveal delay={0.45}>
        <button
          type="button"
          onClick={copy}
          className="group mt-8 inline-flex items-center gap-3 border border-gold px-8 py-3 transition-colors duration-500 hover:bg-gold/10"
        >
          <span className="font-sans text-sm tracking-[0.2em] text-ink">
            {invitation.gift.alias}
          </span>
          <span className="font-sans text-[0.6rem] uppercase tracking-widest2 text-golddark">
            {copied ? "¡Copiado!" : "Copiar"}
          </span>
        </button>
      </Reveal>
    </section>
  );
}
