"use client";

import { useId } from "react";

/**
 * Set de decoraciones vectoriales (recreación en código del estilo "disco /
 * party girl" de las imágenes provistas): bochas de disco, estrellas
 * plateadas con glitter, corazones y estrellas dibujados a mano en rosa,
 * moños, cintas y destellos dorados. No dependen de archivos de imagen.
 */

type SvgProps = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  rotate?: number;
};

const wrap = (rotate?: number, style?: React.CSSProperties): React.CSSProperties => ({
  transform: rotate ? `rotate(${rotate}deg)` : undefined,
  ...style,
});

/** Bocha de disco espejada (plateada con reflejos rosados). */
export function DiscoBall({ size = 90, className = "", style, rotate }: SvgProps) {
  const rid = useId();
  const id = rid.replace(/:/g, "");
  const tiles: JSX.Element[] = [];
  const R = 48;
  // Grilla de facetas dentro del círculo
  for (let y = -R; y < R; y += 8) {
    for (let x = -R; x < R; x += 8) {
      const cx = x + 4;
      const cy = y + 4;
      if (cx * cx + cy * cy > (R - 2) * (R - 2)) continue;
      // Brillo pseudo-aleatorio determinístico
      const shade = (Math.sin(cx * 0.7) + Math.cos(cy * 0.9) + 2) / 4; // 0..1
      const pink = ((cx + cy) % 24 === 0);
      const fill = pink
        ? `rgba(233,150,180,${0.5 + shade * 0.4})`
        : `rgba(${180 + shade * 60},${180 + shade * 60},${190 + shade * 55},${0.55 + shade * 0.4})`;
      tiles.push(
        <rect
          key={`${x}-${y}`}
          x={cx + 50 - 3.6}
          y={cy + 50 - 3.6}
          width={7.2}
          height={7.2}
          rx={1}
          fill={fill}
        />
      );
    }
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={wrap(rotate, style)}
      aria-hidden
    >
      <defs>
        <radialGradient id={`db-${id}`} cx="38%" cy="32%" r="72%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#cfcfd8" />
          <stop offset="100%" stopColor="#8f8f9c" />
        </radialGradient>
        <clipPath id={`clip-${id}`}>
          <circle cx="50" cy="50" r={R} />
        </clipPath>
      </defs>
      {/* Cuelgue */}
      <line x1="50" y1="0" x2="50" y2="6" stroke="rgba(150,150,160,0.6)" strokeWidth="1.4" />
      <circle cx="50" cy="50" r={R} fill={`url(#db-${id})`} />
      <g clipPath={`url(#clip-${id})`}>
        {tiles}
        {/* Reflejo especular */}
        <ellipse cx="36" cy="34" rx="14" ry="10" fill="rgba(255,255,255,0.55)" />
      </g>
      <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(120,120,132,0.4)" strokeWidth="0.8" />
    </svg>
  );
}

/** Estrella plateada con textura de glitter. */
export function GlitterStar({ size = 46, className = "", style, rotate }: SvgProps) {
  const rid = useId();
  const id = rid.replace(/:/g, "");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={wrap(rotate, style)}
      aria-hidden
    >
      <defs>
        <linearGradient id={`gs-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3f3f6" />
          <stop offset="50%" stopColor="#c9c9d3" />
          <stop offset="100%" stopColor="#a9a9b6" />
        </linearGradient>
      </defs>
      <path
        d="M50 6 L61 38 L95 39 L67 59 L78 92 L50 72 L22 92 L33 59 L5 39 L39 38 Z"
        fill={`url(#gs-${id})`}
        stroke="rgba(160,160,172,0.7)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Puntitos de glitter */}
      {[[42, 34], [58, 46], [50, 60], [64, 66], [38, 58]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="rgba(255,255,255,0.85)" />
      ))}
    </svg>
  );
}

/** Corazón dibujado a mano (contorno rosa). */
export function HeartDoodle({ size = 34, className = "", style, rotate }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={wrap(rotate, style)}
      aria-hidden
    >
      <path
        d="M50 86 C18 62 12 40 24 28 C34 18 47 24 50 36 C53 24 66 18 76 28 C88 40 82 62 50 86 Z"
        fill="none"
        stroke="#e86ea0"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Estrella/destello de 4 puntas (dorado o rosa). */
export function Sparkle4({ size = 20, className = "", style, rotate, color = "#c9a34e" }: SvgProps & { color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={wrap(rotate, style)}
      aria-hidden
    >
      <path
        d="M50 4 C54 34 66 46 96 50 C66 54 54 66 50 96 C46 66 34 54 4 50 C34 46 46 34 50 4 Z"
        fill={color}
      />
    </svg>
  );
}

/** Moño rosa. */
export function Bow({ size = 70, className = "", style, rotate }: SvgProps) {
  const rid = useId();
  const id = rid.replace(/:/g, "");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={wrap(rotate, style)}
      aria-hidden
    >
      <defs>
        <linearGradient id={`bw-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7b6cf" />
          <stop offset="100%" stopColor="#e884ac" />
        </linearGradient>
      </defs>
      {/* Cintas colgantes */}
      <path d="M48 52 C40 66 34 80 30 94" fill="none" stroke="#ef9cc0" strokeWidth="7" strokeLinecap="round" />
      <path d="M52 52 C60 66 66 80 70 94" fill="none" stroke="#ef9cc0" strokeWidth="7" strokeLinecap="round" />
      {/* Lazos */}
      <path d="M50 50 C30 30 8 34 14 50 C8 66 30 70 50 50 Z" fill={`url(#bw-${id})`} stroke="#d9749e" strokeWidth="1.5" />
      <path d="M50 50 C70 30 92 34 86 50 C92 66 70 70 50 50 Z" fill={`url(#bw-${id})`} stroke="#d9749e" strokeWidth="1.5" />
      {/* Nudo */}
      <circle cx="50" cy="50" r="8" fill="#e884ac" stroke="#d9749e" strokeWidth="1.5" />
    </svg>
  );
}

/** Cinta / streamer rosa ondulado. */
export function Ribbon({ size = 120, className = "", style, rotate }: SvgProps) {
  const rid = useId();
  const id = rid.replace(/:/g, "");
  return (
    <svg
      width={size}
      height={size * 1.6}
      viewBox="0 0 100 160"
      className={className}
      style={wrap(rotate, style)}
      aria-hidden
    >
      <defs>
        <linearGradient id={`rb-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6b0cb" />
          <stop offset="100%" stopColor="#e07ba6" />
        </linearGradient>
      </defs>
      <path
        d="M40 4 C70 26 20 50 46 74 C74 100 22 122 50 150"
        fill="none"
        stroke={`url(#rb-${id})`}
        strokeWidth="9"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Salpicadura de glitter (puntitos dispersos). */
export function Splatter({ size = 120, className = "", style, rotate, color = "#e58bb0" }: SvgProps & { color?: string }) {
  const dots = Array.from({ length: 26 }, (_, i) => {
    const a = i * 137.5 * (Math.PI / 180);
    const r = 8 + (i % 7) * 6;
    return { x: 50 + Math.cos(a) * r, y: 50 + Math.sin(a) * r, s: 0.7 + (i % 3) * 0.7 };
  });
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={wrap(rotate, style)}
      aria-hidden
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.s} fill={color} opacity={0.7} />
      ))}
    </svg>
  );
}
