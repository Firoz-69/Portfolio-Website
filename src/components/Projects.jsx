import React from 'react';

const projects = [
  {
    title: 'Chat Web App',
    description: 'A real-time chat application with robust backend architecture. Features seamless communication, intuitive UI, and fast message delivery.',
    tags: ['React', 'Node.js', 'WebSockets'],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'group-hover:border-blue-500/50',
    link: 'https://firoz-69.github.io/Chat-app/'
  },
  {
    title: 'Lumiere',
    description: 'A creative AI-powered project exploring generative media and intelligent visual experiences. Built with modern web technologies and integrated AI capabilities.',
    tags: ['React', 'Generative AI', 'JavaScript'],
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'group-hover:border-amber-500/50',
    link: 'https://github.com/Firoz-69/Lumiere'
  },
  {
    title: 'AI Persona',
    description: 'An advanced Generative AI application that creates dynamic, interactive personas. Leverages state-of-the-art LLMs and orchestration frameworks to deliver human-like conversational experiences.',
    tags: ['LangChain', 'LangGraph', 'Python'],
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'group-hover:border-purple-500/50',
    link: '#'
  },
  {
    title: 'Ezyfix',
    description: 'A high-performance static business portfolio website. Features modern design, fast load times, and responsive layouts built with a cutting-edge web stack.',
    tags: ['React', 'Astro', 'Tailwind CSS'],
    color: 'from-teal-500/20 to-emerald-500/20',
    borderColor: 'group-hover:border-teal-500/50',
    link: 'https://www.ezyfix.co.in'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-slate-800/50">
      <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-2">
        <span className="text-brand-400">03.</span> Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 overflow-hidden transition-all duration-500 ${project.borderColor}`}
          >
            {/* Background gradient effect */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full -z-10 translate-x-1/2 -translate-y-1/2`}></div>
            
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-800 rounded-lg text-brand-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              {project.link && project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-400 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {(!project.link || project.link === '#') && (
                <div className="text-slate-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              )}
            </div>
            
            <h3 className="text-2xl font-bold text-slate-200 group-hover:text-white mb-3 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 mb-6 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-mono text-brand-300 px-2 py-1 bg-brand-900/30 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
