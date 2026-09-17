import React, { useState, useEffect } from 'react';
import { Terminal, ArrowDown, ExternalLink, Shield, Code2, Sparkles, MapPin, CheckCircle2, Github, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  const roles = [
    'Class 11 Computer Engineering Student',
    'Full-Stack Web Architect (Expendo & Digital Pasal)',
    'Cybersecurity & DevSecOps Explorer',
    'Creative Video Editor & Tech Enthusiast'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-100/70 via-white to-slate-50 border-b border-slate-200/60"
    >
      {/* Subtle Engineering Grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      {/* Soft background glow spots */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-200/30 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-[300px] h-[250px] bg-teal-100/40 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Availability & Location Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-8 text-xs font-medium text-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-700 font-semibold">Available for Collaborations</span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1 text-slate-600">
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>Letang-3, Morang, Nepal</span>
            </span>
          </div>

          {/* Profile Avatar with concentric rings & verified badge */}
          <div className="relative mb-6">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-400/20 to-teal-400/20 blur-sm animate-pulse"></div>
            <div className="relative p-1 rounded-full bg-white shadow-md ring-1 ring-slate-200/80">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-inner"
              />
              <div 
                className="absolute bottom-1 right-1 bg-indigo-600 text-white p-1.5 rounded-full ring-2 ring-white shadow-xs"
                title="Class 11 Computer Engineering Student"
              >
                <Code2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-slate-900">Ronash Dahal</span>
          </h1>

          {/* Dynamic Animated Subtitle / Role */}
          <div className="flex items-center justify-center gap-2 h-9 mb-6 font-mono text-base sm:text-lg text-slate-800 bg-white/80 px-4 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
            <span className="text-indigo-600 font-bold">&gt;</span>
            <span className="font-semibold text-slate-900 tracking-tight">{displayText}</span>
            <span className="inline-block w-2 h-4 bg-indigo-600 animate-pulse"></span>
          </div>

          {/* Summary / Mission */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
            Mastering <span className="text-slate-900 font-semibold">Computer Engineering</span> in Class 11. 
            Bridging the gap between robust software engineering and defensive cybersecurity. Builder of{' '}
            <span className="text-indigo-700 font-semibold underline decoration-indigo-200 underline-offset-2">Expendo</span>,{' '}
            <span className="text-indigo-700 font-semibold underline decoration-indigo-200 underline-offset-2">Digital Pasal</span>, and specialized web tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <a
              id="hero-explore-projects-btn"
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-950 hover:bg-indigo-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              id="hero-open-terminal-btn"
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-mono font-medium text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl shadow-xs transition-all duration-200 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-indigo-600" />
              <span>Launch Terminal CLI</span>
            </button>

            <button
              id="hero-view-cv-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <span>Resume & Profile</span>
            </button>
          </div>

          {/* Key Stat Badges Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl pt-6 border-t border-slate-200/80 text-left">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-2xl font-display font-bold text-slate-950">8+</div>
              <div className="text-xs text-slate-500 font-medium">Public Repositories</div>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-2xl font-display font-bold text-indigo-600">Grade 11</div>
              <div className="text-xs text-slate-500 font-medium">Computer Engineering</div>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-2xl font-display font-bold text-slate-950">DevSecOps</div>
              <div className="text-xs text-slate-500 font-medium">Security & Full-Stack</div>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-2xl font-display font-bold text-emerald-600">100%</div>
              <div className="text-xs text-slate-500 font-medium">Culinary & Code Blend 🍳</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
