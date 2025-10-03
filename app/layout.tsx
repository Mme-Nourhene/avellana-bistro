import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Avellana Bistro',
  description: 'Café & pâtisseries artisanales',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#F5F0E1] text-[#4B2E2E]">
        {/* Navbar */}
        <Navbar />

        {/* Contenu principal */}
        <main className="mt-[80px]">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
