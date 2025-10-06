'use client';
import { useState } from 'react';
import Button from '@/components/Button';
import { FaClock, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setShowSuccess(true);
        form.reset();
      } else {
        alert('Erreur lors de l’envoi du message');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur réseau');
    }
  };

  const closeModal = () => setShowSuccess(false);

  return (
    <main className="mt-0 relative">
      {/* Hero */}
      <section
        className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(/contact-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FFF8E7] mb-4 tracking-wide drop-shadow-lg">
            contactez <span className="text-[#A3B18A]">avellana bistro</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#FFF5E1] font-medium drop-shadow-md">
            Partagez votre passion café, on s’occupe du reste ☕️🌿
          </p>
        </div>
      </section>

      {/* Formulaire & Info */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        <div className="bg-[#FFF5E1] p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#4B2E2E]">
            On veut vous entendre !
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              required
              className="p-4 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
              className="p-4 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none transition"
            />
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{2} ?[0-9]{3} ?[0-9]{3}"
              placeholder="Votre numéro de téléphone"
              required
              className="p-4 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none transition"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              required
              className="p-4 rounded-xl border border-[#A3B18A] h-32 resize-none focus:ring-2 focus:ring-[#A3B18A] focus:outline-none transition"
            />
            <Button type="submit">Envoyez votre message</Button>
          </form>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-[#FFF5E1] p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col gap-3 text-[#4B2E2E]">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Nos horaires & adresse</h2>
            <p className="flex items-center gap-2">
              <FaClock className="text-[#A3B18A]" /> Lundi à Dimanche : 6h - 23h
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#A3B18A]" /> 18 Avenue de Paris Boumhal, Tunis, Tunisia 2097
            </p>
          </div>

          <div className="w-full h-72 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.4818145130894!2d10.296164175299914!3d36.7350044713729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4997afb2c85d%3A0x369fd4819f563807!2savellana%20bistro!5e0!3m2!1sfr!2stn!4v1759341605457!5m2!1sfr!2stn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

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
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 max-w-sm text-center relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={20} />
              </button>
              <p className="text-gray-700 mb-6">
                Votre message a été envoyé avec succès. Nous vous répondrons très bientôt.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
