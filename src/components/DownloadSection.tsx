
import { Button } from "@/components/ui/button";
import { Download, Apple, Smartphone } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full filter blur-[100px] opacity-50"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto frost-panel rounded-3xl p-8 md:p-12 backdrop-blur-2xl glow-md overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-primary/30 via-secondary/20 to-transparent opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-conic from-accent/20 via-primary/20 to-secondary/20 opacity-30 blur-3xl"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            <div className="text-center md:text-left animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm frost-panel mb-6">
                <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                <span className="text-white/80">Scarica subito</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Inizia oggi il tuo <span className="text-gradient">percorso di crescita</span>
              </h2>
              
              <p className="text-white/80 mb-8 md:text-lg">
                Scarica Prisma e accedi a centinaia di contenuti esclusivi per la tua crescita personale in tutte le aree della tua vita.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
                <Button className="frost-panel group relative overflow-hidden bg-white/10 hover:bg-white/15 border-0 h-14 pl-4 pr-6">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  <span className="bg-gradient-primary p-2 rounded-full mr-3">
                    <Apple className="h-6 w-6 text-white" />
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-white/70">Scarica per</span>
                    <span className="font-semibold">iOS</span>
                  </div>
                </Button>
                
                <Button className="frost-panel group relative overflow-hidden bg-white/10 hover:bg-white/15 border-0 h-14 pl-4 pr-6">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  <span className="bg-gradient-primary p-2 rounded-full mr-3">
                    <Smartphone className="h-6 w-6 text-white" />
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-white/70">Scarica per</span>
                    <span className="font-semibold">Android</span>
                  </div>
                </Button>
              </div>
              
              <div className="mt-8 text-white/60 text-sm flex flex-col sm:flex-row gap-2 items-center justify-center md:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background overflow-hidden">
                      <img 
                        src={`https://i.pravatar.cc/100?img=${i+20}`} 
                        alt="User avatar" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span>Unisciti a +10.000 utenti soddisfatti</span>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent blur-2xl opacity-60"></div>
              
              <div className="relative z-10 flex justify-center md:justify-end">
                <div className="relative animate-floating">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/30 rounded-[40px] blur-lg opacity-50"></div>
                  <div className="relative w-[240px] h-[480px] md:w-[280px] md:h-[560px] rounded-[40px] border-[8px] border-gray-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/30"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                      alt="Prisma App Showcase" 
                      className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-16 h-16 rounded-full glass-morphism glow-sm mx-auto mb-4 flex items-center justify-center">
                          <img 
                            src="/lovable-uploads/25a537ae-428a-4f92-89ab-0d047a471fdf.png" 
                            alt="Prisma Logo" 
                            className="h-10 w-10 object-contain"
                          />
                        </div>
                        <p className="text-xl font-medium">Prisma</p>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                      <div className="h-1 w-32 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-10 w-16 h-16 rounded-full frost-panel animate-floating z-20" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute bottom-1/4 -right-5 w-10 h-10 rounded-full frost-panel animate-floating z-20" style={{ animationDelay: '1.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
