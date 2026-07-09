import React from 'react';
import { Users, Award, Heart, MapPin } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Meticulous attention to detail in every event'
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'Creative professionals delivering excellence'
    },
    {
      icon: Award,
      title: 'Custom',
      description: 'Personalized events for your unique story'
    }
  ];

  const addresses = [
    {
      city: 'Hyderabad',
      details: 'Jyothi nagar,Hitech city near Hari hara temple Hyderabad 500018'
    },
    {
      city: 'Visakhapatnam',
      details: 'Sai Soudha Apartment is located on Road Number 3 in Sathavahana Nagar, Kurmannapalem, Visakhapatnam,'
    }
  ];

  return (
    <section id="about" className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              About Us
            </h2>
            <p className="text-lg text-amber-600 mb-4 font-semibold">
              Premier Event Planners in Hyderabad & Vizag
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We create unforgettable experiences with perfect execution. Serving Hyderabad and Visakhapatnam, 
              our team delivers exceptional weddings and corporate events with precision and creativity.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <feature.icon className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-slate-800 mb-2">Our Locations</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                {addresses.map((address, index) => (
                  <div key={index} className="bg-white p-3 rounded shadow-sm flex-1">
                    <h4 className="font-medium text-amber-600 text-sm">{address.city}</h4>
                    <p className="text-xs text-slate-600 mt-1">{address.details}</p>
                  </div>
                ))}
              </div>
            </div>

            
           
          </div>

          {/* Image */}
          <div className="relative h-full min-h-[300px]">
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://i.pinimg.com/736x/bf/8f/7a/bf8f7ae1ee389f3291449ecb540b0973.jpg"
                alt="Event planning team"
                className="w-full h-full object-cover"
              />
            </div>
            
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;