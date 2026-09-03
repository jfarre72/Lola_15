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
                "radial-gradient(120% 90% at 50% 18%, #fbf7f8 0%, #efe9ec 42%, #e2dfe4 100%), radial-gradient(60% 45% at 20% 15%, rgba(242,223,229,0.6) 0%, rgba(242,223,229,0) 60%), radial-gradient(55% 45% at 85% 22%, rgba(214,217,224,0.55) 0%, rgba(214,217,224,0) 60%)",
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

          {/* Marco dorado sutil de la escena */}
          <div
            className="pointer-events-none absolute z-10"
            style={{
              inset: "18px",
              border: "1px solid rgba(184,148,69,0.35)",
              borderRadius: "4px",
            }}
          />

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
          <motion.div
            className="relative z-10 mt-10 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === "closed" ? 1 : 0 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            <span className="h-px w-6 bg-gold/50" />
            <p className="text-[0.7rem] font-sans font-medium uppercase tracking-widest2 text-golddark">
              Tocá el sello para abrir
            </p>
            <span className="h-px w-6 bg-gold/50" />
          </motion.div>
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
      {/* Cuerpo del sobre (parte trasera) — rosa marfil */}
      <div
        className="absolute inset-0 rounded-[10px]"
        style={{
          background: "linear-gradient(160deg, #fdf0f3 0%, #f2d9e0 100%)",
          boxShadow:
            "0 30px 60px -20px rgba(150,90,110,0.35), inset 0 1px 0 rgba(255,255,255,0.85)",
          border: "1px solid rgba(200,150,170,0.4)",
        }}
      />

      {/* Tarjeta — su encabezado asoma sobre el sobre; el resto queda contenido */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 flex flex-col items-center rounded-[6px] bg-white px-6 text-center"
        style={{
          width: "84%",
          height: "96%",
          x: "-50%",
          boxShadow:
            "0 20px 45px -18px rgba(80,60,30,0.45), inset 0 0 0 1px rgba(255,255,255,0.6)",
          border: "1px solid rgba(184,148,69,0.35)",
          backgroundImage: "linear-gradient(180deg, #ffffff 0%, #fffdf8 100%)",
        }}
        initial={{ y: "-50%" }}
        animate={
          opening ? { y: "-120%", rotate: -1.5 } : { y: "-50%", rotate: 0 }
        }
        transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Marco fino dorado interior de la tarjeta */}
        <div
          className="pointer-events-none absolute rounded-[3px]"
          style={{ inset: 8, border: "1px solid rgba(184,148,69,0.3)" }}
        />

        {/* Encabezado visible (asoma por encima de la solapa) */}
        <div className="relative z-10 pt-3">
          <p className="font-sans text-[0.58rem] uppercase tracking-widest2 text-golddark">
            {invitation.event}
          </p>
          <div className="my-2 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gold/50" />
            <span className="text-[0.55rem] text-gold">✦</span>
            <span className="h-px w-8 bg-gold/50" />
          </div>
          <p className="font-script text-[2.6rem] leading-none text-golddark">
            {invitation.name}
          </p>
        </div>

        {/* Filigrana muy sutil en el centro (se ve tras la abertura en V) */}
        <p className="relative z-10 mt-10 font-cormorant text-sm italic tracking-wide text-ink/30">
          Estás invitada
        </p>
      </motion.div>

      {/* Frente del sobre — panel completo (sobre cerrado, sin huecos) */}
      <div
        className="absolute inset-0 z-20 rounded-[10px]"
        style={{
          background: "linear-gradient(160deg, #fbeaef 0%, #edccd6 100%)",
          border: "1px solid rgba(200,150,170,0.4)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -24px 44px -24px rgba(150,90,110,0.2)",
        }}
      />

      {/* Costuras del sobre: V superior (solapa) y pliegues inferiores */}
      <svg
        className="absolute inset-0 z-20 h-full w-full"
        viewBox="0 0 100 70"
        preserveAspectRatio="none"
        aria-hidden
      >
        {/* borde inferior de la solapa */}
        <path
          d="M0 1 L50 40 L100 1"
          fill="none"
          stroke="rgba(184,148,69,0.35)"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
        />
        {/* pliegues laterales que suben hacia el centro */}
        <path
          d="M0 6 L50 40 L100 6 M0 69 L50 40 L100 69"
          fill="none"
          stroke="rgba(150,90,110,0.18)"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Solapa superior que se levanta (con forro dorado interior) */}
      <motion.div
        className="absolute inset-x-0 top-0 z-30 origin-top"
        style={{
          height: "58%",
          transformStyle: "preserve-3d",
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          borderRadius: "10px 10px 0 0",
          filter: "drop-shadow(0 5px 8px rgba(150,90,110,0.2))",
        }}
        animate={{ rotateX: opening ? -175 : 0 }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
      >
        {/* Cara exterior */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            background: "linear-gradient(160deg, #fdeef2 0%, #f0d2dc 100%)",
            backfaceVisibility: "hidden",
          }}
        />
        {/* Forro interior dorado (se ve al abrir) */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            background:
              "linear-gradient(160deg, #e7c78d 0%, #d4af67 55%, #b89445 100%)",
            transform: "rotateX(180deg)",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>

      {/* Sello de lacre dorado (clickeable) */}
      <motion.button
        type="button"
        onClick={onSeal}
        aria-label="Abrir invitación"
        className="absolute left-1/2 top-1/2 z-40 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        style={{
          width: "min(22vw, 96px)",
          height: "min(22vw, 96px)",
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
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        // Borde orgánico e irregular para simular una gota de lacre
        borderRadius: "47% 53% 52% 48% / 49% 51% 49% 51%",
        background:
          "radial-gradient(circle at 34% 28%, #ecca8f 0%, #d4af67 42%, #b89445 74%, #916f2c 100%)",
        boxShadow:
          "0 8px 20px -6px rgba(120,90,20,0.6), inset 0 2px 5px rgba(255,255,255,0.45), inset 0 -4px 8px rgba(80,58,12,0.55)",
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
      {/* Anillo grabado exterior */}
      <div
        className="absolute rounded-full"
        style={{
          inset: 6,
          border: "1.5px solid rgba(120,90,20,0.4)",
          boxShadow: "inset 0 0 4px rgba(80,58,12,0.4)",
        }}
      />
      {/* Puntería de anillo interior punteado */}
      <div
        className="absolute rounded-full"
        style={{
          inset: 11,
          border: "1px dashed rgba(255,245,220,0.5)",
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
