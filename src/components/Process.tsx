import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { useReveal } from '../hooks/useReveal';

const steps = [
  {
    numeral: '01',
    title: 'Consultation & Vision',
    description:
      'We start by understanding your story, style and aspirations to create a shared vision for your event.',
    details: 'Discovery session · Budget & timeline · Theme direction · Venue guidance',
  },
  {
    numeral: '02',
    title: 'Planning',
    description:
      'A detailed roadmap takes shape — dates, vendors, logistics and budgets, all mapped with precision.',
    details: 'Vendor selection · Detailed schedule · Logistics planning',
  },
  {
    numeral: '03',
    title: 'Design',
    description:
      'Our creative team crafts décor concepts, stage aesthetics and mockups until every element feels right.',
    details: 'Custom design · Mockups & revisions · Floral & lighting styling',
  },
  {
    numeral: '04',
    title: 'Execution',
    description:
      'On the day of the event, we manage everything seamlessly so you can relax and enjoy the moment.',
    details: 'Day-of coordination · Vendor management · Guest hospitality',
  },
  {
    numeral: '05',
    title: 'Celebration',
    description:
      'You celebrate with the people you love — we quietly handle the rest, down to the final farewell.',
    details: 'Live coordination · Photography & memories · Perfect send-off',
  },
];

const Process = () => {
  const ref = useReveal<HTMLElement>();

  const handleWhatsAppClick = () => {
    const message =
      "Hello! I'm interested in your event planning services and would like to learn more.";
    window.open(
      `https://wa.me/916303366066?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section id="process" ref={ref} className="bg-deep py-16 sm:py-20 lg:py-28 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-20 max-w-2xl reveal">
          <p className="eyebrow mb-4">How We Work</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            From first conversation to the
            <span className="italic font-luxury text-champagne"> final toast</span>
          </h2>
          <p className="mt-5 text-gray-300 leading-relaxed">
            From concept to execution, we handle every detail with precision and care.
          </p>
          <div className="mt-6 h-px w-20 bg-gold"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-[29px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-gold/25 to-transparent sm:left-[37px]"
          ></div>

          <ol className="space-y-12 sm:space-y-16">
            {steps.map((step, index) => (
              <li
                key={step.numeral}
                className="relative grid grid-cols-[60px_1fr] gap-5 sm:grid-cols-[76px_1fr] sm:gap-8 reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Numeral */}
                <div className="relative z-10 flex h-[60px] w-[60px] items-center justify-center border border-gold/40 bg-deep sm:h-[76px] sm:w-[76px]">
                  <span className="font-display text-xl text-gold sm:text-2xl">
                    {step.numeral}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1 sm:pt-3">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold mb-2.5">
                    {step.title}
                  </h3>
                  <p className="max-w-2xl text-[15px] sm:text-base leading-relaxed text-gray-300">
                    {step.description}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm tracking-wide text-gold/80">
                    {step.details}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-24 border-t border-white/10 pt-12 reveal">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
                Ready to begin your journey?
              </h3>
              <p className="text-gray-300 max-w-xl">
                Let’s transform your vision into an unforgettable experience — chat with us
                directly on WhatsApp.
              </p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex flex-shrink-0 items-center gap-2.5 bg-gold px-8 py-3.5 font-medium text-deep transition-colors duration-300 hover:bg-champagne"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              Start Planning Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;