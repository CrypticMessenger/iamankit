import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy } from 'lucide-react';
import { userData } from '@/data/user-data';
import Link from 'next/link';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-secondary rounded-lg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl flex items-center justify-center gap-3">
          <Trophy className="h-10 w-10 text-primary" />
 Achievements
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Highlights of my accomplishments and recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userData.achievements.map((achievement, index) => (
            <Card key={index} className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {achievement.title}
                </CardTitle>
                {achievement.description && (
                  <CardDescription>{achievement.description}</CardDescription>
                )}
              </CardHeader>
              {achievement.link && (
                <CardContent>
                  <Button asChild>
                    <Link href={achievement.link} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;