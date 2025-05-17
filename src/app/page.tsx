import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AboutSection from '@/components/sections/about-section';
import ProjectsSection from '@/components/sections/projects-section';
import ContactSection from '@/components/sections/contact-section';
import ReadingSection from '@/components/sections/reading-section';
import AchievementsSection from '@/components/sections/achievements-section';
import ExperienceSection from '@/components/sections/experience-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ReadingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
