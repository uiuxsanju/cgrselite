import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2, MoveLeft, MoveRight } from 'lucide-react';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const images = [
    {
      src: 'https://i.pinimg.com/736x/38/4b/9b/384b9bf0c1cbbdf58ae2d46cd94888a8.jpg',
      alt: 'Elegant wedding reception',
      title: 'Elegant Wedding Reception',
      category: 'Weddings'
    },
    {
      src: 'https://i.pinimg.com/736x/45/59/46/45594649aa7e28a5647839eca62b7f35.jpg',
      alt: 'Corporate conference in session',
      title: 'Corporate Conference',
      category: 'Corporate'
    },
    {
      src: 'https://i.pinimg.com/736x/10/76/e3/1076e3f2d40c35afb835079897655653.jpg',
      alt: 'Joyful birthday celebration',
      title: 'Birthday Celebration',
      category: 'Celebrations'
    },
    {
      src: 'https://i.pinimg.com/736x/66/cf/79/66cf7979a9db72bf4b78884c3f8238b8.jpg',
      alt: 'Bride and groom portrait',
      title: 'Wedding Portrait',
      category: 'Weddings'
    },
    {
      src: 'https://i.pinimg.com/736x/b0/60/14/b060148f0c215b5ac8b72694d67e1136.jpg',
      alt: 'Gourmet food display',
      title: 'Gourmet Catering',
      category: 'Catering'
    },
    {
      src: 'https://i.pinimg.com/736x/29/a8/df/29a8dfb1d5db0ba555698aa8802ed8b5.jpg',
      alt: 'Live band performing at an event',
      title: 'Live Entertainment',
      category: 'Entertainment'
    }
  ];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'f':
          setIsFullscreen(!isFullscreen);
          break;
        case 'z':
          setIsZoomed(!isZoomed);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, isFullscreen, isZoomed]);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setIsFullscreen(false);
    setIsZoomed(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            Our <span className="text-amber-600">Gallery</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Capturing the magic of moments we've orchestrated
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-2 py-1 bg-amber-600 text-xs sm:text-sm rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {isLightboxOpen && (
          <div className={`fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 ${isFullscreen ? 'p-0' : ''}`}>
            <div className={`relative w-full max-w-6xl ${isFullscreen ? 'h-full max-h-full' : 'max-h-[90vh]'}`}>
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 text-white hover:text-amber-400 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              
              {/* Image container */}
              <div className={`relative w-full h-full flex items-center justify-center ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
                <img
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  className={`${isZoomed ? 'w-auto h-auto max-w-none max-h-none cursor-zoom-out' : 'max-w-full max-h-full object-contain'} ${isFullscreen ? 'h-screen' : 'max-h-[80vh]'} transition-transform duration-300`}
                  onClick={toggleZoom}
                />
              </div>
              
              {/* Image info */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white bg-black/50 rounded-lg px-3 py-2 backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl font-semibold">{images[currentImage].title}</h3>
                <p className="text-sm sm:text-base opacity-90">{images[currentImage].category}</p>
              </div>

              {/* Navigation controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-amber-400 transition-colors bg-black/50 rounded-full p-2 sm:p-3 backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-amber-400 transition-colors bg-black/50 rounded-full p-2 sm:p-3 backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Fullscreen toggle */}
              <button
                onClick={toggleFullscreen}
                className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 text-white hover:text-amber-400 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
              >
                <Maximize2 className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-white bg-black/50 rounded-lg px-3 py-2 backdrop-blur-sm text-sm sm:text-base">
                {currentImage + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;