import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Avellana Bistro',
  description: 'Café & pâtisseries artisanales',
  icons: {
    icon: '/favicon.ico', // <-- chemin vers ton favicon dans /public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#F5F0E1] text-[#4B2E2E] selection:bg-amber-200 selection:text-[#4B2E2E]">
        {/* Navbar sticky avec effet glass */}
        <Navbar />

        {/* Contenu principal */}
        <main className="mt-[80px]">{children}</main>

        {/* Footer moderne */}
        <Footer />
      </body>
    </html>
  );
}
