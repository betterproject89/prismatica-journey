
import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="border-b border-white/10 sticky top-0 z-40 bg-background/60 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9">
            <img 
              src="/lovable-uploads/25a537ae-428a-4f92-89ab-0d047a471fdf.png" 
              alt="Prisma Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-2xl font-bold text-gradient">Prisma</span>
        </div>
        
        {isMobile ? (
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              className="p-1"
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            {isMenuOpen && (
              <div className="absolute right-0 top-10 w-48 frost-panel rounded-lg py-2 animate-fade-in">
                <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-white/5 rounded-none">
                  Funzionalità
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-white/5 rounded-none">
                  Testimonianze
                </Button>
                <Button 
                  className="w-full justify-start mt-2 mx-2 relative overflow-hidden group frost-panel"
                  size="sm"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  <Download className="mr-2 h-4 w-4" />
                  Scarica l'app
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-6 items-center">
            <Button variant="ghost" size="sm" className="hover:bg-white/5">
              Funzionalità
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-white/5">
              Testimonianze
            </Button>
            <Button 
              className="relative overflow-hidden group frost-panel"
              size="sm"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></span>
              <Download className="mr-2 h-4 w-4" />
              Scarica l'app
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
