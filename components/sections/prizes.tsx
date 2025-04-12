import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Actual SVG Icons
const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

const MedalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-yellow-500">
    <path d="M12 16.5l-3.5-2-3.5 2v-6l3.5-2 3.5 2 3.5-2 3.5 2v6l-3.5 2-3.5-2z"/>
    <path d="M12 10.5l-3.5-2-3.5 2"/>
    <path d="M12 10.5l3.5-2 3.5 2"/>
    <circle cx="12" cy="7.5" r="4.5"/>
  </svg>
);

const CertificateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-blue-500">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <circle cx="8" cy="15" r="2"/>
    <path d="M12 15h6"/>
    <path d="M10 11h6"/>
  </svg>
);

const ParticipationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-green-500">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const prizes = [
  {
    title: "Hack & Solve Winners",
    Icon: TrophyIcon, // Use SVG component
    prize: "Cash prize",
    description: "Cash Prize, swag kits, medals, certificates, social media shoutouts, Interview Buddy Mock Interviews, Codecrafter Membership, Unstop Coupons.",
  },
  {
    title: "Mini Event Winners",
    Icon: MedalIcon, // Use SVG component
    prize: "Goodies", // Simplified prize tag
    description: "Goodies, certificates, social media shoutouts, and more.",
  },
  {
    title: "All Finalists",
    Icon: CertificateIcon, // Use SVG component
    prize: "Certificates",
    description: "Exciting goodies, certificates, and recognition.", // Slightly rephrased
  },
  {
    title: "All Participants",
    Icon: ParticipationIcon, // Use SVG component
    prize: "Benefits", // More general term
    description: "Participation certificates and 50% Unstop coupons.", // Simplified
  },
];

export function PrizesSection() {
  return (
    <section id="prizes" className="py-16 bg-background"> {/* Changed background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Prizes & Recognition</h2> {/* Updated title */}
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"> {/* Added subtitle */}
          Valuable rewards and recognition await participants at various stages of the hackathon.
        </p>
        {/* Removed the underline div for a cleaner look */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"> {/* Adjusted gap */}
          {prizes.map((prize, index) => (
            <Card 
              key={index} 
              className="flex flex-col h-full hover:border-primary/50 transition-colors duration-300 border" // Adjusted hover and border
            >
              <CardHeader className="flex flex-row items-start gap-4 pb-3"> {/* Adjusted layout and padding */}
                <div className="mt-1"> {/* Container for icon */}
                  <prize.Icon /> 
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg mb-1">{prize.title}</CardTitle> {/* Adjusted font size */}
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary dark:bg-primary/20"> {/* Simplified prize tag */}
                    {prize.prize}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow pt-0"> {/* Adjusted padding */}
                <p className="text-muted-foreground text-sm leading-relaxed">{prize.description}</p> {/* Adjusted line height */}
              </CardContent>
              
              {/* Removed absolute positioned elements */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}