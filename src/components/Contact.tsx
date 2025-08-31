import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    eventLocation: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.facebook.com/people/CGRS-ELITE-Events/100067056378022/' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            We would love to hear from you. Please fill out the form below to get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-6 sm:mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Email</h4>
                  <p className="text-slate-600 text-sm sm:text-base">sunny@cgrselite.com
</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Phone</h4>
                  <p className="text-slate-600 text-sm sm:text-base">+91 6303366066</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Location</h4>
                  <p className="text-slate-600 text-sm sm:text-base"> Jyothi nagar,Hitech city near Hari hara temple Hyderabad 500018</p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4">Follow Us</h4>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group bg-slate-100 hover:bg-amber-600 text-slate-600 hover:text-white p-3 rounded-lg transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto"
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-slate-700 mb-2">
                    Event Date (Optional)
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="eventLocation" className="block text-sm font-medium text-slate-700 mb-2">
                  Event Location (Optional)
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  placeholder="City, State"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Tell us about your event
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your vision, requirements, and any questions you have."
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;