import React from 'react';
import { MessageCircle, Palette, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '1',
      icon: MessageCircle,
      title: 'Consultation & Vision',
      description: 'We start by understanding your story, style, and aspirations to create a shared vision for your event.'
    },
    {
      number: '2',
      icon: Palette,
      title: 'Design & Planning',
      description: 'Our team crafts a detailed plan, from vendor selection to design mockups, ensuring every element is perfect.'
    },
    {
      number: '3',
      icon: CheckCircle,
      title: 'Flawless Execution',
      description: 'On the day of the event, we manage everything seamlessly so you can relax and enjoy the moment.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            Our Process
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            From concept to execution, we handle every detail with precision and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connection Line - Hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-amber-200 transform translate-x-1/2 z-0"></div>
              )}
              
              {/* Step Content */}
              <div className="relative z-10 bg-white">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <div className="mb-3 sm:mb-4">
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 mx-auto" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;