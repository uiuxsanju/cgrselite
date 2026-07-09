import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const services = [
    'Wedding Planning',
    'Corporate Events',
    'Birthday Parties',
    'Photography & Videography',
    'Catering Services',
    'Entertainment & Music'
  ];

  const socials = [
    { icon: FaFacebookF, label: 'Facebook', href: '#' },
    { icon: FaInstagram, label: 'Instagram', href: '#' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
    { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/916303366066' }
  ];

  return (
    <footer className="bg-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://i.ibb.co/sJMKxv46/logo-cers.png"
                alt="CGRS Elite Events logo"
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
              <span className="font-display text-lg sm:text-xl font-semibold">
                CGRS Elite Events
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Luxury wedding & event planners crafting unforgettable celebrations across
              Hyderabad and Visakhapatnam.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors duration-300 hover:text-gold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service} className="text-sm text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold mb-4">Reach Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                <span>Hitech City, Hyderabad · Kurmannapalem, Visakhapatnam</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                <a href="tel:+916303366066" className="hover:text-gold transition-colors">
                  +91 63033 66066
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                <a
                  href="https://wa.me/916303366066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-xs sm:text-sm text-gray-400">
          © {currentYear} CGRS Elite Events. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
