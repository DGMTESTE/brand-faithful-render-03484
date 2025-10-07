import { Button } from "@/components/ui/button";
import bhioBankLogo from "@/assets/bhio-bank-logo.png";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={bhioBankLogo} 
              alt="Bhio Bank" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Como funciona
            </a>
            <a href="#simular" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Simule agora
            </a>
          </nav>
          
          <Button className="bg-primary hover:bg-primary/90">
            Entrar
          </Button>
        </div>
      </div>
    </header>
  );
};
