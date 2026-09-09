"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { invitation } from "@/lib/config";

type Props = {
  onOpen: () => void;
};

/**
 * Pantalla inicial (imagen 2): portada "Mis 15" con el sobre.
 * Al tocar el sello (toda la portada es sensible al toque) se abre la
 * invitación y arranca la música tras el retardo configurado.
 */
export default function EnvelopeIntro({ onOpen }: Props) {
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<"closed" | "opening" | "leaving">(
    "closed"
  );

  const handleSeal = () => {
    if (stage !== "closed") return;
    setStage("opening");
    onOpen();
    window.setTimeout(() => setStage("leaving"), reduce ? 200 : 1600);
  };

  return (
    <AnimatePresence>
      {stage !== "leaving" && (
        <motion.div
          key="envelope-scene"
          className="fixed inset-0 z-40 overflow-hidden bg-cream"
          exit={{ opacity: 0, scale: 1.06, filter: "blur(4px)" }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.button
            type="button"
            onClick={handleSeal}
            aria-label="Tocá el sello para abrir la invitación"
            className="relative block h-full w-full focus:outline-none"
            style={{ cursor: stage === "closed" ? "pointer" : "default" }}
            animate={{ scale: stage === "opening" ? 1.04 : 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            whileTap={stage === "closed" ? { scale: 0.99 } : undefined}
          >
            {/* Imagen 2: portada exacta provista por el cliente */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={invitation.assets.heroInvite}
              alt="Mis 15 — Estás invitado. Tocá el sello para abrir."
              className="h-full w-full select-none object-cover"
              draggable={false}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
