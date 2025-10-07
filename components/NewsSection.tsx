'use client';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type NewsItem = {
  title: string;
  description: string;
  image: string;
};

const news: NewsItem[] = [
  { title: 'Atelier pâtisserie', description: 'Participez à notre atelier pour apprendre à faire des croissants maison.', image: '/news/patisserie.jpg' },
  { title: 'Happy Hour', description: 'Profitez de nos boissons à prix réduits tous les vendredis de 17h à 19h.', image: '/news/happyhour.jpg' },
];

export default function NewsSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % news.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + news.length) % news.length);
  }, []);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) nextSlide();
    if (info.offset.x > 50) prevSlide();
  };

  return (
    <section id="news" className="py-16 bg-[#FFF8E7]"> {}
      <h2 className="text-4xl font-bold text-center text-[#4B2E2E] mb-12">Actualités</h2>

      {/* Desktop */}
      <div className="hidden md:flex justify-center flex-wrap gap-6 px-4">
        {news.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#F5F0E1] rounded-xl shadow-lg overflow-hidden flex-none w-[420px] h-[350px]" 
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[250px] object-cover rounded-t-xl"
            />
            <div className="p-3 flex flex-col justify-center h-[calc(100%-250px)]">
              <h3 className="font-bold text-lg mb-1 text-[#4B2E2E]">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden relative flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-[#F5F0E1] rounded-xl shadow-lg overflow-hidden w-[95%] mx-auto h-[350px]" 
          >
            <img
              src={news[index].image}
              alt={news[index].title}
              className="w-full h-[250px] object-cover rounded-t-xl"
            />
            <div className="p-3 flex flex-col justify-center h-[calc(100%-250px)]">
              <h3 className="font-bold text-lg mb-1 text-[#4B2E2E]">{news[index].title}</h3>
              <p className="text-gray-700 text-sm">{news[index].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicateurs */}
        <div className="flex justify-center mt-4 space-x-2 absolute bottom-0 mb-[-1rem] w-full">
          {news.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-[#4B2E2E] w-6' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
