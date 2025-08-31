import React, { useState } from 'react';
import { Heart, Building2, Cake, Camera, ChefHat, Music, X } from 'lucide-react';

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'Complete wedding planning services from intimate ceremonies to grand celebrations.',
      features: ['Venue Selection', 'Decor & Styling', 'Vendor Coordination', 'Timeline Management'],
      image: 'https://i.pinimg.com/736x/e0/a0/99/e0a0995770731e4954c857c4824c12fc.jpg',
      color: 'bg-rose-100',
      iconColor: 'text-rose-600',
      detailedDescription: 'Our comprehensive wedding planning service takes care of every detail, ensuring your special day is exactly as you envisioned. From initial concept to the final send-off, we handle all logistics, coordination, and design elements.'
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Professional corporate event management for conferences, launches, and meetings.',
      features: ['Conference Planning', 'Product Launches', 'Team Building', 'Networking Events'],
      image: 'https://i.pinimg.com/736x/56/72/15/567215b40136b5b89bc6d3c6a84e6284.jpg',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
      detailedDescription: 'We specialize in creating professional corporate events that align with your business objectives. Our team ensures seamless execution from concept development to post-event analysis.'
    },
    {
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Memorable birthday celebrations tailored to your style and preferences.',
      features: ['Theme Planning', 'Entertainment', 'Custom Decor', 'Catering Service'],
      image: 'https://i.pinimg.com/736x/f4/cb/02/f4cb022e25fd08684623a06142cdc209.jpg',
      color: 'bg-amber-100',
      iconColor: 'text-amber-600',
      detailedDescription: 'Transform ordinary birthdays into extraordinary experiences with our personalized party planning services. We create events that reflect the celebrant\'s personality and interests.'
    },
    {
      icon: Camera,
      title: 'Photography & Videography',
      description: 'Professional photography and videography to capture your special moments.',
      features: ['Event Photography', 'Videography', 'Drone Coverage', 'Post-Production'],
      image: 'https://i.pinimg.com/736x/8d/6f/d7/8d6fd7d1d52081fa0a1ac95fc4620a45.jpg',
      color: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      detailedDescription: 'Our talented photographers and videographers capture the essence of your event with creative storytelling techniques. We provide high-quality visual content to preserve your memories.'
    },
    {
      icon: ChefHat,
      title: 'Catering Services',
      description: 'Exquisite catering services with customized menus for every occasion.',
      features: ['Custom Menus', 'Live Stations', 'Dietary Options', 'Service Staff'],
      image: 'https://i.pinimg.com/736x/6b/2f/9f/6b2f9f7c56806ebf5656d3a4406df45e.jpg',
      color: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      detailedDescription: 'Delight your guests with our gourmet catering services. Our expert chefs create customized menus using fresh, high-quality ingredients to suit any dietary preferences.'
    },
    {
      icon: Music,
      title: 'Entertainment & Music',
      description: 'Professional entertainment and music services to elevate your event.',
      features: ['DJ Services', 'Live Bands', 'Sound Systems', 'Lighting Design'],
      image: 'https://i.pinimg.com/736x/37/67/db/3767db863c1971a2db3c632cce15581f.jpg',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
      detailedDescription: 'Set the perfect atmosphere with our entertainment services. From live bands to DJs and complete audio-visual production, we provide the right entertainment for your event.'
    }
  ];

  const handleCardClick = (index) => {
    setSelectedService(services[index]);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

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
              className="relative bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-slate-100 cursor-pointer"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => handleCardClick(index)}
            >
              {/* Image with overlay */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${activeCard === index ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon with colored background */}
                <div className={`absolute top-4 left-4 w-12 h-12 ${service.color} rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110`}>
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>

                {/* Hover title overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1 transition-all duration-300 group-hover:translate-y-0 opacity-100">
                    {service.title}
                  </h3>
                  <div className={`h-0 overflow-hidden transition-all duration-500 group-hover:h-6`}>
                    <p className="text-sm font-medium text-amber-300">Click for details →</p>
                  </div>
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
                <div className="space-y-2 sm:space-y-3">
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

        {/* Modal for service details */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
              <div className="relative h-64 sm:h-80">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className={`w-14 h-14 ${selectedService.color} rounded-xl flex items-center justify-center shadow-md mb-4`}>
                    <selectedService.icon className={`w-7 h-7 ${selectedService.iconColor}`} />
                  </div>
                  <h3 className="text-3xl font-bold">{selectedService.title}</h3>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  {selectedService.detailedDescription}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">What We Offer</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={closeModal}
                  className="w-full py-3 px-6 bg-amber-600 text-white rounded-xl font-medium hover:bg-amber-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;