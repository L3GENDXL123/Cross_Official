
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'process', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services" className="py-20 bg-white">
          <Services />
        </section>
        <section id="process" className="py-20 bg-slate-50">
          <Process />
        </section>
        <section id="contact" className="py-20 bg-slate-900 text-white">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
