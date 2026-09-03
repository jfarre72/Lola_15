"use client";

import Reveal from "./ui/Reveal";
import { invitation } from "@/lib/config";

export default function DateSection() {
  const { day, monthName, year, timeRange } = invitation.dateParts;
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-24">
      <Reveal>
        <p className="text-center font-sans text-xs uppercase tracking-widest2 text-golddark">
          Guardá la fecha
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="my-10 flex items-center justify-center gap-6 sm:gap-10">
          <div className="hairline w-12 sm:w-20" />
          <span className="font-script text-6xl text-golddark sm:text-7xl">
            {monthName.charAt(0) + monthName.slice(1).toLowerCase()}
          </span>
          <div className="hairline w-12 sm:w-20" />
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="text-gold-gradient text-center font-serif leading-none">
          <span className="text-[7rem] font-medium sm:text-[9rem]">{day}</span>
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <p className="mt-2 text-center font-cormorant text-2xl tracking-[0.4em] text-ink/70">
          {year}
        </p>
      </Reveal>

      <Reveal delay={0.55}>
        <p className="mt-8 text-center font-sans text-base tracking-[0.3em] text-ink sm:text-lg">
          {timeRange}
        </p>
      </Reveal>

      <Reveal delay={0.7}>
        <p className="mt-10 text-center font-cormorant text-2xl italic text-golddark">
          Una noche para recordar
        </p>
      </Reveal>
    </section>
  );
}
