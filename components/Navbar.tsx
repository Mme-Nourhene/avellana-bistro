'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#3B1F1F]/90 backdrop-blur-md shadow-md h-20 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="font-serif font-bold text-2xl text-[#FFF8E7] lowercase tracking-wide"
        >
          avellana bistro
        </Link>

        {/* Menu & Hamburger */}
        <nav>
          <ul className={`md:flex gap-8 ${open ? 'block' : 'hidden'} md:block text-[#FFF8E7]`}>
            <li>
              <Link href="/" className="hover:text-[#A3B18A] transition">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-[#A3B18A] transition">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[#A3B18A] transition">
                Galerie
              </Link>
            </li>
            <li>
              <Link href="/vedette" className="hover:text-[#A3B18A] transition">
                Vedette
              </Link>
            </li>
            <li>
              <Link href="/createurs" className="hover:text-[#A3B18A] transition">
                Créateurs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#A3B18A] transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#A3B18A] transition">
                À propos
              </Link>
            </li>
          </ul>

          <button
            className="md:hidden text-3xl text-[#FFF8E7]"
            onClick={() => setOpen(!open)}
          >
            &#9776;
          </button>
        </nav>

        {/* Réseaux pour desktop */}
        <div className="hidden md:flex gap-4 text-xl text-[#FFF8E7]">
          <Link 
            href="https://wa.me/21628272326" 
            target="_blank" 
            className="hover:text-[#A3B18A] transition"
          >
            <FaWhatsapp />
          </Link>
          <Link 
            href="https://www.instagram.com/avellana_bistro/" 
            target="_blank" 
            className="hover:text-[#A3B18A] transition"
          >
            <FaInstagram />
          </Link>
          <Link 
            href="https://www.facebook.com/profile.php?id=61558775106290" 
            target="_blank" 
            className="hover:text-[#A3B18A] transition"
          >
            <FaFacebookF />
          </Link>
          <Link 
            href="https://www.tiktok.com/@avellana_bistro" 
            target="_blank" 
            className="hover:text-[#A3B18A] transition"
          >
            <FaTiktok />
          </Link>
        </div>
      </div>
    </header>
  );
}
