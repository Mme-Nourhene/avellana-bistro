"use client";
import { FaCoffee, FaLeaf, FaBreadSlice, FaEgg } from "react-icons/fa";

type Item = {
  name: string;
  price: string;
};

type Category = {
  title: string;
  icon: React.ReactNode; // ✅ correction ici
  items: Item[];
};

const categories: Category[] = [
  {
    title: "Cafés",
    icon: <FaCoffee className="text-4xl text-[#4B2E2E]" />,
    items: [
      { name: "Espresso", price: "5 TND" },
      { name: "Cappuccino", price: "7 TND" },
      { name: "Latte", price: "8 TND" },
    ],
  },
  {
    title: "Thés & Infusions",
    icon: <FaLeaf className="text-4xl text-[#4B2E2E]" />,
    items: [
      { name: "Thé Vert", price: "6 TND" },
      { name: "Infusion Menthe", price: "7 TND" },
    ],
  },
  {
    title: "Viennoiseries",
    icon: <FaBreadSlice className="text-4xl text-[#4B2E2E]" />,
    items: [
      { name: "Croissant au Beurre", price: "4 TND" },
      { name: "Pain au Chocolat", price: "5 TND" },
    ],
  },
  {
    title: "Brunch",
    icon: <FaEgg className="text-4xl text-[#4B2E2E]" />,
    items: [
      { name: "Omelette Bio", price: "10 TND" },
      { name: "Avocado Toast", price: "12 TND" },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-[#FFF5E1]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#4B2E2E] mb-12">
          Notre Menu
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="mb-4">{cat.icon}</div>
              <h3 className="text-2xl font-semibold text-[#7A8450] mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between w-48 text-[#4B2E2E]"
                  >
                    <span>{item.name}</span>
                    <span className="font-medium">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
