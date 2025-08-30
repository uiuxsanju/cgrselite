import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "CGRS, along with KMK Events, flawlessly managed the entire Telangana Pushkaralu arrangements. Their coordination with government officials and exceptional attention to pilgrim needs were truly commendable.",
      event: "Sarasvati Pushkaram",
      rating: 5
    },
    {
      quote: "Our government event in Hyderabad was executed with military precision. From protocol management to VIP arrangements, every detail was perfect.",
      author: "IAS Officer, Andhra Pradesh",
      event: "Government Function",
      rating: 5
    },
    

    {
      quote: "The Vizag beach wedding they organized surpassed all our expectations. They blended modern elegance with traditional Andhra customs beautifully.",
      author: "Sunitha & Mahesh",
      event: "Vizag Wedding",
      rating: 5
    },
   
    
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Our Prestigious Collaborations
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by Government and Families across Andhra & Telangana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-slate-700/70 transition-all duration-300">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-200">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-slate-600 pt-4">
                <cite className="font-semibold text-white not-italic text-sm sm:text-base">
                  {testimonial.author}
                </cite>
                <p className="text-amber-500 text-xs sm:text-sm mt-1">
                  {testimonial.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;