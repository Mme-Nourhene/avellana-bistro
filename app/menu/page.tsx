import PageHero from "@/components/PageHero";
import MenuSection from "@/components/MenuSection";

export default function MenuPage() {
  return (
    <main className="bg-[#FFF5E1] min-h-screen flex flex-col">
      {/* Hero */}
      <PageHero
        title="À déguster"
        subtitle="Découvrez une sélection élégante de cafés, thés, brunchs et douceurs artisanales, préparés avec soin et passion au cœur d’Avellana Bistro."
        image="/page-hero.jpg"
      />

      {/* Sections du menu */}
      <MenuSection />
    </main>
  );
}
