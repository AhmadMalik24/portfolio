import { useState, FormEvent, useEffect, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Terminal as TerminalIcon } from 'lucide-react';

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [logs, setLogs] = useState<string[]>(['Initializing connection...', 'Ready for input.']);
  const [formData, setFormData] = useState({ name: '', email: '', title: '', message: '' });

  const addLog = (message: string) => {
    setLogs(prev => [...prev.slice(-4), message]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { placeholder, value } = e.target;
    setFormData(prev => ({ ...prev, [e.target.name || placeholder.toLowerCase()]: value }));
  };

  useEffect(() => {
    if (formData.name && logs[logs.length-1] !== 'User identified.') addLog('User identified.');
    if (formData.email && logs[logs.length-1] !== 'Email endpoint set.') addLog('Email endpoint set.');
  }, [formData.name, formData.email]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    addLog('Encrypting message...');
    
    setTimeout(() => {
      addLog('Message dispatched successfully.');
      setTimeout(() => {
        setIsSending(false);
        setFormData({ name: '', email: '', title: '', message: '' });
        addLog('Ready for next transmission.');
      }, 1000);
    }, 1500);
  };

  return (
    <div className="border border-grey bg-terminal-bg rounded-lg overflow-hidden shadow-xl group">
      {/* Terminal Header */}
      <div className="bg-bg/50 px-4 py-2 flex items-center justify-between border-b border-grey/10">
        <div className="flex items-center gap-2">
          <TerminalIcon size={14} className="text-accent" />
          <span className="text-[10px] text-grey font-mono uppercase tracking-widest">Secure Transmission Protocol</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-grey/20"></div>
          <div className="w-2 h-2 rounded-full bg-grey/20"></div>
          <div className="w-2 h-2 rounded-full bg-accent/40 animate-pulse"></div>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-6">
        {/* System Logs */}
        <div className="bg-black/20 p-3 rounded border border-grey/5 font-mono text-[10px] text-terminal-green/70 flex flex-col gap-1 h-24 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {logs.map((log, i) => (
              <motion.div
                key={i + log}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex gap-2"
              >
                <span className="text-accent/50">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
                <span>{log}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="Name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-grey p-3 text-white focus:border-accent outline-none transition-all placeholder:text-grey/30 font-mono text-sm" 
              />
              <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 transition-transform origin-top focus-within:scale-y-100"></div>
            </div>
            <div className="flex-1 relative">
              <input 
                type="email" 
                placeholder="Email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-grey p-3 text-white focus:border-accent outline-none transition-all placeholder:text-grey/30 font-mono text-sm" 
              />
            </div>
          </div>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Title" 
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-grey p-3 text-white focus:border-accent outline-none transition-all placeholder:text-grey/30 font-mono text-sm" 
            />
          </div>

          <div className="relative">
            <textarea 
              placeholder="Message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4} 
              required
              className="w-full bg-transparent border border-grey p-3 text-white focus:border-accent outline-none transition-all placeholder:text-grey/30 font-mono text-sm resize-none"
            ></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSending}
            className={`btn-primary w-full md:w-fit px-8 py-3 flex items-center justify-center gap-3 relative overflow-hidden ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSending ? (
              <>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                DISPATCHING...
              </>
            ) : (
              <>
                <Send size={16} />
                EXECUTE TRANSMISSION
              </>
            )}
            
            <div className="absolute inset-0 bg-accent/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </motion.button>
        </form>
      </div>
    </div>
  );
}