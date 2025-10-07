'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { FaStar } from 'react-icons/fa';

// Avis clients
const testimonials = [
  { name: 'Bilel Mensi', text: 'Very cosy place', rating: 5 },
  { name: 'Medallel Zeineb', text: 'Very nice place and the owner is a very nice man 😊 nice work 💕', rating: 4 },
  { name: 'Moez Maamar', text: 'Amazing breakfast, the staff are very friendly. I recommend!', rating: 5 },
  { name: 'Loujaina Balti', text: 'Good service, very nice and friendly staff, love it 🫶', rating: 5 },
  { name: 'Nabil BEN SALAH', text: 'All you need to feel better', rating: 5 },
];

// ⭐ Fonction d’affichage des étoiles
function Stars({ count }: { count: number }) {
  return (
    <div className="flex justify-center mb-3">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`${i < count ? 'text-yellow-400' : 'text-gray-300'} text-lg`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -80) nextSlide();
    if (info.offset.x > 80)
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const resetAuto = useCallback(() => {
    setAuto(false);
    setTimeout(() => setAuto(true), 7000);
  }, []);

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(() => nextSlide(), 5500);
    return () => clearInterval(timer);
  }, [auto, nextSlide]);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* ✅ En-tête */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#4B2E2E] mb-12 relative z-10 drop-shadow-sm">
        Avis de nos clients
      </h2>

      <div className="relative flex justify-center items-center z-10">
        <AnimatePresence mode="wait">
          <motion.article
            key={index}
            onClick={() => {
              nextSlide();
              resetAuto();
            }}
            className="relative mx-4 cursor-pointer"
            drag="x"
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, scale: 0.9, rotateY: 10, x: 50 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: -10, x: -50 }}
            transition={{ duration: 0.7, ease: [0.45, 0, 0.55, 1] }}
          >
            {/* 💬 Carte unie sans dégradé */}
            <div className="bg-[#FFFAF2] backdrop-blur-sm rounded-2xl shadow-xl p-8 w-[420px] mx-auto text-center min-h-[330px] flex flex-col justify-center border border-[#e0c9a6]/40 hover:shadow-2xl transition-shadow duration-500">
              <Stars count={testimonials[index].rating} />
              <motion.p
                key={`text-${index}`}
                className="text-gray-700 italic mb-4 text-lg leading-relaxed flex-grow flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                “{testimonials[index].text}”
              </motion.p>
              <motion.span
                key={`name-${index}`}
                className="font-semibold text-[#4B2E2E] mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                — {testimonials[index].name}
              </motion.span>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* ⚪ Indicateurs */}
      <div className="flex justify-center mt-6 space-x-2 z-10 relative">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              resetAuto();
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-[#4B2E2E] w-6' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
