
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="border-t border-white/10 py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className={`grid gap-8 ${isMobile ? 'grid-cols-2' : 'md:grid-cols-4'}`}>
          <div className={isMobile ? 'col-span-2 mb-4' : ''}>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8">
                <img 
                  src="/lovable-uploads/25a537ae-428a-4f92-89ab-0d047a471fdf.png" 
                  alt="Prisma Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gradient">Prisma</span>
            </div>
            <p className="text-sm text-muted-foreground">
              La tua app per la crescita personale a 360°.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-sm">Categorie</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Apprendimento</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Benessere emotivo</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Carriera</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Crescita personale</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-sm">Link utili</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Chi siamo</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contatti</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-sm">Download</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">App Store</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Google Play</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Prisma. Tutti i diritti riservati.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Termini di Servizio</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
