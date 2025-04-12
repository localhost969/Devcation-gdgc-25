import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tracks = [
  {
    title: "HealthTech",
    emoji: "🩺",
    icon: "fa-heartbeat",
    accentColor: "bg-accent text-accent-foreground",
    description: "Innovative solutions to improve healthcare delivery, accessibility, and efficiency.",
    examples: "Medical diagnostics, Patient monitoring, Healthcare accessibility"
  },
  {
    title: "EdTech",
    emoji: "🎓",
    icon: "fa-graduation-cap",
    accentColor: "bg-secondary text-secondary-foreground",
    description: "Technologies that enhance learning experiences and educational outcomes.",
    examples: "Learning platforms, Educational games, Virtual classrooms"
  },
  {
    title: "Sustainable Development",
    emoji: "🌱",
    icon: "fa-leaf",
    accentColor: "bg-muted text-muted-foreground",
    description: "Solutions addressing environmental challenges and promoting sustainable practices.",
    examples: "Renewable energy, Waste management, Eco-friendly solutions"
  },
  {
    title: "FinTech",
    emoji: "💳",
    icon: "fa-credit-card",
    accentColor: "bg-primary/10 text-primary",
    description: "Innovations in financial services and technologies to improve accessibility and efficiency.",
    examples: "Payment solutions, Financial inclusion, Blockchain applications"
  },
];

export function TracksSection() {
  return (
    <section id="tracks" className="py-20 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Tracks</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Choose from our innovative tracks to solve real-world problems and create impactful solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tracks.map((track, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              {/* Color indicator */}
              <div className="h-1 w-full bg-primary"></div>
              
              <CardHeader className="relative pb-3 pt-5">
                <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                  <span className="text-8xl">{track.emoji}</span>
                </div>
                
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-12 h-12 rounded-md flex items-center justify-center bg-secondary dark:bg-secondary">
                    <span className="text-2xl">{track.emoji}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {track.title}
                  </CardTitle>
                </div>
                
                <p className="text-sm font-medium text-primary/80 dark:text-primary/80">
                  {track.examples}
                </p>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {track.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}