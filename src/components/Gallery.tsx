import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const BABY_NAME = '';

const images = [
  {
    src: '/images/g1.jpg',
    alt: 'Elegant pre-wedding shoot',
    title: 'Elegant Pre-Wedding Shoot',
    category: 'Weddings',
  },
  {
    src: '/images/g2.jpg',
    alt: 'Elegant pre-wedding shoot',
    title: 'Elegant Pre-Wedding Shoot',
    category: 'Weddings',
  },
  {
    src: '/images/g3.jpg',
    alt: 'A heartfelt moment at an event',
    title: 'Heartfelt Moments',
    category: 'Celebrations',
  },
  {
    src: 'https://i.pinimg.com/736x/38/4b/9b/384b9bf0c1cbbdf58ae2d46cd94888a8.jpg',
    alt: 'Elegant wedding reception',
    title: 'Elegant Wedding Reception',
    category: 'Weddings',
  },
  {
    src: 'https://i.pinimg.com/736x/45/59/46/45594649aa7e28a5647839eca62b7f35.jpg',
    alt: 'Corporate conference in session',
    title: 'Corporate Conference',
    category: 'Corporate',
  },
  {
    src: 'https://i.pinimg.com/736x/10/76/e3/1076e3f2d40c35afb835079897655653.jpg',
    alt: 'Joyful birthday celebration',
    title: 'Birthday Celebration',
    category: 'Celebrations',
  },
  {
    src: 'https://i.pinimg.com/736x/66/cf/79/66cf7979a9db72bf4b78884c3f8238b8.jpg',
    alt: 'Bride and groom portrait',
    title: 'Wedding Portrait',
    category: 'Weddings',
  },
  {
    src: 'https://i.pinimg.com/736x/b0/60/14/b060148f0c215b5ac8b72694d67e1136.jpg',
    alt: 'Gourmet food display',
    title: 'Gourmet Catering',
    category: 'Catering',
  },
  {
    src: 'https://i.pinimg.com/736x/29/a8/df/29a8dfb1d5db0ba555698aa8802ed8b5.jpg',
    alt: 'Live band performing at an event',
    title: 'Live Entertainment',
    category: 'Entertainment',
  },
  // ---- Newborn Shoot additions ----
  {
    src: '/images/newborn-01.png',
    alt: 'Newborn swaddled in blue and yellow on a mini vintage cot',
    title: 'Sweet Slumber',
    category: 'Newborn',
    babyName: BABY_NAME,
  },
  {
    src: '/images/newborn-02.png',
    alt: 'Newborn girl in a cracked-egg prop under a starry night backdrop',
    title: 'Little Star',
    category: 'Newborn',
    babyName: BABY_NAME,
  },
  {
    src: '/images/newborn-03.png',
    alt: 'Newborn girl with floral headband in a pink knit-blanket basket',
    title: 'Pretty in Pink',
    category: 'Newborn',
    babyName: BABY_NAME,
  },
  {
    src: '/images/newborn-04.png',
    alt: 'Close-up of a swaddled newborn sleeping on a fur rug',
    title: 'Peaceful Dreams',
    category: 'Newborn',
    babyName: BABY_NAME,
  },
  {
    src: '/images/newborn-05.png',
    alt: 'Newborn girl on a mustard yellow backdrop with a date marker',
    title: 'Golden Hour Arrival',
    category: 'Newborn',
    babyName: BABY_NAME,
  },
  {
    src: '/images/newborn-06.png',
    alt: 'Newborn dressed in a knitted owl costume in a rattan basket',
    title: 'Little Night Owl',
    category: 'Newborn',
    babyName: BABY_NAME,
  },
  {
    src: '/images/newborn-07.png',
    alt: 'Newborn wearing tiny sunglasses resting on a wooden barrel',
    title: 'Cool Cub',
    category: 'Newborn',
    babyName: BABY_NAME,
  },
];

const categories = ['All', ...Array.from(new Set(images.map((i) => i.category)))];

const Gallery = () => {
  const ref = useReveal<HTMLElement>();
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === 'All' ? images : images.filter((i) => i.category === filter)),
    [filter]
  );

  const close = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };
  const open = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };
  const next = () =>
    setLightboxIndex((p) => (p === null ? null : (p + 1) % filtered.length));
  const prev = () =>
    setLightboxIndex((p) => (p === null ? null : (p - 1 + filtered.length) % filtered.length));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <section id="gallery" ref={ref} className="bg-deep py-16 sm:py-20 lg:py-28 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center reveal">
          <p className="eyebrow mb-4">Our Portfolio</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Moments we were honoured
            <span className="italic font-luxury text-champagne"> to create</span>
          </h2>
          <div className="gold-divider mt-6"></div>
        </div>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3 reveal">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`border px-5 py-2 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 ${
                filter === category
                  ? 'border-gold bg-gold text-deep'
                  : 'border-white/20 text-gray-300 hover:border-gold hover:text-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Structured grid — first tile featured */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {filtered.map((image, index) => (
            <figure
              key={image.src}
              onClick={() => open(index)}
              className={`group relative cursor-pointer reveal overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-lg shadow-black/40 transition-all duration-500 hover:ring-gold/50 hover:shadow-gold/10 ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              style={{ transitionDelay: `${(index % 4) * 80}ms` }}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? 'aspect-square sm:aspect-[4/3] lg:aspect-square' : 'aspect-[4/5]'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Bottom gradient for readable caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Category pill */}
                <span className="absolute right-3 top-3 rounded-full bg-gold/90 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-deep backdrop-blur-sm">
                  {image.category}
                </span>

                {/* Baby name badge (only on newborn shots) */}
                {image.babyName && (
                  <span className="absolute left-3 top-3 rounded-full border border-gold/40 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-gold backdrop-blur-md">
                    {image.babyName}
                  </span>
                )}

                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 translate-y-1 p-4 transition-transform duration-500 group-hover:translate-y-0">
                  <h3
                    className={`font-display font-semibold text-white drop-shadow-md transition-colors duration-300 group-hover:text-gold ${
                      index === 0 ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                    }`}
                  >
                    {image.title}
                  </h3>
                  {image.babyName && (
                    <p className="mt-1 font-luxury italic text-sm text-champagne/90">
                      — {image.babyName}
                    </p>
                  )}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-colors hover:border-gold hover:text-gold sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-colors hover:border-gold hover:text-gold sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            className="flex max-h-[85vh] max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
            />
            <div className="mt-4 flex w-full items-end justify-between gap-6 border-t border-white/15 pt-4">
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-1">
                  {filtered[lightboxIndex].category}
                </p>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
                  {filtered[lightboxIndex].title}
                  {filtered[lightboxIndex].babyName && (
                    <span className="ml-2 font-luxury italic text-champagne/90 text-base">
                      — {filtered[lightboxIndex].babyName}
                    </span>
                  )}
                </h3>
              </div>
              <p className="font-display text-sm text-champagne/80">
                {lightboxIndex + 1} <span className="text-white/40">/ {filtered.length}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;