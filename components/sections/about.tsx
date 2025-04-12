export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About GDG IGDTUW</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground mb-6">
            Here at GDG IGDTUW, we explore technology and use it to build products that brings about positive change in society. 
            We conduct mentorship sessions, workshops, knowledge transfer sessions, hackathons, coding contests, open source programs, etc. 
            where students from across the globe get to showcase their knowledge and develop their skillset.
          </p>
          <p className="text-lg text-muted-foreground">
            We have helped more than 7000+ university students to expand their technical knowledge and skills.
          </p>
          <img src="https://devcation-2025.vercel.app/assets/collage-CgbJk-hw.jpg" alt="Collage of Student Events" className="w-full h-auto rounded-lg mt-8" />
        </div>
      </div>
    </section>
  );
}