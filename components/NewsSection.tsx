'use client';
import { motion } from 'framer-motion';

type NewsItem = {
  title: string;
  description: string;
  image: string;
};

const news: NewsItem[] = [
  { title: 'Nouveau café matcha', description: 'Découvrez notre nouveau café matcha biologique, un délice pour vos papilles.', image: '/news/matcha.jpg' },
  { title: 'Atelier pâtisserie', description: 'Participez à notre atelier pour apprendre à faire des croissants maison.', image: '/news/patisserie.jpg' },
  { title: 'Happy Hour', description: 'Profitez de nos boissons à prix réduits tous les vendredis de 17h à 19h.', image: '/news/happyhour.jpg' },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-16 bg-[#FFF5E1]">
      <h2 className="text-4xl font-bold text-center text-[#4B2E2E] mb-12">Actualités</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        {news.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#F5F0E1] rounded-xl shadow-lg overflow-hidden"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-[#4B2E2E]">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
