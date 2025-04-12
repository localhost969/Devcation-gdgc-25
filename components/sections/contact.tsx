import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>We will try to get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                  <input id="name" name="name" className="w-full p-2 border rounded-md" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                  <input id="email" name="email" type="email" className="w-full p-2 border rounded-md" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input id="subject" name="subject" className="w-full p-2 border rounded-md" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" name="message" rows={5} className="w-full p-2 border rounded-md"></textarea>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}