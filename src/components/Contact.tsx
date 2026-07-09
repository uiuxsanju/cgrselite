import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa6';
import { useReveal } from '../hooks/useReveal';

const socialLinks = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://www.instagram.com/cgrseliteevents',
  },
  {
    name: 'Facebook',
    icon: FaFacebookF,
    href: 'https://www.facebook.com/people/CGRS-ELITE-Events/100067056378022/',
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    href: 'https://wa.me/916303366066',
  },
];

const inputClass =
  'w-full border-0 border-b border-deep/20 bg-transparent px-0 py-3 text-[15px] text-deep placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-0 transition-colors duration-300';

const labelClass = 'block text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-1';

const Contact = () => {
  const ref = useReveal<HTMLElement>();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    eventLocation: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'Hello CGRS Elite Events, I would like to plan an event.',
      '',
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      formData.phone && `Phone: ${formData.phone}`,
      formData.eventDate && `Event Date: ${formData.eventDate}`,
      formData.eventLocation && `Location: ${formData.eventLocation}`,
      '',
      formData.message,
    ]
      .filter(Boolean)
      .join('\n');
    window.open(
      `https://wa.me/916303366066?text=${encodeURIComponent(lines)}`,
      '_blank'
    );
  };

  return (
    <section id="contact" ref={ref} className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16 max-w-2xl reveal">
          <p className="eyebrow mb-4">Get In Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-deep leading-tight">
            Let’s plan something
            <span className="italic font-luxury"> beautiful</span>
          </h2>
          <div className="mt-6 h-px w-20 bg-gold"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          {/* Info panel */}
          <div className="reveal">
            <div className="bg-deep p-8 sm:p-10 text-white h-full">
              <h3 className="font-display text-xl sm:text-2xl font-semibold mb-8">
                Contact Information
              </h3>

              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-gold/40">
                    <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-champagne/70 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:sunny@cgrselite.com"
                      className="text-sm sm:text-base text-gray-200 hover:text-gold transition-colors"
                    >
                      sunny@cgrselite.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-gold/40">
                    <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-champagne/70 mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+916303366066"
                      className="text-sm sm:text-base text-gray-200 hover:text-gold transition-colors"
                    >
                      +91 63033 66066
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-gold/40">
                    <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-champagne/70 mb-1">
                      Location
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                      Jyothi Nagar, Hitech City, near Hari Hara Temple, Hyderabad — 500018
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-[11px] tracking-[0.2em] uppercase text-champagne/70 mb-4">
                  Follow Us
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-11 w-11 items-center justify-center border border-white/15 text-gray-300 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-deep"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="eventDate" className={labelClass}>
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="eventLocation" className={labelClass}>
                  Event Location
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  placeholder="City, venue (if decided)"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Tell Us About Your Event *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your vision, requirements, and any questions you have."
                  rows={4}
                  className={`${inputClass} resize-none`}
                  required
                ></textarea>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 bg-deep px-10 py-4 font-medium text-white transition-colors duration-300 hover:bg-gold hover:text-deep"
                >
                  <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                  Send via WhatsApp
                </button>
                <p className="text-xs text-slate-500">
                  Your details open in WhatsApp — just press send.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;