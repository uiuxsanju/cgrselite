import React from 'react';
import { Star, Quote, Users, Award, Calendar, Heart } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { useReveal } from '../hooks/useReveal';

const testimonials = [
  {
    quote:
      'CGRS Elite and KMK Events flawlessly managed the Telangana Government Pushkaralu arrangements with exceptional coordination and professionalism.',
    author: 'Government Collaboration',
    event: 'Sarasvati Pushkaram',
    type: 'government',
  },
  {
    quote:
      'Every detail was perfectly organized, from VIP protocol to event execution. Highly professional and reliable.',
    author: 'Government Client',
    event: 'Official Event',
    type: 'government',
  },
  {
    quote:
      'Our wedding was beautifully planned with elegant décor and smooth coordination. We could not have asked for a better team.',
    author: 'Sunitha & Mahesh',
    event: 'Wedding Celebration',
    type: 'wedding',
  },
];

const stats = [
  { number: '100+', label: 'Events Executed', icon: Calendar },
  { number: 'Trusted', label: 'Government Projects', icon: Award },
  { number: '100%', label: 'Client Satisfaction', icon: Heart },
];

const Testimonials = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-16 sm:py-20 lg:py-28 bg-[#FAF7F0] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-deep/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Premium */}
        <div className="text-center mb-14 sm:mb-20 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-gold"></span>
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Testimonials</span>
            <span className="h-px w-8 bg-gold"></span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-deep leading-tight">
            What Our Clients
            <span className="italic font-luxury text-gold"> Say About Us</span>
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real stories from clients who trusted us with their most important moments.
          </p>
          
          <div className="mt-6 h-px w-20 bg-gold mx-auto"></div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-14 sm:mb-20 reveal">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center bg-white/50 backdrop-blur-sm border border-deep/5 rounded-xl p-4 sm:p-6 transition-all duration-500 hover:shadow-lg hover:border-gold/20 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex justify-center mb-2">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <p className="font-display text-2xl sm:text-3xl font-semibold text-deep">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm text-slate-500">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14 sm:mb-20">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="reveal group bg-white/60 backdrop-blur-sm border border-deep/5 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:shadow-xl hover:border-gold/30 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-gold/30 fill-gold/10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-slate-600 text-[15px] leading-relaxed italic mb-6">
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-deep/5 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold font-semibold text-sm">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep text-sm">
                      {item.author}
                    </h4>
                    <p className="text-xs text-gold/80 font-medium">
                      {item.event}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="reveal">
          <div className="relative overflow-hidden bg-gradient-to-br from-deep to-deep/95 rounded-2xl p-8 sm:p-12 shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              {/* Rating */}
              <div className="flex justify-center items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-gold text-gold"
                  />
                ))}
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-2">
                5.0 Rating
              </h3>

              <p className="text-gray-300 mb-6 max-w-md mx-auto">
                Trusted by Government Organizations, Corporate Clients &amp; Families across Hyderabad and Visakhapatnam.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/916303366066?text=Hello%20CGRS%20Elite%20Events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-deep font-medium transition-all duration-300 hover:bg-champagne hover:shadow-xl hover:shadow-gold/20"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Plan Your Event</span>
                </a>
                
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-gold"
                >
                  <span>Contact Us</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Users className="h-4 w-4 text-gold" />
                  <span>500+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Award className="h-4 w-4 text-gold" />
                  <span>50+ Government Events</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="h-4 w-4 text-gold" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;