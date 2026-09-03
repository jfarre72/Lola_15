"use client";

import Reveal from "./ui/Reveal";
import { invitation } from "@/lib/config";

// Muestras de color reservadas para los invitados
const swatches = [
  { name: "Rosa", color: "#E6C3CE" },
  { name: "Plateado", color: "#C9CBD0" },
  { name: "Lila", color: "#CDBEDD" },
];

export default function ForbiddenColorsSection() {
  return (
    <section className="relative flex min-h-[90svh] flex-col items-center justify-center px-6 py-24">
      <Reveal>
        <p className="text-center font-sans text-xs uppercase tracking-widest2 text-golddark">
          Colores reservados
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-6 max-w-sm text-center font-cormorant text-2xl italic leading-relaxed text-ink/70">
          Con cariño, les pedimos evitar estos tonos
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-12 flex items-end justify-center gap-8">
          {swatches.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-3">
              <span
                className="block h-16 w-16 rounded-full sm:h-20 sm:w-20"
                style={{
                  background: s.color,
                  boxShadow:
                    "inset 0 2px 6px rgba(255,255,255,0.6), 0 10px 22px -12px rgba(90,70,40,0.4)",
                  border: "1px solid rgba(255,255,255,0.7)",
                }}
              />
              <span className="font-sans text-[0.62rem] uppercase tracking-widest2 text-ink/60">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.5}>
        <p className="mt-12 text-center font-cormorant text-lg text-ink/60">
          {invitation.forbiddenColors}
        </p>
      </Reveal>
    </section>
  );
}
