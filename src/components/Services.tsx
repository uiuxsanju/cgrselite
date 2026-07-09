import React from 'react';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    title: 'Wedding Planning',
    description:
      'Complete wedding planning from intimate ceremonies to grand celebrations.',
    features: 'Venue selection · Décor & styling · Vendor coordination · Timelines',
    image: 'https://i.pinimg.com/736x/e0/a0/99/e0a0995770731e4954c857c4824c12fc.jpg',
  },
  {
    title: 'Corporate Events',
    description:
      'Professional event management for conferences, launches and meetings.',
    features: 'Conferences · Product launches · Team building · Networking',
    image: 'https://i.pinimg.com/736x/56/72/15/567215b40136b5b89bc6d3c6a84e6284.jpg',
  },
  {
    title: 'Birthday Parties',
    description:
      'Memorable birthday celebrations tailored to your style and preferences.',
    features: 'Theme planning · Entertainment · Custom décor · Catering',
    image: 'https://i.pinimg.com/736x/f4/cb/02/f4cb022e25fd08684623a06142cdc209.jpg',
  },
  {
    title: 'Photography & Videography',
    description:
      'Professional coverage that captures every emotion of your special day.',
    features: 'Photography · Videography · Drone coverage · Post-production',
    image: 'https://i.pinimg.com/736x/8d/6f/d7/8d6fd7d1d52081fa0a1ac95fc4620a45.jpg',
  },
  {
    title: 'Catering Services',
    description:
      'Exquisite catering with customized menus for every occasion.',
    features: 'Custom menus · Live stations · Dietary options · Service staff',
    image: 'https://i.pinimg.com/736x/6b/2f/9f/6b2f9f7c56806ebf5656d3a4406df45e.jpg',
  },
  {
    title: 'Entertainment & Music',
    description:
      'Professional entertainment and music services to elevate your event.',
    features: 'DJ services · Live bands · Sound systems · Lighting design',
    image: 'https://i.pinimg.com/736x/37/67/db/3767db863c1971a2db3c632cce15581f.jpg',
  },
];

const Services = () => {
  const ref = useReveal<HTMLElement>();

  const openWhatsApp = (service: string) => {
    window.open(
      `https://wa.me/916303366066?text=${encodeURIComponent(
        `Hello CGRS Elite Events, I'm interested in your ${service} service.`
      )}`,
      '_blank'
    );
  };

  return (
    <section id="services" ref={ref} className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end reveal">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-deep leading-tight">
              Services crafted for
              <span className="italic font-luxury"> every occasion</span>
            </h2>
            <div className="mt-6 h-px w-20 bg-gold"></div>
          </div>
          <p className="max-w-sm text-slate-600 leading-relaxed md:text-right">
            Comprehensive event planning tailored to create unforgettable experiences.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7">
          {services.map((service, index) => (
            <article
              key={service.title}
              onClick={() => openWhatsApp(service.title)}
              className="group relative h-[380px] cursor-pointer overflow-hidden sm:h-[420px] reveal"
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-deep/10 transition-opacity duration-500 group-hover:from-deep group-hover:via-deep/60"></div>

              {/* Gold frame on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-3 border border-gold/0 transition-all duration-500 group-hover:border-gold/60"
              ></div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="mb-3 h-px w-10 bg-gold transition-all duration-500 group-hover:w-16"></div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-200">
                  {service.description}
                </p>
                {/* Features — revealed on hover */}
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="pt-3 text-xs tracking-wide text-gold">
                      {service.features}
                    </p>
                    <p className="pt-3 text-[11px] tracking-[0.2em] uppercase text-champagne/80">
                      Enquire on WhatsApp →
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;