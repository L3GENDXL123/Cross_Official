
import React from 'react';

const Services: React.FC = () => {
  const offerings = [
    {
      title: "Startup Launchpad",
      desc: "Perfect for new businesses. 3-4 pages covering your vision, services, and how to reach you.",
      icon: "🚀"
    },
    {
      title: "Personal Portfolio",
      desc: "A stunning 2-3 page site for freelancers, artists, or job seekers to showcase their best work.",
      icon: "✨"
    },
    {
      title: "Product Landing",
      desc: "Focused single or multi-page sites dedicated to converting visitors for a specific product launch.",
      icon: "🎯"
    },
    {
      title: "Local Business",
      desc: "5-page specialist sites for shops, restaurants, and local service providers.",
      icon: "🏠"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Focused Solutions</h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          Most modern startups don't need a complex 50-page site. They need a fast, mobile-friendly destination that works.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {offerings.map((item, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-white transition-all group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 p-8 bg-indigo-600 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold">Why keep it simple?</h4>
              <p className="text-indigo-100">Better SEO, faster load times, and higher conversion rates.</p>
          </div>
          <div className="text-3xl font-mono font-bold px-6 py-2 bg-white/10 rounded-xl border border-white/20">
              2-5 PAGES ONLY
          </div>
      </div>
    </div>
  );
};

export default Services;
