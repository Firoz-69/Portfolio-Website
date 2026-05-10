import React from 'react';
import SkillOrbit from './SkillOrbit.jsx';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col lg:flex-row justify-center items-center pt-20 pb-10 gap-12 overflow-hidden">
      <div className="flex-1 flex flex-col items-start z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-6 fade-in-up" style={{animationDelay: '0.1s'}}>
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 fade-in-up min-h-[100px] md:min-h-[80px]" style={{animationDelay: '0.2s'}}>
          Hi, I'm <br className="block lg:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-accent">Gokulnath G</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-bold text-slate-400 mb-6 fade-in-up min-h-[64px] md:min-h-[40px]" style={{animationDelay: '0.3s'}}>
          <TypeAnimation
            sequence={[
              'Software Developer 1', 2000,
              'Passionate Gen AI Developer', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </h2>
        
        <p className="max-w-2xl text-lg text-slate-400 mb-10 fade-in-up" style={{animationDelay: '0.4s'}}>
          I build intelligent, scalable applications blending modern web technologies with cutting-edge Generative AI. Currently exploring the frontiers of AI at Peninsular Research Operation.
        </p>
        
        <div className="flex flex-wrap gap-4 fade-in-up" style={{animationDelay: '0.5s'}}>
          <a href="#projects" className="px-6 py-3 rounded-lg bg-white text-slate-950 font-semibold hover:bg-brand-50 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg bg-slate-800/50 text-white font-semibold border border-slate-700 hover:bg-slate-800 transition-colors">
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="flex-1 w-full flex justify-center fade-in-up z-10" style={{animationDelay: '0.6s'}}>
        <SkillOrbit />
      </div>
    </section>
  );
}
