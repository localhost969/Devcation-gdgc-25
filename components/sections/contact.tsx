import React, { useState } from 'react'; // Import useState
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false); // Add state for submission status

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    // Here you would typically handle the form submission (e.g., send data to an API)
    // For this dummy example, we just set the submitted state to true
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              {!isSubmitted && ( // Only show description if form is not submitted
                <CardDescription>Have questions or want to collaborate? Send us a message!</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              {isSubmitted ? ( // Conditional rendering based on submission status
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground">We will get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6"> {/* Add onSubmit handler */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" name="name" placeholder="Enter your name" required /> {/* Added required */}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input id="email" name="email" type="email" placeholder="Enter your email" required /> {/* Added required */}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select name="subject" required> {/* Added required */}
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Query</SelectItem>
                        <SelectItem value="sponsorship">Sponsorship Inquiry</SelectItem>
                        <SelectItem value="event">Event Question</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" rows={5} placeholder="Your message..." required /> {/* Added required */}
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}