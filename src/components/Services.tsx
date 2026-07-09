import React, { useState } from 'react';
import { Heart, Building2, Cake, Camera, ChefHat, Music } from 'lucide-react';

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'Complete wedding planning services from intimate ceremonies to grand celebrations.',
      features: ['Venue Selection', 'Decor & Styling', 'Vendor Coordination', 'Timeline Management'],
      image: 'https://i.pinimg.com/736x/e0/a0/99/e0a0995770731e4954c857c4824c12fc.jpg',
      color: 'bg-rose-100',
      iconColor: 'text-rose-600'
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Professional corporate event management for conferences, launches, and meetings.',
      features: ['Conference Planning', 'Product Launches', 'Team Building', 'Networking Events'],
      image: 'https://i.pinimg.com/736x/56/72/15/567215b40136b5b89bc6d3c6a84e6284.jpg',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Memorable birthday celebrations tailored to your style and preferences.',
      features: ['Theme Planning', 'Entertainment', 'Custom Decor', 'Catering Service'],
      image: 'https://i.pinimg.com/736x/f4/cb/02/f4cb022e25fd08684623a06142cdc209.jpg',
      color: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      icon: Camera,
      title: 'Photography & Videography',
      description: 'Professional photography and videography to capture your special moments.',
      features: ['Event Photography', 'Videography', 'Drone Coverage', 'Post-Production'],
      image: 'https://i.pinimg.com/736x/8d/6f/d7/8d6fd7d1d52081fa0a1ac95fc4620a45.jpg',
      color: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      icon: ChefHat,
      title: 'Catering Services',
      description: 'Exquisite catering services with customized menus for every occasion.',
      features: ['Custom Menus', 'Live Stations', 'Dietary Options', 'Service Staff'],
      image: 'https://i.pinimg.com/736x/6b/2f/9f/6b2f9f7c56806ebf5656d3a4406df45e.jpg',
      color: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Music,
      title: 'Entertainment & Music',
      description: 'Professional entertainment and music services to elevate your event.',
      features: ['DJ Services', 'Live Bands', 'Sound Systems', 'Lighting Design'],
      image: 'https://i.pinimg.com/736x/37/67/db/3767db863c1971a2db3c632cce15581f.jpg',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            Our <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive event planning services tailored to create unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-slate-100 ${activeCard === index ? 'ring-2 ring-amber-500' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              {/* Image with overlay */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${hoveredCard === index ? 'scale-105' : ''}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-90'}`}></div>
                
                {/* Icon with colored background */}
                <div className={`absolute top-4 left-4 w-10 h-10 ${service.color} rounded-lg flex items-center justify-center shadow-sm`}>
                  <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-5 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features list */}
                <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm sm:text-base text-slate-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
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
