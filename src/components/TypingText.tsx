import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  once?: boolean;
}

export default function TypingText({ 
  text, 
  className = "", 
  delay = 0, 
  speed = 0.01, 
  once = true 
}: TypingTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <p ref={ref} className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.01,
            delay: delay + (index * speed),
          }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
}
