
import { 
  Users, 
  CheckCircle, 
  Settings, 
  BookOpen,
  Repeat,
  RefreshCw,
  Globe,
  Layers
} from "lucide-react";

const features = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "Contenuti da esperti multidisciplinari",
    description: "Contributi di professionisti diversi per una prospettiva ricca e approfondita."
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Approccio pratico e orientato all'azione",
    description: "Consigli concreti, esercizi pratici e strategie passo-passo da applicare."
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: "Personalizzazione del percorso",
    description: "Suggerimenti adattati in base alle tue preferenze, obiettivi e livello."
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Esempi reali e storie di successo",
    description: "Case study e testimonianze per rendere i contenuti più vicini alla realtà."
  },
  {
    icon: <Repeat className="h-5 w-5" />,
    title: "Strumenti interattivi e feedback",
    description: "Quiz, esercizi pratici e sezioni di riflessione per monitorare i progressi."
  },
  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: "Aggiornamenti costanti",
    description: "Nuovi articoli, ricerche e tecniche aggiunti ogni settimana."
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Integrazione tra aree di crescita",
    description: "Correlazioni tra le varie tematiche per una visione olistica del benessere."
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Accessibilità e multilingua",
    description: "Contenuti in forma scritta e audio, in diverse lingue per massima comodità."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 opacity-20 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold tracking-tight">Cosa rende i nostri contenuti unici</h2>
          <p className="text-muted-foreground mt-4 max-w-[700px] mx-auto">
            Un'esperienza completa che integra teoria, pratica e supporto personalizzato
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start glass-morphism p-6 rounded-lg animate-fade-in"
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
