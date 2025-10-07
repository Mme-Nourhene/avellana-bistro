'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Menu réorganisé avec noms et liens corrigés
  const menuItems = [
    { name: 'Chez nous', href: '/' },
    { name: 'À déguster', href: '/menu' },
    { name: 'Notre histoire', href: '/about' },
    { name: 'À posséder', href: '/vedette' },
    { name: 'Instantané', href: '/gallery' },
    { name: 'À découvrir', href: '/createurs' },
    { name: 'Nous trouver', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#3B1F1F]/90 backdrop-blur-md shadow-md h-20 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif font-bold text-2xl text-[#FFF8E7] lowercase tracking-wide"
        >
          avellana bistro
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 text-[#FFF8E7]">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-[#A3B18A] transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Réseaux desktop */}
        <div className="hidden md:flex gap-4 text-xl text-[#FFF8E7]">
          <Link href="https://wa.me/21628272326" target="_blank" className="hover:text-[#A3B18A]">
            <FaWhatsapp />
          </Link>
          <Link href="https://www.instagram.com/avellana_bistro/" target="_blank" className="hover:text-[#A3B18A]">
            <FaInstagram />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61558775106290" target="_blank" className="hover:text-[#A3B18A]">
            <FaFacebookF />
          </Link>
          <Link href="https://www.tiktok.com/@avellana_bistro" target="_blank" className="hover:text-[#A3B18A]">
            <FaTiktok />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-3xl text-[#FFF8E7]"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-[#3B1F1F]/95 backdrop-blur-lg border-t border-[#A3B18A]/40 shadow-lg animate-fadeIn">
          <ul className="flex flex-col items-center gap-6 py-8 text-[#FFF8E7] text-lg">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-[#A3B18A] transition"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Réseaux sociaux (mobile) */}
          <div className="flex justify-center gap-6 pb-6 text-2xl text-[#FFF8E7]">
            <Link href="https://wa.me/21628272326" target="_blank" className="hover:text-[#A3B18A]">
              <FaWhatsapp />
            </Link>
            <Link href="https://www.instagram.com/avellana_bistro/" target="_blank" className="hover:text-[#A3B18A]">
              <FaInstagram />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61558775106290" target="_blank" className="hover:text-[#A3B18A]">
              <FaFacebookF />
            </Link>
            <Link href="https://www.tiktok.com/@avellana_bistro" target="_blank" className="hover:text-[#A3B18A]">
              <FaTiktok />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
