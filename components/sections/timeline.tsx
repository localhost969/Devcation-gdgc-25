import React, { useState, useEffect } from 'react';

// Add proper TypeScript interface for icon components
interface IconProps {
  className?: string;
}

// --- Updated SVG Icons ---
const CalendarCheckIcon: React.FC<IconProps> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>;
const TerminalSquareIcon: React.FC<IconProps> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>;
const FileCheckIcon: React.FC<IconProps> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>;
const MessagesSquareIcon: React.FC<IconProps> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>;
const PresentationIcon: React.FC<IconProps> = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>;
// --- End SVG Icons ---

const timelineEvents = [
  {
    Icon: CalendarCheckIcon, // Updated Icon
    title: "🎉 Opening Ceremony & Registration 🚀",
    date: "2025-04-04",
    description: "Submission for all Mini Events and the Registration for the Hackathon Starts",
  },
  {
    Icon: TerminalSquareIcon, // Updated Icon
    title: "Hacking Period Starts",
    date: "2025-04-08",
    description: "The main hackathon begins! Form your teams and start building innovative solutions.",
  },
  {
    Icon: FileCheckIcon, // Updated Icon
    title: "Hacking Period Ends",
    date: "2025-04-12",
    description: "Submission deadline for all projects. Make sure your code is ready for review!",
  },
  {
    Icon: MessagesSquareIcon, // Updated Icon
    title: "Mentorship Round Starts",
    date: "2025-04-13",
    description: "Get valuable feedback from industry experts to refine your projects.",
  },
  {
    Icon: PresentationIcon, // Updated Icon (Trophy is also good, this is an alternative)
    title: "Final Pitching and Closing Ceremony",
    date: "2025-04-15",
    description: "Present your projects to the judges and celebrate the winners of the hackathon!",
  },
];

const getEventStatus = (eventDateStr: string, currentDate: Date): 'past' | 'current' | 'future' => {
  const eventDate = new Date(eventDateStr);
  eventDate.setHours(0, 0, 0, 0);
  
  const today = new Date(currentDate);
  today.setHours(0, 0, 0, 0);

  if (eventDate < today) {
    return 'past';
  } else if (eventDate.getTime() === today.getTime()) {
    return 'current';
  } else {
    return 'future';
  }
};

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  const adjustedDate = new Date(date.getTime() + userTimezoneOffset);
  
  return adjustedDate.toLocaleDateString('en-US', {
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
};

export function TimelineSection() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {}, []);
  
  // Calculate days remaining for current event
  const getEventTimeInfo = (eventDate: string, currentDate: Date) => {
    const status = getEventStatus(eventDate, currentDate);
    if (status === 'future') {
      const eventTime = new Date(eventDate).getTime();
      const currentTime = currentDate.getTime();
      const diffDays = Math.ceil((eventTime - currentTime) / (1000 * 60 * 60 * 24));
      return `In ${diffDays} days`;
    }
    return null;
  };

  return (
    <section id="timeline" className="py-16 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Timeline</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div> 
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Follow the key dates of Devcation'25 from start to finish.
        </p>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border/70 dark:bg-border/50" aria-hidden="true"></div>

          {timelineEvents.map((event, index) => {
            const status = getEventStatus(event.date, currentDate);
            const isPast = status === 'past';
            const isCurrent = status === 'current';
            const isFuture = status === 'future';
            const timeInfo = getEventTimeInfo(event.date, currentDate);

            return (
              <div key={index} className="relative pl-12 pb-12 last:pb-0">
                <div 
                  className={`absolute left-0 top-1 transform -translate-x-[calc(50%-2px)] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300
                    ${isPast ? 'bg-muted border-4 border-muted-foreground/20 dark:border-muted-foreground/30' : ''}
                    ${isCurrent ? 'bg-primary border-4 border-background dark:border-card shadow-lg shadow-primary/30 dark:shadow-primary/20' : ''}
                    ${isFuture ? 'bg-card border-4 border-border dark:border-border/80' : ''}
                  `}
                >
                  <event.Icon 
                    className={`w-5 h-5 transition-colors duration-300
                      ${isPast ? 'text-muted-foreground/70' : ''}
                      ${isCurrent ? 'text-primary-foreground' : ''}
                      ${isFuture ? 'text-muted-foreground/50' : ''}
                    `} 
                  />
                  
                  {isCurrent && (
                    <div className="absolute inset-0 rounded-full bg-primary/10 dark:bg-primary/20 -z-10 scale-125"></div>
                  )}
                </div>

                <div 
                  className={`relative top-0 transition-opacity duration-500 ${isFuture ? 'opacity-70' : 'opacity-100'}`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <p className={`text-sm font-semibold 
                      ${isCurrent ? 'text-primary dark:text-primary' : 'text-muted-foreground'}
                    `}>
                      {formatDate(event.date)}
                    </p>
                    
                    {isCurrent && (
                      <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-medium">
                        Current Stage
                      </span>
                    )}
                    
                    {isFuture && timeInfo && (
                      <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-muted/50 dark:bg-muted/30">
                        {timeInfo}
                      </span>
                    )}
                    
                    {isPast && (
                      <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-muted/50 dark:bg-muted/30">
                        Completed
                      </span>
                    )}
                  </div>
                  
                  <h3 className={`text-lg font-semibold mb-2 
                    ${isPast ? 'text-muted-foreground/80 dark:text-muted-foreground' : ''} 
                    ${isCurrent ? 'text-primary dark:text-primary bg-primary/5 dark:bg-primary/10 px-2 py-1 -mx-2 rounded-md inline-block' : 'text-foreground'}
                  `}>
                    {event.title}
                  </h3>
                  
                  {event.description && (
                    <p className={`text-sm ${isPast ? 'text-muted-foreground/70 dark:text-muted-foreground/80' : 'text-muted-foreground'}`}>
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}