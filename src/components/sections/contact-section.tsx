"use client";

import { useFormState, useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { userData } from "@/data/user-data";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? (
        <>
          <Send className="mr-2 h-4 w-4 animate-pulse" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

const ContactSection = () => {
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitContactForm, { success: false, message: "", errors: null });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        form.reset(); // Reset form on successful submission
      } else if (state.errors) {
         // Display field-specific errors
         Object.entries(state.errors).forEach(([field, errors]) => {
          if (Array.isArray(errors) && errors.length > 0) {
            form.setError(field as keyof ContactFormValues, { type: "server", message: errors[0] });
          }
        });
        toast({
          title: "Error",
          description: "Please correct the errors in the form.",
          variant: "destructive",
        });
      } else {
         toast({
          title: "Error",
          description: state.message || "An unknown error occurred.",
          variant: "destructive",
        });
      }
    }
  }, [state, toast, form]);


  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
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
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Form</CardTitle>
              <CardDescription>Fill out the form below, and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="John Doe" 
                    {...form.register("name")}
                    className="mt-1 bg-background"
                  />
                  {form.formState.errors.name && <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="you@example.com" 
                    {...form.register("email")}
                    className="mt-1 bg-background"
                  />
                  {form.formState.errors.email && <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Your message here..." 
                    rows={5} 
                    {...form.register("message")}
                    className="mt-1 bg-background"
                  />
                  {form.formState.errors.message && <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Direct Contact</CardTitle>
                <CardDescription>Other ways to connect with me.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <a href={`mailto:${userData.email}`} className="text-lg text-muted-foreground hover:text-primary transition-colors">
                    {userData.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">(123) 456-7890</span> {/* Placeholder phone */}
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg text-muted-foreground">San Francisco, CA</span> {/* Placeholder location */}
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
