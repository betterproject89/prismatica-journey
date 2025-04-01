
import { Card } from "@/components/ui/card";
import { 
  Video, 
  Headphones, 
  PenTool, 
  ListChecks,
  BarChart,
  Activity,
  Link,
  BookMarked
} from "lucide-react";

const contentTypes = [
  {
    icon: <Video className="h-5 w-5" />,
    title: "Video e clip dimostrative",
    description: "Brevi tutorial che illustrano tecniche o esercizi in modo pratico."
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Podcast e interviste",
    description: "Interviste con esperti e approfondimenti audio speciali."
  },
  {
    icon: <PenTool className="h-5 w-5" />,
    title: "Esercizi interattivi",
    description: "Test, quiz e sfide per verificare le conoscenze acquisite."
  },
  {
    icon: <ListChecks className="h-5 w-5" />,
    title: "Checklist e to-do list",
    description: "Strumenti pronti all'uso per tracciare obiettivi e abitudini."
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Infografiche e schemi",
    description: "Rappresentazioni visive dei concetti per una memorizzazione immediata."
  },
  {
    icon: <Activity className="h-5 w-5" />,
    title: "Strumenti di automonitoraggio",
    description: "Tabelle di progresso e contatori per seguire la tua evoluzione."
  },
  {
    icon: <Link className="h-5 w-5" />,
    title: "Risorse esterne",
    description: "Collegamenti ad approfondimenti e libri per esplorare ulteriormente."
  },
  {
    icon: <BookMarked className="h-5 w-5" />,
    title: "Contenuti correlati",
    description: "Sistema di raccomandazione per espandere le tue conoscenze."
  }
];

const ContentSection = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-muted/30 z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Elementi multimediali e interattivi</h2>
            <p className="text-muted-foreground mb-6">
              Ogni articolo arricchito con elementi interattivi e multimediali per un'esperienza di apprendimento immersiva e coinvolgente.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contentTypes.slice(0, 4).map((content, index) => (
                <div key={index} className="flex items-start gap-2 glass-morphism p-4 rounded-lg">
                  <div className="text-primary mt-1">{content.icon}</div>
                  <div>
                    <h4 className="text-sm font-medium">{content.title}</h4>
                    <p className="text-xs text-muted-foreground">{content.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Persona che utilizza l'app" 
                className="w-full h-auto rounded-lg opacity-80 mb-6"
              />
              <div className="grid grid-cols-2 gap-4">
                {contentTypes.slice(4).map((content, index) => (
                  <Card key={index} className="glass-morphism p-4 hover:bg-white/10 transition-all border-white/10">
                    <div className="text-primary mb-3">{content.icon}</div>
                    <h4 className="font-medium mb-1">{content.title}</h4>
                    <p className="text-sm text-muted-foreground">{content.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
