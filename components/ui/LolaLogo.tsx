"use client";

import { invitation } from "@/lib/config";

type Props = {
  /** Alto del logo (ej: "3.5rem", 64). Ancho automático manteniendo proporción. */
  height?: string | number;
  className?: string;
};

/**
 * Logo "Lola" (imagen 1). Reemplaza el texto por la imagen del nombre.
 * Colocá el archivo en public/images/lola-logo.png (ver invitation.assets.logo).
 */
export default function LolaLogo({ height = "3.5rem", className = "" }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={invitation.assets.logo}
      alt={invitation.name}
      className={`inline-block w-auto select-none ${className}`}
      style={{ height }}
      draggable={false}
    />
  );
}
