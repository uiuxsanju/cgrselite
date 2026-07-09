import React from 'react';
import { useReveal } from '../hooks/useReveal';

const reasons = [
  {
    title: '4+ Years Experience',
    text: 'A decade of flawless weddings, corporate functions and government events across Andhra & Telangana.',
  },
  {
    title: 'Creative Team',
    text: 'Designers, planners and producers who obsess over every detail of your celebration.',
  },
  {
    title: 'Customized Planning',
    text: 'Every event is built around your story, your culture and your budget — never a template.',
  },
  {
    title: 'Luxury Concepts',
    text: 'Premium décor themes, stage aesthetics and signature experiences your guests will remember.',
  },
  {
    title: 'Transparent Pricing',
    text: 'Clear quotes with no hidden costs — you always know exactly where you stand.',
  },
  {
    title: 'Trusted Vendors',
    text: 'A curated network of proven caterers, artists, decorators and technicians.',
  },
  {
    title: 'Premium Hospitality',
    text: 'Guest management and VIP protocol handled with warmth and precision.',
  },
];

const WhyChooseUs = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="why-us" ref={ref} className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          {/* Left — header */}
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-4">Why CGRS Elite</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-deep leading-tight">
              The standard behind every
              <span className="italic font-luxury"> celebration</span>
            </h2>
            <div className="mt-6 h-px w-20 bg-gold"></div>
            <p className="mt-6 max-w-md text-slate-600 leading-relaxed">
              Couples, companies and even government institutions trust CGRS Elite Events for one
              reason — we treat every event as if it were our own.
            </p>
            <a
              href="https://wa.me/916303366066?text=Hello%20CGRS%20Elite%20Events%2C%20I%20would%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-deep px-8 py-3.5 font-medium text-white transition-colors duration-300 hover:bg-gold hover:text-deep"
            >
              Book Consultation
            </a>
          </div>

          {/* Right — ruled list */}
          <div>
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group grid gap-2 border-t border-deep/10 py-6 sm:grid-cols-[220px_1fr] sm:gap-8 sm:py-7 last:border-b reveal"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <h3 className="font-display text-lg sm:text-xl font-semibold text-deep transition-colors duration-300 group-hover:text-gold">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;