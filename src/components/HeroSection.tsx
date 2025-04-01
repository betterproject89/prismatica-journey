
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px]"></div>
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-secondary/20 rounded-full filter blur-[100px]"></div>
      
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm frost-panel self-start mb-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              <span className="text-white/80">Crescita personale a 360°</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl/none xl:text-7xl/none max-w-xl">
                Il tuo percorso di <span className="text-gradient">crescita personale</span>
                <span className="inline-block animate-pulse-slow">.</span>
              </h1>
              <p className="max-w-[600px] text-white/70 md:text-xl">
                Un approccio completo per il tuo miglioramento personale. Articoli, audio, esercizi pratici e molto altro in un'unica app.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="frost-panel group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></span>
                <Download className="mr-2 h-4 w-4" />
                Scarica per iOS
              </Button>
              <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
                <Download className="mr-2 h-4 w-4" />
                Scarica per Android
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      alt="User avatar" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-white/70">
                <span className="font-medium text-white">+10.000</span> utenti soddisfatti
              </div>
            </div>
          </div>
          
          <div className="mx-auto lg:mx-0 animate-fade-in relative" style={{ animationDelay: '0.3s' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[350px] max-h-[350px] bg-gradient-to-r from-primary to-accent opacity-30 rounded-full blur-[60px]"></div>
            
            <div className="relative animate-floating">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/30 rounded-[40px] blur-lg opacity-50"></div>
              <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] rounded-[40px] border-[8px] border-gray-800 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/30 z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                  alt="Prisma App Screenshot" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center glass-morphism rounded-xl w-[80%] py-6 px-4 glow-sm">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md"></div>
                      <div className="relative w-full h-full rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary"></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Prisma App</h3>
                    <p className="text-sm text-white/80">La tua crescita personale in un'unica app</p>
                  </div>
                </div>
                
                <div className="absolute top-10 left-0 right-0 flex justify-center">
                  <div className="h-8 w-32 rounded-full bg-black"></div>
                </div>
              </div>
            </div>
            
            {/* Floating circles decoration */}
            <div className="absolute top-20 -right-10 w-20 h-20 rounded-full bg-primary/20 backdrop-blur-xl animate-floating" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 rounded-full bg-accent/20 backdrop-blur-xl animate-floating" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
