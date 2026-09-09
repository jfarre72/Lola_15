# Diseño recreado en código (sin archivos)

El logo "Lola", la portada "Mis 15" con el sobre y el fondo decorativo de la
carta están recreados en código (CSS/SVG), no dependen de archivos de imagen:

- Logo: `components/ui/LolaLogo.tsx` (tipografía Pacifico).
- Portada: `components/EnvelopeIntro.tsx`.
- Fondo de la carta y decoraciones: `components/ui/CardBackground.tsx` y
  `components/ui/Decorations.tsx`.

---

# Fotos de la galería (RECUERDOS)

Las fotos de la sección "Recuerdos" se listan en `lib/config.ts` → `gallery`.
Actualmente apuntan a `lola 4.jpeg`, `lola 5.jpeg` y `lola 6.jpeg`
(los espacios se escriben como `%20` en la ruta).

Subí acá las fotos de Lola (por ejemplo `foto1.jpg`, `foto2.jpg`, `foto3.jpg`).

Luego, en `lib/config.ts`, listalas en `gallery`:

```ts
gallery: ["/images/foto1.jpg", "/images/foto2.jpg", "/images/foto3.jpg"],
```

Si `gallery` queda vacío, la sección muestra marcos placeholder ("Tu foto aquí").

Recomendaciones:
- Formato `.jpg` o `.webp` (más liviano para WhatsApp/celular).
- Podés subir la cantidad que quieras: la galería se adapta.
