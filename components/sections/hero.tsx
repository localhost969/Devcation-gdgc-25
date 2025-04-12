import { Button } from "@/components/ui/button";
import { ArrowRight, MessagesSquare, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { number: "4.6/5+", label: "Hacker rating" },
  { number: "300+", label: "Hacks" },
  { number: "25+", label: "Speakers and mentors" },
  { number: "500+", label: "Hackers" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative py-16 sm:py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background text-center px-4 w-full">
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Welcome to Devcation`25
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-muted-foreground max-w-3xl mx-auto px-4">
            Join us for a week-long celebration of technology, innovation, and collaboration
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a href="https://unstop.com/college-fests/devcation25-gdg-on-campus-igdtuw-indira-gandhi-delhi-technical-university-for-women-igdtuw-delhi-368807" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto font-semibold text-base sm:text-lg px-4 sm:px-6 py-5 sm:py-6 h-auto">
                Register Now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a>
          </div>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <a href="https://chat.whatsapp.com/KIlPsKeZZdo7KhKtilL8AT" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold">
                <MessagesSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Join WhatsApp
              </Button>
            </a>
            <a href="https://discord.gg/eG4YP3gA48" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold">
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Join Discord
              </Button>
            </a>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="mt-16 sm:mt-20 max-w-[100vw]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 ease-in-out bg-card/50 backdrop-blur-sm border-none transform hover:-translate-y-1"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-sm sm:text-base text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}