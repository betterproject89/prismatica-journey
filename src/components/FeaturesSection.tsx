
import { Button } from "@/components/ui/button";
import { 
  Users, 
  CheckCircle, 
  Settings, 
  BookOpen,
  Repeat,
  RefreshCw,
  PenTool,
  Activity
} from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold tracking-tight">Cosa rende i nostri contenuti unici</h2>
          <p className="text-muted-foreground mt-4 max-w-[700px] mx-auto">
            Un'esperienza completa che integra teoria, pratica e supporto personalizzato
          </p>
        </div>
        
        {/* Feature 1: Contenuti da esperti */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent blur-2xl opacity-60"></div>
            
            <div className="relative z-10">
              <div className="relative frost-panel rounded-3xl p-4 overflow-hidden animate-floating">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-secondary/10 opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83" 
                  alt="Contenuti da esperti" 
                  className="w-full h-auto rounded-2xl shadow-lg opacity-80"
                />
                
                <div className="absolute bottom-4 left-4 right-4 frost-panel rounded-xl p-4">
                  <h4 className="text-lg font-semibold mb-1">Contenuti multidisciplinari</h4>
                  <p className="text-sm text-white/70">Creati da esperti di diversi settori</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-20 h-20 frost-panel rounded-full flex items-center justify-center animate-pulse-slow">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <div className="absolute bottom-10 -left-8 h-16 w-16 frost-panel rounded-lg flex items-center justify-center animate-floating">
              <BookOpen className="w-8 h-8 text-accent" />
            </div>
            <div className="absolute top-1/4 right-0 h-12 w-12 frost-panel rounded-full animate-floating" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="order-1 md:order-2 text-center md:text-left animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm frost-panel mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              <span className="text-white/80">Contenuti di qualità</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Contenuti da esperti</span> multidisciplinari
            </h2>
            
            <p className="text-white/80 mb-8 md:text-lg">
              Contributi di professionisti diversi per una prospettiva ricca e approfondita che ti aiuta a vedere le sfide da più angolazioni e trovare soluzioni innovative.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1"><Users className="h-5 w-5 text-primary" /></div>
                <p className="text-white/80">Esperti di settore con anni di esperienza pratica</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1"><BookOpen className="h-5 w-5 text-primary" /></div>
                <p className="text-white/80">Conoscenze validate da ricerche scientifiche</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1"><CheckCircle className="h-5 w-5 text-primary" /></div>
                <p className="text-white/80">Prospettive diverse per una visione completa</p>
              </div>
            </div>
            
            <Button className="frost-panel group relative overflow-hidden bg-white/10 hover:bg-white/15 border-0">
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></span>
              Scopri i nostri esperti
            </Button>
          </div>
        </div>
        
        {/* Feature 2: Approccio pratico */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="text-center md:text-left animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm frost-panel mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
              <span className="text-white/80">Impara facendo</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Approccio pratico</span> e orientato all'azione
            </h2>
            
            <p className="text-white/80 mb-8 md:text-lg">
              Consigli concreti, esercizi pratici e strategie passo-passo che puoi applicare immediatamente nella tua vita quotidiana per ottenere risultati tangibili.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1"><CheckCircle className="h-5 w-5 text-secondary" /></div>
                <p className="text-white/80">Tecniche concrete che puoi applicare subito</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1"><PenTool className="h-5 w-5 text-secondary" /></div>
                <p className="text-white/80">Esercizi disegnati per diverse situazioni reali</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1"><Settings className="h-5 w-5 text-secondary" /></div>
                <p className="text-white/80">Strategie testate e ottimizzate nel tempo</p>
              </div>
            </div>
            
            <Button className="frost-panel group relative overflow-hidden bg-white/10 hover:bg-white/15 border-0">
              <span className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></span>
              Esplora le tecniche
            </Button>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-radial from-secondary/10 to-transparent blur-2xl opacity-60"></div>
            
            <div className="relative z-10">
              <div className="relative frost-panel rounded-3xl p-4 overflow-hidden animate-floating">
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-primary/10 opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173" 
                  alt="Approccio pratico" 
                  className="w-full h-auto rounded-2xl shadow-lg opacity-80"
                />
                
                <div className="absolute top-4 left-4 right-4 frost-panel rounded-xl p-4">
                  <h4 className="text-lg font-semibold mb-1">Strategie praticabili</h4>
                  <p className="text-sm text-white/70">Applica subito ciò che hai imparato</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 frost-panel rounded-full flex items-center justify-center animate-pulse-slow">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
            </div>
            
            <div className="absolute top-10 -right-8 h-16 w-16 frost-panel rounded-lg flex items-center justify-center animate-floating">
              <PenTool className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute bottom-1/4 left-0 h-12 w-12 frost-panel rounded-full animate-floating" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        {/* Feature 3: Personalizzazione del percorso */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent blur-2xl opacity-60"></div>
            
            <div className="relative z-10">
              <div className="relative frost-panel rounded-3xl p-4 overflow-hidden animate-floating">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-primary/10 opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282" 
                  alt="Personalizzazione del percorso" 
                  className="w-full h-auto rounded-2xl shadow-lg opacity-80"
                />
                
                <div className="absolute bottom-4 left-4 right-4 frost-panel rounded-xl p-4">
                  <h4 className="text-lg font-semibold mb-1">Percorsi personalizzati</h4>
                  <p className="text-sm text-white/70">Adattati alle tue esigenze specifiche</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-20 h-20 frost-panel rounded-full flex items-center justify-center animate-pulse-slow">
                <Settings className="w-8 h-8 text-accent" />
              </div>
            </div>
            
            <div className="absolute bottom-10 -left-8 h-16 w-16 frost-panel rounded-lg flex items-center justify-center animate-floating">
              <Repeat className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute top-1/4 right-0 h-12 w-12 frost-panel rounded-full animate-floating" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="order-1 md:order-2 text-center md:text-left animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm frost-panel mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
              <span className="text-white/80">Adattabilità</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Personalizzazione</span> del percorso formativo
            </h2>
            
            <p className="text-white/80 mb-8 md:text-lg">
              Suggerimenti adattati in base alle tue preferenze, obiettivi e livello attuale. Un'esperienza di apprendimento su misura che evolve con te.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1"><Settings className="h-5 w-5 text-accent" /></div>
                <p className="text-white/80">Contenuti filtrati in base ai tuoi interessi</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1"><Repeat className="h-5 w-5 text-accent" /></div>
                <p className="text-white/80">Percorsi che si adattano al tuo progresso</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1"><RefreshCw className="h-5 w-5 text-accent" /></div>
                <p className="text-white/80">Suggerimenti che evolvono con le tue esigenze</p>
              </div>
            </div>
            
            <Button className="frost-panel group relative overflow-hidden bg-white/10 hover:bg-white/15 border-0">
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity"></span>
              Personalizza il tuo percorso
            </Button>
          </div>
        </div>
        
        {/* Feature 4: Aggiornamenti costanti */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm frost-panel mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              <span className="text-white/80">Sempre aggiornato</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Aggiornamenti costanti</span> con le ultime novità
            </h2>
            
            <p className="text-white/80 mb-8 md:text-lg">
              Nuovi articoli, ricerche e tecniche aggiunti ogni settimana per mantenerti al passo con le ultime scoperte e metodologie nel tuo campo di interesse.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1"><RefreshCw className="h-5 w-5 text-primary" /></div>
                <p className="text-white/80">Contenuti aggiornati settimanalmente</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1"><BookOpen className="h-5 w-5 text-primary" /></div>
                <p className="text-white/80">Nuove ricerche e studi scientifici</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1"><Activity className="h-5 w-5 text-primary" /></div>
                <p className="text-white/80">Metodologie innovative e all'avanguardia</p>
              </div>
            </div>
            
            <Button className="frost-panel group relative overflow-hidden bg-white/10 hover:bg-white/15 border-0">
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-20 transition-opacity"></span>
              Vedi gli ultimi aggiornamenti
            </Button>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent blur-2xl opacity-60"></div>
            
            <div className="relative z-10">
              <div className="relative frost-panel rounded-3xl p-4 overflow-hidden animate-floating">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-accent/10 opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284" 
                  alt="Aggiornamenti costanti" 
                  className="w-full h-auto rounded-2xl shadow-lg opacity-80"
                />
                
                <div className="absolute top-4 left-4 right-4 frost-panel rounded-xl p-4">
                  <h4 className="text-lg font-semibold mb-1">Contenuti sempre freschi</h4>
                  <p className="text-sm text-white/70">Nuove risorse ogni settimana</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 frost-panel rounded-full flex items-center justify-center animate-pulse-slow">
                <RefreshCw className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <div className="absolute top-10 -right-8 h-16 w-16 frost-panel rounded-lg flex items-center justify-center animate-floating">
              <Activity className="w-8 h-8 text-accent" />
            </div>
            <div className="absolute bottom-1/4 left-0 h-12 w-12 frost-panel rounded-full animate-floating" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

