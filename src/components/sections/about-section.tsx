import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { userData } from '@/data/user-data';
import { UserCircle2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            A little bit about my journey and expertise.
          </p>
        </div>

        <Card className="overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3">
              <Image
                src="https://placehold.co/600x800.png"
                alt={userData.name}
                width={600}
                height={800}
                className="h-full w-full object-cover"
                data-ai-hint="professional person"
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-2">
                  <UserCircle2 className="h-8 w-8 text-primary" />
                  {userData.name}
                </CardTitle>
                <p className="text-lg text-primary">{userData.title}</p>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                {userData.bio.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">My Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {userData.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
