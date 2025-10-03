import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import CoffeePersonalityQuiz from '../components/CoffeePersonalityQuiz';

export default function Home() {
  return (
    <>
      <Hero />
      <NewsSection />
      <Testimonials />
      <FaqSection />
      <CoffeePersonalityQuiz />
    </>
  );
}
