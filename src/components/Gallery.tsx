import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = [
    {
      src: 'https://i.pinimg.com/736x/38/4b/9b/384b9bf0c1cbbdf58ae2d46cd94888a8.jpg',
      alt: 'Elegant wedding reception',
      title: 'Elegant Wedding Reception'
    },
    {
      src: 'https://i.pinimg.com/736x/45/59/46/45594649aa7e28a5647839eca62b7f35.jpg',
      alt: 'Corporate conference in session',
      title: 'Corporate Conference'
    },
    {
      src: 'https://i.pinimg.com/736x/10/76/e3/1076e3f2d40c35afb835079897655653.jpg',
      alt: 'Joyful birthday celebration',
      title: 'Birthday Celebration'
    },
    {
      src: 'https://i.pinimg.com/736x/66/cf/79/66cf7979a9db72bf4b78884c3f8238b8.jpg',
      alt: 'Bride and groom portrait',
      title: 'Wedding Portrait'
    },
    {
      src: 'https://i.pinimg.com/736x/b0/60/14/b060148f0c215b5ac8b72694d67e1136.jpg',
      alt: 'Gourmet food display',
      title: 'Gourmet Catering'
    },
    {
      src: 'https://i.pinimg.com/736x/29/a8/df/29a8dfb1d5db0ba555698aa8802ed8b5.jpg',
      alt: 'Live band performing at an event',
      title: 'Live Entertainment'
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            Gallery
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            A glimpse into the beautiful moments we've helped create.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <h3 className="text-base sm:text-lg font-semibold">{image.title}</h3>
                  <p className="text-xs sm:text-sm opacity-90">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {isLightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                <h3 className="text-lg sm:text-xl font-semibold">{images[currentImage].title}</h3>
              </div>

              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;