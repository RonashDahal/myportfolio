import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Shield, Sparkles, CornerDownLeft, Copy, Check, RefreshCw, Maximize2, Minimize2 } from 'lucide-react';
import { PERSONAL_INFO, TERMINAL_COMMANDS_HELP, PROJECTS } from '../data/portfolioData';

export const CyberTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: 'run skill_assessment.sh',
      output: (
        <div className="space-y-1 text-slate-700">
          <p className="text-indigo-600 font-semibold">&gt;&gt; Initializing Ronash Dahal Cyber-Ops Assessment...</p>
          <p>&gt;&gt; Target Identity: Ronash Dahal (Class 11 Computer Engineering)</p>
          <p>&gt;&gt; Location: Letang-3, Morang, Nepal</p>
          <p>&gt;&gt; Web Penetration Testing: [████████░░] 80%</p>
          <p>&gt;&gt; Full-Stack Engineering: [█████████░] 88%</p>
          <p>&gt;&gt; Video Editing (Pr/Ae): [█████████░] 85%</p>
          <p>&gt;&gt; Culinary Arts & Cooking: [██████████] 100% 🍳</p>
          <p className="text-emerald-600 font-medium">STATUS: READY. Type &quot;help&quot; for all operational commands.</p>
        </div>
      )
    }
  ]);

  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    let resultOutput: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        resultOutput = (
          <div className="space-y-1.5 text-slate-700 text-xs">
            <p className="font-semibold text-slate-900 mb-1">AVAILABLE COMMANDS:</p>
            {TERMINAL_COMMANDS_HELP.map((item) => (
              <div key={item.cmd} className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                <span className="font-mono font-bold text-indigo-600">{item.cmd}</span>
                <span className="sm:col-span-2 text-slate-600">{item.desc}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'whoami':
        resultOutput = (
          <div className="space-y-1 text-slate-700 text-xs">
            <p className="font-bold text-slate-900">{PERSONAL_INFO.name} ({PERSONAL_INFO.githubUsername})</p>
            <p>{PERSONAL_INFO.headline}</p>
            <p>Location: {PERSONAL_INFO.location}</p>
            <p>Tech Goal: {PERSONAL_INFO.techGoal}</p>
            <p className="text-indigo-600">Email: {PERSONAL_INFO.email}</p>
          </div>
        );
        break;

      case 'projects':
        resultOutput = (
          <div className="space-y-2 text-slate-700 text-xs">
            <p className="font-semibold text-slate-900">VERIFIED CODE DEPLOYMENTS:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="p-2 bg-white rounded border border-slate-200">
                <span className="font-bold text-indigo-600">[{p.name}]</span>{' '}
                <span className="text-slate-500 font-medium">({p.technologies.join(', ')})</span>
                <p className="text-slate-600 mt-0.5">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        resultOutput = (
          <div className="space-y-1 text-slate-700 text-xs font-mono">
            <p className="font-bold text-slate-900 font-sans">TECHNICAL MATRIX:</p>
            <p>&gt; Languages: JavaScript (ES6+), PHP, C, C++, Java, HTML5, CSS3, SQL</p>
            <p>&gt; Databases: MySQL, Apache LAMP, Relational Schema Design</p>
            <p>&gt; Cyber Security: OWASP Top 10, Web Penetration Testing, Input Sanitization</p>
            <p>&gt; Dev Tools: Git, GitHub, VS Code, Linux Shell, Android Studio, WordPress</p>
            <p>&gt; Multimedia: Adobe Premiere Pro, Adobe Photoshop</p>
          </div>
        );
        break;

      case 'security':
        resultOutput = (
          <div className="space-y-1 text-slate-700 text-xs">
            <p className="font-semibold text-emerald-700">&gt;&gt; CYBER-OPS AUDIT SCAN RESULTS:</p>
            <p>&bull; Target: Web Application Security Posture</p>
            <p>&bull; Authentication Auditing: Session cookies, CSRF protection, SQLi mitigation</p>
            <p>&bull; Methodology: OWASP Testing Guide v4.2</p>
            <p>&bull; DevSecOps Principle: Shift-left testing & automated input validation</p>
            <p className="text-indigo-600 font-medium">&gt;&gt; Ready to safeguard critical web services.</p>
          </div>
        );
        break;

      case 'cook':
      case 'cooking':
        resultOutput = (
          <div className="p-2 bg-amber-50 rounded border border-amber-200 text-amber-900 text-xs space-y-1">
            <p className="font-bold text-amber-950">🍳 CHEF RONASH DISPATCH:</p>
            <p>Simmering handmade momos and spiced chutney while the compiler runs cleanly.</p>
            <p className="italic text-slate-600">&quot;Good cooking requires patience and seasoning; good code requires structure and testing.&quot;</p>
          </div>
        );
        break;

      case 'cat flag.txt':
      case 'flag':
        resultOutput = (
          <div className="p-2 bg-emerald-50 rounded border border-emerald-200 text-emerald-900 text-xs space-y-1 font-mono">
            <p className="font-bold">🚩 CTF FLAG CAPTURED:</p>
            <p className="text-indigo-700 font-bold tracking-wider">RD&#123;d3v_s3c_0ps_n3p4l_2026_c0d3_s3cur3&#125;</p>
            <p className="text-[11px] text-slate-500 font-sans">Congratulations, you found the security explorer easter egg!</p>
          </div>
        );
        break;

      case 'contact':
        resultOutput = (
          <div className="space-y-1 text-slate-700 text-xs">
            <p className="font-semibold text-slate-900">COMMUNICATION CHANNELS:</p>
            <p>&bull; Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-indigo-600 underline">{PERSONAL_INFO.email}</a></p>
            <p>&bull; GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-indigo-600 underline">github.com/RonashDahal</a></p>
            <p>&bull; Instagram: <a href={PERSONAL_INFO.instagram} target="_blank" rel="noreferrer" className="text-indigo-600 underline">@ronashdahal</a></p>
            <p>&bull; Facebook: <a href={PERSONAL_INFO.facebook} target="_blank" rel="noreferrer" className="text-indigo-600 underline">Ronash Dahal</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        resultOutput = (
          <p className="text-xs text-rose-600">
            command not found: {cleanCmd}. Type <span className="font-bold text-slate-900">&quot;help&quot;</span> to see valid commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { cmd: cmdText, output: resultOutput }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    }
  };

  const quickPills = ['help', 'whoami', 'projects', 'skills', 'security', 'cook', 'cat flag.txt', 'clear'];

  return (
    <section id="cyber-ops" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Cyber-Ops Interactive Console</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight">
            Offensive & Defensive Security Terminal
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Interact with Ronash&apos;s digital workstation directly through a simulated Unix shell. 
            Execute system diagnostics, inspect security audits, or trigger developer easter eggs.
          </p>
        </div>

        {/* Terminal Container (Light theme with high contrast) */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-slate-300 bg-slate-50 shadow-md overflow-hidden font-mono">
          
          {/* macOS Style Light Title Bar */}
          <div className="px-4 py-3 bg-slate-200/90 border-b border-slate-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400 border border-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500"></div>
              <span className="text-xs font-sans font-semibold text-slate-700 ml-2">
                guest@ronash-dahal:~ (bash)
              </span>
            </div>
            <div className="text-[11px] font-sans text-slate-500 hidden sm:block">
              UTF-8 &bull; Port 3000 &bull; Secure Shell
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div 
            className="p-5 sm:p-6 bg-slate-50 text-slate-800 text-xs sm:text-sm min-h-[340px] max-h-[460px] overflow-y-auto space-y-4"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Initial Welcome */}
            <div className="text-slate-500 text-xs pb-2 border-b border-slate-200">
              Welcome to Ronash Dahal&apos;s Cyber Shell [Version 2.4.0-release]
              <br />
              All actions are monitored under academic &amp; ethical hacking principles.
            </div>

            {/* History of commands */}
            {history.map((entry, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center gap-2 text-indigo-700 font-semibold">
                  <span className="text-slate-400">guest@rd:~$</span>
                  <span>{entry.cmd}</span>
                </div>
                <div className="pl-4 sm:pl-6">{entry.output}</div>
              </div>
            ))}

            {/* Active Prompt Input */}
            <div className="flex items-center gap-2 pt-2 text-indigo-700">
              <span className="text-slate-400 select-none">guest@rd:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. 'help', 'whoami', 'security')..."
                className="flex-1 bg-transparent text-slate-900 font-mono font-medium focus:outline-hidden placeholder:text-slate-400"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                type="button"
                onClick={() => handleCommand(inputVal)}
                className="text-slate-400 hover:text-indigo-600 p-1 cursor-pointer"
                title="Execute Command"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </div>

            <div ref={terminalEndRef} />
          </div>

          {/* Interactive Clickable Quick Commands Bar */}
          <div className="px-4 py-3 bg-white border-t border-slate-200 flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-sans font-medium text-slate-500 mr-1">Quick Run:</span>
              {quickPills.map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => handleCommand(cmd)}
                  className="px-2.5 py-1 text-[11px] font-mono font-medium bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 border border-slate-200 rounded transition-colors cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => handleCommand('clear')}
              className="text-xs font-sans text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
