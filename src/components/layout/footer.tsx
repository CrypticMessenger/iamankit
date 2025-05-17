import { userData } from '@/data/user-data';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {userData.name}. All rights reserved.</p>
        <p className="text-sm mt-1">Designed with inspiration and built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
