import { Instagram, MessageCircle  } from "lucide-react";
import bhioBankLogo from "@/assets/bhio-bank-logo.png";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  const logoStyle = {
    height: "130px",
    width: "auto",
    transition: "transform 0.3s ease",
  };


  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img 
              src={bhioBankLogo} 
              alt="Bhio Bank" 
              style={logoStyle}
            />
            <p className="text-sm text-muted-foreground">
              Saúde Financeira ao Seu Alcance
            </p>
          </div>
          {/* 
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos de uso
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://w.app/xu3xyv" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <FaWhatsapp   className="h-5 w-5" />
              </a>       
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Contato
            </h3>
            <p className="text-sm text-muted-foreground">
              contato@bhiobank.com.br
            </p>
            <p className="text-sm text-muted-foreground">
              (51) 98962-1441
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Endereço
            </h3>
            <p className="text-sm text-muted-foreground">
              Av. Ipiranga, 6681 - Partenon, Porto Alegre - RS, 90619-900
            </p>
          </div>
          
        </div>
        
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © 2025 BhioBank. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
