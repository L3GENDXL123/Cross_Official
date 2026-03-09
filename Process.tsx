
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      title: "Briefing",
      desc: "We discuss your goals and choose your 2-5 key pages."
    },
    {
      title: "Design",
      desc: "I create a modern, minimalist layout aligned with your brand."
    },
    {
      title: "Build",
      desc: "Fast coding using the latest tech for speed and reliability."
    },
    {
      title: "Launch",
      desc: "Deployment to your domain. You're online in days, not months."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How I Work</h2>
        <p className="text-slate-600">Simple projects deserve a simple process.</p>
      </div>

      <div className="relative">
        {/* Connection line for desktop */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 -z-10"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-100">
                <span className="text-indigo-600 font-bold text-xl">{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
