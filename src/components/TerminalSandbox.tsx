import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HistoryItem {
  type: 'command' | 'output' | 'error';
  text: string;
}

export default function TerminalSandbox() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'output', text: 'Welcome to Ahmad OS v1.0.4 (STABLE)' },
    { type: 'output', text: "Type 'help' to see available commands." },
  ]);
  const [isFocused, setIsFocused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const args = trimmedCmd.split(' ');
    const mainCmd = args[0].toLowerCase();

    let response: string | string[] = '';
    let type: 'output' | 'error' = 'output';

    switch (mainCmd) {
      case 'help':
      case 'ls':
        response = [
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
          'Ahmad Malik — Software Engineer',
          'Lahore, Pakistan | Full-Stack Developer',
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
          '',
          'Available commands:',
          '  help, ls     - Show this help message',
          '  skills       - List technical skills',
          '  projects     - List main projects',
          '  contact      - Show contact information',
          '  whoami       - About Ahmad',
          '  neofetch     - System information',
          '  date         - Current date and time',
          '  pwd          - Current directory',
          '  echo [text]  - Print text to terminal',
          '  clear        - Clear terminal history',
          '  sudo         - Execute with root privileges',
        ];
        break;
      case 'skills':
        response = 'React, Node.js, Django, Python, TypeScript, C++, Flask, Express, PostgreSQL, MongoDB';
        break;
      case 'projects':
        response = 'AI Digital Image Forensic System, Multithreaded Web Server (C++), Custom Code Editor, Full-Stack Applications';
        break;
      case 'contact':
        response = 'Email: ahmad.malik12340@gmail.com | GitHub: github.com/AhmadMalik24 | LinkedIn: linkedin.com/in/ahmadmalik24';
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'sudo':
        response = "Nice try. You don't have sudo privileges here.";
        break;
      case 'neofetch':
        response = [
          '                   -`                    user@ahmad',
          '                  .o+`                   ----------',
          '                 `ooo/                   OS: Linux',
          '                `+oooo:                  Shell: bash',
          '               `+oooooo:                 Editor: VSCode',
          '               -+oooooo+:                Location: Lahore, Pakistan',
          '             `/:-:++oooo+:               Role: Software Engineer',
          '            `/++++/+++++++:              Focus: Full-Stack Development',
          '           `/++++++++++++++:             ',
          '          `/+++ooooooooooooo/`           ',
        ];
        break;
      case 'whoami':
        response = 'ahmad — Software Engineer | Full-Stack Developer | Cybersecurity Enthusiast';
        break;
      case 'date':
        response = new Date().toString();
        break;
      case 'pwd':
        response = '/home/ahmad/projects';
        break;
      case 'echo':
        response = args.slice(1).join(' ');
        break;
      default:
        response = `$ command not found: ${mainCmd}. Type 'help' for available commands.`;
        type = 'error';
    }

    const newHistory: HistoryItem[] = [{ type: 'command', text: trimmedCmd }];
    if (Array.isArray(response)) {
      response.forEach(r => newHistory.push({ type, text: r }));
    } else {
      newHistory.push({ type, text: response });
    }

    setHistory(prev => [...prev, ...newHistory]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div 
      className={`bg-[#0C0C0C] border transition-all duration-300 rounded-lg overflow-hidden flex flex-col h-[300px] md:h-[400px] font-mono text-sm md:text-base relative group ${
        isFocused ? 'border-[#00FF66]/50 shadow-[0_0_20px_rgba(0,255,102,0.1)]' : 'border-[#33FF33]/30'
      }`}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-50 opacity-[0.03]"></div>

      {/* Terminal Header */}
      <div className="bg-[#1A1A1A] px-4 py-2 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-white/30 text-[10px] uppercase tracking-widest">Ahmad Terminal v1.0.4</div>
        <div className="w-12"></div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-white/10"
      >
        <AnimatePresence mode="popLayout">
          {history.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-1"
            >
              {item.type === 'command' ? (
                <div className="flex">
                  <span className="text-[#00FF66] mr-2">user@ahmad:~$</span>
                  <span className="text-white">{item.text}</span>
                </div>
              ) : (
                <TypewriterLine text={item.text} type={item.type} />
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Input Line */}
        <div className="flex items-center">
          <span className="text-[#00FF66] mr-2 whitespace-nowrap">user@ahmad:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="bg-transparent border-none outline-none text-white flex-1 min-w-0"
            autoFocus
          />
          {isFocused && (
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-5 bg-[#00FF66] ml-1"
            ></motion.span>
          )}
        </div>
      </div>
    </div>
  );
}

function TypewriterLine({ text, type }: { text: string, type: string }) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i += 2; // Add 2 characters at a time for speed
      if (i >= text.length) {
        setDisplayedText(text);
        clearInterval(interval);
      }
    }, 1);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className={`${type === 'error' ? 'text-red-400' : 'text-[#4ADE80]'} whitespace-pre-wrap leading-relaxed`}>
      {displayedText}
    </div>
  );
}
