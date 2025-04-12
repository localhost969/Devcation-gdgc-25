import Head from 'next/head'
import dynamic from 'next/dynamic'

// Dynamically import Navbar with SSR disabled
const Navbar = dynamic(() => import('@/components/ui/navbar').then((mod) => mod.Navbar), {
  ssr: false,
})

// Import Footer as well, assuming it should be there
import { Footer } from '@/components/ui/footer'
// Import the sections that were previously there
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { DevcationSection } from '@/components/sections/devcation';
import { TracksSection } from '@/components/sections/tracks';
import { TeamSection } from '@/components/sections/team';
import { TimelineSection } from '@/components/sections/timeline';
import { PrizesSection } from '@/components/sections/prizes';
import { FAQSection } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';
import { EventsSection } from '@/components/sections/events';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Head>
        <title>Devcation`25</title>
        <meta name="description" content="Devcation 2025 - A week-long technical festival by GDG IGDTUW" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Navbar />
      
      <main className="flex-grow overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <DevcationSection />
        <TracksSection />
        <TeamSection />
        <TimelineSection />
        <PrizesSection />
        <EventsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
