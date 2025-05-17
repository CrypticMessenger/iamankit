import Link from 'next/link';
import { SmoothScrollLink } from '@/components/ui/smooth-scroll-link';
import { Button } from '@/components/ui/button';
import { DownloadCloud, BrainCircuit, Linkedin, Github, Menu } from 'lucide-react';
import { userData } from '@/data/user-data';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

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
          <BrainCircuit className="h-7 w-7 text-primary" />
          <span className="text-2xl font-bold text-foreground">Ankit's Portfolio</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
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

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[300px]">
              <div className="flex flex-col space-y-6 p-6">
                <Link href="/" className="flex items-center gap-2 mb-6" legacyBehavior={false}>
                  <BrainCircuit className="h-7 w-7 text-primary" />
                  <span className="text-xl font-bold text-foreground">Ankit's Portfolio</span>
                </Link>
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <SheetClose asChild>
                        <SmoothScrollLink 
                          href={item.href} 
                          className="block text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                        >
                          {item.label}
                        </SmoothScrollLink>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="default" size="lg" className="w-full mt-4">
                  <Link href={userData.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <DownloadCloud className="mr-2 h-5 w-5" />
                    Resume
                  </Link>
                </Button>
                <div className="flex justify-center space-x-4 pt-4 border-t border-border/40">
                  <SheetClose asChild>
                    <Link href={userData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-7 w-7" />
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={userData.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-7 w-7" />
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
