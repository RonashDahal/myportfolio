import React, { useState } from 'react';
import { Cpu, Terminal, Shield, Code, Palette, Database, CheckCircle2, Award } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Code className="w-4 h-4" />;
      case 1: return <Database className="w-4 h-4" />;
      case 2: return <Shield className="w-4 h-4" />;
      case 3: return <Palette className="w-4 h-4" />;
      default: return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight">
            Engineering Skills & Tools Matrix
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Hands-on technical stack cultivated through high school computer engineering coursework, 
            self-directed full-stack application development, and practical cybersecurity investigations.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 ${
                activeCategoryIndex === idx
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100/80 text-slate-700 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className={`p-2 rounded-lg ${
                  activeCategoryIndex === idx ? 'bg-white/15 text-white' : 'bg-white text-indigo-600 border border-slate-200'
                }`}>
                  {getCategoryIcon(idx)}
                </div>
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                  activeCategoryIndex === idx ? 'bg-white/10 text-slate-200' : 'bg-slate-200 text-slate-700'
                }`}>
                  {cat.skills.length} skills
                </span>
              </div>
              <div>
                <h3 className="font-display font-bold text-sm tracking-tight">{cat.category}</h3>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Category Skill Matrix */}
        <div className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="mb-6 pb-4 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-950">
                {activeCategory.category}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {activeCategory.description}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100 font-medium self-start">
              <Award className="w-3.5 h-3.5 text-indigo-600" />
              <span>Demonstrated in Git Repos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between gap-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    {/* Dynamic skillicon if available */}
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="w-7 h-7 object-contain rounded"
                      onError={(e) => {
                        // Fallback hide image if network issue
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="font-display font-semibold text-slate-900 text-sm">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                    {skill.level}
                  </span>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                    <span>Proficiency Score</span>
                    <span className="font-mono font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Technology Badges Strip */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-medium">All Integrated Dev Tools:</span>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              <a href="https://skillicons.dev" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://skillicons.dev/icons?i=html,css,js,php,mysql,git,vscode,ps,pr,c,cpp,java,wordpress"
                  alt="Skill Icons"
                  className="h-9 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
