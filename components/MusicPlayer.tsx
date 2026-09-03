"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { invitation } from "@/lib/config";

export type MusicPlayerHandle = {
  play: () => void;
};

type Props = {
  visible: boolean;
};

/**
 * Reproductor flotante. La reproducción se dispara desde el gesto del usuario
 * (tocar el sello) para respetar las restricciones de autoplay móvil.
 */
const MusicPlayer = forwardRef<MusicPlayerHandle, Props>(function MusicPlayer(
  { visible },
  ref
) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    play() {
      const a = audioRef.current;
      if (!a) return;
      a.volume = 0.6;
      a.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    },
  }));

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        {/* Preferencia por mp3 (más liviano); wav como respaldo.
            Subí tu canción a /public/audio como song.mp3 y toma ese. */}
        <source src="/audio/song.mp3" type="audio/mpeg" />
        <source src={invitation.audioSrc} type="audio/wav" />
      </audio>
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Silenciar música" : "Reproducir música"}
            className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full backdrop-blur"
            style={{
              background: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(184,148,69,0.5)",
              boxShadow: "0 8px 20px -8px rgba(120,90,20,0.4)",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileTap={{ scale: 0.9 }}
          >
            <MusicIcon playing={playing} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
});

function MusicIcon({ playing }: { playing: boolean }) {
  return (
    <div className="relative flex items-end gap-[3px]" style={{ height: 18 }}>
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-golddark"
          animate={
            playing
              ? { height: [6, 16, 8, 18, 6] }
              : { height: 6 }
          }
          transition={{
            duration: 1,
            repeat: playing ? Infinity : 0,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
      {!playing && (
        <span
          className="absolute left-1/2 top-1/2 h-[1px] w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-golddark"
          aria-hidden
        />
      )}
    </div>
  );
}

export default MusicPlayer;
