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
      {/* Halo suave para dar profundidad sobre el fondo global */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(75% 55% at 50% 42%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 70%)",
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
          className="text-gold-gradient font-serif text-7xl font-medium leading-none sm:text-8xl"
        >
          {invitation.name}
        </motion.h1>

        <motion.div variants={item} className="mx-auto mt-8 h-px w-14 bg-gold/60" />
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
