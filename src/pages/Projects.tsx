import { motion } from 'motion/react';
import { Github, ExternalLink, Figma, Code2, Terminal as TerminalIcon } from 'lucide-react';
import Dots from '../components/Dots';
import TypingText from '../components/TypingText';

export default function Projects() {
  return (
    <div className="flex flex-col gap-24 pb-32 relative">
      <div className="absolute -left-32 top-1/4 w-24 h-24 border border-grey hidden lg:block"></div>
      <div className="absolute -right-32 top-1/2 w-24 h-24 border border-grey hidden lg:block"></div>
      <Dots className="absolute top-1/3 -right-12 hidden xl:block" />
      
      <section className="pt-12">
        <h1 className="text-4xl font-semibold mb-4 hover-glitch"><span className="text-accent">/</span>projects</h1>
        <p className="text-grey">List of my projects</p>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-medium hover-glitch"><span>#</span>complete-apps</h2>
          <div className="h-[1px] bg-accent flex-grow opacity-30"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            image="https://picsum.photos/seed/chert/400/200"
            tech="HTML SCSS Python Flask"
            title="ChertNodes"
            description="Minecraft servers hosting"
          />
          <ProjectCard 
            image="https://picsum.photos/seed/kahoot/400/200"
            tech="CSS Express Node.js"
            title="Kahoot Answers Viewer"
            description="Get answers to your kahoot quiz"
          />
          <ProjectCard 
            image="https://picsum.photos/seed/protect/400/200"
            tech="React Express Discord.js Node.js"
            title="ProtectX"
            description="Discord anti-crash bot"
          />
          <ProjectCard 
            image="https://picsum.photos/seed/kotik/400/200"
            tech="HTML CSS JS"
            title="Kotik Bot"
            description="Multi-functional discord bot"
          />
          <ProjectCard 
            image="https://picsum.photos/seed/portfolio/400/200"
            tech="Vue TS Less"
            title="Portfolio"
            description="You're using it rn"
          />
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-medium hover-glitch"><span>#</span>small-projects</h2>
          <div className="h-[1px] bg-accent flex-grow opacity-30"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SmallProjectCard 
            tech="Discord.js TS JS"
            title="Bot boilerplate"
            description="Start creating scalable discord.js bot with typescript in seconds"
          />
          <SmallProjectCard 
            tech="VUE CSS JS"
            title="My blog"
            description="Front-end of my future blog website written in vue"
          />
          <SmallProjectCard 
            tech="Figma"
            title="Chess pro"
            description="Figma landing page about service for viewing chess tournaments"
          />
          <SmallProjectCard 
            tech="Figma"
            title="Crash protect website"
            description="Figma template for website about anti-raid, anti-crash discord bot"
          />
          <SmallProjectCard 
            tech="HTML CSS"
            title="CSS expirements"
            description="Collection of my different little projects in css"
          />
          <SmallProjectCard 
            tech="Lua NeoVim"
            title="Web Dev nvim config"
            description="Config for neovim perfect for web developer"
          />
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ image, tech, title, description }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="border border-grey flex flex-col h-full bg-bg relative overflow-hidden group transition-all duration-300 hover:border-accent"
    >
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <div className="w-full h-[2px] bg-accent/20 animate-scan shadow-[0_0_15px_var(--color-accent)]"></div>
      </div>

      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover border-b border-grey grayscale group-hover:grayscale-0 transition-all duration-500" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute top-2 right-2 bg-bg/80 backdrop-blur-sm border border-grey/30 px-2 py-1 flex items-center gap-1 text-[10px] font-mono text-grey opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-1 h-1 rounded-full bg-accent animate-pulse"></div>
          SRC_ACTIVE
        </div>
      </div>

      <div className="p-2 border-b border-grey text-grey text-xs font-mono flex flex-wrap gap-2 bg-black/10">
        {tech.split(' ').map((t: string, i: number) => (
          <span key={i} className="hover:text-accent transition-colors">#{t}</span>
        ))}
      </div>

      <div className="p-4 flex flex-col gap-4 flex-grow relative z-10">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-medium group-hover:text-accent transition-colors">{title}</h3>
          <TerminalIcon size={16} className="text-grey/30 group-hover:text-accent transition-colors" />
        </div>
        <TypingText text={description} className="text-grey text-sm leading-relaxed" />
        
        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-accent/0 group-hover:border-accent/50 transition-all"></div>
      </div>
    </motion.div>
  );
}

function SmallProjectCard({ tech, title, description }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ borderColor: 'var(--color-accent)', x: 5 }}
      className="border border-grey flex flex-col h-full bg-bg relative overflow-hidden group transition-all duration-300"
    >
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <div className="w-full h-[1px] bg-accent/30 animate-scan"></div>
      </div>

      <div className="p-2 border-b border-grey text-grey text-[10px] font-mono bg-black/5 flex justify-between items-center">
        <div className="flex gap-2">
          {tech.split(' ').map((t: string, i: number) => (
            <span key={i}>[{t}]</span>
          ))}
        </div>
        <Code2 size={12} className="text-grey/20 group-hover:text-accent transition-colors" />
      </div>

      <div className="p-4 flex flex-col gap-3 flex-grow relative z-10">
        <h3 className="text-xl font-medium group-hover:text-accent transition-colors">{title}</h3>
        <TypingText text={description} className="text-grey text-sm" />
      </div>
      
      {/* Status indicator */}
      <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-1 h-1 bg-accent shadow-[0_0_5px_var(--color-accent)]"></div>
      </div>
    </motion.div>
  );
}
