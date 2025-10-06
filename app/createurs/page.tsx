'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

type Creator = {
  id: number;
  name: string;
  phrase: string;  
  description: string;
  image: string;
  products: string[];
};

const creators: Creator[] = [
  {
    id: 1,
    name: "BEEZ'ART",
    phrase: "Des miels naturels et locaux à savourer !",
    description:
      "Un concept store artisanal qui propose une variété de miels naturels et authentiques, issus de petites productions locales.",
    image: '/beezart-logo.jpg',
    products: ['Miel de thym', 'Miel d’oranger', 'Miel multifleurs'],
  },
];

export default function CreateursPage() {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    businessType: '',
    email: '',
    phone: '',
    socials: '',
    logo: null as File | null,
    message: '',
  });

  // 🔹 Gestion des champs texte
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Gestion du fichier logo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, logo: e.target.files[0] });
    }
  };

  // 🔹 Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.businessType ||
      !formData.email ||
      !formData.phone ||
      !formData.socials ||
      !formData.message ||
      !formData.logo
    ) {
      alert('⚠️ Tous les champs sont obligatoires, y compris le logo.');
      return;
    }

    setLoading(true);

    const formDataToSend = new FormData();
    for (const key in formData) {
      const value = formData[key as keyof typeof formData];
      if (typeof value === 'string') {
        formDataToSend.append(key, value);
      } else if (value instanceof File) {
        formDataToSend.append(key, value);
      }
    }

    try {
      const res = await fetch('/api/createur', {
        method: 'POST',
        body: formDataToSend,
      });

      if (res.ok) {
        setFormData({
          name: '',
          businessType: '',
          email: '',
          phone: '',
          socials: '',
          logo: null,
          message: '',
        });
        setShowModal(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 4000);
      } else {
        alert('❌ Erreur lors de l’envoi. Veuillez réessayer.');
      }
    } catch (error) {
      console.error(error);
      alert('⚠️ Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mt-20">
      {/* === SECTION HERO === */}
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
            Avellana Bistro soutient les artisans & petits producteurs locaux en leur offrant une vitrine pour leurs créations.
          </p>
        </motion.div>
      </section>

    <section className="flex flex-col justify-center items-center py-20">
  {/* Cartes créateurs */}
  <div className="grid grid-cols-1 md:grid-cols-1 gap-10 w-full max-w-lg">
    {creators.map((creator) => (
      <div key={creator.id} className="perspective w-full h-80">
        <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] cursor-pointer">
          {/* Recto */}
          <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-4 text-center">
            <div className="w-3/4 h-3/4 relative mb-4">
              <Image
                src={creator.image}
                alt={creator.name}
                fill
                className="object-contain rounded-2xl"
              />
            </div>
            <h2 className="text-xl font-bold text-[#4B2E2E]">{creator.name}</h2>
            <p className="text-gray-600 mt-1">{creator.phrase}</p>
          </div>
          {/* Verso */}
          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#FFF5E1] rounded-3xl shadow-lg flex items-center justify-center p-4">
            <div className="w-4/5 h-4/5 relative">
              <Image
                src="/miel-thym.jpg"
                alt="Produit"
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Bouton juste en dessous des cartes */}
  <div className="mt-10 text-center">
    <button
      onClick={() => setShowModal(true)}
      className="px-8 py-4 bg-[#4B2E2E] text-[#FFF8E7] font-semibold rounded-full text-lg hover:bg-[#6A3F3F] transition"
    >
      🤝 Devenir créateur partenaire
    </button>
  </div>
</section>

      {/* === MODAL FORMULAIRE === */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FFF8E7] p-8 rounded-3xl shadow-2xl w-full max-w-lg relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              >
                <FaTimes size={20} />
              </button>

              <h2 className="text-2xl font-bold text-[#4B2E2E] mb-6 text-center">
                Devenir créateur partenaire 🌿
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nom du créateur / entreprise"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] outline-none"
                />
                <input
                  type="text"
                  name="businessType"
                  placeholder="Type de business (artisan, bijouterie, pâtisserie...)"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{2} ?[0-9]{3} ?[0-9]{3}"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] outline-none"
                />
                <input
                  type="text"
                  name="socials"
                  placeholder="Liens réseaux sociaux / site web"
                  value={formData.socials}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] outline-none"
                />
                <input
                  type="file"
                  name="logo"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="p-2 border border-[#A3B18A] rounded-xl"
                />
                <textarea
                  name="message"
                  placeholder="Présentez brièvement votre activité..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="p-3 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 bg-[#A3B18A] text-[#3B1F1F] font-bold rounded-xl py-3 hover:bg-[#8B9C6F] transition"
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === ALERTE DE SUCCÈS === */}
{showSuccess && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center flex flex-col items-center gap-4">
      <h3 className="text-xl font-bold text-[#4B2E2E]">
        Votre demande a été envoyée avec succès !
      </h3>
      <p className="text-gray-600 text-sm">
        Nous reviendrons vers vous très bientôt.
      </p>
      <button
        onClick={() => setShowSuccess(false)}
        className="mt-2 bg-[#A3B18A] text-[#FFF8E7] rounded-xl px-6 py-2 font-semibold hover:bg-[#8B9C6F] transition"
      >
        Fermer
      </button>
    </div>
  </div>
)}
    </main>
  );
}
