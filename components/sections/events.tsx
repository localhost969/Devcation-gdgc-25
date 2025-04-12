import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  {
    title: "PIXEL HAVEN:",
    subtitle: "Cozy Scenery Challenge",
    category: "UI/UX",
    description: "Design cozy, game-inspired pixel art scenes using tools like Pixilart or Aseprite. Think Stardew Valley vibes, perfect for Chrome wallpapers!",
    image: "/pixel.jpg",
  },
  {
    title: "FUTURESCAPE:",
    subtitle: "Visionary Tech Forecast",
    category: "Blog Writing",
    description: "Predict the future of a tech stack in a creative blog format—news, fiction, or research-based. Explore what tech might look like in 2040 and beyond.",
    image: "/futureScape.jpg",
  },
  {
    title: "GEMINI REVAMP:",
    subtitle: "Code & Create",
    category: "Web Development",
    description: "Use Gemini AI to generate and refine UI components, redesign the Devcation interface with Tailwind/Bootstrap, and deploy on Replit.",
    image: "/Gemini.png",
  },
  {
    title: "NEON MIRAGE:",
    subtitle: "Cyberpunk AR Filter",
    category: "AR/VR",
    description: "Create a cyberpunk-themed AR filter with interactive elements using Lens Studio. Bring your imagination to life in augmented reality!",
    image: "/neonmirage.jpg",
  },
];

const REGISTER_URL = "https://unstop.com/college-fests/devcation25-gdg-on-campus-igdtuw-indira-gandhi-delhi-technical-university-for-women-igdtuw-delhi-368807";

export function EventsSection() {
  return (
    <section id="events" className="py-16 bg-gradient-to-r from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Events</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none bg-card rounded-2xl">
              <div className="relative bg-gradient-to-r from-accent to-muted p-6">
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="text-2xl font-bold mb-1 text-card-foreground">{event.title}</h3>
                  <h4 className="text-2xl font-bold mb-3 text-card-foreground">{event.subtitle}</h4>
                  <p className="text-muted-foreground mb-6">{event.category}</p>
                  
                  <Button 
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a 
                      href={REGISTER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register Now
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}