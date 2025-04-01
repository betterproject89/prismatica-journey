
import { Button } from "@/components/ui/button";
import { PenTool, CheckSquare, Target, ListChecks } from "lucide-react";

const ExercisesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full filter blur-[120px] opacity-40"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent blur-2xl opacity-60"></div>
            
            <div className="relative z-10">
              <div className="relative frost-panel rounded-3xl p-4 overflow-hidden animate-floating">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-secondary/10 opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Esercizi interattivi" 
                  className="w-full h-auto rounded-2xl shadow-lg opacity-80"
                />
                
                <div className="absolute bottom-4 left-4 right-4 frost-panel rounded-xl p-4">
                  <h4 className="text-lg font-semibold mb-1">Esercizi personalizzati</h4>
                  <p className="text-sm text-white/70">Basati sul tuo livello e preferenze</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-20 h-20 frost-panel rounded-full flex items-center justify-center animate-pulse-slow">
                <PenTool className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute bottom-10 -left-8 h-16 w-16 frost-panel rounded-lg flex items-center justify-center animate-floating">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <div className="absolute top-1/4 right-0 h-12 w-12 frost-panel rounded-full animate-floating" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="order-1 md:order-2 text-center md:text-left animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm frost-panel mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              <span className="text-white/80">Interazione attiva</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Esercizi interattivi</span> per consolidare l'apprendimento
            </h2>
            
            <p className="text-white/80 mb-8 md:text-lg">
              Trasforma la teoria in pratica con i nostri esercizi interattivi progettati da esperti. Ogni concetto è accompagnato da attività che ti aiutano a interiorizzare e applicare ciò che hai imparato.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: <CheckSquare className="h-5 w-5 text-primary" />, text: "Esercizi su misura basati sul tuo profilo" },
                { icon: <ListChecks className="h-5 w-5 text-primary" />, text: "Feedback immediato per migliorare rapidamente" },
                { icon: <Target className="h-5 w-5 text-primary" />, text: "Sfide progressive che aumentano di difficoltà" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <p className="text-white/80">{item.text}</p>
                </div>
              ))}
            </div>
            
            <Button className="frost-panel group relative overflow-hidden bg-white/10 hover:bg-white/15 border-0">
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></span>
              Scopri gli esercizi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExercisesSection;
