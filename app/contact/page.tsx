'use client';
import Button from '@/components/Button';

export default function ContactPage() {
  return (
    <main className="mt-0"> {/* Pas de margin, Hero collé au navbar */}
      {/* Hero + Contact Intro */}
      <section
        className="relative h-[70vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(/contact-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFF8E7] mb-4 tracking-wide drop-shadow-lg">
            contactez <span className="text-[#A3B18A]">avellana bistro</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#FFF5E1] font-medium drop-shadow-md">
            Partagez votre passion café, on s’occupe du reste ☕️🌿
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {/* Formulaire */}
        <div className="bg-[#FFF5E1] p-10 rounded-3xl shadow-xl flex flex-col gap-6">
          <h2 className="text-3xl font-bold mb-6 text-[#4B2E2E]">
            On veut vous entendre !
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="p-4 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none transition"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="p-4 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none transition"
            />
            <input
              type="tel"
              placeholder="Votre numéro de téléphone"
              className="p-4 rounded-xl border border-[#A3B18A] focus:ring-2 focus:ring-[#A3B18A] focus:outline-none transition"
            />
            <textarea
              placeholder="Votre message"
              className="p-4 rounded-xl border border-[#A3B18A] h-32 resize-none focus:ring-2 focus:ring-[#A3B18A] focus:outline-none transition"
            />
            <Button>Envoyez votre message</Button>
          </form>
        </div>

        {/* Infos & Carte */}
        <div className="flex flex-col gap-8">
          <div className="bg-[#FFF5E1] p-8 rounded-3xl shadow-xl flex flex-col gap-3 text-[#4B2E2E]">
            <h2 className="text-2xl font-bold mb-2">Nos horaires & adresse</h2>
            <p>Brunch toute la journée</p>
            <p>Lundi à Dimanche : 6h - 23h</p>
            <p>18 Avenue de Paris Boumhal, Tunis, Tunisia 2097</p>
          </div>

          {/* Carte Google Maps */}
          <div className="w-full h-96 rounded-3xl overflow-hidden shadow-xl">
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
    </main>
  );
}
