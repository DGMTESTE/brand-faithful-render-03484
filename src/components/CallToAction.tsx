import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/90 px-8 py-16 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Antecipe seus recebíveis agora mesmo
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Fale com um de nossos especialistas e antecipe seus recebíveis de forma rápida e segura
          </p>
          <Button
            size="lg"
            className="bg-success hover:bg-success/90 text-white font-semibold px-8"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Antecipar via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
