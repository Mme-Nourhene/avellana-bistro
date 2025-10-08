'use client';
import { useState } from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimes
} from 'react-icons/fa';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', phone: '', date: '', time: '', event: '' });
        setShowModal(false);
      } else {
        alert('Erreur lors de l’envoi de la réservation.');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur réseau.');
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#3B1F1F] text-[#FFF8E7] pt-16 pb-10 relative overflow-hidden"
    >
      {/* Contenu principal */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo + infos */}
        <div className="flex flex-col gap-2 text-center md:text-left md:w-1/3">
          <h3 className="font-serif font-bold text-3xl lowercase tracking-wide text-[#FFF8E7]">
            avellana bistro
          </h3>
          <p className="text-[#EAE2D6] text-sm">
            Venez savourer nos cafés et pâtisseries d&apos;exception
          </p>
          <p className="text-[#D9CBB8] text-sm">Lundi à Dimanche 6h - 23h</p>
          <p className="text-[#D9CBB8] text-sm">18 Avenue de Paris, Tunis, Tunisia</p>
        </div>

        {/* Texte + bouton centré */}
        <div className="flex flex-col items-center md:items-center md:w-1/3 text-center gap-2">
          <p className="text-base font-semibold text-[#A3B18A]">
            Vous souhaitez vivre une expérience unique chez nous ?
          </p>
          <span
            onClick={() => setShowModal(true)}
            className="inline-block mt-1 text-[#A3B18A] bg-[#A3B18A]/20 font-bold py-2 px-5 rounded-full shadow-md hover:bg-[#A3B18A]/40 hover:scale-105 transition cursor-pointer"
          >
            Réserver maintenant
          </span>
        </div>

        {/* Contact & Réseaux */}
        <div className="flex flex-col items-center md:items-end md:w-1/3 gap-3 text-center md:text-right">
          <h4 className="font-semibold text-lg text-[#FFF5E1]">Contact & Réseaux</h4>

          {/* ✅ Liens mis à jour */}
          <div className="flex justify-center md:justify-end gap-4 text-2xl">
            <Link href="https://wa.me/21628272326" target="_blank" className="p-3 bg-[#A3B18A]/20 rounded-full hover:bg-[#A3B18A]/40 transition shadow-md hover:shadow-[#A3B18A]/30">
              <FaWhatsapp />
            </Link>
            <Link href="https://www.instagram.com/avellana_bistro/" target="_blank" className="p-3 bg-[#A3B18A]/20 rounded-full hover:bg-[#A3B18A]/40 transition shadow-md hover:shadow-[#A3B18A]/30">
              <FaInstagram />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61558775106290" target="_blank" className="p-3 bg-[#A3B18A]/20 rounded-full hover:bg-[#A3B18A]/40 transition shadow-md hover:shadow-[#A3B18A]/30">
              <FaFacebookF />
            </Link>
            <Link href="https://www.tiktok.com/@avellana_bistro" target="_blank" className="p-3 bg-[#A3B18A]/20 rounded-full hover:bg-[#A3B18A]/40 transition shadow-md hover:shadow-[#A3B18A]/30">
              <FaTiktok />
            </Link>
          </div>
        </div>
      </div>

      {/* Modal de réservation */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FFF5E1] p-8 rounded-3xl shadow-2xl w-full max-w-lg relative"
            >
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
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" className="p-3 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Votre email" className="p-3 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none" required />
                <input type="tel" name="phone" value={formData.phone} pattern="[0-9]{2} ?[0-9]{3} ?[0-9]{3}" onChange={handleChange} placeholder="Votre numéro de téléphone" className="p-3 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none" required />

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <FaCalendarAlt className="absolute top-1/2 left-3 -translate-y-1/2 text-[#A3B18A]" />
                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-3 pl-10 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] w-full" required />
                  </div>
                  <div className="flex-1 relative">
                    <FaClock className="absolute top-1/2 left-3 -translate-y-1/2 text-[#A3B18A]" />
                    <input type="time" name="time" value={formData.time} onChange={handleChange} className="p-3 pl-10 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] w-full" required />
                  </div>
                </div>

                <select name="event" value={formData.event} onChange={handleChange} className="p-3 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A]" required>
                  <option value="">{`Type d'événement`}</option>
                  <option value="Réunion professionnelle">Réunion professionnelle</option>
                  <option value="Événement spécial">Événement spécial</option>
                </select>

                <button type="submit" className="mt-2 bg-[#A3B18A] text-[#3B1F1F] font-bold rounded-xl py-3 hover:bg-[#7A8450] transition">
                  Envoyer
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de succès */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 max-w-sm text-center relative"
            >
              <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <FaTimes size={20} />
              </button>
              <FaCheckCircle className="text-[#A3B18A] text-5xl mb-4 mx-auto" />
              <h2 className="text-2xl font-bold mb-4 text-[#A3B18A]">Réservation envoyée !</h2>
              <p className="text-gray-700 mb-6">Merci, votre réservation a bien été envoyée. Nous vous répondrons très bientôt.</p>
              <button onClick={() => setShowSuccess(false)} className="bg-[#A3B18A] text-[#3B1F1F] font-bold rounded-xl py-2 px-6 hover:bg-[#7A8450] transition">Fermer</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-12 border-t border-[#A3B18A]/40 pt-6 text-center text-sm text-[#D9CBB8]">
        © {new Date().getFullYear()} avellana bistro. Tous droits réservés.
      </div>
    </motion.footer>
  );
}
