"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Sparkles from "./ui/Sparkles";
import { invitation } from "@/lib/config";

type Props = {
  onOpen: () => void;
};

/**
 * Pantalla inicial: escena elegante con un sobre marfil, tarjeta,
 * sello de lacre dorado con la inicial. Al tocar el SELLO se abre.
 */
export default function EnvelopeIntro({ onOpen }: Props) {
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<"closed" | "opening" | "leaving">(
    "closed"
  );

  const handleSeal = () => {
    if (stage !== "closed") return;
    setStage("opening");
    // Habilita audio + inicia experiencia tras la animación de apertura
    onOpen();
    window.setTimeout(() => setStage("leaving"), reduce ? 200 : 2200);
  };

  return (
    <AnimatePresence>
      {stage !== "leaving" && (
        <motion.div
          key="envelope-scene"
          className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden bg-cream"
          exit={{ opacity: 0, scale: 1.35, filter: "blur(6px)" }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        >
          {/* Fondo perlado con textura y destellos */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 90% at 50% 20%, #ffffff 0%, #f7f3ee 45%, #ece5da 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.5] mix-blend-multiply"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
            }}
          />
          <Sparkles count={22} />

          {/* Sobre */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Envelope stage={stage} onSeal={handleSeal} />
          </motion.div>

          {/* Indicación */}
          <motion.p
            className="relative z-10 mt-10 text-[0.7rem] font-sans font-medium uppercase tracking-widest2 text-golddark"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === "closed" ? 1 : 0 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            Tocá el sello para abrir
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Envelope({
  stage,
  onSeal,
}: {
  stage: "closed" | "opening" | "leaving";
  onSeal: () => void;
}) {
  const opening = stage !== "closed";

  return (
    <div
      className="relative"
      style={{
        width: "min(86vw, 400px)",
        height: "min(60vw, 280px)",
        perspective: 1400,
      }}
    >
      {/* Cuerpo del sobre (parte trasera) */}
      <div
        className="absolute inset-0 rounded-[10px]"
        style={{
          background: "linear-gradient(160deg, #fffdf9 0%, #f3ece0 100%)",
          boxShadow:
            "0 30px 60px -20px rgba(80,60,30,0.35), inset 0 1px 0 rgba(255,255,255,0.8)",
          border: "1px solid rgba(184,148,69,0.25)",
        }}
      />

      {/* Tarjeta que sale */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 flex items-center justify-center rounded-[6px] bg-white px-5 text-center"
        style={{
          width: "82%",
          height: "128%",
          x: "-50%",
          boxShadow: "0 18px 40px -18px rgba(80,60,30,0.4)",
          border: "1px solid rgba(184,148,69,0.28)",
        }}
        initial={{ y: "-42%" }}
        animate={
          opening ? { y: "-96%", rotate: -1.5 } : { y: "-42%", rotate: 0 }
        }
        transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="py-6">
          <p className="mb-4 font-serif text-[1.15rem] italic text-golddark">
            {invitation.event}
          </p>
          <div className="mx-auto mb-4 h-px w-16 bg-gold/50" />
          <div className="space-y-[0.35rem] font-cormorant text-[0.92rem] leading-snug text-ink/80">
            {invitation.cardMessage.map((line, i) =>
              line === "" ? (
                <div key={i} className="h-2" />
              ) : (
                <p key={i}>{line}</p>
              )
            )}
          </div>
          <p className="mt-5 font-script text-3xl text-golddark">
            {invitation.nick}
          </p>
        </div>
      </motion.div>

      {/* Frente del sobre (tapa el borde inferior de la tarjeta) */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 rounded-b-[10px]"
        style={{
          height: "62%",
          background: "linear-gradient(160deg, #fdf9f2 0%, #efe6d6 100%)",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          border: "1px solid rgba(184,148,69,0.25)",
          borderTop: "none",
          clipPath: "polygon(0 22%, 50% 0, 100% 22%, 100% 100%, 0 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      />

      {/* Solapa superior que se levanta */}
      <motion.div
        className="absolute inset-x-0 top-0 z-30 origin-top"
        style={{
          height: "58%",
          transformStyle: "preserve-3d",
          background: "linear-gradient(160deg, #fffdf9 0%, #f0e7d7 100%)",
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          borderRadius: "10px 10px 0 0",
          filter: "drop-shadow(0 4px 6px rgba(80,60,30,0.15))",
        }}
        animate={{ rotateX: opening ? -175 : 0 }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
      />

      {/* Sello de lacre dorado (clickeable) */}
      <motion.button
        type="button"
        onClick={onSeal}
        aria-label="Abrir invitación"
        className="absolute left-1/2 top-1/2 z-40 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        style={{
          width: "min(20vw, 88px)",
          height: "min(20vw, 88px)",
          x: "-50%",
          y: "-50%",
          cursor: opening ? "default" : "pointer",
        }}
        animate={{ opacity: opening ? 0 : 1, scale: opening ? 0.6 : 1 }}
        transition={{ duration: 0.6 }}
        whileTap={{ scale: 0.92 }}
      >
        <Seal initial={invitation.initial} />
      </motion.button>
    </div>
  );
}

function Seal({ initial }: { initial: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="relative flex h-full w-full items-center justify-center rounded-full"
      style={{
        background:
          "radial-gradient(circle at 35% 30%, #e7c78d 0%, #d4af67 40%, #b89445 75%, #9c7c33 100%)",
        boxShadow:
          "0 6px 16px -4px rgba(120,90,20,0.55), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -3px 6px rgba(90,65,15,0.5)",
      }}
      animate={
        reduce
          ? {}
          : {
              scale: [1, 1.05, 1],
              rotate: [0, 1.5, -1.5, 0],
            }
      }
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Borde festoneado sutil */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: "2px dashed rgba(120,90,20,0.35)",
          margin: 5,
        }}
      />
      {/* Brillo que recorre el sello cada algunos segundos */}
      {!reduce && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.75) 50%, transparent 70%)",
            mixBlendMode: "screen",
          }}
          animate={{ x: ["-120%", "120%"] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatDelay: 3.5,
            ease: "easeInOut",
          }}
        />
      )}
      <span
        className="relative font-serif text-2xl font-semibold"
        style={{
          color: "#7d5f1f",
          textShadow: "0 1px 1px rgba(255,255,255,0.35)",
        }}
      >
        {initial}
      </span>
    </motion.div>
  );
}
