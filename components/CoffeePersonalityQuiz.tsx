'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

type Question = {
  question: string;
  options: { text: string; value: string }[];
};

const questions: Question[] = [
  {
    question: 'Quel est ton style de matinée ?',
    options: [
      { text: 'Tranquille', value: 'latte' },
      { text: 'Dynamique', value: 'espresso' },
      { text: 'Créatif', value: 'matcha' },
    ],
  },
  {
    question: 'Préférence en goût ?',
    options: [
      { text: 'Doux et crémeux', value: 'latte' },
      { text: 'Fort et intense', value: 'espresso' },
      { text: 'Végétal et frais', value: 'matcha' },
    ],
  },
  {
    question: 'Choix de snack avec ton café ?',
    options: [
      { text: 'Croissant au beurre', value: 'latte' },
      { text: 'Petit carré de chocolat', value: 'espresso' },
      { text: 'Fruit ou salade', value: 'matcha' },
    ],
  },
];

const resultsMap: Record<
  string,
  { text: string; image: string }
> = {
  latte: {
    text: 'Latte : Doux, crémeux et réconfortant.',
    image: '/quiz/latte.jpg',
  },
  espresso: {
    text: 'Espresso : Fort, intense et énergisant.',
    image: '/quiz/espresso.jpg',
  },
  matcha: {
    text: 'Matcha : Frais, végétal et créatif.',
    image: '/quiz/matcha.jpg',
  },
};

export default function CoffeePersonalityQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const router = useRouter();

  const handleAnswer = (value: string) => {
    setAnswers([...answers, value]);
    const next = current + 1;
    if (next < questions.length) setCurrent(next);
    else setFinished(true);
  };

  const getResult = () => {
    const tally: Record<string, number> = {};
    answers.forEach((v) => (tally[v] = (tally[v] || 0) + 1));
    const sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
    return resultsMap[sorted[0][0]];
  };

  return (
    <section id="coffee-quiz" className="py-16 bg-[#FFF5E1]">
      <h2 className="text-4xl font-bold text-center text-[#4B2E2E] mb-12">
        Quel café est fait pour toi ?
      </h2>

      <div className="container mx-auto max-w-xl px-4">
        {!finished ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#F5F0E1] p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#4B2E2E] mb-4">
              {questions[current].question}
            </h3>
            <div className="flex flex-col gap-3">
              {questions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt.value)}
                  className="bg-[#7A8450] hover:bg-[#A3B18A] text-[#FFF5E1] px-4 py-2 rounded-lg font-semibold transition"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center p-8 bg-[#FFF5E1] rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#4B2E2E] mb-4">Ton café idéal :</h3>
            <p className="text-gray-700 text-lg mb-6">{getResult().text}</p>
            <img
              src={getResult().image}
              alt="Café idéal"
              className="mx-auto mb-6 rounded-xl shadow-lg"
            />
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setAnswers([]);
                  setCurrent(0);
                  setFinished(false);
                }}
                className="bg-[#7A8450] hover:bg-[#A3B18A] text-[#FFF5E1] px-6 py-3 rounded-full font-semibold transition"
              >
                Recommencer
              </button>
              <button
                onClick={() => router.push('/menu')}
                className="bg-[#4B2E2E] hover:bg-[#6B4F4F] text-[#FFF5E1] px-6 py-3 rounded-full font-semibold transition"
              >
                Voir le Menu
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
