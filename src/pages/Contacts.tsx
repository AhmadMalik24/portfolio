import { MessageSquare, Mail, Twitter, MapPin, Globe, ShieldCheck, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Dots from '../components/Dots';
import ContactBox from '../components/ContactBox';
import ContactForm from '../components/ContactForm';
import TerminalSandbox from '../components/TerminalSandbox';

export default function Contacts() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col gap-24 pb-32 relative">
      <div className="absolute -left-32 top-1/3 w-24 h-24 border border-grey hidden lg:block"></div>
      <Dots className="absolute -right-16 top-1/2 hidden lg:block" />
      
      <section className="pt-12">
        <h1 className="text-4xl font-semibold mb-4"><span className="text-accent">/</span>{t('sections.contacts')}</h1>
        <p className="text-grey">{t('about.whoAmI')}</p>
      </section>

      <section className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <TerminalSandbox />
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <p className="text-grey leading-relaxed text-lg">
            {t('contact.message')}
          </p>

          <div className="flex flex-col gap-4 w-full">
            <ContactBox 
              title="Location & Timezone"
              items={[
                { icon: MapPin, text: "Lahore, Pakistan", label: "Current Base" },
                { icon: Globe, text: "PKT (UTC+5)", label: "Timezone" }
              ]}
            />

            <ContactBox 
              title="Contact Methods"
              items={[
                { icon: Mail, text: "ahmad.malik12340@gmail.com", label: "Email" }
              ]}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-medium mb-12 hover-glitch"><span>#</span>{t('contact.allMedia')}</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-wrap gap-8">
              <a href="https://github.com/AhmadMalik24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-grey hover:text-white transition-colors group">
                <Github size={24} className="group-hover:text-accent transition-colors" />
                <span className="font-mono">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/ahmadmalik24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-grey hover:text-white transition-colors group">
                <MessageSquare size={24} className="group-hover:text-accent transition-colors" />
                <span className="font-mono">LinkedIn</span>
              </a>
              <a href="mailto:ahmad.malik12340@gmail.com" className="flex items-center gap-2 text-grey hover:text-white transition-colors group">
                <Mail size={24} className="group-hover:text-accent transition-colors" />
                <span className="font-mono">Email</span>
              </a>
            </div>
            <p className="text-grey/50 text-sm max-w-xs">
              Feel free to reach out on any of these platforms. I'm usually active during business hours.
            </p>
            <div className="hidden lg:block">
              <Dots />
            </div>
          </div>

          <div className="flex-[2]">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
