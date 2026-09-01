export const invitation = {
  name: "Catalina",
  nick: "Cata",
  initial: "C",
  event: "Mis XV",
  // Fecha objetivo de la cuenta regresiva (hora local)
  dateISO: "2026-11-14T21:00:00",
  dateParts: {
    day: "14",
    monthName: "NOVIEMBRE",
    month: "11",
    year: "2026",
    time: "21:00",
  },
  displayDate: "14 · 11 · 2026",
  venue: "Palacio Sans Souci",
  address: {
    line1: "Paz 705",
    line2: "Victoria, Buenos Aires",
    mapsQuery: "Palacio Sans Souci, Paz 705, Victoria, Buenos Aires",
  },
  dressCode: "ELEGANTE",
  whatsapp: {
    // Número de ejemplo (ficticio). Reemplazar por el real.
    phone: "5491100000000",
    message: "Hola! Confirmo mi asistencia a los XV de Catalina 💕",
  },
  // Audio placeholder — reemplazar por la canción real.
  audioSrc: "/audio/song.wav",
  cardMessage: [
    "Me haría mucha ilusión que me acompañes",
    "a celebrar mis XV años.",
    "",
    "Es un momento muy especial para mí",
    "y me encantaría compartirlo",
    "con las personas que más quiero.",
    "",
    "Tu presencia hará que esta noche",
    "sea aún más inolvidable.",
  ],
};

export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    invitation.address.mapsQuery
  )}`;
}

export function whatsappUrl() {
  return `https://wa.me/${invitation.whatsapp.phone}?text=${encodeURIComponent(
    invitation.whatsapp.message
  )}`;
}
