
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
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light"></div>
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px]"></div>
      
      <div className="container px-4 md:px-6 relative">
        <div className="text-center max-w-[800px] mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm frost-panel mb-4">
            <span className="text-gradient font-medium">Categorie</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Otto aree per la tua crescita</h2>
          <p className="text-white/70 md:text-lg max-w-[600px] mx-auto">
            Contenuti personalizzati organizzati in otto categorie per guidarti nel tuo percorso di sviluppo personale
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="frost-panel relative group overflow-hidden p-6 rounded-xl transition-all hover:bg-white/5 animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 text-primary/90 group-hover:text-primary transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-medium text-lg mb-2 group-hover:text-gradient transition duration-300">{category.title}</h3>
                <p className="text-sm text-white/60 group-hover:text-white/70 transition-colors">{category.description}</p>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
