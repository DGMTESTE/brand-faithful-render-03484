import { Search, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Simule sua antecipação",
    description: "Simule o valor que você pode receber antecipadamente.",
  },
  {
    icon: FileText,
    title: "Envie seus dados",
    description: "Envie seus dados e documentos para análise.",
  },
  {
    icon: CheckCircle,
    title: "Receba em até 2 dias",
    description: "Receba o valor antecipado em sua conta em até 2 dias úteis.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Como Funciona
          </h2>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
