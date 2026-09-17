import React from 'react';
import { X, Printer, Download, MapPin, Mail, Github, Globe, CheckCircle2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 uppercase tracking-wider">
              Curriculum Vitae
            </span>
            <span className="text-xs font-medium text-slate-500">Ronash Dahal &bull; 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-8 sm:p-10 space-y-6 text-slate-800 text-sm max-h-[80vh] overflow-y-auto print:max-h-none print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6">
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight">
              RONASH DAHAL
            </h1>
            <p className="text-sm font-semibold text-indigo-700 mt-1">
              Class 11 Computer Engineering Student &bull; Full-Stack Software Developer &bull; DevSecOps Explorer
            </p>
            
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Letang-3, Morang, Nepal</span>
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">github.com/RonashDahal</a>
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <a href={PERSONAL_INFO.portfolioBlog} target="_blank" rel="noreferrer" className="hover:underline">ronashdahal.github.io</a>
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-100 pb-1">
              PROFESSIONAL PROFILE
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Motivated Computer Engineering student with a strong command of full-stack web application development, 
              relational database design (PHP/MySQL), and defensive cybersecurity practices. Creator of published 
              productivity and e-commerce systems with focus on code security, efficient algorithms, and user-centric software design.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-100 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Higher Secondary: Computer Engineering (Class 11)</h3>
                  <p className="text-xs text-slate-500">Morang, Nepal</p>
                </div>
                <span className="font-mono text-xs text-slate-500 font-medium">2025 – Present</span>
              </div>
              <p className="text-xs text-slate-600">
                Coursework: Computer Architecture, C Programming, Web Technologies, Database Systems, Discrete Mathematics.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-100 pb-1">
              TECHNICAL EXPERTISE
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <strong className="text-slate-900">Languages:</strong> PHP, JavaScript (ES6+), C, C++, Java, HTML5, CSS3, SQL
              </div>
              <div>
                <strong className="text-slate-900">Databases & Web:</strong> MySQL, Apache LAMP, REST APIs, Session Auth
              </div>
              <div>
                <strong className="text-slate-900">Cyber Security:</strong> Web Penetration Testing, OWASP Top 10, DevSecOps
              </div>
              <div>
                <strong className="text-slate-900">Tools & Multimedia:</strong> Git, GitHub, VS Code, Adobe Premiere Pro, Photoshop
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-100 pb-1">
              FEATURED SOFTWARE PROJECTS
            </h2>
            <div className="space-y-4">
              {PROJECTS.slice(0, 4).map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900 text-sm">{proj.name}</h3>
                      <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                        {proj.technologies.slice(0, 3).join(', ')}
                      </span>
                    </div>
                    <a 
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-indigo-600 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
            <span>Available for technical internships, web contracts, and academic collaborations.</span>
            <span className="font-mono text-[11px]">Nepal 🇳🇵</span>
          </div>

        </div>
      </div>
    </div>
  );
};
