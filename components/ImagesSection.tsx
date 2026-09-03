"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./ui/Reveal";
import { invitation } from "@/lib/config";

export default function ImagesSection() {
  const reduce = useReducedMotion();
  const photos = invitation.gallery ?? [];
  // Si no hay fotos cargadas, mostramos 3 marcos placeholder elegantes.
  const slots = photos.length > 0 ? photos : [null, null, null];

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-24">
      <Reveal>
        <p className="text-center font-sans text-xs uppercase tracking-widest2 text-golddark">
          Momentos
        </p>
      </Reveal>

      <div className="mt-12 flex w-full max-w-md flex-col gap-6">
        {slots.map((src, i) => (
          <Reveal key={i} delay={0.12 * i} y={36}>
            <motion.div
              className="relative mx-auto w-full overflow-hidden rounded-[4px]"
              style={{
                aspectRatio: i === 0 ? "4 / 5" : "3 / 2",
                border: "1px solid rgba(184,148,69,0.4)",
                boxShadow: "0 18px 40px -22px rgba(90,70,40,0.45)",
              }}
              whileHover={reduce ? {} : { scale: 1.015 }}
              transition={{ duration: 0.6 }}
            >
              {/* Marco dorado interior */}
              <div
                className="pointer-events-none absolute z-10 rounded-[2px]"
                style={{ inset: 8, border: "1px solid rgba(184,148,69,0.5)" }}
              />
              {src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #efe6ea 0%, #e4dfe6 50%, #dcdde2 100%)",
                  }}
                >
                  <div className="flex flex-col items-center gap-3 opacity-60">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
                      <rect x="4" y="9" width="32" height="24" rx="2" stroke="#B89445" strokeWidth="1.2" />
                      <circle cx="20" cy="21" r="6" stroke="#B89445" strokeWidth="1.2" />
                      <path d="M14 9l2-3h8l2 3" stroke="#B89445" strokeWidth="1.2" />
                    </svg>
                    <span className="font-sans text-[0.6rem] uppercase tracking-widest2 text-golddark">
                      Tu foto aquí
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
