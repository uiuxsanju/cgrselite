import React from 'react';
import { Heart, Building2, Cake, Camera, ChefHat, Music } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'Complete wedding planning services from intimate ceremonies to grand celebrations.',
      features: ['Venue Selection', 'Decor & Styling', 'Vendor Coordination', 'Timeline Management'],
      image: 'https://i.pinimg.com/736x/e0/a0/99/e0a0995770731e4954c857c4824c12fc.jpg'
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Professional corporate event management for conferences, launches, and meetings.',
      features: ['Conference Planning', 'Product Launches', 'Team Building', 'Networking Events'],
      image: 'https://i.pinimg.com/736x/56/72/15/567215b40136b5b89bc6d3c6a84e6284.jpg'
    },
    {
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Memorable birthday celebrations tailored to your style and preferences.',
      features: ['Theme Planning', 'Entertainment', 'Custom Decor', 'Catering Service'],
      image: 'https://i.pinimg.com/736x/f4/cb/02/f4cb022e25fd08684623a06142cdc209.jpg'
    },
    {
      icon: Camera,
      title: 'Photography & Videography',
      description: 'Professional photography and videography to capture your special moments.',
      features: ['Event Photography', 'Videography', 'Drone Coverage', 'Post-Production'],
      image: 'https://i.pinimg.com/736x/8d/6f/d7/8d6fd7d1d52081fa0a1ac95fc4620a45.jpg'
    },
    {
      icon: ChefHat,
      title: 'Catering Services',
      description: 'Exquisite catering services with customized menus for every occasion.',
      features: ['Custom Menus', 'Live Stations', 'Dietary Options', 'Service Staff'],
      image: 'https://i.pinimg.com/736x/6b/2f/9f/6b2f9f7c56806ebf5656d3a4406df45e.jpg'
    },
    {
      icon: Music,
      title: 'Entertainment & Music',
      description: 'Professional entertainment and music services to elevate your event.',
      features: ['DJ Services', 'Live Bands', 'Sound Systems', 'Lighting Design'],
      image: 'https://i.pinimg.com/736x/37/67/db/3767db863c1971a2db3c632cce15581f.jpg'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive event planning services tailored to create unforgettable experiences
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all duration-300"></div>
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs sm:text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 sm:mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                  

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;