'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/hero-coffee.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-serif font-bold text-[#FFF8E7] mb-4 lowercase tracking-wide"
        >
          avellana bistro
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl text-[#D9CBB8] mb-8"
        >
          {`Vivez un moment unique chez nous`}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            href="/menu"
            className="bg-[#A3B18A] hover:bg-[#859E76] text-[#3B1F1F] font-semibold px-8 py-4 rounded-full shadow-lg transition"
          >
            Voir le menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
