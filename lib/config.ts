export const invitation = {
  name: "Lola",
  nick: "Lola",
  initial: "L",
  event: "Mis XV",
  // Fecha objetivo de la cuenta regresiva (hora local)
  dateISO: "2026-10-31T21:30:00",
  dateParts: {
    day: "31",
    monthName: "OCTUBRE",
    month: "10",
    year: "2026",
    time: "21:30",
    timeRange: "21:30 a 05:30 HS",
  },
  displayDate: "31 · 10 · 2026",
  // Texto introductorio que aparece en el hero, luego de abrir el sobre
  intro:
    "Con mucha ilusión, me encantaría compartir esta gran noche junto a las personas que más quiero. Tu presencia haría esta noche un recuerdo más lindo para mí.",
  venue: "Marc Eventos",
  address: {
    line1: "Av. Pres. Perón 1160",
    line2: "Villa Sarmiento",
    // Link exacto de Google Maps provisto por el cliente
    mapsUrl:
      "https://www.google.com/maps/place/Eventos+Marc/@-34.6380783,-58.5812971,21z/data=!4m6!3m5!1s0x95bcc78b5a185811:0x90f972dc92c3c7be!8m2!3d-34.6382538!4d-58.5813058!16s%2Fg%2F11b7q1qxsv",
  },
  dressCode: "ELEGANTE",
  // Colores reservados / prohibidos para los invitados
  forbiddenColors: "Gama de rosas, plateado y lilas",
  rsvpDeadline: "1 de octubre",
  // Galería de imágenes. Poner las fotos en /public/images y listarlas acá.
  // Si el array queda vacío, se muestran marcos placeholder elegantes.
  gallery: [
    "/images/recuerdo1.jpg",
    "/images/recuerdo2.jpg",
    "/images/recuerdo3.jpg",
  ] as string[],
  // Alias para regalos
  gift: {
    alias: "navarretelola.mp",
  },
  whatsapp: {
    // 11 2630 3381 -> formato internacional para wa.me
    phone: "5491126303381",
    message: "Hola! Confirmo mi asistencia a los XV de Lola 💕",
  },
  // Audio placeholder — reemplazar por la canción real.
  audioSrc: "/audio/song.mp3",
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
  return invitation.address.mapsUrl;
}

export function whatsappUrl() {
  return `https://wa.me/${invitation.whatsapp.phone}?text=${encodeURIComponent(
    invitation.whatsapp.message
  )}`;
}
