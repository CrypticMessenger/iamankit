import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Book } from 'lucide-react';
import { userData } from '@/data/user-data';

const ReadingSection: React.FC = () => {
  return (
    <section id="reading" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl flex items-center justify-center gap-3">
            <Book className="h-10 w-10 text-primary" />
            Reading Shelf
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Books, papers, and articles I've been reading.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {userData.readingList.map((book, index) => (
            <Card key={index} className="overflow-hidden shadow-xl flex flex-col">
              <div className="relative w-full h-48"> {/* Adjust height as needed */}
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-md"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{book.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{book.author}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                {book.link && (
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Read More
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadingSection;