import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const prizes = [
  {
    title: "Hack & Solve Winners",
    emoji: "🏆",
    prize: "Cash prize",
    description: "Cash Prize with swag kits, medals, certificates, social media shoutouts, Interview Buddy Mock Interviews, Codecrafter Membership, Unstop Coupons.",
  },
  {
    title: "Mini Event Winners",
    emoji: "🥇",
    prize: "Certificates",
    description: "Goodies, certificates, social media shoutouts, and more.",
  },
  {
    title: "All Finalists",
    emoji: "🏅",
    prize: "Certificates",
    description: "Exciting goodies, certificates, and more.",
  },
  {
    title: "All Participants",
    emoji: "🎖️",
    prize: "Swag Kits",
    description: "Certificates and 50% unstop coupons.",
  },
];

export function PrizesSection() {
  return (
    <section id="prizes" className="py-16 bg-muted/30 dark:bg-muted/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Prizes</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {prizes.map((prize, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-md transition-all duration-300 border-border"
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <div className="text-7xl transform translate-x-5 -translate-y-5">{prize.emoji}</div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-secondary dark:bg-secondary flex items-center justify-center">
                    <span className="text-4xl">{prize.emoji}</span>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-bold bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                      {prize.prize}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl">{prize.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm">{prize.description}</p>
              </CardContent>
              
              {index === 0 && (
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}