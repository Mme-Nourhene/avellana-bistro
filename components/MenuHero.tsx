"use client";
import { motion } from "framer-motion";

export default function MenuHero() {
  return (
    <section
      className="relative h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: "url(/menu-hero.jpg)" }} // 🔥 Image 1600x900 compressée
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-[#FFF5E1] mb-4"
        >
          notre menu
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl text-[#A3B18A] max-w-2xl"
        >
          Découvrez une sélection raffinée de cafés, thés, brunchs et douceurs
          préparés avec passion chez avellana bistro.
        </motion.p>
      </div>
    </section>
  );
}
