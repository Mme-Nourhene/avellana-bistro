'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Article = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  sizes: string[];
};

const articles: Article[] = [
  {
    id: 1,
    title: 'Pull1 Avellana',
    description: 'Pull chaud et confortable, parfait pour votre café.',
    price: 35,
    image: '/pull1.jpg',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 2,
    title: 'Pull2 Avellana',
    description: 'Pull élégant avec le logo Avellana Bistro.',
    price: 40,
    image: '/pull2.jpg',
    sizes: ['S', 'M', 'L'],
  },
];

export default function VedettePage() {
  const [openModal, setOpenModal] = useState<null | Article>(null);
  const [confirmation, setConfirmation] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', size: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!openModal) return;
    setOpenModal(null);
    setConfirmation(
      `Salut ${formData.name} ! Votre commande "${openModal.title}" (taille ${formData.size}) sera prête au café.`
    );
    setFormData({ name: '', phone: '', size: '' });
  };

  return (
    <main className="mt-20">
      {/* Hero */}
      <section
        className="relative h-[45vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/vedette-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFF8E7] mb-4 drop-shadow-lg">
            Boutique <span className="text-[#A3B18A]">Avellana</span>
          </h1>
          <p className="text-lg md:text-xl text-[#FFF5E1]">
            Découvrez nos articles exclusifs disponibles au café
          </p>
        </motion.div>
      </section>

      {/* Articles style e-commerce */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image produit */}
              <div className="relative w-full h-64">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Détails produit */}
              <div className="p-6 flex flex-col gap-3 text-center">
                <h3 className="text-xl font-bold text-[#4B2E2E]">{article.title}</h3>
                <p className="text-sm text-gray-600">{article.description}</p>
                <p className="text-2xl font-semibold text-[#A3B18A]">{article.price} DT</p>
                <button
                  onClick={() => setOpenModal(article)}
                  className="mt-2 px-6 py-2 bg-[#A3B18A] text-[#FFF8E7] rounded-full font-semibold hover:bg-[#8B9C6F] transition"
                >
                  Commander
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Formulaire modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <motion.div
            className="bg-[#FFF5E1] rounded-3xl p-8 w-[90%] md:w-96 shadow-xl relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-4 right-4 text-[#4B2E2E] text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-[#4B2E2E] mb-4 text-center">{openModal.title}</h2>
            <p className="text-[#7A8450] mb-4 text-center">{openModal.description}</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Votre téléphone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
              />
              <select
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
              >
                <option value="">Choisir la taille</option>
                {openModal.sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="px-6 py-2 bg-[#A3B18A] text-[#FFF8E7] rounded-full font-semibold hover:bg-[#8B9C6F] transition"
              >
                Valider la commande
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Confirmation modal */}
      {confirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <motion.div
            className="bg-[#FFF5E1] rounded-3xl p-8 w-[90%] md:w-96 shadow-xl relative text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setConfirmation('')}
              className="absolute top-4 right-4 text-[#4B2E2E] text-2xl"
            >
              ×
            </button>
            <p className="text-[#4B2E2E] font-semibold">{confirmation}</p>
          </motion.div>
        </div>
      )}
    </main>
  );
}
