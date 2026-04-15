import { Github, Twitter, Linkedin, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="border-t border-grey/30 mt-32 py-8 px-4 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-white font-bold">
              <div className="w-4 h-4 border-2 border-accent rotate-45"></div>
              Ahmad Malik
            </Link>
            <span className="text-grey">ahmad.malik12340@gmail.com</span>
          </div>
          <p className="text-white">{t('footer.title')}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-medium">Media</h3>
          <div className="flex gap-4">
            <a href="https://github.com/AhmadMalik24" target="_blank" rel="noreferrer" className="text-grey hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-grey hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://linkedin.com/in/ahmadmalik24" target="_blank" rel="noreferrer" className="text-grey hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center text-grey">
        {t('footer.copyright')}
      </div>
    </footer>
  );
}
