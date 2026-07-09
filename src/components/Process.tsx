import React, { useState, useEffect } from 'react';
import { MessageCircle, Palette, CheckCircle, ArrowRight } from 'lucide-react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      number: '1',
      icon: MessageCircle,
      title: 'Consultation & Vision',
      description: 'We start by understanding your story, style, and aspirations to create a shared vision for your event.',
      details: ['In-depth discovery session', 'Budget planning & timeline', 'Theme conceptualization', 'Venue selection guidance'],
      color: 'bg-blue-500'
    },
    {
      number: '2',
      icon: Palette,
      title: 'Design & Planning',
      description: 'Our team crafts a detailed plan, from vendor selection to design mockups, ensuring every element is perfect.',
      details: ['Custom design development', 'Vendor coordination', 'Detailed timeline creation', 'Design mockups & revisions'],
      color: 'bg-purple-500'
    },
    {
      number: '3',
      icon: CheckCircle,
      title: 'Flawless Execution',
      description: 'On the day of the event, we manage everything seamlessly so you can relax and enjoy the moment.',
      details: ['Day-of coordination', 'Vendor management', 'Timeline execution', 'Problem resolution'],
      color: 'bg-amber-500'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => setActiveStep(prev => (prev + 1) % steps.length), 4000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '916303366066'; // +91 6303366066
    const message = "Hello! I'm interested in your event planning services and would like to learn more.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">Process</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            From concept to execution, we handle every detail with precision and care.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block relative mb-16">
          <div className="absolute left-10 right-10 top-10 h-1 bg-slate-200 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
          <div className="grid grid-cols-3 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${activeStep === index ? 'scale-110 shadow-lg' : 'scale-100 shadow-md'} ${step.color} text-white`}
                  onClick={() => setActiveStep(index)}
                >
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="text-center px-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold ${step.color}`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-600 mb-4">{step.description}</p>
                  <ul className="text-left text-sm text-slate-700 space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center sm:items-start transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center sm:mr-6 mb-4 sm:mb-0">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${step.color} text-white shadow-lg`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${step.color}`}>
                  {step.number}
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600 mb-4">{step.description}</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && (
                <div className="my-4 sm:hidden flex justify-center">
                  <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeStep === index ? 'bg-amber-500 scale-125' : 'bg-slate-300'}`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
            Let's transform your vision into an unforgettable experience
          </p>
          <p className="text-amber-100 text-sm mb-6">
            Click to chat with us directly on WhatsApp
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-amber-600 font-semibold py-3 px-8 rounded-full hover:bg-amber-50 transition-colors shadow-md flex items-center justify-center mx-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
            </svg>
            Start Planning Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
