import React from 'react';
import {
  Award,
  Users,
  ClipboardList,
  Gem,
  BadgeIndianRupee,
  Handshake,
  ConciergeBell,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const reasons = [
  { icon: Award, title: '10+ Years Experience', text: 'A decade of flawless weddings, corporate functions and government events.' },
  { icon: Users, title: 'Creative Team', text: 'Designers, planners and producers who obsess over every detail.' },
  { icon: ClipboardList, title: 'Customized Planning', text: 'Every event is built around your story, culture and budget.' },
  { icon: Gem, title: 'Luxury Concepts', text: 'Premium décor themes, stage aesthetics and signature experiences.' },
  { icon: BadgeIndianRupee, title: 'Transparent Pricing', text: 'Clear quotes with no hidden costs — you always know where you stand.' },
  { icon: Handshake, title: 'Trusted Vendors', text: 'A curated network of proven caterers, artists and technicians.' },
  { icon: ConciergeBell, title: 'Premium Hospitality', text: 'Guest management and VIP protocol handled with warmth and precision.' },
];

const WhyChooseUs = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="why-us" ref={ref} className="bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <p className="eyebrow mb-3">Why CGRS Elite</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-800 mb-4">
            Why Couples & Companies <span className="text-gold">Choose Us</span>
          </h2>
          <div className="gold-divider"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_12px_36px_rgba(212,175,55,0.18)] reveal ${
                index === reasons.length - 1 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 transition-transform duration-500 group-hover:scale-110">
                <reason.icon className="h-6 w-6 text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-slate-800 mb-2">
                {reason.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
