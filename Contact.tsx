
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', projectType: 'startup', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = "2348028713828";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission and then open WhatsApp
    const message = `Hi! My name is ${form.name}. I'm interested in a ${form.projectType} website. Details: ${form.details}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`${whatsappUrl}?text=${encodedMessage}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Ready to launch your simple site?</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            I specialize in focused 2-5 page websites. Whether it's for your startup or personal use, let's get you online today.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl">⚡</div>
              <div>
                <h4 className="font-bold">Fast Response</h4>
                <p className="text-slate-400 text-sm">Usually replies in less than an hour on WhatsApp.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl">🚀</div>
              <div>
                <h4 className="font-bold">Turnaround</h4>
                <p className="text-slate-400 text-sm">Typical delivery: 3-7 business days.</p>
              </div>
            </div>
          </div>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold text-xl transition-all shadow-xl shadow-green-900/20"
          >
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.136 1.379 4.791 1.38h.005c5.332 0 9.673-4.34 9.675-9.672 0-2.584-1.006-5.013-2.834-6.841-1.827-1.827-4.256-2.831-6.84-2.831-5.331 0-9.671 4.341-9.673 9.672-.001 1.705.444 3.369 1.29 4.836l-.998 3.646 3.73-.978l-.146-.086zm10.741-7.14c-.301-.15-1.782-.879-2.058-.979s-.477-.15-.678.15c-.201.3-.778.979-.954 1.179-.176.2-.351.225-.652.075s-1.271-.468-2.422-1.495c-.895-.798-1.5-1.783-1.676-2.083s-.019-.462.131-.611c.135-.134.301-.35.451-.525.15-.175.201-.3.301-.5s.15-.375.075-.525c-.075-.15-.678-1.635-.929-2.235-.245-.584-.493-.504-.678-.514-.175-.01-.376-.01-.576-.01s-.527.075-.803.375c-.276.3-1.054 1.029-1.054 2.509s1.079 2.909 1.229 3.109c.15.2 2.124 3.243 5.144 4.545.718.31 1.279.496 1.716.635.722.23 1.379.197 1.898.12.578-.085 1.782-.729 2.033-1.434.25-.705.25-1.31.176-1.434-.075-.125-.276-.2-.577-.35z"/>
            </svg>
            Message on WhatsApp
          </a>
        </div>

        <div className="bg-white text-slate-900 p-8 rounded-3xl">
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-2">Redirecting to WhatsApp...</h3>
              <p className="text-slate-600">If it didn't open, click the green button on the left.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-indigo-600 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Direct Inquiry</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">I want a...</label>
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({...form, projectType: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="startup">Startup Site</option>
                  <option value="personal">Personal Site</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="other">Other (2-5 Pages)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Details</label>
                <textarea
                  required
                  rows={3}
                  value={form.details}
                  onChange={(e) => setForm({...form, details: e.target.value})}
                  placeholder="Tell me briefly what you need..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
              >
                Send & Chat on WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
