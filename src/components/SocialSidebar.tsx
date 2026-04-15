import { Github, Twitter, Linkedin, MessageSquare } from 'lucide-react';

export default function SocialSidebar() {
  return (
    <div className="fixed left-4 md:left-8 top-0 h-screen hidden lg:flex flex-col items-center gap-4 z-40">
      <div className="w-[1px] h-32 bg-grey"></div>
      <a href="https://github.com/AhmadMalik24" target="_blank" rel="noreferrer" className="text-grey hover:text-white transition-colors">
        <Github size={24} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-grey hover:text-white transition-colors">
        <Twitter size={24} />
      </a>
      <a href="https://linkedin.com/in/ahmadmalik24" target="_blank" rel="noreferrer" className="text-grey hover:text-white transition-colors">
        <Linkedin size={24} />
      </a>
      <a href="https://discord.com" target="_blank" rel="noreferrer" className="text-grey hover:text-white transition-colors">
        <MessageSquare size={24} />
      </a>
    </div>
  );
}
