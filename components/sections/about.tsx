import { Lightbulb, Users, Code, GraduationCap } from 'lucide-react'; // Example icons

export function AboutSection() {
  return (
    // Added subtle background gradient, increased padding
    <section id="about" className="py-20 md:py-28 bg-gradient-to-bl from-secondary/5 via-background to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Grid layout for larger screens, increased gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Column 1: Text Content */}
          <div className="text-center lg:text-left">
            {/* Enhanced heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-foreground leading-tight">
              About <span className="text-primary">GDG - IGDTUW</span>
            </h2>
            {/* Styled divider */}
            <div className="w-24 h-1.5 bg-primary mb-8 mx-auto lg:mx-0"></div>
            {/* Improved paragraph styling */}
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              At Google Developer Group - Indira Gandhi Delhi Technical University for Women (GDG IGDTUW), we explore technology to build products that bring positive change. We foster a vibrant community through:
            </p>
            {/* List with icons (example) */}
            <ul className="space-y-3 text-lg text-muted-foreground mb-8 text-left mx-auto max-w-md lg:max-w-none lg:mx-0">
              <li className="flex items-start"><Users className="w-5 h-5 mr-3 mt-1 text-primary shrink-0" /><span>Mentorship & Knowledge Transfer</span></li>
              <li className="flex items-start"><GraduationCap className="w-5 h-5 mr-3 mt-1 text-primary shrink-0" /><span>Workshops & Skill Development</span></li>
              <li className="flex items-start"><Code className="w-5 h-5 mr-3 mt-1 text-primary shrink-0" /><span>Hackathons & Coding Contests</span></li>
              <li className="flex items-start"><Lightbulb className="w-5 h-5 mr-3 mt-1 text-primary shrink-0" /><span>Open Source Programs & Innovation</span></li>
            </ul>
            {/* Highlighted statistic */}
            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20 text-center lg:text-left">
              <p className="text-2xl md:text-3xl font-bold text-primary mb-1">
                7000+ Students Empowered
              </p>
              <p className="text-base text-muted-foreground">
                We have helped more than 7000+ university students to expand their technical knowledge and skills.
              </p>
            </div>
          </div>

          {/* Column 2: Image */}
          {/* Added container for styling and positioning */}
          <div className="relative flex items-center justify-center lg:justify-end">
             {/* Optional: Add subtle background elements behind image */}
             <div className="absolute inset-0 opacity-5 transform scale-110 -rotate-6">
               <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/50 rounded-full filter blur-4xl"></div>
               <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/50 rounded-full filter blur-4xl"></div>
             </div>
             {/* Styled image container */}
            <div className="relative z-10 w-full max-w-xl p-2 bg-background/50 border border-border/20 rounded-xl shadow-xl backdrop-blur-sm">
              <img 
                src="https://devcation-2025.vercel.app/assets/collage-CgbJk-hw.jpg" 
                alt="Collage of GDG IGDTUW Student Events" 
                className="w-full h-auto rounded-lg" 
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}