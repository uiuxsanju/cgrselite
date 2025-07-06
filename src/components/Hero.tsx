import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const carouselItems = [
    {
      image: 'https://i.pinimg.com/736x/14/73/aa/1473aaef204afb410e9db515ab3c6a81.jpgs',
      title: 'Luxury Weddings',
      description: 'Elegant and sophisticated wedding planning'
    },
    {
      image: 'https://i.pinimg.com/736x/2d/5a/44/2d5a44293d3dee9eef6adf40a9829bab.jpg',
      title: 'Corporate Events',
      description: 'Professional event management for businesses'
    },
    {
      image: 'https://i.pinimg.com/736x/c5/11/ec/c511ec7473f76ab0ce340cf7e2a1eafa.jpg',
      title: 'Birthday Celebrations',
      description: 'Memorable birthday parties tailored to you'
    },s
    {
      image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg',
      title: 'Social Gatherings',
      description: 'Perfectly planned social events'
    },
    {
      image: 'https://i.pinimg.com/736x/14/73/aa/1473aaef204afb410e9db515ab3c6a81.jpg',
      title: 'Destination Events',
      description: 'Breathtaking locations for special occasions'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const phoneNumber = '+916303366066';
  const whatsappMessage = 'Hello CGRS Elite Events, I would like to inquire about your services';

  // Auto-play carousel
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselItems.length]);

  // Smooth scroll to current item
  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0]?.offsetWidth || 0;
      carouselRef.current.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToIndex = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
      {/* WhatsApp Floating Button */}
      <button 
        onClick={openWhatsApp}
        className="fixed right-6 bottom-6 sm:right-8 sm:bottom-8 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="ml-2 hidden sm:inline-block">Chat with us</span>
      </button>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
            CGRS Elite Events
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 text-amber-400 font-medium">
            Luxury Wedding & Event Planners
          </p>
        </div>

        {/* Side-by-side Carousel */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div 
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory w-full"
            style={{ scrollBehavior: 'smooth' }}
          >
            {carouselItems.map((item, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full snap-start"
              >
                <div className="flex flex-col md:flex-row items-center bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
                  <div className="w-full md:w-1/2 h-64 md:h-96 relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-8 md:p-12 text-white">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-amber-400">{item.title}</h2>
                    <p className="text-lg sm:text-xl mb-6 text-gray-200">{item.description}</p>
                    <button 
                      onClick={openWhatsApp}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-10 transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-10 transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-amber-600 w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <button 
            onClick={openWhatsApp}
            className="group bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            WhatsApp Inquiry
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center bg-white/0 hover:bg-white/5 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Discover More
            <ChevronDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 hover:text-white" />
      </div>
    </section>
  );
};

export default Hero;