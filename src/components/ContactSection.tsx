import React, { useState } from 'react';
import { Mail, MapPin, Github, Instagram, Facebook, Send, Copy, Check, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hello Ronash,\n\n${formData.message}\n\nFrom:\nName: ${formData.name}\nEmail: ${formData.email}`
    )}`;

    window.location.href = mailtoUrl;
    setStatusMessage('Preparing email client. You can also directly reach out at ' + PERSONAL_INFO.email);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight">
            Let's build something secure & scalable.
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Interested in discussing full-stack development, software engineering internships, open-source collaboration, 
            or cybersecurity research? Reach out anytime.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card with 1-click Copy */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                  Primary Email Address
                </span>
                <span className="text-[11px] font-medium text-slate-400">Response within 24h</span>
              </div>
              
              <div className="flex items-center justify-between gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-mono text-sm text-slate-800 font-semibold truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-600 hover:text-indigo-600 bg-white border border-slate-200 hover:border-indigo-200 rounded-lg shadow-2xs transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copiedEmail && (
                <p className="text-xs text-emerald-600 font-medium flex items-center gap-1 animate-in fade-in">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email copied to clipboard!</span>
                </p>
              )}
            </div>

            {/* Location & Academic Base Card */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span>Geographic & Academic Base</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Letang-3, Morang District, Koshi Province, Nepal.
                <br />
                Currently enrolled in Class 11 Computer Engineering.
              </p>
            </div>

            {/* Social Channels Strip */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block">
                Social Profiles & Networks
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200 hover:border-indigo-200 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-700 group-hover:text-indigo-600" />
                    <span className="text-xs font-medium text-slate-800">GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
                </a>

                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200 hover:border-indigo-200 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-rose-600" />
                    <span className="text-xs font-medium text-slate-800">Instagram</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
                </a>

                <a
                  href={PERSONAL_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200 hover:border-indigo-200 transition-all group sm:col-span-2"
                >
                  <div className="flex items-center gap-2.5">
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-slate-800">Facebook Connection</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="font-display font-bold text-slate-950 text-xl mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Drop a note directly to Ronash's inbox. All messages are forwarded to {PERSONAL_INFO.email}.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Full-Stack Project Collaboration / Internship"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your idea, question, or opportunity..."
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-slate-400 resize-y"
                />
              </div>

              {statusMessage && (
                <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-xs text-indigo-900">
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-slate-950 hover:bg-indigo-600 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message via Email</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
