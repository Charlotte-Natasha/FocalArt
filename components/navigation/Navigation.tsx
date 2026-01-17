"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full py-8 px-6 flex items-center justify-between max-w-7xl mx-auto">
      {/* The Logo: Using the Serif font for a "curly/elegant" look */}
      <Link href="/" className="font-serif text-3xl tracking-tight text-volcanic-charcoal italic">
        Fidel Castro
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-10 items-center">
        <Link href="/about" className="text-sm uppercase tracking-widest hover:text-kenyan-clay transition-colors">
          About
        </Link>
        <Link href="/work" className="text-sm uppercase tracking-widest hover:text-kenyan-clay transition-colors">
          Work
        </Link>
        <Link 
          href="/contact" 
          className="text-sm uppercase tracking-widest hover:text-kenyan-clay transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}