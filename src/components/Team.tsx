import React, { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { useReveal } from '../hooks/useReveal';

const leadership = {
  leaders: [
    {
      name: 'Sunny',
      fullName: 'Sunil Kumar Palli',
      role: 'Founder',
      image: '/team/sunny.jpg',
      description:
        'Founder of CGRS Elite Events, Sunny built the company from the ground up — establishing the vision, standards, and client trust the brand is known for across Hyderabad and Visakhapatnam.',
    },
    {
  name: 'Thanusha P',
  role: 'Managing Director',
  image: '/team/thanusha.jpg',
  description:
    'Leads business operations, strategic growth, and client relationships, ensuring every CGRS Elite Events experience reflects excellence, precision, and distinction.',
},
  ],
  executives: [
    {
      name: 'Mahadev',
      role: 'Event & client Relationship Manager',
      image: '/team/mahadev.jpg',
      description:
        'Manages client consultations, event planning, vendor coordination, and scheduling to ensure every event runs smoothly.',
    },
    {
      name: 'Bhargav Mavuluri',
      role: 'Event & Relationship Manager',
      image: '/team/bhargav-mavuluri.jpg',
      description:
        'Manages consultations, event planning, vendor coordination, and scheduling to ensure every event runs smoothly.',
    },
    {
      name: 'Meghana',
      role: 'Creative Director',
      image: '/team/meghana.jpg',
      description:
        "Develops creative themes, stage designs, and décor concepts that reflect each client's visions.",
    },
    {
      name: 'Mani Kumar',
      role: 'Social Media & Production Manager',
      image: '/team/mani-kumar.jpg',
      description:
        'Responsible for photography, videography, production management, social media campaigns, reels, branding and digital promotions.',
    },
    {
      name: 'Karthik.N',
      role: 'On-Site  Manager',
      image: '/team/karthik-n.jpg',
      description:
        'Manages client consultations, event planning, vendor coordination, and scheduling to ensure every event runs smoothly.',
    },
   
    
   
    {
      name: 'Sanju Mutchakarla',
      role: 'website & Designer',
      image: '/team/sanju.jpg',
      description:
        'Digital marketing, social media, graphic design, and website management.',
      linkedin: 'https://www.linkedin.com/in/sanju-mutchakarla-b85971361',
    },
  ],
};

/**
 * Avatar — shows the photo if it loads, otherwise falls back to a
 * two-letter monogram on a soft gold field. Drop real photos into
 * /public/team/<file>.jpg matching the `image` paths above and
 * they'll swap in automatically — no code change needed.
 *
 * shape="portrait" → tall framed photo (leadership tier)
 * shape="circle"   → classic headshot circle (executive tier)
 */
const Avatar: React.FC<{
  src?: string;
  name: string;
  shape?: 'circle' | 'portrait';
  className?: string;
}> = ({ src, name, shape = 'circle', className = '' }) => {
  const [errored, setErrored] = useState(false);

  const words = name.replace(/[().]/g, ' ').split(' ').filter(Boolean);
  const initials =
    words.length > 1
      ? `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase()
      : (words[0]?.[0] ?? '').toUpperCase();

  const shapeClass = shape === 'portrait' ? 'rounded-2xl aspect-[4/5]' : 'rounded-full aspect-square';

  if (!src || errored) {
    return (
      <div
        className={`flex items-center justify-center bg-gold/25 border border-gold/30 text-deep font-display font-semibold tracking-wide ${shapeClass} ${className}`}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setErrored(true)}
      className={`object-cover ${shapeClass} ${className}`}
    />
  );
};

const Team = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="team" ref={ref} className="bg-[#FAF7F0] py-16 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 sm:mb-20 max-w-2xl reveal">
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

        {/* Leadership — Founder & Managing Director */}
        <div className="reveal grid gap-6 lg:grid-cols-2 items-stretch">
          {leadership.leaders.map((leader) => (
            <div
              key={leader.name}
              className="relative overflow-hidden bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-7 sm:p-9 shadow-sm hover:shadow-md hover:bg-gold/[0.14] transition-all duration-500"
            >
              {/* Decorative accent */}
              <div className="pointer-events-none absolute top-0 right-0 w-56 h-56 bg-deep/[0.04] rounded-full -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
                {/* Framed portrait */}
                <div className="w-32 sm:w-36 flex-shrink-0 p-2 rounded-[1.5rem] border border-gold/30 bg-[#FAF7F0] shadow-sm">
                  <Avatar
                    src={leader.image}
                    name={leader.name}
                    shape="portrait"
                    className="w-full text-2xl"
                  />
                </div>

                <div className="pt-1">
                  <span className="inline-block bg-deep/10 text-deep text-xs tracking-[0.3em] uppercase font-semibold px-5 py-2 rounded-full mb-4">
                    {leader.role}
                  </span>

                  <div className="mb-4">
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-deep leading-snug">
                      {leader.name}
                    </h3>
                    {leader.fullName && (
                      <p className="text-sm text-slate-500 italic mt-1">{leader.fullName}</p>
                    )}
                  </div>

                  <p className="text-[15px] leading-relaxed text-slate-600">{leader.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tier divider */}
        <div className="reveal flex items-center gap-4 my-14 sm:my-16">
          <div className="flex-1 h-px bg-deep/10"></div>
          <span className="h-1.5 w-1.5 rotate-45 bg-gold"></span>
          <h3 className="font-display text-lg sm:text-xl font-semibold text-deep whitespace-nowrap">
            Executive Team
          </h3>
          <span className="h-1.5 w-1.5 rotate-45 bg-gold"></span>
          <div className="flex-1 h-px bg-deep/10"></div>
        </div>

        {/* Executive Team */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.executives.map((executive, index) => (
            <div
              key={executive.name}
              className="reveal group bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 sm:p-8 text-center transition-all duration-400 hover:shadow-lg hover:bg-gold/[0.16] hover:border-gold/35 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center h-full">
                <div className="relative mb-5">
                  <Avatar
                    src={executive.image}
                    name={executive.name}
                    shape="circle"
                    className="h-24 w-24 sm:h-28 sm:w-28 text-xl ring-2 ring-gold/25 group-hover:ring-gold/60 transition-all duration-500"
                  />
                  {executive.linkedin && (
                    <a
                      href={executive.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${executive.name} on LinkedIn`}
                      className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF7F0] border border-deep/10 text-deep/60 shadow-sm transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white"
                    >
                      <FaLinkedinIn className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>

                <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold mb-2">
                  {executive.role}
                </span>

                <h4 className="font-display text-xl sm:text-2xl font-semibold text-deep mb-3">
                  {executive.name}
                </h4>

                <div className="w-10 h-px bg-deep/15 group-hover:w-16 group-hover:bg-gold transition-all duration-500 mb-4"></div>

                <p className="text-sm leading-relaxed text-slate-600 flex-1">{executive.description}</p>
              </div>
            </div>
          ))}
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