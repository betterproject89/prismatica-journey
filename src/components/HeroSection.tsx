
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Il tuo percorso di <span className="text-gradient">crescita personale</span>
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Un approccio a 360° per il tuo miglioramento personale. Articoli, audio, esercizi pratici e molto altro.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-gradient-primary">
                <Download className="mr-2 h-4 w-4" />
                Scarica per iOS
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                <Download className="mr-2 h-4 w-4" />
                Scarica per Android
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] rounded-[40px] border-[8px] border-gray-800 overflow-hidden shadow-xl animate-glow">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/30"></div>
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                alt="Prisma App Screenshot" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-6 glass-morphism rounded-xl">
                  <div className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Prisma App</h3>
                  <p className="text-sm opacity-80">La tua crescita personale in un'unica app</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
