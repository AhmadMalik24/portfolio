import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { i18n, t } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.works'), path: '/projects' },
    { name: t('nav.aboutMe'), path: '/about-me' },
    { name: t('nav.contacts'), path: '/contacts' },
  ];

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'ru', name: 'RU' },
    { code: 'ua', name: 'UA' },
    { code: 'ur', name: 'UR' },
  ];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setLangOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const currentLang = languages.find(l => l.code === i18n.language)?.name || 'EN';

  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-sm py-4 px-4 md:px-16 lg:px-32 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
        <div className="w-4 h-4 border-2 border-accent rotate-45"></div>
        Ahmad Malik
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`flex items-center gap-1 transition-colors ${
              isActive(link.path) ? 'text-white font-medium' : 'text-grey hover:text-white'
            }`}
          >
            <span className="text-accent">#</span>
            {link.name}
          </Link>
        ))}
        
        <div className="relative">
          <button 
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 text-grey hover:text-white transition-colors uppercase"
          >
            {currentLang} <ChevronDown size={16} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full right-0 mt-2 bg-bg border border-border p-2 min-w-[80px] z-50"
              >
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`block w-full text-left px-2 py-1 hover:bg-white/5 transition-colors ${
                      i18n.language === lang.code ? 'text-accent font-medium' : 'text-grey hover:text-white'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-bg z-40 flex flex-col p-8 pt-24 gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-3xl flex items-center gap-2 ${
                  isActive(link.path) ? 'text-white font-medium' : 'text-grey'
                }`}
              >
                <span className="text-accent">#</span>
                {link.name}
              </Link>
            ))}
            
            <div className="mt-auto">
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className="text-3xl text-grey flex items-center gap-2 uppercase"
              >
                {currentLang} <ChevronDown size={24} />
              </button>
              {langOpen && (
                <div className="mt-4 flex flex-col gap-4 pl-4 border-l border-accent">
                  {languages.map(lang => (
                    <button 
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`text-2xl text-left ${
                        i18n.language === lang.code ? 'text-accent font-medium' : 'text-grey hover:text-white'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
