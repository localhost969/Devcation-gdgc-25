import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

// Define specific event categories
type EventCategory = "UI/UX" | "Blog Writing" | "Web Development" | "AR/VR";

// Define the structure for an event
interface Event {
  title: string;
  subtitle: string;
  category: EventCategory; // Use the specific type here
  description: string;
  image: string; // Keep image for potential future use or remove if definitely not needed
}

const events: Event[] = [ // Type the array
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
  // Sponsor data
  const sponsors = [
    {
      name: 'RC IGDTUW',
      image: 'https://devcation-2025.vercel.app//sponsors/rcigdtuw.jpg',
      link: 'https://sites.google.com/view/rcigdtuw/home'
    },
    {
      name: 'Unstop',
      image: 'https://devcation-2025.vercel.app//unstop.jpg',
      link: 'https://unstop.com/'
    },
    {
      name: 'GeekRoom',
      image: 'https://devcation-2025.vercel.app//geekroom.jpg',
      link: 'https://www.geekroom.in/'
    },
    {
      name: 'Sprint India',
      image: 'https://devcation-2025.vercel.app/sprint.jpg',
      link: 'https://www.sprintindia.work/about-us/'
    },
    {
      name: 'Interview Buddy',
      image: 'https://devcation-2025.vercel.app/sponsors/interview_buddy.png',
      link: 'https://dev.interviewbuddy.in/'
    },
    {
      name: 'CodeCrafters',
      image: 'https://devcation-2025.vercel.app/codecrafters.jpg',
      link: 'https://codecrafters.io/'
    }
  ];

  return (
    <section id="events" className="py-16 bg-gradient-to-r from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Events</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {events.map((event, index) => {
            // Use Record<EventCategory, string> for type safety
            const gradients: Record<EventCategory, string> = {
              "UI/UX": "from-pink-500 to-purple-600", 
              "Blog Writing": "from-blue-500 to-cyan-500",
              "Web Development": "from-amber-500 to-red-600",
              "AR/VR": "from-emerald-500 to-teal-700"
            };
            
            // Use Record<EventCategory, JSX.Element> for type safety
            const icons: Record<EventCategory, JSX.Element> = {
              "UI/UX": (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              ),
              "Blog Writing": (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              ),
              "Web Development": (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              ),
              "AR/VR": (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8v8h.8c1.1 0 2.1-.6 2.6-1.5L8 12l-1.6-2.5C5.9 8.6 4.9 8 3.8 8H3Z"/><path d="m8 12 3-5.1c.2-.3.5-.5.8-.5.4 0 .8.2 1 .5L16 12l-3.2 5.1c-.2.3-.5.5-.8.5-.4 0-.8-.2-1-.5L8 12Z"/><path d="M21 8h-.8c-1.1 0-2.1.6-2.6 1.5L16 12l1.6 2.5c.5.9 1.5 1.5 2.6 1.5h.8V8Z"/></svg>
              )
            };
            
            // Now TypeScript knows event.category is a valid key
            const gradient = gradients[event.category]; 
            const icon = icons[event.category];
            
            // Extract the color name safely for the border class
            const colorName = gradient.split(' ')[0].split('-')[1]; // e.g., "pink", "blue"
            const borderColorClass = `border-${colorName}-500/30`; // Construct the class name

            return (
              <Card 
                key={index} 
                className="overflow-hidden group transition-all duration-300 border border-muted/20 hover:border-primary/30 hover:shadow-lg rounded-xl flex flex-col"
              >
                <div className={`bg-gradient-to-r ${gradient} p-4 text-white flex justify-between items-start`}>
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-2.5 flex items-center justify-center">
                    {icon}
                  </div>
                  <span className="bg-black/30 text-white text-xs font-medium py-1 px-2.5 rounded-full backdrop-blur-sm">
                    {event.category}
                  </span>
                </div>
                
                <CardContent className="p-5 flex-grow flex flex-col">
                  <h3 className="font-bold text-lg">{event.title}</h3>
                  <p className="text-sm font-medium mb-2 text-muted-foreground">{event.subtitle}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-4">{event.description}</p>
                </CardContent>
                
                <CardFooter className="px-5 pb-5 pt-0">
                  <Button 
                    variant="outline" 
                    // Use the constructed border class and the gradient class directly
                    className={`w-full ${borderColorClass} hover:bg-gradient-to-r hover:${gradient} hover:text-white transition-all duration-300`}
                    asChild
                  >
                    <a 
                      href={REGISTER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Register
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Partners section with improved styling */}
      <div id="partners" className="mt-24 bg-gradient-to-b from-muted/10 to-background py-16 rounded-t-3xl">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-3">Our Partners</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Proudly supported by industry leaders who help make Devcation'25 possible</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 max-w-6xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <a 
                key={index}
                href={sponsor.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center bg-card/50 backdrop-blur-sm rounded-xl border border-muted/20 overflow-hidden h-32 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
              >
                <div className="flex items-center justify-center h-16 w-full mb-2">
                  <img 
                    src={sponsor.image} 
                    alt={`${sponsor.name} logo`} 
                    className="max-w-full max-h-16 object-contain mx-auto transition-all duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <p className="text-center font-medium text-xs text-muted-foreground group-hover:text-primary transition-colors truncate w-full">
                  {sponsor.name}
                </p>
              </a>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline" className="hover:bg-primary hover:text-white transition-all">
              <a href="#contact" className="flex items-center gap-2">
                Become a Partner
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}