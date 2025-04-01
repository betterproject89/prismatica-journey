
import { Button } from "@/components/ui/button";
import { Activity, BarChart, LineChart, TrendingUp } from "lucide-react";

const MonitoringSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light"></div>
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[120px] opacity-40"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm frost-panel mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
              <span className="text-white/80">Progresso misurabile</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Strumenti di monitoraggio</span> per seguire i tuoi progressi
            </h2>
            
            <p className="text-white/80 mb-8 md:text-lg">
              Visualizza in tempo reale i tuoi miglioramenti con dashboard intuitive e report dettagliati. I nostri strumenti di monitoraggio ti aiutano a mantenere la motivazione mostrando i progressi giorno dopo giorno.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: <BarChart className="h-5 w-5 text-accent" />, text: "Dashboard personalizzate per ogni area di crescita" },
                { icon: <TrendingUp className="h-5 w-5 text-accent" />, text: "Analisi dei trend per identificare punti di forza e debolezza" },
                { icon: <LineChart className="h-5 w-5 text-accent" />, text: "Report settimanali per celebrare i tuoi successi" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <p className="text-white/80">{item.text}</p>
                </div>
              ))}
            </div>
            
            <Button className="frost-panel group relative overflow-hidden bg-white/10 hover:bg-white/15 border-0">
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></span>
              Attiva il monitoraggio
            </Button>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent blur-2xl opacity-60"></div>
            
            <div className="relative z-10">
              <div className="relative frost-panel rounded-3xl p-4 overflow-hidden animate-floating">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-primary/10 opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Strumenti di monitoraggio" 
                  className="w-full h-auto rounded-2xl shadow-lg opacity-80"
                />
                
                <div className="absolute top-4 left-4 right-4 frost-panel rounded-xl p-4">
                  <h4 className="text-lg font-semibold mb-1">Analytics personalizzati</h4>
                  <p className="text-sm text-white/70">Monitora la tua evoluzione nel tempo</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 frost-panel rounded-full flex items-center justify-center animate-pulse-slow">
                <Activity className="w-8 h-8 text-accent" />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 -right-8 h-16 w-16 frost-panel rounded-lg flex items-center justify-center animate-floating">
              <BarChart className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute bottom-1/4 left-0 h-12 w-12 frost-panel rounded-full animate-floating" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;
