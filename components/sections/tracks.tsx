import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Removed unused Button import and SVG import comments

const tracks = [
  {
    title: "HealthTech",
    // Inline SVG for HealthTech
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    description: "Innovative solutions to improve healthcare delivery, accessibility, and efficiency.",
    examples: "Medical diagnostics, Patient monitoring, Healthcare accessibility"
  },
  {
    title: "EdTech",
    // Inline SVG for EdTech
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    description: "Technologies that enhance learning experiences and educational outcomes.",
    examples: "Learning platforms, Educational games, Virtual classrooms"
  },
  {
    title: "Sustainable Development",
    // Inline SVG for Sustainable Development
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343m11.314 11.314a8 8 0 00-11.314-11.314m11.314 11.314L6.343 7.343m11.314 11.314a8.003 8.003 0 01-4.68-1.966M6.343 7.343a8.003 8.003 0 004.68 1.966m0 0a8.003 8.003 0 014.68-1.966m-4.68 1.966V5.31m0 13.38V19.7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
      </svg>
    ),
    description: "Solutions addressing environmental challenges and promoting sustainable practices.",
    examples: "Renewable energy, Waste management, Eco-friendly solutions"
  },
  {
    title: "FinTech",
    // Inline SVG for FinTech
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    description: "Innovations in financial services and technologies to improve accessibility and efficiency.",
    examples: "Payment solutions, Financial inclusion, Blockchain applications"
  },
  // Add the Open Innovation track back as it's common
  {
    title: "Open Innovation",
    // Inline SVG for Open Innovation
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    description: "Create any innovative solution that addresses a real-world problem of your choice.",
    examples: "Creative solutions, Cross-domain projects, Unique ideas"
  }
];

// Removed the renderIcon helper function

export function TracksSection() {
  return (
    // Reduced vertical padding
    <section id="tracks" className="py-16 bg-background dark:bg-background"> 
      <div className="container mx-auto px-4 max-w-7xl"> {/* Use max-width */}
         {/* Centered heading elements */}
        <div className="text-center mb-10"> {/* Reduced bottom margin */}
          <h2 className="text-3xl font-bold mb-3 text-center">Tracks</h2> {/* Adjusted margin */}
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div> {/* Adjusted margin */}
          <p className="text-center text-muted-foreground max-w-2xl mx-auto"> {/* Removed text size increase */}
            Choose from our innovative tracks to solve real-world problems and create impactful solutions.
          </p>
        </div>
        
        {/* Adjusted grid columns for 5 items, reduced gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto"> 
          {tracks.map((track, index) => (
            <Card 
              key={index} 
              // Simplified classes, removed hover border color change
              className="group overflow-hidden border border-border/50 hover:shadow-md transition-shadow duration-300 flex flex-col h-full" 
            >
              {/* Removed the separate color indicator div */}
              
              {/* Reduced padding, adjusted layout */}
              <CardHeader className="pb-3 pt-4"> 
                {/* Removed large background emoji */}
                
                {/* Adjusted layout: Icon above title */}
                <div className="flex flex-col items-center text-center"> 
                   {/* Icon container */}
                  <div className="w-12 h-12 mb-3 rounded-lg flex items-center justify-center bg-primary/10"> 
                    {/* Render SVG Icon directly from track object */}
                    {track.icon} 
                  </div>
                   {/* Adjusted title size and margin */}
                  <CardTitle className="text-lg mb-1 group-hover:text-primary transition-colors duration-300"> 
                    {track.title}
                  </CardTitle>
                  {/* Removed examples paragraph */}
                </div>
              </CardHeader>
              
              {/* Reduced padding, added flex-grow */}
              <CardContent className="text-center pt-0 pb-4 flex-grow"> 
                 {/* Adjusted description text size */}
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