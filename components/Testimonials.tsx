'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sophie L.',
    text: 'Le café est incroyable et l’ambiance cosy donne envie de rester toute la journée !',
  },
  {
    name: 'Amine K.',
    text: 'Une expérience gustative unique, surtout le matcha latte, un vrai régal !',
  },
  {
    name: 'Leila R.',
    text: 'Service impeccable et décoration élégante. Je recommande vivement !',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-[#F5F0E1]">
      <h2 className="text-4xl font-bold text-center text-[#4B2E2E] mb-12">Avis de nos clients</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#FFF5E1] rounded-xl shadow-lg p-6 text-center"
          >
            <p className="mb-4 text-gray-700">{item.text}</p>
            <span className="font-bold text-[#4B2E2E]">- {item.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
