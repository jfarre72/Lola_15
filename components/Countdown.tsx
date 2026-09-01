"use client";

import { useEffect, useState } from "react";
import Reveal from "./ui/Reveal";
import { invitation } from "@/lib/config";

function diff(target: number) {
  const now = Date.now();
  let d = Math.max(0, target - now);
  const days = Math.floor(d / 86400000);
  d -= days * 86400000;
  const hours = Math.floor(d / 3600000);
  d -= hours * 3600000;
  const mins = Math.floor(d / 60000);
  d -= mins * 60000;
  const secs = Math.floor(d / 1000);
  return { days, hours, mins, secs };
}

export default function Countdown() {
  const target = new Date(invitation.dateISO).getTime();
  const [t, setT] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { value: t.days, label: "Días" },
    { value: t.hours, label: "Horas" },
    { value: t.mins, label: "Min" },
    { value: t.secs, label: "Seg" },
  ];

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-24">
      <Reveal>
        <p className="text-center font-sans text-xs uppercase tracking-widest2 text-golddark">
          Faltan
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-12 flex items-start justify-center gap-3 sm:gap-6">
          {units.map((u, i) => (
            <div key={u.label} className="flex items-start gap-3 sm:gap-6">
              <div className="flex flex-col items-center">
                <span className="text-gold-gradient font-serif text-4xl font-medium tabular-nums sm:text-6xl">
                  {mounted ? String(u.value).padStart(2, "0") : "--"}
                </span>
                <span className="mt-3 font-sans text-[0.6rem] uppercase tracking-widest2 text-ink/60 sm:text-xs">
                  {u.label}
                </span>
              </div>
              {i < units.length - 1 && (
                <span className="font-serif text-3xl text-gold/50 sm:text-5xl">
                  :
                </span>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="mx-auto mt-14 h-px w-24 bg-gold/40" />
      </Reveal>
    </section>
  );
}
