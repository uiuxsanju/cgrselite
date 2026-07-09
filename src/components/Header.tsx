import React, { useState, useEffect } from 'react';
import { Menu, X, Crown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
         {/* Logo */}
<div className="flex items-center space-x-2">
  {/* Logo image */}
  <img 
    src="https://i.ibb.co/Y7msxrL9/IMG-20260709-WA0000.jpg" 
    alt="CGRS Elite Events Logo" 
    className="w-12 h-15 sm:w-13 sm:h-19 object-contain rounded-md transition-all duration-300"
  />

  {/* Brand name */}
  <span className={`text-lg sm:text-xl font-bold ${isScrolled ? 'text-slate-800' : 'text-white'} transition-colors duration-300`}>
    CGRS Elite Events
  </span>
</div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors duration-300 hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/916303366066?text=Hello%20CGRS%20Elite%20Events%2C%20I%20would%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full bg-gradient-to-r from-gold via-[#e8c96a] to-gold px-5 py-2 text-sm font-semibold text-deep transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 py-4 shadow-lg mx-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-6 py-3 text-slate-700 hover:text-gold hover:bg-amber-50 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/916303366066?text=Hello%20CGRS%20Elite%20Events%2C%20I%20would%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 mt-2 block rounded-full bg-gradient-to-r from-gold via-[#e8c96a] to-gold px-5 py-2.5 text-center text-sm font-semibold text-deep"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;