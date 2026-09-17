import React from 'react';
import { User, ShieldCheck, Cpu, Flame, GraduationCap, Code, Compass, Sparkles, MapPin, Coffee, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO, TIMELINE } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About The Developer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight">
            Crafting high-performance web software with a security-first mindset.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            I am a dedicated student and developer building real-world tools that streamline daily tasks, 
            balancing web engineering with the defensive side of cybersecurity.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4 leading-relaxed">
              <p>
                Based in <strong className="text-slate-900 font-semibold">Letang-3, Morang, Nepal</strong>, 
                I am currently mastering Computer Engineering in Class 11. My software development path started 
                early with small, practical automations—like building a dedicated class routine web tool in Grade 9 
                to optimize academic schedules.
              </p>
              <p>
                As my technical foundation matured across <strong className="text-slate-900 font-semibold">PHP, MySQL, JavaScript, and C/C++</strong>, 
                I focused on building comprehensive software platforms such as <span className="text-indigo-600 font-medium">Expendo</span> (an expense tracking engine) and <span className="text-indigo-600 font-medium">Digital Pasal</span> (an online store system tailored for local commerce).
              </p>
              <p>
                Beyond standard development, I actively study ethical hacking and defensive web application security. 
                My long-term ambition is to specialize in <strong className="text-slate-900 font-semibold">DevSecOps</strong>, 
                ensuring code is secure by design right from architecture through deployment.
              </p>
            </div>

            {/* Value Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-base">Security By Design</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Integrating OWASP standards, input hygiene, and authentication controls into every full-stack project.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-base">Practical Utility</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Building tools with tangible benefits: financial budgeting, local business sales, and academic scheduling.
                </p>
              </div>
            </div>

            {/* Fun Fact Callout Box */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3.5">
              <div className="text-2xl p-1 bg-white rounded-lg shadow-2xs border border-amber-200/60">🍳</div>
              <div>
                <h4 className="font-display font-semibold text-slate-900 text-sm">The Compiler Chef</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  "{PERSONAL_INFO.funFact}" Outside of writing code and studying networks, I am passionate about culinary arts and creative video editing.
                </p>
              </div>
            </div>

            {/* GitHub Stats Cards with offline fallback */}
            <div className="pt-4 border-t border-slate-200/80">
              <h4 className="font-display font-semibold text-slate-900 text-sm mb-3 flex items-center gap-2">
                <Code className="w-4 h-4 text-indigo-600" />
                <span>GitHub Telemetry & Activity</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-white p-3 shadow-2xs">
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${PERSONAL_INFO.githubUsername}&show_icons=true&theme=default&hide_border=true&title_color=4338ca&icon_color=4338ca&text_color=334155&bg_color=ffffff`}
                    alt="GitHub Stats"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    onError={(e) => {
                      // If offline, replace with clean local telemetry view
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div style={{ display: 'none' }} className="space-y-2 py-2">
                    <div className="text-xs font-semibold text-indigo-700">GitHub Verified Activity</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 bg-slate-50 rounded border border-slate-200">
                        <span className="text-slate-400 block text-[10px]">REPOSITORIES</span>
                        <span className="font-bold text-slate-900 text-sm">8 Public</span>
                      </div>
                      <div className="p-2 bg-slate-50 rounded border border-slate-200">
                        <span className="text-slate-400 block text-[10px]">FOCUS</span>
                        <span className="font-bold text-slate-900 text-sm">DevSecOps</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200 bg-white p-3 shadow-2xs">
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${PERSONAL_INFO.githubUsername}&layout=compact&theme=default&hide_border=true&title_color=4338ca&text_color=334155&bg_color=ffffff`}
                    alt="Top Languages"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div style={{ display: 'none' }} className="space-y-2 py-2">
                    <div className="text-xs font-semibold text-indigo-700">Top Languages</div>
                    <div className="flex flex-wrap gap-1 text-[11px] font-mono">
                      <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded border border-indigo-100">PHP</span>
                      <span className="px-2 py-0.5 bg-sky-50 text-sky-700 rounded border border-sky-100">HTML5</span>
                      <span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded border border-amber-100">JavaScript</span>
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-100">C / C++</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Educational Milestones & Roadmap */}
          <div className="lg:col-span-5 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <h3 className="font-display font-bold text-slate-900 text-lg">Engineering Milestones</h3>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full border-2 border-indigo-600 bg-white group-hover:bg-indigo-600 transition-colors" />
                  
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                      {item.year}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="font-display font-semibold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{item.subtitle}</p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Quick Contact summary card */}
            <div className="mt-8 pt-6 border-t border-slate-200/90 flex flex-col gap-2">
              <div className="text-xs text-slate-500 font-medium">Quick Direct Reach:</div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs font-mono font-medium text-indigo-600 hover:text-indigo-700 break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
