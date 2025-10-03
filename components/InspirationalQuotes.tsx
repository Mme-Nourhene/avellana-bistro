'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  "Le café est un langage universel de convivialité.",
  "Chaque tasse raconte une histoire.",
  "La vie commence après un bon café.",
  "La passion se savoure dans chaque gorgée.",
  "Partager un café, c’est partager un moment."
];

export default function InspirationalQuotes() {
  const [index, setIndex] = useState(0);

  const handleHover = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <div 
      className="w-full flex items-center justify-center my-12"
      onMouseEnter={handleHover}
      onTouchStart={handleHover}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-medium text-[#A3B18A] italic px-6 text-center drop-shadow-lg max-w-3xl"
        >
          {quotes[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
