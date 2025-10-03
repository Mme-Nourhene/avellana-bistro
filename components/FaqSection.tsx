'use client';
import { useState } from 'react';

const faqItems = [
  {
    question: 'Quels sont vos horaires d’ouverture ?',
    answer: 'Nous sommes ouverts du lundi au dimanche, de 8h à 20h.',
  },
  {
    question: 'Proposez-vous des options végétariennes ?',
    answer: 'Oui, nous avons plusieurs boissons et pâtisseries végétariennes.',
  },
  {
    question: 'Peut-on réserver pour des groupes ?',
    answer: 'Oui, contactez-nous par téléphone ou via le formulaire en ligne.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-[#FFF5E1]">
      <h2 className="text-4xl font-bold text-center text-[#4B2E2E] mb-12">FAQ</h2>
      <div className="container mx-auto max-w-3xl px-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h3 className="font-semibold text-lg text-[#4B2E2E]">{item.question}</h3>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
