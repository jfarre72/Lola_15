"use client";

import Reveal from "./ui/Reveal";
import LolaLogo from "./ui/LolaLogo";
import { invitation } from "@/lib/config";

export default function TextSection() {
  return (
    <section className="relative flex min-h-[80svh] flex-col items-center justify-center px-8 py-24">
      <Reveal>
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gold/50" />
          <span className="text-[0.7rem] text-gold">✦</span>
          <span className="h-px w-8 bg-gold/50" />
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mx-auto max-w-lg text-center font-cormorant text-2xl italic leading-relaxed text-ink/75 sm:text-3xl">
          {invitation.intro}
        </p>
      </Reveal>

      <Reveal delay={0.35}>
        <div className="mt-10 text-center">
          <LolaLogo size="clamp(2.5rem, 12vw, 4rem)" />
        </div>
      </Reveal>
    </section>
  );
}
