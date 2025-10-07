import { Clock, DollarSign, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Receba em até 2 dias",
    description: "Pagamentos nas contas confirmada 2 dias úteis, sem complicação.",
  },
  {
    icon: DollarSign,
    title: "Taxas competitivas",
    description: "Nossas taxas são transparentes e competitivas, sem surpresas.",
  },
  {
    icon: Shield,
    title: "Segurança e transparência",
    description: "Proteção de dados e garantia de pagamento em todas as etapas.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Os planos de saúde demoram. Você não precisa esperar.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Com a Bhio Bank, você recebe seus pagamentos de planos de saúde em até 2 dias úteis, 
            sem burocracia e com taxas competitivas.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card p-8 shadow-sm border border-border hover:shadow-md transition-all hover:border-primary/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-card-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
