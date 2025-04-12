import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './sheet';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Devcation`25', href: '#devcation' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Events', href: '#events' },
  { name: 'Tracks', href: '#tracks' },
  { name: 'Prizes', href: '#prizes' },
  { name: 'Partners', href: '#partners' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      let currentSection = 'home';
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
      const navbarHeight = 70;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop - navbarHeight;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.id;
          }
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - navbarHeight) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          currentSection = lastSection.id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-background/95 border-b border-border backdrop-blur-sm fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
      isScrolled ? 'py-1' : 'py-3'
    }`}>
      <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300`}>
        <Link href="#home">
          <div className={`relative transition-all duration-300 ease-in-out ${
            isScrolled ? 'h-8 w-[160px]' : 'h-10 w-[200px]'
          }`}>
            <div className="absolute inset-0 flex items-center">
              <span className={`font-bold text-foreground transition-all duration-300 ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}>Devcation`25</span>
            </div>
            <Image 
              src="/assets/logogdg-oPSCtV20.png" 
              alt="GDG Logo" 
              fill
              priority
              className="object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`text-foreground hover:text-primary transition-all duration-300 ${
                      isScrolled ? 'text-sm' : 'text-base'
                    } ${activeSection === link.href.substring(1) ? 'text-primary font-semibold' : 'hover:text-foreground/80'}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-2">
            <ThemeToggle />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={`md:hidden text-foreground transition-all duration-300 ${
                    isScrolled ? 'h-8 w-8' : 'h-9 w-9'
                  }`}
                  aria-label="Toggle menu"
                >
                  <Menu className={`${isScrolled ? 'h-4 w-4' : 'h-5 w-5'} transition-all duration-300`} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[385px] pt-12">
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`text-foreground hover:text-primary transition text-lg ${
                        activeSection === link.href.substring(1) ? 'text-primary font-semibold' : 'hover:text-foreground/80'
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}