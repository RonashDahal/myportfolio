import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Wallet, 
  ShoppingBag, 
  Calculator, 
  Utensils, 
  Film, 
  Calendar, 
  CheckCircle2, 
  Info, 
  X,
  Layers
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  onScrollToEmi: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onScrollToEmi }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'E-Commerce', 'Frontend & Tools'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wallet': return <Wallet className="w-5 h-5 text-indigo-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-indigo-600" />;
      case 'Calculator': return <Calculator className="w-5 h-5 text-indigo-600" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-indigo-600" />;
      case 'Film': return <Film className="w-5 h-5 text-indigo-600" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-indigo-600" />;
      default: return <FolderGit2 className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineered Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight">
              Featured Software & Open Source
            </h2>
            <p className="mt-3 text-slate-600 text-base max-w-2xl leading-relaxed">
              Explore the web platforms, database applications, and utilities engineered by Ronash Dahal. 
              Each repository represents hands-on system architecture and functional code.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-white text-slate-950 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-slate-50/60 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 overflow-hidden group"
            >
              {/* Card Header Bar */}
              <div className="p-6 pb-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getProjectIcon(project.icon)}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-950 group-hover:text-indigo-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-0.5">{project.title}</p>

                <p className="text-sm text-slate-600 mt-3 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Metrics pill */}
                {project.metrics && (
                  <div className="mt-4 px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span className="font-medium truncate">{project.metrics}</span>
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-200/70">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono font-medium text-slate-600 bg-white border border-slate-200 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-4 bg-white border-t border-slate-200/80 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-indigo-600 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Architecture Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.hasInteractiveDemo && (
                    <button
                      type="button"
                      onClick={onScrollToEmi}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <Calculator className="w-3.5 h-3.5" />
                      <span>Try Demo</span>
                    </button>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-indigo-600 px-3 py-1.5 rounded-lg shadow-2xs transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Link Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/10 rounded-xl border border-white/10">
              <Github className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-white">All 8+ Repositories Public on GitHub</h4>
              <p className="text-xs text-slate-300">
                Inspect raw commits, PHP backends, HTML/CSS prototypes, and configuration scripts.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/RonashDahal?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-xs transition-colors whitespace-nowrap"
          >
            <span>View All on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  {getProjectIcon(activeModalProject.icon)}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-950">
                    {activeModalProject.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{activeModalProject.title}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>{activeModalProject.longDescription}</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                Technologies & Architecture
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Verified Public Repository</span>
              </div>

              <div className="flex items-center gap-2">
                {activeModalProject.hasInteractiveDemo && (
                  <button
                    onClick={() => {
                      setActiveModalProject(null);
                      onScrollToEmi();
                    }}
                    className="px-3.5 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg"
                  >
                    Launch Live Tool
                  </button>
                )}

                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-indigo-600 rounded-lg shadow-2xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
