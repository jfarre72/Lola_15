# Invitación XV · Catalina

Invitación web interactiva y **mobile-first** para una fiesta de 15 años.
Una experiencia visual que se descubre mediante animaciones — no una landing estática.

## Tecnología

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (paleta y tipografías personalizadas)
- **Framer Motion** (animaciones + reveals por scroll)

## Experiencia

1. **EnvelopeIntro** — Sobre marfil realista con sello de lacre dorado (inicial "C"). El **sello** es el elemento clickeable; al tocarlo se levanta la solapa, sale la tarjeta y se entra cinematográficamente a la invitación. Ese gesto habilita el audio (autoplay móvil).
2. **InvitationHero** — Fullscreen con entrada escalonada del nombre y la fecha + indicación "Deslizá para descubrir".
3. **DateSection** — "Guardá la fecha" con animaciones activadas por scroll.
4. **Countdown** — Cuenta regresiva real hasta 14/11/2026 21:00, actualizada cada segundo.
5. **LocationSection** — Lugar + botón "Cómo llegar" (Google Maps).
6. **DressCodeSection** — Dress code con ilustración lineal.
7. **RSVPSection** — Confirmación vía WhatsApp con mensaje prearmado.
8. **ClosingSection** — Cierre con destellos sutiles.
9. **MusicPlayer** — Icono flotante para silenciar/reactivar; la música arranca con el gesto del sello y continúa durante toda la navegación.

## Datos

Todos los datos son **ficticios** y viven en [`lib/config.ts`](lib/config.ts).
Editar ese archivo para cambiar nombre, fecha, lugar, teléfono de WhatsApp, etc.

> **Música:** `public/audio/song.wav` es un tono placeholder generado. Reemplazarlo por la canción real y actualizar `audioSrc` en `lib/config.ts`.
>
> **WhatsApp:** el número en `lib/config.ts` es ficticio (`5491100000000`). Reemplazar por el real.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Notas de diseño

- Paleta: `#F7F3EE`, `#FFFFFF`, `#D4AF67`, `#B89445`, `#252525`.
- Tipografías: Playfair Display / Cormorant Garamond (títulos), Montserrat (texto), Great Vibes (script).
- Sin navbar, menú ni footer. Mucho espacio en blanco, detalles dorados, bordes finos.
- Respeta `prefers-reduced-motion`.
