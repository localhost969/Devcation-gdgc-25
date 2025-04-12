const timelineEvents = [
  {
    icon: "fa-flag",
    title: "🎉 Opening Ceremony & Registration 🚀",
    date: "April 4th, 2025",
    description: "Submission for all Mini Events and the Registration for the Hackathon Starts",
  },
  {
    icon: "fa-code",
    title: "Hacking Period Starts",
    date: "April 8th, 2025",
    description: "The main hackathon begins! Form your teams and start building innovative solutions.",
  },
  {
    icon: "fa-stopwatch",
    title: "Hacking Period Ends",
    date: "April 12th, 2025",
    description: "Submission deadline for all projects. Make sure your code is ready for review!",
  },
  {
    icon: "fa-chalkboard-teacher",
    title: "Mentorship Round Starts",
    date: "April 13th, 2025",
    description: "Get valuable feedback from industry experts to refine your projects.",
  },
  {
    icon: "fa-trophy",
    title: "Final Pitching and Closing Ceremony",
    date: "April 15th, 2025",
    description: "Present your projects to the judges and celebrate the winners of the hackathon!",
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="py-16 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Timeline</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border z-0"></div>
            
            {/* Timeline events */}
            <div className="space-y-0">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`relative z-10 flex flex-col md:flex-row md:items-center mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Date box - always visible */}
                  <div className={`md:w-1/2 mb-4 md:mb-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                    <div className="bg-card border border-border rounded-lg shadow-sm p-3 inline-block">
                      <p className="text-primary font-semibold">{event.date}</p>
                    </div>
                  </div>
                  
                  {/* Center dot on timeline */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary z-10 flex items-center justify-center border-4 border-background dark:border-background">
                      <i className={`fas ${event.icon} text-primary-foreground text-sm`}></i>
                    </div>
                  </div>
                  
                  {/* Content box */}
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-card border border-border p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20">
                      <h3 className="text-xl font-bold mb-2 text-card-foreground">{event.title}</h3>
                      {event.description && (
                        <p className="text-muted-foreground text-sm">{event.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}