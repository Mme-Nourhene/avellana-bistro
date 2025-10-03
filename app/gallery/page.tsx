'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <main className="mt-20">
      {/* Hero */}
      <section
        className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/gallery-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFF8E7] mb-4 drop-shadow-lg">
            Un instant, une ambiance{' '}
            <span className="text-[#A3B18A]">avellana bistro</span>
          </h1>
          <p className="text-lg md:text-xl text-[#FFF5E1]">
            Découvrez l’âme de notre café en images
          </p>
        </motion.div>
      </section>

      {/* Galerie en mode Pinterest */}
      <section className="container mx-auto px-6 py-20">
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
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <FaTimes />
          </button>
          <button
            onClick={handlePrev}
            className="absolute left-6 text-white text-3xl"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 text-white text-3xl"
          >
            <FaChevronRight />
          </button>

          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-[90%] md:w-[70%] h-[70vh]"
          >
            <Image
              src={images[selectedIndex]}
              alt="big view"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      )}
    </main>
  );
}
