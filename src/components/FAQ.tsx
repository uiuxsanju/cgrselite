import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
    <section id="faq" ref={ref} className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 reveal">
          <p className="eyebrow mb-3">Good To Know</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-800 mb-4">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <div className="gold-divider"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={faq.q}
                className={`rounded-xl border transition-all duration-300 reveal ${
                  isOpen ? 'border-gold/50 bg-slate-50 shadow-sm' : 'border-slate-200 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-slate-800">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 sm:px-6 text-sm sm:text-base leading-relaxed text-slate-600">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
