
const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
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
            <h3 className="font-medium mb-4">Categorie</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Apprendimento</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Benessere emotivo</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Carriera</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Crescita personale</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Link utili</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Chi siamo</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Contatti</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Download</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">App Store</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Google Play</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Prisma. Tutti i diritti riservati.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Termini di Servizio</a>
            <a href="#" className="hover:text-foreground">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
