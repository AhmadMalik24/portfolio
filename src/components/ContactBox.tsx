import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon, Copy, Check } from 'lucide-react';

interface ContactBoxProps {
  title: string;
  items: {
    icon?: LucideIcon;
    text: string;
    label?: string;
  }[];
}

export default function ContactBox({ title, items }: ContactBoxProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ borderColor: 'var(--color-accent)' }}
      className="border border-grey p-4 flex flex-col gap-4 min-w-[250px] bg-bg relative overflow-hidden group transition-colors"
    >
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-full h-[2px] bg-accent/20 animate-scan shadow-[0_0_15px_var(--color-accent)]"></div>
      </div>

      <h3 className="text-white font-medium flex justify-between items-center group-hover:text-accent transition-colors">
        <span>{title}</span>
        <span className="text-[10px] text-grey group-hover:text-accent transition-colors">[LINKED]</span>
      </h3>
      
      <div className="flex flex-col gap-3 relative z-10">
        {items.map((item, index) => (
          <div 
            key={index} 
            onClick={() => copyToClipboard(item.text, index)}
            className="flex items-center gap-3 text-grey hover:text-white transition-colors cursor-pointer group/item p-1 hover:bg-accent/5 rounded"
          >
            {item.icon && <item.icon size={20} className="group-hover/item:text-accent transition-colors" />}
            <div className="flex flex-col flex-1">
              {item.label && <span className="text-[10px] text-grey/50 uppercase">{item.label}</span>}
              <span className="font-mono text-sm">{item.text}</span>
            </div>
            <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
              <AnimatePresence mode="wait">
                {copiedIndex === index ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Check size={14} className="text-terminal-green" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Copy size={14} className="text-grey/40" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}