'use client';
import { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok, FaCalendarAlt, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    event: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Réservation:', formData);
    alert('Merci ! Votre réservation a été envoyée.');
    setFormData({ name: '', email: '', phone: '', date: '', time: '', event: '' });
    setShowModal(false);
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#3B1F1F] text-[#FFF8E7] pt-16 pb-12 relative"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">

        {/* Logo + infos */}
        <div className="flex flex-col gap-2 max-w-sm">
          <h3 className="font-serif font-bold text-3xl lowercase tracking-wide">avellana bistro</h3>
          <p className="text-[#EAE2D6]">Venez savourer nos cafés et pâtisseries d’exception</p>
          <p className="text-[#D9CBB8]">Lundi à Dimanche 6h - 23h</p>
          <p className="text-[#D9CBB8]">18 Avenue de Paris Boumhal, Tunis, Tunisia 2097</p>
        </div>

        {/* Réseaux + Réservation */}
        <div className="flex flex-col gap-6 items-start md:items-end">
          <h4 className="font-semibold text-lg">Contact & Réseaux</h4>
          <div className="flex gap-4 text-2xl">
            <Link href="https://wa.me/21628272326" target="_blank" className="p-3 bg-[#A3B18A]/20 rounded-full hover:bg-[#A3B18A]/40 transition">
              <FaWhatsapp />
            </Link>
            <Link href="https://www.instagram.com/avellana_bistro/" target="_blank" className="p-3 bg-[#A3B18A]/20 rounded-full hover:bg-[#A3B18A]/40 transition">
              <FaInstagram />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61558775106290" target="_blank" className="p-3 bg-[#A3B18A]/20 rounded-full hover:bg-[#A3B18A]/40 transition">
              <FaFacebookF />
            </Link>
            <Link href="https://www.tiktok.com/@avellana_bistro" target="_blank" className="p-3 bg-[#A3B18A]/20 rounded-full hover:bg-[#A3B18A]/40 transition">
              <FaTiktok />
            </Link>
          </div>

          {/* Phrase invitante */}
          <p className="text-sm text-[#EAE2D6] max-w-sm text-center md:text-right">
            Vous souhaitez vivre une expérience unique chez nous ? Cliquez ici pour <span 
              onClick={() => setShowModal(true)} 
              className="font-bold cursor-pointer hover:text-[#A3B18A] transition"
            >
              réserver
            </span>.
          </p>
        </div>
      </div>

      {/* Modal de réservation */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FFF5E1] p-8 rounded-3xl shadow-2xl w-full max-w-lg relative"
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-[#3B1F1F] font-bold text-lg hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-2xl font-serif font-bold text-[#3B1F1F] mb-6 text-center">
              Réservez votre moment
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-gray-700">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className="p-3 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none text-gray-700"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                className="p-3 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none text-gray-700"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Votre numéro de téléphone"
                className="p-3 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none text-gray-700"
                required
              />

              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <FaCalendarAlt className="absolute top-1/2 left-3 -translate-y-1/2 text-[#A3B18A]" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="p-3 pl-10 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none w-full text-gray-700"
                    required
                  />
                </div>
                <div className="flex-1 relative">
                  <FaClock className="absolute top-1/2 left-3 -translate-y-1/2 text-[#A3B18A]" />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="p-3 pl-10 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none w-full text-gray-700"
                    required
                  />
                </div>
              </div>

              <select
                name="event"
                value={formData.event}
                onChange={handleChange}
                className="p-3 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none text-gray-700"
                required
              >
                <option value="">Type d&apos;événement</option>
                <option value="café entre amis">Café entre amis</option>
                <option value="réunion professionnelle">Réunion professionnelle</option>
                <option value="événement spécial">Événement spécial</option>
              </select>

              <button type="submit" className="mt-2 bg-[#A3B18A] text-[#3B1F1F] font-bold rounded-xl py-3 hover:bg-[#7A8450] transition">
                Envoyer
              </button>
            </form>
          </motion.div>
        </div>
      )}

      <div className="mt-12 border-t border-[#A3B18A]/40 pt-6 text-center text-sm text-[#D9CBB8]">
        © {new Date().getFullYear()} avellana bistro. Tous droits réservés.
      </div>
    </motion.footer>
  );
}
