
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-[#0f172a] tracking-tight leading-none">Cross<span className="text-blue-600">_web</span></span>
                <span className="text-[8px] font-black text-slate-400 tracking-[0.3em] uppercase mt-1">Digital Engineering</span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed font-medium">
              Building focused, high-performance web solutions for the next generation of startups. We turn complex ideas into simple digital realities.
            </p>
          </div>
          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-bold">
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Startups</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Portfolios</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Landing Pages</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Reach Out</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-bold">
              <li><a href="https://wa.me/2348028713828" className="hover:text-blue-600 transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Cross_web // Engineering Simple Success
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <span className="hover:text-blue-600 cursor-pointer">Privacy</span>
            <span className="hover:text-blue-600 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
