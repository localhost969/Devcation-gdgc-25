import { Button } from '@/components/ui/button';
import { Mail, Github, Instagram, Linkedin, Facebook, Youtube, MessageCircle, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Devcation`25</h3>
            <p className="text-muted-foreground">A week-long technical festival by GDG IGDTUW</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="text-muted-foreground flex items-center">
              <Mail className="h-4 w-4 mr-2" /> dscigdtuw@gmail.com
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              <a href="https://twitter.com/gdsc_igdtuw" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-background">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.facebook.com/GDSCIGDTUW/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-background">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/company/dscigdtuw/mycompany/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-background">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.instagram.com/gdsc_igdtuw" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-background">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.youtube.com/@DSCIGDTUW" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-background">
                  <Youtube className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://discord.gg/eG4YP3gA48" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-background">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© 2025 GDG IGDTUW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}