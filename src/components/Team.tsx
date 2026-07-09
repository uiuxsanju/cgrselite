import React from 'react';
import { useReveal } from '../hooks/useReveal';

const leadership = {
  founder: {
    name: 'P. Sunil Kumar',
    role: 'Managing Director',
    description:
      'Leads CGRS Elite Events with a clear vision — building trusted client relationships, overseeing every celebration from planning to execution, and upholding the standard of quality the company is known for across Hyderabad and Visakhapatnam.',
  },
  executives: [
    {
      name: 'Mahadev',
      role: 'Event & Client Relationship Manager',
      description:
        'Handles customer consultations, event planning, scheduling, vendor coordination and client communication — ensuring every event is executed flawlessly.',
    },
    {
      name: 'Meghana',
      role: 'Creative Director',
      description:
        'Leads creative concepts, luxury décor themes, floral styling, event branding, stage aesthetics and premium visual storytelling.',
    },
    {
      name: 'Mani Kumar',
      role: 'Social Media & Production Manager',
      description:
        'Responsible for photography, videography, production management, social media campaigns, reels, branding and digital promotions.',
    },
  ],
};

const Team = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="team" ref={ref} className="bg-[#FAF7F0] py-16 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 max-w-2xl reveal">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-medium mb-4">
            Our Leadership
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-deep leading-tight">
            The people behind every
            <span className="italic font-luxury"> unforgettable </span>
            celebration
          </h2>
          <div className="mt-6 h-px w-20 bg-gold"></div>
        </div>

        {/* Managing Director - Feature Card */}
        <div className="reveal mb-14 sm:mb-16">
          <div className="relative overflow-hidden bg-white/60 backdrop-blur-sm border border-deep/5 rounded-2xl p-8 sm:p-10 md:p-12 shadow-sm hover:shadow-md transition-all duration-500">
            {/* Decorative gradient background */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-deep/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-block bg-gold/15 text-gold text-xs tracking-[0.3em] uppercase font-semibold px-5 py-2 rounded-full">
                  {leadership.founder.role}
                </span>
                <span className="inline-block bg-deep/5 text-deep/70 text-xs tracking-[0.2em] uppercase font-medium px-5 py-2 rounded-full">
                  Executive Leadership
                </span>
              </div>
              
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-deep mb-4">
                {leadership.founder.name}
              </h3>
              
              <p className="max-w-3xl text-[15px] sm:text-base leading-relaxed text-slate-600">
                {leadership.founder.description}
              </p>
            </div>
          </div>
        </div>

        {/* Executive Team */}
        <div>
          <div className="flex items-center gap-4 mb-8 reveal">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-deep">Executive Team</h3>
            <div className="flex-1 h-px bg-deep/10"></div>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.executives.map((executive, index) => (
              <div
                key={executive.name}
                className="reveal group bg-white/50 backdrop-blur-sm border border-deep/5 rounded-xl p-6 sm:p-8 transition-all duration-400 hover:shadow-lg hover:border-gold/20 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold">
                      {executive.role}
                    </span>
                  </div>
                  
                  <h4 className="font-display text-xl sm:text-2xl font-semibold text-deep mb-3">
                    {executive.name}
                  </h4>
                  
                  <div className="w-10 h-px bg-deep/10 group-hover:w-16 group-hover:bg-gold transition-all duration-500 mb-4"></div>
                  
                  <p className="text-sm leading-relaxed text-slate-600 flex-1">
                    {executive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 border-t border-deep/10 pt-12 text-center reveal">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-deep mb-4">
            Let's create your dream event together
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-slate-600 leading-relaxed">
            From intimate celebrations to grand luxury weddings, our team transforms your vision
            into unforgettable memories with creativity, elegance and flawless execution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/916303366066?text=Hello%20CGRS%20Elite%20Events%2C%20I%20would%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-deep px-8 py-3.5 font-medium text-white transition-all duration-300 hover:bg-gold hover:text-deep hover:shadow-lg rounded-full"
            >
              Book Consultation
            </a>
            <a
              href="#contact"
              className="inline-block border border-deep px-8 py-3.5 font-medium text-deep transition-all duration-300 hover:border-gold hover:text-gold hover:bg-gold/5 rounded-full"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;