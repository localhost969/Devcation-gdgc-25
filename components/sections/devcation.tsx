export function DevcationSection() {
  return (
    // Adjusted padding, modified gradient, added overflow-hidden
    <section id="devcation" className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      {/* Use max-width container */}
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Removed grid layout, centering content */}
        <div className="max-w-3xl mx-auto text-center"> {/* Added max-width and centering */}
          
          {/* Column 1: Text Content - Now centered */}
          <div> {/* Removed text-left alignment for lg screens */}
            {/* Adjusted heading size and spacing */}
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-foreground leading-tight">
              What is <span className="text-primary">Devcation`25</span>?
            </h2>
            {/* Adjusted divider styling and position */}
            <div className="w-24 h-1.5 bg-primary mb-8 mx-auto"></div> {/* Ensured divider is centered */}
            {/* Adjusted text size, leading, and spacing */}
            <p className="text-lg md:text-xl text-muted-foreground mb-5 leading-relaxed">
              Devcation is a week-long technical festival by <strong className="font-semibold text-foreground">GDG IGDTUW</strong> celebrating diversity in the <strong className="font-semibold text-primary">TechForGood</strong> domain.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Join us for the <strong className="font-semibold text-foreground">Devcation`25 Hackathon</strong> and other events designed to spark creativity, foster innovation, and help you build impactful tech solutions.
            </p>
            {/* Optional: Add a button or link here if needed later */}
            {/* e.g., <Button size="lg" className="mt-8">Learn More</Button> */}
          </div>

          {/* Removed Column 2: Large Text Content */}

        </div>
      </div>
    </section>
  );
}

// Add this to your globals.css or tailwind.config.js if you want the pulse animation
/* 
@tailwind base;
@tailwind components;
@tailwind utilities;
*/