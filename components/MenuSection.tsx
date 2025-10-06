'use client';

import { motion } from "framer-motion";
import { FaCoffee, FaLeaf, FaGlassMartiniAlt, FaTint } from "react-icons/fa";
import { GiCroissant, GiMeal } from "react-icons/gi";

type Item = { name: string; price: string; description?: string };
type Category = { title: string; icon: React.ReactNode; items: Item[] };

const categories: Category[] = [
  {
    title: "Les Classiques Caféinés",
    icon: <FaCoffee className="text-4xl text-[#4B2E2E]" />,
    items: [
      { name: "Expresso", price: "1.800 TND" },
      { name: "Cappucine", price: "2.000 TND" },
      { name: "Direct", price: "2.200 TND" },
      { name: "Américain", price: "2.000 TND" },
      { name: "Chocolat Chaud", price: "2.800 TND" },
      { name: "Café Turc", price: "2.500 TND" },
      { name: "Dose Spécial", price: "1.000 TND" },
      { name: "Dose Sirop", price: "0.700 TND" },
      { name: "Lait au Chocolat", price: "2.000 TND" },
      { name: "Tasse de Lait", price: "1.200 TND" },
    ],
  },
  {
    title: "Thés & Infusions",
    icon: <FaLeaf className="text-4xl text-[#4B2E2E]" />,
    items: [
      { name: "Thé Baklawa", price: "4.800 TND" },
      { name: "Thé", price: "1.500 TND" },
      { name: "Thé Cacahuètes", price: "2.300 TND" },
      { name: "Thé Amande", price: "2.800 TND" },
      { name: "Thé Infusion", price: "1.800 TND" },
    ],
  },
  {
    title: "Plaisirs Sucrés",
    icon: <GiCroissant className="text-4xl text-[#4B2E2E]" />,
    items: [
      { name: "Pain au Chocolat", price: "1.700 TND" },
      { name: "Croissant Salé", price: "2.800 TND" },
      { name: "Croissant Amande", price: "1.800 TND" },
      { name: "Amandina", price: "2.800 TND" },
      { name: "Tarte Amande", price: "2.800 TND" },
      { name: "Pâté", price: "2.000 TND" },
      { name: "Croissant Avellana", price: "2.500 TND" },
    ],
  },
  {
    title: "Petits Déjeuners Gourmands",
    icon: <GiMeal className="text-4xl text-[#4B2E2E]" />,
    items: [
      { 
        name: "Petit déjeuner Bonjour", 
        price: "4.900 TND",
        description: "Café au choix, jus ou eau 0.5L, croissant" 
      },
      { 
        name: "Petit déjeuner Avellana", 
        price: "5.900 TND",
        description: "Café au choix, jus ou eau 0.5L, croissant spécial ou amandina" 
      },
    ],
  },
  {
    title: "Jus Frais & Cocktails",
    icon: <FaGlassMartiniAlt className="text-4xl text-[#4B2E2E]" />,
    items: [
      { name: "Jus d’Orange", price: "3.000 TND" },
      { name: "Citronade", price: "2.500 TND" },
      { name: "Jus de Fraise", price: "3.000 TND" },
      { name: "Citronade Amande", price: "3.800 TND" },
      { name: "Lait de Poule", price: "3.500 TND" },
      { name: "Cocktail", price: "4.800 TND" },
    ],
  },
  {
    title: "Extras & Accompagnements",
    icon: <FaTint className="text-4xl text-[#4B2E2E]" />,
    items: [
      { name: "Delio", price: "1.800 TND" },
      { name: "Eau 0.5L", price: "1.000 TND" },
      { name: "Eau 1L", price: "1.800 TND" },
      { name: "Eau en Verre 1L", price: "2.000 TND" },
      { name: "Soda", price: "2.500 TND" },
      { name: "Orangina", price: "3.000 TND" },
      { name: "Goblet PT", price: "0.100 TND" },
      { name: "Goblet GT", price: "0.200 TND" },
      { name: "Goblet Jus", price: "0.300 TND" },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-[#FFF5E1] to-[#F5F0E1]">
      <div className="container mx-auto px-6">
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-extrabold text-center text-[#4B2E2E] mb-16 drop-shadow-md"
        >
          Notre Menu
        </motion.h2>

        {/* Grille des catégories */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-500"
            >
              {/* Icône dans cercle moderne */}
              <div className="w-20 h-20 flex items-center justify-center bg-[#F0E8D5] rounded-full mb-5 shadow-inner hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>

              {/* Titre catégorie */}
              <h3 className="text-2xl md:text-2xl font-semibold text-[#7A8450] mb-6 font-serif tracking-wide">
                {cat.title}
              </h3>

              {/* Liste des items */}
              <ul className="w-full space-y-3 text-[#4B2E2E]">
                {cat.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex flex-col px-4 py-2 rounded-xl hover:bg-[#EAE3D9] transition-colors duration-300 shadow-sm font-medium"
                  >
                    <div className="flex justify-between w-full">
                      <span className="text-lg">{item.name}</span>
                      <span className="text-lg font-semibold">{item.price}</span>
                    </div>
                    {item.description && (
                      <span className="text-sm text-gray-500 mt-1">{item.description}</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
