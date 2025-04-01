
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-white/10 sticky top-0 z-40 bg-background/60 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-70 blur-md"></div>
            <div className="relative h-9 w-9 rounded-full bg-gradient-primary animate-pulse-slow"></div>
          </div>
          <span className="text-2xl font-bold text-gradient">Prisma</span>
        </div>
        <div className="flex gap-4 items-center">
          <Button variant="ghost" size="sm" className="hidden md:flex hover:bg-white/5">
            Funzionalità
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:flex hover:bg-white/5">
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
      </div>
    </header>
  );
};

export default Header;
