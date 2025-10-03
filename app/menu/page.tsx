import MenuHero from "@/components/MenuHero";
import MenuSection from "@/components/MenuSection";

export default function MenuPage() {
  return (
    <main className="bg-[#FFF5E1] min-h-screen flex flex-col">
      {/* Hero */}
      <MenuHero />

      {/* Sections du menu */}
      <MenuSection />
    </main>
  );
}
