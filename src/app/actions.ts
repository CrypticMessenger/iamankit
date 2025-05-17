"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  const validationResult = contactFormSchema.safeParse(rawData);

  if (!validationResult.success) {
    return { 
      success: false, 
      message: "Validation failed.",
      errors: validationResult.error.flatten().fieldErrors 
    };
  }

  // Simulate form submission (e.g., sending an email or saving to a database)
  console.log("Contact Form Submitted:", validationResult.data);
  
  // In a real application, you would integrate with an email service or database here.
  // For demonstration purposes, we'll just return a success message.

  return { 
    success: true, 
    message: "Thank you for your message! I'll get back to you soon.",
    errors: null
  };
}
