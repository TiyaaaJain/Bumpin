'use client';

import Link from 'next/link';
import { useState } from 'react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/95 text-white py-4 sticky top-0 z-50 backdrop-blur-sm border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="gradient-text">Lokalfluencer</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-purple-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/influencers" className="nav-link">
              Influencers
            </Link>
            <Link href="/customers" className="nav-link">
              Businesses
            </Link>
            <Link href="/workers" className="nav-link">
              Join Team
            </Link>
            <Link href="/faq" className="nav-link">
              FAQ
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden mt-4 space-y-2 border-t border-purple-500/20 pt-4`}
        >
          <Link
            href="/influencers"
            className="block hover:text-purple-400 py-2 px-2 rounded transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Influencers
          </Link>
          <Link
            href="/customers"
            className="block hover:text-purple-400 py-2 px-2 rounded transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Businesses
          </Link>
          <Link
            href="/workers"
            className="block hover:text-purple-400 py-2 px-2 rounded transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Team
          </Link>
          <Link
            href="/faq"
            className="block hover:text-purple-400 py-2 px-2 rounded transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="block hover:text-purple-400 py-2 px-2 rounded transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
