import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
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
  { name: 'Sponsors', href: '#sponsors' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="bg-background/95 border-b border-border backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative h-10 w-[200px]">
            {/* Fallback for the image in case it can't load */}
            <div className="absolute inset-0 flex items-center">
              <span className="font-bold text-foreground">Devcation`25</span>
            </div>
            <Image 
              src="/assets/logogdg-oPSCtV20.png" 
              alt="GDG Logo" 
              fill
              priority
              className="object-contain"
              onError={(e) => {
                // Show fallback on error
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-foreground hover:text-foreground/80 transition"
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
                className="md:hidden text-foreground"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[385px] pt-12">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground hover:text-foreground/80 transition text-lg"
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
    </header>
  );
} 