"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { invitation } from "@/lib/config";
import {
  DiscoBall,
  GlitterStar,
  HeartDoodle,
  Sparkle4,
  Bow,
  Ribbon,
} from "./ui/Decorations";

type Props = {
  onOpen: () => void;
};

/**
 * Pantalla inicial (recreación en código de la imagen 2): portada "Mis 15"
 * con decoración disco/party, un sobre rosa y el sello dorado con la inicial.
 * Al tocar el sello se abre la invitación y arranca la música tras el retardo.
 */
export default function EnvelopeIntro({ onOpen }: Props) {
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<"closed" | "opening" | "leaving">(
    "closed"
  );
  // Si la imagen provista carga, se usa esa; si no, el diseño de respaldo.
  const [imgOk, setImgOk] = useState(true);

  const handleSeal = () => {
    if (stage !== "closed") return;
    setStage("opening");
    onOpen();
    window.setTimeout(() => setStage("leaving"), reduce ? 200 : 1800);
  };

  return (
    <AnimatePresence>
      {stage !== "leaving" && (
        <motion.div
          key="envelope-scene"
          onClick={imgOk ? handleSeal : undefined}
          role={imgOk ? "button" : undefined}
          aria-label={imgOk ? "Tocá el sello para abrir la invitación" : undefined}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden"
          style={{
            cursor: imgOk && stage === "closed" ? "pointer" : "default",
            background:
              "radial-gradient(120% 90% at 50% 12%, #fbf6f7 0%, #f3edef 55%, #ede5e9 100%)",
          }}
          exit={{ opacity: 0, scale: 1.08, filter: "blur(5px)" }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >
          {/* Punto 2: imagen de portada provista (si carga, tapa el diseño de
              respaldo). Toda la pantalla es sensible al toque para abrir. */}
          {imgOk && (
            <motion.div
              className="absolute inset-0 z-20"
              animate={{ scale: stage === "opening" ? 1.05 : 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <picture className="block h-full w-full">
                {/* Notebook / pantallas anchas: portada apaisada (completa) */}
                <source
                  media="(min-width: 768px)"
                  srcSet={invitation.assets.portada}
                />
                {/* Celular: portada vertical (llena la pantalla) */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={invitation.assets.portadaCelular}
                  alt="Mis 15 — Tocá el sello para abrir"
                  onError={() => setImgOk(false)}
                  className="h-full w-full select-none object-cover md:object-contain"
                  draggable={false}
                />
              </picture>
            </motion.div>
          )}

          {!imgOk && (
          <>
          {/* Washes de color en las esquinas */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(40% 30% at 4% 6%, rgba(214,214,224,0.6) 0%, rgba(214,214,224,0) 60%)," +
                "radial-gradient(40% 30% at 96% 8%, rgba(214,214,224,0.6) 0%, rgba(214,214,224,0) 60%)," +
                "radial-gradient(42% 32% at 2% 94%, rgba(244,196,214,0.55) 0%, rgba(244,196,214,0) 60%)," +
                "radial-gradient(42% 32% at 98% 96%, rgba(244,196,214,0.55) 0%, rgba(244,196,214,0) 60%)",
            }}
          />

          {/* --- Decoración de esquinas --- */}
          <DiscoBall size={110} style={{ position: "absolute", left: "-5%", top: "-3%" }} />
          <Bow size={70} style={{ position: "absolute", left: "3%", top: "20%" }} rotate={-12} />
          <GlitterStar size={44} style={{ position: "absolute", left: "8%", top: "34%" }} rotate={-8} />
          <Ribbon size={70} style={{ position: "absolute", left: "-2%", bottom: "18%" }} rotate={10} />
          <HeartDoodle size={26} style={{ position: "absolute", left: "10%", bottom: "10%" }} rotate={-8} />

          <DiscoBall size={120} style={{ position: "absolute", right: "-6%", top: "-4%" }} />
          <GlitterStar size={40} style={{ position: "absolute", right: "9%", top: "30%" }} rotate={12} />
          <HeartDoodle size={24} style={{ position: "absolute", right: "6%", top: "44%" }} rotate={10} />
          <Sparkle4 size={18} color="#c9a34e" style={{ position: "absolute", right: "16%", top: "52%" }} />
          <DiscoBall size={92} style={{ position: "absolute", right: "-4%", bottom: "6%" }} />

          {/* Acentos manuscritos */}
          <p
            className="pointer-events-none absolute font-script text-xl text-ink/70"
            style={{ left: "6%", top: "26%", transform: "rotate(-8deg)" }}
          >
            Una noche
            <br />
            para brillar
          </p>
          <p
            className="pointer-events-none absolute z-20 text-right font-script text-xl text-ink/70"
            style={{ right: "5%", top: "30%", transform: "rotate(6deg)" }}
          >
            Estás
            <br />
            invitado
          </p>

          {/* --- Contenido central --- */}
          <motion.div
            className="relative z-10 flex flex-col items-center px-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Título "Mis 15" */}
            <h1
              className="font-logo leading-none"
              style={{
                fontSize: "clamp(3.4rem, 15vw, 6rem)",
                color: "#e75ba0",
                textShadow: "0 2px 10px rgba(231,91,160,0.25)",
              }}
            >
              Mis 15
            </h1>

            {/* Sobre + sello */}
            <motion.button
              type="button"
              onClick={handleSeal}
              aria-label="Tocá el sello para abrir la invitación"
              className="relative mt-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              style={{
                width: "min(78vw, 340px)",
                height: "min(52vw, 226px)",
                cursor: stage === "closed" ? "pointer" : "default",
              }}
              animate={{ scale: stage === "opening" ? 1.05 : 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              whileTap={stage === "closed" ? { scale: 0.97 } : undefined}
            >
              <PinkEnvelope initial={invitation.initial} />
            </motion.button>

            {/* Indicación */}
            <motion.div
              className="mt-8 flex items-center gap-3"
              animate={{ opacity: stage === "closed" ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="h-px w-6 bg-[#e79bbf]" />
              <p className="font-sans text-[0.68rem] uppercase tracking-widest2 text-[#c76a97]">
                Tocá el sello para abrir
              </p>
              <span className="h-px w-6 bg-[#e79bbf]" />
            </motion.div>
          </motion.div>
          </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Sobre rosa plano con sello de lacre dorado (estilo ilustración). */
function PinkEnvelope({ initial }: { initial: string }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full w-full">
      {/* Cuerpo del sobre */}
      <div
        className="absolute inset-0 rounded-[14px]"
        style={{
          background: "linear-gradient(160deg, #f9c6d8 0%, #f3a9c3 100%)",
          boxShadow:
            "0 24px 44px -18px rgba(200,110,150,0.5), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      />
      {/* Solapa triangular */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 66"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 4 L50 42 L100 4" fill="none" stroke="rgba(214,116,158,0.55)" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
        <path d="M0 4 L50 42 L100 4 L100 2 L0 2 Z" fill="rgba(255,255,255,0.12)" />
        <path d="M0 64 L50 42 M100 64 L50 42" fill="none" stroke="rgba(214,116,158,0.35)" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Sello dorado */}
      <motion.div
        className="absolute left-1/2 top-[46%] flex items-center justify-center rounded-full"
        style={{
          width: "min(20vw, 78px)",
          height: "min(20vw, 78px)",
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle at 36% 30%, #ecca8f 0%, #d4af67 44%, #b89445 74%, #916f2c 100%)",
          boxShadow:
            "0 8px 18px -6px rgba(120,90,20,0.6), inset 0 2px 5px rgba(255,255,255,0.45), inset 0 -4px 8px rgba(80,58,12,0.55)",
        }}
        animate={reduce ? {} : { scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute rounded-full"
          style={{ inset: 6, border: "1px dashed rgba(90,66,16,0.5)" }}
        />
        <span
          className="relative font-serif text-[1.5rem] font-semibold"
          style={{
            color: "#7a5c1c",
            textShadow:
              "0 1px 0 rgba(255,240,205,0.5), 0 -1px 1px rgba(70,50,10,0.5)",
          }}
        >
          {initial}
        </span>
      </motion.div>
    </div>
  );
}
