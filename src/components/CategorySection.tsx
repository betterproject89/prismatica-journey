
import { 
  BookOpen, 
  BrainCircuit, 
  Briefcase, 
  TrendingUp, 
  Coins,
  Users,
  Heart,
  Sparkles
} from "lucide-react";

const categories = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Apprendimento e competenze",
    description: "Sviluppa nuove capacità e amplia le tue conoscenze"
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "Benessere emotivo e mentale",
    description: "Tecniche e strategie per la tua salute mentale"
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Carriera e produttività",
    description: "Ottimizza il tuo tempo e raggiungi i tuoi obiettivi professionali"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Crescita personale e motivazione",
    description: "Percorsi per sviluppare il tuo potenziale"
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Gestione delle finanze personali",
    description: "Strategie per gestire e far crescere i tuoi risparmi"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Relazioni e comunicazione",
    description: "Migliora i tuoi rapporti personali e professionali"
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Salute e benessere personale",
    description: "Prendersi cura del corpo e della mente"
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Spiritualità e consapevolezza",
    description: "Percorsi per connessione interiore e mindfulness"
  }
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Otto aree per la tua crescita</h2>
          <p className="text-muted-foreground">
            Contenuti personalizzati organizzati in otto categorie per guidarti nel tuo percorso
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="glass-morphism p-6 rounded-lg transition-all hover:bg-white/10 animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
                {category.icon}
              </div>
              <h3 className="font-medium mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
