"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/magazines", label: "Magazines" },
  ];

  return (
    <nav className="w-full py-6 px-6 border-b border-soft-sand">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="font-serif text-2xl lg:text-3xl tracking-tight text-volcanic-charcoal italic"
          onClick={() => setIsMenuOpen(false)}
        >
          Fidel Castro
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 items-center">
          {links.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-sm uppercase tracking-widest hover:text-kenyan-clay transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-volcanic-charcoal transition-all ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-volcanic-charcoal transition-all ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-volcanic-charcoal transition-all ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-6 pb-6 border-t border-soft-sand">
          <div className="flex flex-col gap-6 pt-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base uppercase tracking-widest hover:text-kenyan-clay transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}