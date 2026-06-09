import React, { useState } from 'react';

const BASE = '/Portfolio-Website';

const certificates = [
  {
    id: 1,
    title: 'Certificate of Recognition',
    issuer: 'Peninsular Research Operation',
    date: '2025',
    description: 'Awarded for outstanding contributions to AI research and innovative development.',
    file: `${BASE}/certificates/c1.pdf`,
    accent: '#3b82f6',
  },
  {
    id: 2,
    title: 'Certificate of Recognition',
    issuer: 'Technical Achievement Award',
    date: '2025',
    description: 'Recognized for exceptional technical achievement in developing scalable AI-powered applications.',
    file: `${BASE}/certificates/c2.pdf`,
    accent: '#8b5cf6',
  },
  {
    id: 3,
    title: 'Certificate of Recognition',
    issuer: 'Innovation Award',
    date: '2026',
    description: 'Honored for pioneering work in Generative AI, LLMs, and intelligent agent frameworks.',
    file: `${BASE}/certificates/c3.pdf`,
    accent: '#10b981',
  },
];

export default function Certificates() {
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="py-20 border-t border-slate-800/50">
      {/* Header */}
      <div className="mb-14">
        <p className="text-sm font-mono text-brand-400 tracking-widest uppercase mb-3">
          04. Recognition
        </p>
        <h2 className="text-3xl font-bold text-white flex items-center gap-2">
          Certificates &amp; Achievements
        </h2>
        <p className="mt-3 text-slate-400 text-base max-w-2xl">
          Formal recognitions received for contributions to research, technology, and innovation.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {certificates.map((cert, i) => (
          <div
            key={cert.id}
            className="cert-row group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              animationDelay: `${i * 0.1}s`,
              boxShadow: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 0 0 1px ${cert.accent}33, 0 8px 32px ${cert.accent}18`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: cert.accent }}
            />

            {/* Info */}
            <div className="flex-1 pl-2">
              <h3 className="text-white font-semibold text-base">{cert.title}</h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                <span className="text-slate-400 text-sm">{cert.issuer}</span>
                <span className="text-slate-700 text-xs">·</span>
                <span className="text-slate-500 text-sm font-mono">{cert.date}</span>
              </div>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed max-w-xl">
                {cert.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setActive(cert)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-colors duration-200"
              >
                View
              </button>
              <a
                href={cert.file}
                download
                className="px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-200"
                style={{
                  color: cert.accent,
                  borderColor: `${cert.accent}55`,
                  background: `${cert.accent}0d`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${cert.accent}22`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = `${cert.accent}0d`;
                }}
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* PDF Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm" />

          <div
            className="relative z-10 w-full max-w-4xl bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: '90vh' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 shrink-0">
              <div>
                <h4 className="text-white font-semibold">{active.title}</h4>
                <p className="text-slate-400 text-sm mt-0.5">
                  {active.issuer} &nbsp;·&nbsp; {active.date}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={active.file}
                  download
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </a>
                <button
                  onClick={() => setActive(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <div className="flex-1 bg-slate-950" style={{ minHeight: '65vh' }}>
              <iframe
                src={active.file}
                title={active.title}
                className="w-full h-full"
                style={{ minHeight: '65vh', border: 'none' }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .cert-row {
          animation: certFade 0.5s both;
        }
        @keyframes certFade {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
