"use client";

import Reveal from "./ui/Reveal";
import Sparkles from "./ui/Sparkles";
import { invitation } from "@/lib/config";

export default function ClosingSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 100%, #ffffff 0%, #f7f3ee 55%, #ece4d5 100%)",
        }}
      />
      <Sparkles count={20} />

      <Reveal>
        <p className="text-gold-gradient text-center font-script text-7xl sm:text-8xl">
          {invitation.nick}
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-6 text-center font-sans text-sm uppercase tracking-widest2 text-golddark">
          {invitation.event}
        </p>
      </Reveal>

      <Reveal delay={0.35}>
        <div className="mx-auto my-8 h-px w-16 bg-gold/50" />
      </Reveal>

      <Reveal delay={0.5}>
        <p className="text-center font-cormorant text-2xl tracking-[0.3em] text-ink/70">
          {invitation.displayDate}
        </p>
      </Reveal>

      <Reveal delay={0.7}>
        <p className="mt-10 text-center font-cormorant text-3xl italic text-golddark">
          Te espero
        </p>
      </Reveal>
    </section>
  );
}
