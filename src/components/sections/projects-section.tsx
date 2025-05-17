import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/project-card';
import { FolderKanban } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl flex items-center justify-center gap-3">
             <FolderKanban className="h-10 w-10 text-primary" />
            My Projects
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            A selection of my recent work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
