import ScrollToTopButton from '@/components/shared/ScrollToTopButton';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = 2025; // Updated to 2025 as requested
  return (
    <footer className="border-t border-border/40 py-8 bg-background">
      <div className="container max-w-screen-2xl text-center text-sm text-muted-foreground">
        <div className="flex justify-center space-x-4 mb-4">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
                <Github size={24} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
            </a>
            <a href={SOCIAL_LINKS.email} aria-label="Email" className="hover:text-primary transition-colors">
                <Mail size={24} />
            </a>
        </div>
        <p>&copy; {currentYear} Jayin Khanna. All rights reserved.</p>
        <p>Built with Next.js and Tailwind CSS.</p>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
