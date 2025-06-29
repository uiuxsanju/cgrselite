import React from 'react';
import { Crown } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-800 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6 sm:space-y-0 sm:flex-row sm:justify-between">
         {/* Logo */}
<div className="flex items-center space-x-2">
  <img
    src="https://i.ibb.co/sJMKxv46/logo-cers.png" // Replace with your actual logo file path
    alt="CGRS Logo"
    className="w-8 h-8 object-contain"
  />
  <span className="text-lg sm:text-xl font-bold">CGRS Elite Events</span>
</div>


          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
            © {currentYear} CGRS Elite Events. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;