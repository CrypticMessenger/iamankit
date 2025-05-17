import Link from 'next/link';
import { SmoothScrollLink } from '@/components/ui/smooth-scroll-link';
import { Button } from '@/components/ui/button';
import { DownloadCloud, Briefcase, Linkedin, Github } from 'lucide-react';
import { userData } from '@/data/user-data';

const Header = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Reading', href: '#reading' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" legacyBehavior={false}>
          <Briefcase className="h-7 w-7 text-primary" />
          <span className="text-2xl font-bold text-foreground">Ankit's Portfolio</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <SmoothScrollLink 
                  href={item.href} 
                  className="text-md font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </SmoothScrollLink>
              </li>
            ))}
          </ul>
          <Button asChild variant="default" size="default">
            <Link href={userData.resumeUrl} target="_blank" rel="noopener noreferrer">
              <DownloadCloud className="mr-2 h-5 w-5" />
              Resume
            </Link>
          </Button>
          <Link href={userData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href={userData.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
