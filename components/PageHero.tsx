'use client';

import { motion } from 'framer-motion';

export type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  highlight?: string;
};

export default function PageHero({ title, subtitle, image, highlight }: PageHeroProps) {
  return (
    <section
      className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFF8E7] mb-4 drop-shadow-lg">
          {title} {highlight && <span className="text-[#A3B18A]">{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-[#FFF5E1]">{subtitle}</p>
        )}
      </motion.div>
    </section>
  );
}
