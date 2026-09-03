# Fotos de la galería

Subí acá las fotos de Lola (por ejemplo `foto1.jpg`, `foto2.jpg`, `foto3.jpg`).

Luego, en `lib/config.ts`, listalas en `gallery`:

```ts
gallery: ["/images/foto1.jpg", "/images/foto2.jpg", "/images/foto3.jpg"],
```

Si `gallery` queda vacío, la sección muestra marcos placeholder ("Tu foto aquí").

Recomendaciones:
- Formato `.jpg` o `.webp` (más liviano para WhatsApp/celular).
- Podés subir la cantidad que quieras: la galería se adapta.
