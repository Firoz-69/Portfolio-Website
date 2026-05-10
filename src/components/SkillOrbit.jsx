import React from 'react';
import { FaReact, FaAngular, FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { SiDotnet, SiTailwindcss } from 'react-icons/si';
import { TbBrain, TbNetwork } from 'react-icons/tb';

export default function SkillOrbit() {
  const SkillNode = ({ Icon, name, colorClass, positionClass, reverseAnimClass, hoverBorderClass, hoverShadowClass }) => {
    return (
      <div className={`absolute ${positionClass} z-20`}>
        <div className={`${reverseAnimClass}`}>
          <div 
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center transition-all duration-300 group cursor-pointer hover:scale-125 ${hoverBorderClass} hover:ring-2 hover:ring-current ${hoverShadowClass}`}
          >
            <Icon className={`w-5 h-5 md:w-6 md:h-6 ${colorClass}`} />
            
            {/* White text tooltip */}
            <div className={`absolute top-full mt-2 px-2 py-1 bg-slate-800 text-white font-semibold text-xs rounded shadow-lg border border-slate-700 whitespace-nowrap transition-all duration-300 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 z-50`}>
              {name}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-[260px] h-[260px] md:w-[360px] md:h-[360px] lg:w-[460px] lg:h-[460px] flex items-center justify-center mt-10 lg:mt-0">
      
      {/* Outer Orbit (20s) */}
      <div className="absolute w-full h-full rounded-full border border-slate-700/50 animate-[spin_20s_linear_infinite]">
        <SkillNode 
          Icon={FaPython} name="Python" colorClass="text-yellow-400" 
          positionClass="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" 
          reverseAnimClass="animate-[spin_20s_linear_infinite_reverse]"
          hoverBorderClass="hover:border-yellow-400" hoverShadowClass="hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]"
        />
        <SkillNode 
          Icon={SiDotnet} name="C#" colorClass="text-purple-500" 
          positionClass="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" 
          reverseAnimClass="animate-[spin_20s_linear_infinite_reverse]"
          hoverBorderClass="hover:border-purple-500" hoverShadowClass="hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        />
        <SkillNode 
          Icon={FaReact} name="React" colorClass="text-blue-400" 
          positionClass="top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" 
          reverseAnimClass="animate-[spin_20s_linear_infinite_reverse]"
          hoverBorderClass="hover:border-blue-400" hoverShadowClass="hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]"
        />
        <SkillNode 
          Icon={SiTailwindcss} name="Tailwind" colorClass="text-teal-400" 
          positionClass="top-1/2 right-0 translate-x-1/2 -translate-y-1/2" 
          reverseAnimClass="animate-[spin_20s_linear_infinite_reverse]"
          hoverBorderClass="hover:border-teal-400" hoverShadowClass="hover:shadow-[0_0_15px_rgba(45,212,191,0.5)]"
        />
      </div>

      {/* Middle Orbit (15s) */}
      <div className="absolute w-[70%] h-[70%] rounded-full border border-slate-700/50 animate-[spin_15s_linear_infinite]">
        <SkillNode 
          Icon={FaAngular} name="Angular" colorClass="text-red-500" 
          positionClass="top-[14%] left-[14%] -translate-x-1/2 -translate-y-1/2" 
          reverseAnimClass="animate-[spin_15s_linear_infinite_reverse]"
          hoverBorderClass="hover:border-red-500" hoverShadowClass="hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
        />
        <SkillNode 
          Icon={FaNodeJs} name="Node.js" colorClass="text-green-500" 
          positionClass="bottom-[14%] right-[14%] translate-x-1/2 translate-y-1/2" 
          reverseAnimClass="animate-[spin_15s_linear_infinite_reverse]"
          hoverBorderClass="hover:border-green-500" hoverShadowClass="hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]"
        />
        <SkillNode 
          Icon={FaJava} name="Java" colorClass="text-orange-500" 
          positionClass="bottom-[14%] left-[14%] -translate-x-1/2 translate-y-1/2" 
          reverseAnimClass="animate-[spin_15s_linear_infinite_reverse]"
          hoverBorderClass="hover:border-orange-500" hoverShadowClass="hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]"
        />
      </div>

      {/* Inner Orbit (10s) */}
      <div className="absolute w-[40%] h-[40%] rounded-full border border-slate-700/50 animate-[spin_10s_linear_infinite]">
        <SkillNode 
          Icon={TbNetwork} name="LangChain" colorClass="text-green-300" 
          positionClass="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" 
          reverseAnimClass="animate-[spin_10s_linear_infinite_reverse]"
          hoverBorderClass="hover:border-green-300" hoverShadowClass="hover:shadow-[0_0_15px_rgba(134,239,172,0.5)]"
        />
        <SkillNode 
          Icon={TbBrain} name="LangGraph" colorClass="text-purple-400" 
          positionClass="bottom-[20%] right-[5%] translate-x-1/2 translate-y-1/2" 
          reverseAnimClass="animate-[spin_10s_linear_infinite_reverse]"
          hoverBorderClass="hover:border-purple-400" hoverShadowClass="hover:shadow-[0_0_15px_rgba(192,132,252,0.5)]"
        />
      </div>

      {/* Center Sun */}
      <div className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-500 flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.5)] z-10">
        <span className="text-slate-950 font-bold text-sm md:text-base tracking-wider text-center px-2 select-none">SKILLS</span>
      </div>

    </div>
  );
}
