import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Github, Twitter, MessageSquare, Mail, Award, CheckCircle } from 'lucide-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Dots from '../components/Dots';
import TerminalWidget from '../components/TerminalWidget';
import ContactBox from '../components/ContactBox';
import TypingText from '../components/TypingText';
import Avatar3D from '../components/Avatar3D';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col gap-32 pb-32 overflow-visible">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 pt-12 relative overflow-visible">
        <div className="absolute -left-32 top-1/2 w-24 h-24 border border-grey hidden lg:block"></div>
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Ahmad Malik — <span className="text-accent">{t('hero.title')}</span>
          </h1>
          <p className="text-grey text-lg max-w-md">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contacts" className="btn-primary w-fit">
              {t('hero.cta')}
            </Link>
          </div>
          
          {/* Terminal Widget in Hero */}
          <div className="mt-4 max-w-lg">
            <TerminalWidget />
          </div>
        </div>
        
        <div className="flex-1 relative flex flex-col items-center overflow-visible">
          <div className="relative z-10 overflow-visible w-full flex justify-center">
             {/* 3D Avatar */}
             <Avatar3D />
          </div>
          
          <div className="border border-grey p-2 flex items-center gap-2 max-w-fit mt-4 whitespace-nowrap">
            <div className="w-4 h-4 bg-accent"></div>
            <span className="text-grey">{t('hero.status')} <span className="text-white font-medium">{t('hero.project')}</span></span>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="flex flex-col items-center justify-center py-12">
        <div className="relative border border-grey p-8 max-w-2xl">
          <div className="absolute -top-4 left-4 bg-bg px-2">
            <span className="text-4xl text-grey">"</span>
          </div>
          <p className="text-2xl text-white font-medium">
            {t('quote.text')}
          </p>
          <div className="absolute -bottom-4 right-4 bg-bg px-2">
             <span className="text-4xl text-grey">"</span>
          </div>
        </div>
        <div className="border border-t-0 border-grey p-4 self-end mr-[calc(50%-16rem)]">
          <span className="text-xl text-white">— Anonymous Developer</span>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <div className="flex justify-between items-end mb-12">
          <h2 className="section-title w-full md:w-1/2"><span>#</span>{t('sections.projects')}</h2>
          <Link to="/projects" className="text-white hover:text-accent transition-colors whitespace-nowrap">
            {t('common.viewAll')} ~~{'>'}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard 
            image="https://picsum.photos/seed/chert/400/200"
            tech="HTML SCSS Python Flask"
            title="ChertNodes"
            description="Minecraft servers hosting"
            live="#"
            cached="#"
          />
          <ProjectCard 
            image="https://picsum.photos/seed/protect/400/200"
            tech="React Express Discord.js Node.js"
            title="ProtectX"
            description="Discord anti-crash bot"
            live="#"
          />
          <ProjectCard 
            image="https://picsum.photos/seed/kahoot/400/200"
            tech="CSS Express Node.js"
            title="Kahoot Answers Viewer"
            description="Get answers to your kahoot quiz"
            live="#"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="section-title mb-12 hover-glitch"><span>#</span>{t('sections.skills')}</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 relative hidden lg:block">
            {/* Geometric shapes */}
            <div className="absolute top-0 left-0 w-16 h-16 border border-grey"></div>
            <div className="absolute top-20 left-20 w-24 h-24 border border-grey"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border border-grey"></div>
            <Dots className="absolute top-40 left-0" />
          </div>

          <div className="flex-[2] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-fit">
            <SkillBox title="Languages" skills="TypeScript Lua Python JavaScript" />
            <SkillBox title="Databases" skills="SQLite PostgreSQL Mongo" />
            <SkillBox title="Tools" skills="VSCode Neovim Linux Figma XFCE Arch Git Font Awesome" />
            <SkillBox title="Other" skills="HTML CSS EJS SCSS REST Jinja" />
            <SkillBox title="Frameworks" skills="React Vue Disnake Discord.js Flask Express.js" />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <h2 className="section-title mb-12"><span>#</span>{t('sections.certifications')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CertificationCard 
            title="Google Cybersecurity Professional Certificate"
            org="Coursera"
            year="2024"
            icon="🔒"
            link="https://www.coursera.org/account/accomplishments/professional-cert/M2Q9G1KP4B2H?utm_product=prof"
            image="/certificates/google_cybersecurity.jpeg"
          />
          <CertificationCard 
            title="Hands-on Introduction to Linux Commands & Shell Scripting"
            org="Coursera"
            year="2024"
            icon="🐧"
            link="https://www.coursera.org/account/accomplishments/verify/GBGCG4D3OQEE?utm_product=course"
            image="/certificates/linux.jpeg"
          />
          <CertificationCard 
            title="The Complete 2024 Web Development Bootcamp"
            org="Udemy"
            year="2024"
            icon="🚀"
            link="https://www.udemy.com/certificate/UC-c1dda538-ca9c-43fa-b951-140370b80aaa/"
            image="/certificates/web.jpg"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section>
        <h2 className="section-title mb-12"><span>#</span>{t('sections.aboutMe')}</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col gap-8">
            <p className="text-grey leading-relaxed">
              {t('about.bio')}
            </p>
            
            {/* Quick System Info */}
            <div className="border border-grey p-4 font-mono text-xs text-grey/60 flex flex-col gap-2 bg-terminal-bg/30">
              <div className="flex justify-between">
                <span>{t('about.os')}</span>
                <span className="text-accent">[STABLE]</span>
              </div>
              <div className="flex justify-between">
                <span>{t('about.role')}</span>
                <span>{t('about.location')}</span>
              </div>
            </div>

            <Link to="/about-me" className="btn-primary w-fit">
              {t('common.readMore')} ~~{'>'}
            </Link>
          </div>
          
          <div className="flex-1 relative flex items-center justify-center">
            <div className="relative w-full aspect-[3/4] max-w-[350px]">
              <img 
                src="/images/profile.png" 
                alt="About Ahmad" 
                className="w-full h-full object-contain border-b border-accent"
                referrerPolicy="no-referrer"
              />
              <Dots className="absolute top-10 -left-10" />
              <Dots className="absolute bottom-20 -right-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="relative overflow-hidden">
        <h2 className="section-title mb-12 hover-glitch"><span>#</span>{t('sections.contacts')}</h2>
        
        <div className="flex flex-col md:flex-row justify-between gap-12 relative z-10">
          <div className="flex-1 flex flex-col gap-8">
            <p className="text-grey max-w-md text-lg leading-relaxed">
              {t('contact.message')}
            </p>
            
            {/* Live Status Indicator */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="relative">
                <div className="w-2 h-2 bg-terminal-green rounded-full"></div>
                <div className="absolute inset-0 w-2 h-2 bg-terminal-green rounded-full animate-ping"></div>
              </div>
              <span className="text-grey/60 uppercase tracking-widest">{t('contact.status')}: <span className="text-terminal-green">{t('contact.statusReady')}</span></span>
            </div>

            <div className="hidden md:block">
              <Dots />
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <ContactBox 
              title={t('contact.messageMeHere')}
              items={[
                { icon: MessageSquare, text: "https://discord.gg/vV2zqaA3", label: "Discord" },
                { icon: Mail, text: "ahmad.malik12340@gmail.com", label: "Email" }
              ]}
            />
            
            {/* Decorative Signal Animation */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 pointer-events-none opacity-10">
              <motion.div 
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 border border-accent rounded-full"
              ></motion.div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.8, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute inset-0 border border-accent rounded-full"
              ></motion.div>
              <motion.div 
                animate={{ 
                  scale: [1, 2.1, 1],
                  opacity: [0.1, 0.1, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute inset-0 border border-accent rounded-full"
              ></motion.div>
            </div>
          </div>
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
      className="border border-grey flex flex-col h-full bg-bg transition-all"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover border-b border-grey" referrerPolicy="no-referrer" />
      <div className="p-2 border-b border-grey text-grey text-sm">
        {tech}
      </div>
      <div className="p-4 flex flex-col gap-4 flex-grow">
        <h3 className="text-2xl font-medium">{title}</h3>
        <TypingText text={description} className="text-grey" />
      </div>
    </motion.div>
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

function CertificationCard({ title, org, year, icon, link, image }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, rotate: 1 }}
      className="border border-grey p-4 flex flex-col gap-4 bg-bg hover:border-accent transition-all group"
    >
      {image && (
        <div className="w-full h-32 rounded overflow-hidden border border-grey/30">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="flex justify-between items-start">
        <span className="text-3xl">{icon}</span>
        <div className="flex items-center gap-1 text-[10px] text-accent border border-accent px-2 py-0.5 rounded">
          <CheckCircle size={10} />
          VERIFIED
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-grey text-sm">{org}</p>
      </div>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-grey text-xs">{year}</span>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-accent text-xs hover:underline">
            View credentials
          </a>
        ) : (
          <button className="text-accent text-xs hover:underline">View credentials</button>
        )}
      </div>
    </motion.div>
  );
}
