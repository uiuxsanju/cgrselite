import React, { useState, useEffect } from 'react';
import { ChevronDown, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'; // Added arrows
import { FaWhatsapp } from "react-icons/fa6";


const Hero = () => {
  const images = [
    '/images/bg.jpg',
    '/images/bg2.jpg',
    'https://i.pinimg.com/736x/c5/11/ec/c511ec7473f76ab0ce340cf7e2a1eafa.jpg',
    'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg',
    'https://i.pinimg.com/736x/14/73/aa/1473aaef204afb410e9db515ab3c6a81.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const phoneNumber = '+916303366066'; // Replace with your WhatsApp number
  const whatsappMessage = 'Hello CGRS Elite Events, I would like to inquire about your services';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  // Animated statistics
  const stats = [
    { value: 100, suffix: '+', label: 'Events Completed' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' },
    { value: 100, suffix: '+', label: '5 Star Reviews' },
    { value: 5, suffix: '+', label: 'Cities Served' }
  ];
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setCounts(stats.map((s) => s.value));
      return;
    }
    const duration = 1800;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(stats.map((s) => Math.round(s.value * eased)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* WhatsApp Floating Button */}
      <button 
        onClick={openWhatsApp}
        className="fixed right-6 bottom-6 sm:right-8 sm:bottom-8 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
        <span className="ml-2 hidden sm:inline-block">Chat with us</span>
      </button>

      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-slate-900/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-28 sm:pb-32">
        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-semibold mb-4 sm:mb-6 leading-tight animate-fadeUp">
          CGRS Elite Events
        </h1>
        <p className="font-luxury italic text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-champagne font-medium animate-fadeUp [animation-delay:150ms]">
          Luxury Wedding & Event Planners
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Creating bespoke, unforgettable experiences with passion for perfection
        </p>
        
        <button 
          onClick={openWhatsApp}
          className="group bg-gradient-to-r from-gold via-[#e8c96a] to-gold text-deep hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl mx-2"
        >
          WhatsApp Inquiry
        </button>
        <a href="#services">
        <button className="group bg-white/0 hover:bg-white/5 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl mx-2">
          Discover More
          <ChevronDown className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
        </a>

        {/* Animated Statistics */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 border-t border-white/15 pt-8 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl sm:text-4xl font-semibold text-gold">
                {counts[i]}
                {stat.suffix}
              </div>
              <div className="mt-1 text-xs sm:text-sm tracking-wide text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-amber-600 w-4 sm:w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/70" />
      </div>
      {/* Left & Right Arrows */}
<button
  onClick={() =>
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }
  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/40 hover:bg-black/60 text-white p-2 transition rounded-md"
  aria-label="Previous Slide"
>
  <ChevronLeft className="w-6 h-6" />
</button>

<button
  onClick={() =>
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }
  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/40 hover:bg-black/60 text-white p-2 transition rounded-md"
  aria-label="Next Slide"
>
  <ChevronRight className="w-6 h-6" />
</button>

    </section>
  );
};

export default Hero;