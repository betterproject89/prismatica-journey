
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="relative neo-blur rounded-2xl p-8 md:p-12 text-white text-center animate-fade-in" style={{ animationDelay: '1.3s' }}>
          <div className="absolute inset-0 overflow-hidden rounded-2xl z-0">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
              alt="Abstract Background" 
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
          </div>
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-primary/20 to-transparent z-0"></div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-accent/20 to-transparent z-0"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Inizia oggi il tuo percorso di crescita
            </h2>
            <p className="text-white/90 mb-8 max-w-[600px] mx-auto">
              Scarica Prisma e accedi a centinaia di contenuti esclusivi per la tua crescita personale in tutte le aree della tua vita.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button variant="default" className="bg-white text-accent hover:bg-white/90 w-full">
                <Download className="mr-2 h-4 w-4" />
                Scarica per iOS
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full">
                <Download className="mr-2 h-4 w-4" />
                Scarica per Android
              </Button>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="w-[280px] h-[560px] rounded-[40px] border-[8px] border-gray-800 overflow-hidden shadow-xl relative animate-glow">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/30 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Prisma App Showcase" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary"></div>
                  </div>
                  <p className="text-xl font-medium">Prisma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
