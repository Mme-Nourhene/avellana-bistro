'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PageHero from '@/components/PageHero';

const images = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
  '/gallery6.jpg',
  '/gallery7.jpg',
  '/gallery8.jpg',
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setDirection(1);
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setDirection(-1);
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <main className="mt-0">
      <PageHero
        title="Instantané"
        subtitle="Découvrez l’âme de notre café en images"
        image="/page-hero.jpg"
      />

      {/* Pinterest-style gallery */}
      <section className="px-6 py-20">
        <motion.div
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {images.map((src, index) => (
            <motion.div
              key={src}
              className="relative overflow-hidden rounded-2xl shadow-lg break-inside-avoid cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={src}
                alt={`gallery ${index}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={selectedIndex}
                className="relative w-full h-full flex items-center justify-center"
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.4 }}
                drag={!isDesktop ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (!isDesktop) {
                    if (info.offset.x > 100) handlePrev();
                    else if (info.offset.x < -100) handleNext();
                  }
                }}
              >
                <Image
                  src={images[selectedIndex]}
                  alt="big view"
                  fill
                  className="object-contain select-none pointer-events-none"
                />

                {/* X button desktop */}
                {isDesktop && (
                  <button
                    className="absolute top-4 right-4 text-white/80 hover:text-[#C8A97E] p-2 rounded-full transition duration-300"
                    onClick={() => setSelectedIndex(null)}
                    aria-label="Fermer"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                )}

                {/* Left & Right arrows desktop */}
                {isDesktop && (
                  <>
                    <button
                      className="absolute left-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-[#C8A97E] px-4 py-6 transition duration-300"
                      onClick={handlePrev}
                      aria-label="Précédent"
                    >
                      <FaArrowLeft className="text-2xl" />
                    </button>
                    <button
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-[#C8A97E] px-4 py-6 transition duration-300"
                      onClick={handleNext}
                      aria-label="Suivant"
                    >
                      <FaArrowRight className="text-2xl" />
                    </button>
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
