'use client'; // ← important pour Framer Motion

import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="scroll-smooth">

      {/* Hero */}
      <section className="relative">
        <Hero />
      </section>

      {/* Actualités */}
      <section className="py-16 bg-[#FFF8E7]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6"
        >
          <NewsSection />
        </motion.div>
      </section>

      {/* Avis clients */}
      <section className="py-16 bg-[#F5F0E1]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6"
        >
          <Testimonials />
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FFF8E7]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6"
        >
          <FaqSection />
        </motion.div>
      </section>

    </main>
  );
}
