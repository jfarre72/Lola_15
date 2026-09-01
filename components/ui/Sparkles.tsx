"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

type SparklesProps = {
  count?: number;
  className?: string;
};

/**
 * Partículas / destellos dorados extremadamente sutiles.
 * Posiciones deterministas para evitar mismatch de hidratación.
 */
export default function Sparkles({ count = 18, className = "" }: SparklesProps) {
  const reduce = useReducedMotion();

  const dots = useMemo(() => {
    // Generador pseudo-aleatorio determinista
    let seed = 7;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    return Array.from({ length: count }).map(() => ({
      left: rand() * 100,
      top: rand() * 100,
      size: 1 + rand() * 2.5,
      delay: rand() * 6,
      duration: 4 + rand() * 5,
      opacity: 0.15 + rand() * 0.35,
    }));
  }, [count]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background:
              "radial-gradient(circle, rgba(212,175,103,0.9) 0%, rgba(212,175,103,0) 70%)",
            boxShadow: "0 0 6px rgba(212,175,103,0.5)",
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={
            reduce
              ? { opacity: d.opacity }
              : {
                  opacity: [0, d.opacity, 0],
                  scale: [0.6, 1, 0.6],
                  y: [0, -8, 0],
                }
          }
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
