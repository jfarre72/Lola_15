"use client";

import { invitation } from "@/lib/config";

type Props = {
  /** Tamaño de la tipografía (ej: "clamp(3rem,14vw,6rem)"). */
  size?: string | number;
  /** Color del texto. Por defecto negro tinta (como la imagen 1). */
  color?: string;
  className?: string;
};

/**
 * Logo "Lola" (recreación en código de la imagen 1): tipografía manuscrita
 * redondeada (Pacifico) en negro. No depende de ningún archivo de imagen.
 */
export default function LolaLogo({
  size = "clamp(3rem, 14vw, 6rem)",
  color = "#1a1a1a",
  className = "",
}: Props) {
  return (
    <span
      className={`font-logo inline-block select-none overflow-visible ${className}`}
      style={{
        fontSize: size,
        color,
        // Aire para que la cursiva (la cola de la "L") no se recorte.
        lineHeight: 1.3,
        paddingLeft: "0.18em",
        paddingRight: "0.12em",
        paddingBottom: "0.1em",
      }}
      aria-label={invitation.name}
    >
      {invitation.name}
    </span>
  );
}
