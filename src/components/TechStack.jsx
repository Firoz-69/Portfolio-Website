import React from 'react';
import { FaReact, FaAngular, FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { SiDotnet, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';
import { TbBrain, TbNetwork } from 'react-icons/tb';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "text-blue-400" },
      { name: "Angular", icon: FaAngular, color: "text-red-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "C#", icon: SiDotnet, color: "text-purple-500" },
      { name: "Java", icon: FaJava, color: "text-orange-500" },
      { name: "Python", icon: FaPython, color: "text-yellow-400" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" }
    ]
  },
  {
    title: "AI Tools",
    skills: [
      { name: "LangChain", icon: TbNetwork, color: "text-green-300" },
      { name: "LangGraph", icon: TbBrain, color: "text-purple-400" }
    ]
  }
];

export default function TechStack() {
  return (
    <section id="skills" className="py-20 border-t border-slate-800/50">
      <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-2">
        <span className="text-brand-400">02.</span> Tech Stack
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="flex flex-col">
            <h3 className="text-xl font-semibold text-slate-200 mb-6 border-b border-slate-800 pb-2">
              {category.title}
            </h3>
            <div className="flex flex-col gap-4">
              {category.skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-brand-500/50 hover:bg-slate-800/50 transition-all duration-300 group"
                  >
                    <Icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform`} />
                    <div className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
