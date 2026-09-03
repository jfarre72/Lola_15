"use client";

import { motion, useReducedMotion } from "framer-motion";
import Sparkles from "./ui/Sparkles";
import { invitation } from "@/lib/config";

export default function InvitationHero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.35, delayChildren: 0.3 },
    },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6">
      {/* Fondo con gradiente y textura suave */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 100% at 50% 0%, #ffffff 0%, #f7f3ee 55%, #efe6d7 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        }}
      />
      <Sparkles count={14} />

      <motion.div
        className="relative z-10 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="font-sans text-xs uppercase tracking-widest2 text-golddark sm:text-sm"
        >
          {invitation.event}
        </motion.p>

        <motion.div variants={item} className="mx-auto my-6 h-px w-14 bg-gold/60" />

        <motion.h1
          variants={item}
          className="text-gold-gradient font-serif text-6xl font-medium leading-none sm:text-8xl"
        >
          {invitation.name}
        </motion.h1>

        <motion.div variants={item} className="mx-auto my-8 h-px w-14 bg-gold/60" />

        <motion.p
          variants={item}
          className="mx-auto max-w-md font-cormorant text-xl italic leading-relaxed text-ink/70 sm:text-2xl"
        >
          {invitation.intro}
        </motion.p>
      </motion.div>

      {/* Indicación de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1.2 }}
      >
        <span className="font-sans text-[0.62rem] uppercase tracking-widest2 text-golddark">
          Deslizá para descubrir
        </span>
        <motion.svg
          width="18"
          height="26"
          viewBox="0 0 18 26"
          fill="none"
          animate={reduce ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M9 1v22M2 16l7 7 7-7"
            stroke="#B89445"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
