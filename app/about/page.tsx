'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center mt-20">

      {/* Hero A propos */}
      <section
        className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/about-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFF8E7] mb-4 tracking-wide drop-shadow-lg">
            à propos de <span className="text-[#A3B18A]">avellana bistro</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#FFF5E1] font-medium drop-shadow-md">
            Découvrez notre histoire, notre passion et l’art du café
          </p>
        </motion.div>
      </section>

      {/* Notre histoire */}
      <section className="flex flex-col items-center text-center container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 max-w-5xl">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#4B2E2E] mb-4 sm:mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Notre histoire
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-lg text-[#4B2E2E] leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Avellana Bistro est né de la passion pour le café de qualité et le bien-être de nos clients. Depuis notre ouverture, nous combinons savoir-faire, créativité et ambiance chaleureuse pour offrir une expérience inoubliable.
        </motion.p>
      </section>

      {/* Notre équipe */}
      <section className="flex flex-col items-center text-center container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 max-w-7xl">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-[#4B2E2E] mb-6 sm:mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Notre équipe
        </motion.h2>

        {/* Grille responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {[
            { name: 'Imed', role: 'Propriétaire', photo: '/team.jpg' },
            { name: 'Bilel', role: 'Barista & passion café', photo: '/team.jpg' },
          ].map((person, index) => (
            <motion.div
              key={person.name}
              className="bg-[#FFF5E1] rounded-3xl shadow-xl flex flex-col items-center p-6 sm:p-8 w-full"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Photo responsive */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 relative mb-4 sm:mb-6">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-[#4B2E2E] mb-1 sm:mb-2">{person.name}</h3>
              <p className="text-sm sm:text-lg md:text-lg text-[#7A8450]">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
