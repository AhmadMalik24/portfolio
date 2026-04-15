import { motion } from 'motion/react';
import { User, MapPin, Calendar, Terminal as TerminalIcon, Cpu, Monitor, HardDrive } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Dots from '../components/Dots';

export default function AboutMe() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col gap-24 pb-32 relative">
      <div className="absolute -right-32 top-1/4 w-24 h-24 border border-grey hidden lg:block"></div>
      <div className="absolute -left-32 top-3/4 w-24 h-24 border border-grey hidden lg:block"></div>
      
      <section className="pt-12">
        <h1 className="text-4xl font-semibold mb-4 hover-glitch"><span>/</span>{t('sections.aboutMe')}</h1>
        <p className="text-grey">{t('about.whoAmI')}</p>
      </section>

      <section className="flex flex-col lg:flex-row items-start gap-12">
        <div className="flex-1 flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-grey leading-relaxed space-y-4"
          >
            <p>
              Hi, I'm Ahmad Malik!
            </p>
            <p>
              I'm a Software Engineer based in Lahore, Pakistan. I hold a Bachelor's degree in Computer Science from the University of Central Punjab, where I built a strong foundation in software development and modern technologies.
            </p>
            <p>
              I specialize in developing full-stack applications using React, Node.js, and Django REST Framework, with a focus on building scalable, efficient, and user-friendly systems. I have worked on projects such as an AI-powered digital image forensic system, a multithreaded web server in C++, and a custom code editor.
            </p>
            <p>
              I have a strong interest in cybersecurity and artificial intelligence, and I continuously strive to improve my skills through hands-on projects and continuous learning. I'm passionate about solving real-world problems, collaborating with teams, and growing as a software engineer.
            </p>
          </motion.div>

          {/* Neofetch style system info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-grey bg-terminal-bg p-6 font-mono text-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/30"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="text-accent flex flex-col gap-1 select-none opacity-50">
                <span>      .---.      </span>
                <span>     /     \     </span>
                <span>    | () () |    </span>
                <span>     \  ^  /     </span>
                <span>      '---'      </span>
                <span>    AHMAD_OS     </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <span className="text-accent">user@ahmad</span>
                  <span className="text-white">----------------</span>
                </div>
                <div className="flex gap-4 items-center">
                  <User size={14} className="text-accent" />
                  <span className="text-grey">Education:</span>
                  <span className="text-white">BS Computer Science (UCP)</span>
                </div>
                <div className="flex gap-4 items-center">
                  <MapPin size={14} className="text-accent" />
                  <span className="text-grey">Location:</span>
                  <span className="text-white">Lahore, Pakistan</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Monitor size={14} className="text-accent" />
                  <span className="text-grey">Specialization:</span>
                  <span className="text-white">Full-Stack Development</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Cpu size={14} className="text-accent" />
                  <span className="text-grey">Focus Areas:</span>
                  <span className="text-white">Backend, System Design, Security</span>
                </div>
                <div className="flex gap-4 items-center">
                  <HardDrive size={14} className="text-accent" />
                  <span className="text-grey">Interests:</span>
                  <span className="text-white">Cybersecurity, AI, Scalable Systems</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="w-4 h-4 bg-bg"></div>
                  <div className="w-4 h-4 bg-grey"></div>
                  <div className="w-4 h-4 bg-accent"></div>
                  <div className="w-4 h-4 bg-terminal-green"></div>
                  <div className="w-4 h-4 bg-terminal-cyan"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex-1 relative w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full h-auto max-w-[350px] mx-auto group"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              poster="https://picsum.photos/seed/about/600/800"
              className="w-full h-auto object-contain border-b border-accent"
            >
              <source src="/videos/Agent_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Image Overlay Effect */}
            <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/50 transition-all pointer-events-none"></div>
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <Dots className="absolute top-10 -left-10" />
            <Dots className="absolute bottom-20 -right-10" />
            
            <div className="absolute -bottom-4 -left-4 bg-bg border border-grey px-3 py-1 flex items-center gap-2 text-[10px] font-mono text-grey">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
              LIVE_FEED_01
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-medium mb-12 hover-glitch"><span>#</span>{t('sections.skills')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <SkillBox title="Languages" skills="TypeScript Lua Python JavaScript" />
          <SkillBox title="Other" skills="HTML CSS EJS SCSS REST Jinja" />
          <SkillBox title="Tools" skills="VSCode Neovim Linux Figma XFCE Arch Git Font Awesome KDE fish" />
          <SkillBox title="Databases" skills="SQLite PostgreSQL Mongo" />
          <SkillBox title="Frameworks" skills="React Vue Disnake Discord.js Flask Express.js" />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-medium mb-12 hover-glitch"><span>#</span>{t('about.funFacts')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-wrap gap-4 col-span-2 h-fit">
            <FunFact icon={<Calendar size={14} />}>I like winter more than summer</FunFact>
            <FunFact icon={<TerminalIcon size={14} />}>I often bike with my friends</FunFact>
            <FunFact icon={<TerminalIcon size={14} />}>I like pizza and pasta</FunFact>
            <FunFact icon={<MapPin size={14} />}>I was in Egypt, Poland and Turkey</FunFact>
            <FunFact icon={<Monitor size={14} />}>My favorite movie is The Green Mile</FunFact>
            <FunFact icon={<HardDrive size={14} />}>I am still in school</FunFact>
            <FunFact icon={<User size={14} />}>I don’t have any siblings</FunFact>
          </div>
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="w-32 h-32 border border-grey rotate-45 absolute opacity-20"></div>
            <div className="w-48 h-48 border border-accent rotate-12 absolute opacity-10"></div>
            <Dots />
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillBox({ title, skills }: any) {
  const skillList = skills.split(' ');

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ borderColor: 'var(--color-accent)' }}
      className="border border-grey flex flex-col h-fit bg-bg relative overflow-hidden group transition-colors"
    >
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-full h-[2px] bg-accent/20 animate-scan shadow-[0_0_15px_var(--color-accent)]"></div>
      </div>

      <div className="p-2 border-b border-grey text-white font-medium flex justify-between items-center group-hover:border-accent transition-colors">
        <span>{title}</span>
        <span className="text-[10px] text-grey group-hover:text-accent transition-colors">[READY]</span>
      </div>
      <div className="p-3 flex flex-wrap gap-2 relative z-10">
        {skillList.map((skill: string, i: number) => (
          <motion.span
            key={i}
            whileHover={{ 
              scale: 1.1, 
              color: 'var(--color-white)',
              backgroundColor: 'rgba(199, 120, 221, 0.1)'
            }}
            className="text-grey px-1 cursor-default transition-colors border border-transparent hover:border-accent/30"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function FunFact({ children, icon }: any) {
  return (
    <motion.div 
      whileHover={{ 
        borderColor: 'var(--color-accent)',
        color: 'var(--color-white)',
        x: 5
      }}
      className="border border-grey p-3 text-grey flex items-center gap-3 transition-all cursor-default bg-bg group"
    >
      <span className="text-accent opacity-50 group-hover:opacity-100 transition-opacity">{icon}</span>
      <span className="font-mono text-sm">{children}</span>
    </motion.div>
  );
}

