
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b sticky top-0 z-40 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-primary"></div>
          <span className="text-xl font-bold">Prisma</span>
        </div>
        <div className="flex gap-4">
          <Button className="bg-gradient-primary" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Scarica l'app
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
