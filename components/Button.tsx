'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, className, onClick, type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#A3B18A] text-[#FFF8E7] py-3 px-6 rounded-xl font-semibold hover:bg-[#7A8450] transition shadow-md ${className ?? ''}`}
    >
      {children}
    </button>
  );
}
