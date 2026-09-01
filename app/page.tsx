"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import EnvelopeIntro from "@/components/EnvelopeIntro";
import InvitationHero from "@/components/InvitationHero";
import DateSection from "@/components/DateSection";
import Countdown from "@/components/Countdown";
import LocationSection from "@/components/LocationSection";
import DressCodeSection from "@/components/DressCodeSection";
import RSVPSection from "@/components/RSVPSection";
import ClosingSection from "@/components/ClosingSection";
import MusicPlayer, { MusicPlayerHandle } from "@/components/MusicPlayer";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const player = useRef<MusicPlayerHandle>(null);

  const handleOpen = () => {
    // Gesto del usuario: habilita e inicia el audio
    player.current?.play();
    setOpened(true);
  };

  return (
    <main className="relative">
      <EnvelopeIntro onOpen={handleOpen} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        style={{ pointerEvents: opened ? "auto" : "none" }}
      >
        <InvitationHero />
        <DateSection />
        <Countdown />
        <LocationSection />
        <DressCodeSection />
        <RSVPSection />
        <ClosingSection />
      </motion.div>

      <MusicPlayer ref={player} visible={opened} />
    </main>
  );
}
