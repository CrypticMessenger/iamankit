"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { userData } from "@/data/user-data";
const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary rounded-lg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl flex items-center justify-center gap-3">
            <Mail className="h-10 w-10 text-primary" />
            Get In Touch
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
             {/* The "Direct Contact" card will now take up the full width on small screens */}
          <Card className="shadow-xl md:col-span-2"> 
              <CardHeader>
                <CardTitle className="text-2xl">Direct Contact</CardTitle>
                <CardDescription>Other ways to connect with me.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <a href={`mailto:${userData.email}`} className="text-lg text-muted-foreground hover:text-primary transition-colors">
                    {userData.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                 <div className="p-2 bg-primary rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg text-muted-foreground">(123) 456-7890</span> {/* Placeholder phone */}
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">San Francisco, CA</span> {/* Placeholder location */}
                </div>
              </CardContent>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary rounded-full">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <a href={userData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
            <div className="text-center md:text-left">
                <p className="text-lg text-muted-foreground">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
