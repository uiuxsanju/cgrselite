import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const faqs = [
  {
    q: 'Which cities do you serve?',
    a: 'We are based in Hyderabad and Visakhapatnam and manage weddings and events across Andhra Pradesh and Telangana. Destination events can also be arranged on request.',
  },
  {
    q: 'How early should we book?',
    a: 'For weddings we recommend booking 3–6 months in advance to secure the best venues and vendors. Corporate events and birthdays can often be arranged within 2–4 weeks.',
  },
  {
    q: 'Do you handle everything end-to-end?',
    a: 'Yes — venue selection, décor and styling, catering, photography and videography, entertainment, guest hospitality and on-day coordination are all managed by our team.',
  },
  {
    q: 'Can you work within our budget?',
    a: 'Absolutely. Every plan is customized. We share transparent quotes with no hidden costs and suggest options that make the most of your budget.',
  },
  {
    q: 'How do we get started?',
    a: 'Simply message us on WhatsApp or submit the inquiry form. We begin with a free consultation to understand your vision, dates and requirements.',
  },
];

const FAQ = () => {
  const ref = useReveal<HTMLElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="bg-[#FAF7F0] py-16 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          {/* Left — header */}
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-4">Good To Know</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-deep leading-tight">
              Questions couples
              <span className="italic font-luxury"> ask us most</span>
            </h2>
            <div className="mt-6 h-px w-20 bg-gold"></div>
            <p className="mt-6 max-w-md text-slate-600 leading-relaxed">
              Can’t find what you’re looking for? Message us on WhatsApp — we reply personally,
              usually within the hour.
            </p>
            <a
              href="https://wa.me/916303366066?text=Hello%20CGRS%20Elite%20Events%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border border-deep px-8 py-3.5 font-medium text-deep transition-colors duration-300 hover:border-gold hover:bg-deep hover:text-gold"
            >
              Ask a Question
            </a>
          </div>

          {/* Right — ruled accordion */}
          <div>
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div
                  key={faq.q}
                  className="border-t border-deep/10 last:border-b reveal"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                  >
                    <span
                      className={`font-display text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                        isOpen ? 'text-gold' : 'text-deep group-hover:text-gold'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? 'rotate-45 border-gold bg-gold text-deep'
                          : 'border-deep/20 text-deep group-hover:border-gold group-hover:text-gold'
                      }`}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pr-14 text-[15px] sm:text-base leading-relaxed text-slate-600">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;