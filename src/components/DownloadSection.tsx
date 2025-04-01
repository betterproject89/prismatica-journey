
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="rounded-2xl bg-gradient-primary p-8 md:p-12 text-white text-center animate-fade-in" style={{ animationDelay: '1.3s' }}>
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
      </div>
    </section>
  );
};

export default DownloadSection;
