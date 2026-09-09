"use client";

import { useState } from "react";
import { invitation } from "@/lib/config";
import {
  DiscoBall,
  GlitterStar,
  HeartDoodle,
  Sparkle4,
  Bow,
  Ribbon,
  Splatter,
} from "./Decorations";

/**
 * Fondo de la carta con la información (recreación en código de la imagen 3):
 * base clara con washes rosados y un marco de decoraciones a los costados
 * (bochas de disco, cintas, moños, estrellas plateadas, corazones y
 * destellos), dejando el centro despejado para el texto.
 *
 * Se renderiza como capa fija detrás del contenido.
 */
export default function CardBackground() {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
      style={{
        background:
          "radial-gradient(120% 80% at 50% 0%, #fbf6f7 0%, #f4eef0 55%, #efe7eb 100%)",
      }}
    >
      {/* Punto 3: imagen de fondo provista. Si carga, tapa el diseño de
          respaldo hecho en código. */}
      {imgOk && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={invitation.assets.cardBg}
          alt=""
          onError={() => setImgOk(false)}
          className="absolute inset-0 z-10 h-full w-full object-cover"
        />
      )}
      {/* Washes rosados / plateados a los costados */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(38% 30% at 2% 8%, rgba(244,196,214,0.5) 0%, rgba(244,196,214,0) 60%)," +
            "radial-gradient(34% 26% at 98% 24%, rgba(214,214,224,0.5) 0%, rgba(214,214,224,0) 60%)," +
            "radial-gradient(36% 30% at 0% 62%, rgba(244,196,214,0.45) 0%, rgba(244,196,214,0) 60%)," +
            "radial-gradient(34% 28% at 100% 82%, rgba(244,196,214,0.4) 0%, rgba(244,196,214,0) 60%)",
        }}
      />

      {/* ---- Columna izquierda ---- */}
      <Bow size={92} style={{ position: "absolute", left: "-1%", top: "1%" }} rotate={-12} />
      <Ribbon size={90} style={{ position: "absolute", left: "-2%", top: "10%" }} rotate={8} />
      <Sparkle4 size={22} color="#e07ba6" style={{ position: "absolute", left: "16%", top: "9%" }} />
      <GlitterStar size={54} style={{ position: "absolute", left: "3%", top: "26%" }} rotate={-10} />
      <HeartDoodle size={30} style={{ position: "absolute", left: "6%", top: "40%" }} rotate={-8} />
      <Sparkle4 size={14} color="#c9a34e" style={{ position: "absolute", left: "12%", top: "46%" }} />
      <DiscoBall size={120} style={{ position: "absolute", left: "-6%", top: "52%" }} />
      <GlitterStar size={42} style={{ position: "absolute", left: "10%", top: "66%" }} rotate={14} />
      <Ribbon size={80} style={{ position: "absolute", left: "-3%", top: "70%" }} rotate={-6} />
      <HeartDoodle size={26} style={{ position: "absolute", left: "5%", top: "84%" }} rotate={10} />
      <Splatter size={130} color="#e58bb0" style={{ position: "absolute", left: "-4%", top: "30%" }} />

      {/* ---- Columna derecha ---- */}
      <DiscoBall size={110} style={{ position: "absolute", right: "-6%", top: "6%" }} />
      <Sparkle4 size={20} color="#e07ba6" style={{ position: "absolute", right: "16%", top: "16%" }} />
      <Ribbon size={92} style={{ position: "absolute", right: "-3%", top: "22%" }} rotate={-10} />
      <HeartDoodle size={30} style={{ position: "absolute", right: "8%", top: "34%" }} rotate={12} />
      <GlitterStar size={40} style={{ position: "absolute", right: "5%", top: "44%" }} rotate={-12} />
      <Sparkle4 size={14} color="#c9a34e" style={{ position: "absolute", right: "14%", top: "52%" }} />
      <DiscoBall size={128} style={{ position: "absolute", right: "-8%", top: "74%" }} />
      <HeartDoodle size={24} style={{ position: "absolute", right: "12%", top: "64%" }} rotate={-8} />
      <GlitterStar size={50} style={{ position: "absolute", right: "2%", top: "88%" }} rotate={10} />
      <Splatter size={130} color="#e58bb0" style={{ position: "absolute", right: "-4%", top: "50%" }} />
    </div>
  );
}
