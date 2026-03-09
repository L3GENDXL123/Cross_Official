
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-44 pb-28 overflow-hidden bg-white">
      {/* Dynamic tech background pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
         <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] rounded-full bg-blue-100 blur-[150px]"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-indigo-50 blur-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.4em] mb-10 border border-blue-100 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
          Now accepting projects • Always Online
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-[#0f172a] mb-10 tracking-tighter leading-[0.85] uppercase">
          Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Architects.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
          At <span className="text-blue-600 font-bold">Cross_web</span>, we turn your startup vision into high-performance 2-to-5 page digital platforms. Simple code, massive impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-12 py-5 bg-[#0f172a] text-white rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-900/20 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Build
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <a 
            href="https://wa.me/2348028713828"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black text-lg hover:border-blue-600 transition-all flex items-center gap-3 shadow-sm hover:shadow-md"
          >
            <svg className="w-6 h-6 text-green-500 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.136 1.379 4.791 1.38h.005c5.332 0 9.673-4.34 9.675-9.672 0-2.584-1.006-5.013-2.834-6.841-1.827-1.827-4.256-2.831-6.84-2.831-5.331 0-9.671 4.341-9.673 9.672-.001 1.705.444 3.369 1.29 4.836l-.998 3.646 3.73-.978l-.146-.086zm10.741-7.14c-.301-.15-1.782-.879-2.058-.979s-.477-.15-.678.15c-.201.3-.778.979-.954 1.179-.176.2-.351.225-.652.075s-1.271-.468-2.422-1.495c-.895-.798-1.5-1.783-1.676-2.083s-.019-.462.131-.611c.135-.134.301-.35.451-.525.15-.175.201-.3.301-.5s.15-.375.075-.525c-.075-.15-.678-1.635-.929-2.235-.245-.584-.493-.504-.678-.514-.175-.01-.376-.01-.576-.01s-.527.075-.803.375c-.276.3-1.054 1.029-1.054 2.509s1.079 2.909 1.229 3.109c.15.2 2.124 3.243 5.144 4.545.718.31 1.279.496 1.716.635.722.23 1.379.197 1.898.12.578-.085 1.782-.729 2.033-1.434.25-.705.25-1.31.176-1.434-.075-.125-.276-.2-.577-.35z"/>
            </svg>
            WhatsApp
          </a>
        </div>
        
        <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[10px] font-black tracking-widest uppercase text-blue-600">CAPACITY</span>
              <span className="text-2xl font-black">2-5 PAGES</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[10px] font-black tracking-widest uppercase text-blue-600">TECH</span>
              <span className="text-2xl font-black">REACT 19</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[10px] font-black tracking-widest uppercase text-blue-600">PERFORMANCE</span>
              <span className="text-2xl font-black">100 SCORE</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[10px] font-black tracking-widest uppercase text-blue-600">AVAILABILITY</span>
              <span className="text-2xl font-black">OPEN NOW</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
