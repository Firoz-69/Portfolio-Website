import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-slate-800/50">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-brand-400">01.</span> About Me
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Hello! I'm Gokulnath G, a Software Developer with a deep passion for Generative AI and modern web applications. I enjoy building products that live at the intersection of great user experience and intelligent backend systems.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            Currently, I am working at <span className="text-brand-300 font-medium">Peninsular Research Operation</span>, where I contribute to innovative solutions and continue to expand my expertise in the AI landscape.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            My goal is to constantly push the boundaries of what's possible with LLMs, orchestrating agents, and building seamless interfaces that make AI accessible and useful.
          </p>
        </div>
        
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-64 w-64 bg-slate-800 rounded-2xl flex flex-col items-center justify-center border border-slate-700 overflow-hidden gap-3">
              <span className="text-8xl select-none" role="img" aria-label="Developer">👨‍💻</span>
              <span className="text-slate-400 text-sm font-mono tracking-wider">Gokulnath G</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
