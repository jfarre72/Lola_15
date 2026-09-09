# Archivos de imagen requeridos por el diseño

Colocá estos 3 archivos con estos nombres exactos para que la invitación
muestre las imágenes provistas por el cliente:

| Archivo | Qué es | Dónde se usa |
| --- | --- | --- |
| `lola-logo.png` | Logo "Lola" (imagen 1) | Reemplaza el texto "Lola" en toda la invitación |
| `hero-invite.png` | Portada "Mis 15" con el sobre (imagen 2) | Pantalla inicial; se toca para abrir |
| `card-bg.png` | Fondo rosa vertical (imagen 3) | Fondo de la carta con toda la información |

- `lola-logo.png`: idealmente PNG con fondo transparente.
- `hero-invite.png`: preferible en orientación vertical (celular).
- Las rutas se configuran en `lib/config.ts` → `invitation.assets`.

---

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
