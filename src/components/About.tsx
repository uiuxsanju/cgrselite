import React from 'react';
import { FaMapPin, FaCalendarCheck, FaStar, FaHeart, FaUsers, FaAward } from 'react-icons/fa6';
import { useReveal } from '../hooks/useReveal';

const values = [
  {
    title: 'Passion',
    description: 'Meticulous attention to detail in every event we craft.',
    icon: FaHeart,
  },
  {
    title: 'Expertise',
    description: 'Creative professionals delivering excellence at every step.',
    icon: FaStar,
  },
  {
    title: 'Custom',
    description: 'Personalized events designed around your unique story.',
    icon: FaUsers,
  },
];

const addresses = [
  {
    city: 'Hyderabad',
    details: 'Jyothi Nagar, Hitech City, near Hari Hara Temple, Hyderabad — 500018',
    icon: FaMapPin,
  },
  {
    city: 'Visakhapatnam',
    details: 'Sai Soudha Apartment, Road No. 3, Sathavahana Nagar, Kurmannapalem, Visakhapatnam',
    icon: FaMapPin,
  },
];

const stats = [
  { number: '4+', label: 'Years of Excellence' },
  { number: '100+', label: 'Events Executed' },
  { number: '98%', label: 'Client Satisfaction' },
];

const About = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="bg-[#FAF7F0] py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Image with premium styling */}
          <div className="reveal relative group">
            {/* Premium frame with gradient */}
            <div className="absolute -inset-2 bg-gradient-to-br from-gold/30 to-gold/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative">
              {/* Offset gold frame with rounded corners */}
              <div className="absolute -left-4 -top-4 h-full w-full border-2 border-gold/40 rounded-2xl sm:-left-6 sm:-top-6"></div>
              
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://i.pinimg.com/736x/bf/8f/7a/bf8f7ae1ee389f3291449ecb540b0973.jpg"
                  alt="CGRS Elite Events planning team at work"
                  className="h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[440px]"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Premium stats badge */}
              <div className="absolute -bottom-6 -right-6 bg-deep px-6 py-5 rounded-2xl shadow-2xl border border-gold/20 sm:px-8 sm:py-6">
                <div className="flex items-center gap-6">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-display text-xl sm:text-2xl text-gold font-semibold">
                        {stat.number}
                      </p>
                      <p className="text-[10px] tracking-[0.15em] uppercase text-champagne/80">
                        {stat.label}
                      </p>
                      {index < stats.length - 1 && (
                        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-px h-8 bg-gold/20"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="reveal">
              {/* Premium header with accent */}
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-gold"></span>
                <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">About Us</span>
                <span className="h-px w-8 bg-gold"></span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-deep leading-tight">
                Premier event planners in
                <span className="italic font-luxury text-gold"> Hyderabad & Vizag</span>
              </h2>
              
              <div className="mt-6 h-px w-20 bg-gold"></div>
              
              <p className="mt-6 text-slate-600 leading-relaxed text-[15px] sm:text-base">
                We create unforgettable experiences with perfect execution. Serving Hyderabad and
                Visakhapatnam, our team delivers exceptional weddings and corporate events with
                precision and creativity.
              </p>
            </div>

            {/* Values — Premium cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="group bg-white/60 backdrop-blur-sm border border-deep/5 rounded-xl p-5 transition-all duration-500 hover:shadow-lg hover:border-gold/20 hover:-translate-y-1 reveal"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 group-hover:bg-gold transition-colors duration-500">
                        <Icon className="h-5 w-5 text-gold group-hover:text-white transition-colors duration-500" />
                      </div>
                    </div>
                    <h3 className="font-display text-base font-semibold text-deep mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Locations — Premium styled */}
            <div className="grid gap-4 sm:grid-cols-2 reveal">
              {addresses.map((address) => {
                const Icon = address.icon;
                return (
                  <div 
                    key={address.city} 
                    className="group bg-white/40 backdrop-blur-sm border border-deep/5 rounded-xl p-5 transition-all duration-500 hover:shadow-md hover:border-gold/20"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-4 w-4 text-gold" />
                      <h4 className="text-[11px] tracking-[0.25em] uppercase text-gold font-medium">
                        {address.city}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 pl-6">
                      {address.details}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pt-2 reveal">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="h-4 w-4 text-gold fill-gold" />
                ))}
              </div>
              <span className="text-sm text-slate-600">
                Trusted by <span className="font-semibold text-deep">500+</span> happy clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;