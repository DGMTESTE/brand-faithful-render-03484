import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
import medicoPrancheta from "@/assets/jovem-medico-alegre-com-um-comprimido-no-corredor.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4a9d8f] via-[#5a9d8f] to-[#4a8d7f] py-16 sm:py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-success blur-3xl" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-primary blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 text-white">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Receba hoje pelos serviços que o plano ainda vai te pagar
            </h1>
            <p className="text-lg text-white/90 sm:text-xl">
              Antecipe seus recebíveis de planos de saúde de forma simples e rápida.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 rounded-xl mt-3"
               onClick={() => {
                document.getElementById("simular")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Simule Agora
            </Button>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-success/20 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex items-center justify-center mb-6">
                  <div className="rounded-2xl p-6">
                    <img 
                      src={medicoPrancheta} 
                      alt="médico sorrindo" 
                      className="rounded-2xl"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
