'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import InspirationalQuotes from '@/components/InspirationalQuotes';

export default function AboutPage() {
  return (
    <main className="mt-20">
      {/* Hero A propos */}
      <section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/about-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFF8E7] mb-4 tracking-wide drop-shadow-lg">
            à propos de <span className="text-[#A3B18A]">avellana bistro</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#FFF5E1] font-medium drop-shadow-md">
            Découvrez notre histoire, notre passion et l’art du café
          </p>
        </motion.div>
      </section>

      {/* Citations Inspirantes */}
      <InspirationalQuotes />

      {/* Notre histoire */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            className="text-4xl font-bold text-[#4B2E2E] mb-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Notre histoire
          </motion.h2>
          <motion.p
            className="text-lg text-[#4B2E2E] leading-relaxed"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Avellana Bistro est né de la passion pour le café de qualité et le bien-être de nos clients. Depuis notre ouverture, nous combinons savoir-faire, créativité et ambiance chaleureuse pour offrir une expérience inoubliable.
          </motion.p>
        </div>

        <div className="relative w-full h-80 md:h-96">
          <Image
            src="/about-story.jpg"
            alt="Notre histoire"
            fill
            className="object-cover rounded-3xl shadow-xl"
            priority
          />
        </div>
      </section>

      {/* Notre équipe */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.h2
          className="text-4xl font-bold text-[#4B2E2E] mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Notre équipe
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {['Sofia', 'Ali', 'Meryem'].map((name, index) => (
            <motion.div
              key={name}
              className="bg-[#FFF5E1] rounded-3xl shadow-xl p-6 flex flex-col items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className="w-32 h-32 relative mb-4">
                <Image
                  src={`/team.jpg`}
                  alt={name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-[#4B2E2E]">{name}</h3>
              <p className="text-[#7A8450] mt-2">Barista & passion café</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
