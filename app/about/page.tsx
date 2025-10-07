'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageHero from '@/components/PageHero';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center mt-20">

      {/* Hero réutilisable pleine largeur */}
      <div className="w-full">
        <PageHero
          title="Notre histoire"
          subtitle="Découvrez notre histoire, notre amour du café et l’art de faire de chaque pause un instant unique."
          image="/page-hero.jpg"
        />
      </div>

      {/* Notre histoire */}
      <section className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-extrabold text-center text-[#4B2E2E] mb-16 drop-shadow-md"
        >
          Qui sommes-nous ?
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-lg text-[#4B2E2E] leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Avellana Bistro, c’est l’alliance d’un café d’exception, de créativité et d’une atmosphère accueillante, pensée pour transformer chaque visite en un souvenir inoubliable.
        </motion.p>
      </section>

      {/* Notre équipe */}
      <section className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 max-w-7xl w-full">
        <motion.h2
  className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-serif font-extrabold text-[#4B2E2E] mb-6 sm:mb-8"
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
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
