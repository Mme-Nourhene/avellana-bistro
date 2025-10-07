'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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
      {/* Hero section */}
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
            onClick={() => setSelectedIndex(null)} // fermer en dehors
          >
            {/* Container centré */}
            <div
              className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()} // empêche la fermeture sur clic image
            >
              {/* Image glissable */}
              <motion.div
                key={selectedIndex}
                className="relative w-full h-full"
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.4 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x > 100) handlePrev();
                  else if (info.offset.x < -100) handleNext();
                }}
              >
                <Image
                  src={images[selectedIndex]}
                  alt="big view"
                  fill
                  className="object-contain select-none pointer-events-none"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
