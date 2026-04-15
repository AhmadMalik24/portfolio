import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const terminalLines = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'Software Engineer' },
  { type: 'command', text: 'pwd' },
  { type: 'output', text: '/home/ahmad/projects' },
  { type: 'command', text: 'skills --latest' },
  { type: 'output', text: 'React, Node.js, Django, Python, TypeScript' },
];

export default function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-terminal-bg border border-grey/30 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ${
        isHovered ? 'shadow-accent/20 border-accent/50 scale-[1.02]' : ''
      }`}
    >
      {/* Terminal Header */}
      <div className="bg-bg/50 px-4 py-2 flex items-center justify-between border-b border-grey/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-grey/50 text-xs font-mono">user@ahmad: ~</div>
        <div className="w-12"></div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm md:text-base min-h-[240px]">
        <div className="flex gap-4 mb-4 opacity-20">
          <pre className="text-terminal-cyan leading-none">
{`  >_
 /\\_/\\
( o.o )
 > ^ <`}
          </pre>
          <div className="text-xs text-grey/50 self-end">
            Elias OS v1.0.0
          </div>
        </div>

        {terminalLines.slice(0, visibleLines).map((line, index) => (
          <div key={index} className="mb-1">
            {line.type === 'command' ? (
              <div className="flex">
                <span className="text-terminal-green mr-2 animate-pulse-glow">user@elias:~$</span>
                <span className="text-white">{line.text}</span>
              </div>
            ) : (
              <div className="text-grey ml-4">{line.text}</div>
            )}
          </div>
        ))}

        {visibleLines >= terminalLines.length && (
          <div className="flex">
            <span className="text-terminal-green mr-2">user@elias:~$</span>
            <span className="w-2 h-5 bg-accent animate-blink"></span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
