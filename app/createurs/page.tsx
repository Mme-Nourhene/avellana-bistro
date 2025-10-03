'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type Creator = {
  id: number;
  name: string;
  description: string;
  image: string;
  products: string[];
};

const creators: Creator[] = [
  {
    id: 1,
    name: "BEEZ'ART",
    description:
      "Un concept store artisanal qui propose une variété de miels naturels et authentiques, issus de petites productions locales.",
    image: '/beezart-logo.jpg', // 👉 logo ou photo à fournir
    products: ['Miel de thym', 'Miel d’oranger', 'Miel multifleurs'],
  },
  // Tu pourras en ajouter d’autres ici
];

export default function CreateursPage() {
  return (
    <main className="mt-20">
      {/* Hero */}
      <section
        className="relative h-[45vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/createurs-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFF8E7] mb-4 drop-shadow-lg">
            Nos <span className="text-[#A3B18A]">Créateurs Locaux</span>
          </h1>
          <p className="text-lg md:text-xl text-[#FFF5E1] max-w-2xl mx-auto">
            Avellana Bistro est fier de soutenir les petits business & artisans
            locaux en leur offrant un espace pour présenter leurs créations.
          </p>
        </motion.div>
      </section>

      {/* Liste des créateurs */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {creators.map((creator) => (
            <motion.div
              key={creator.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image du créateur */}
              <div className="relative w-full h-64 bg-gray-100">
                <Image
                  src={creator.image}
                  alt={creator.name}
                  fill
                  className="object-contain p-6"
                />
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col gap-3 text-center">
                <h2 className="text-2xl font-bold text-[#4B2E2E]">{creator.name}</h2>
                <p className="text-gray-600">{creator.description}</p>

                <div className="mt-3">
                  <h3 className="font-semibold text-[#A3B18A] mb-2">
                    Produits phares :
                  </h3>
                  <ul className="flex flex-wrap justify-center gap-2">
                    {creator.products.map((prod, idx) => (
                      <li
                        key={idx}
                        className="px-3 py-1 bg-[#FFF5E1] rounded-full text-sm text-[#4B2E2E] shadow"
                      >
                        {prod}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-4 px-6 py-2 bg-[#A3B18A] text-[#FFF8E7] rounded-full font-semibold hover:bg-[#8B9C6F] transition">
                  Disponible chez Avellana
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
