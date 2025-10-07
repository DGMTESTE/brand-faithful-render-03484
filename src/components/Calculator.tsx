import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Calculator = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateAdvance = () => {
    if (amount) {
      const value = parseFloat(amount.replace(/[^\d,]/g, "").replace(",", "."));
      // Simulação simples: 5% de taxa
      const advanceValue = value * 0.95;
      setResult(advanceValue);
    }
  };

  const formatCurrency = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    const formatted = (parseFloat(numbers) / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return `R$ ${formatted}`;
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setAmount(formatted);
  };

  return (
    <section id="simular" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Simule sua antecipação
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o quanto você pode receber adiantado de forma rápida.
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="space-y-6 rounded-xl bg-card p-8 shadow-sm border border-border">
              <div className="space-y-2">
                <Label htmlFor="amount">Valor a receber</Label>
                <Input
                  id="amount"
                  type="text"
                  placeholder="R$ 0,00"
                  value={amount}
                  onChange={handleAmountChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Data de recebimento original</Label>
                <Input
                  id="date"
                  type="text"
                  placeholder="dd/mm/aaaa"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="operator">Operadora do plano</Label>
                <Select value={operator} onValueChange={setOperator}>
                  <SelectTrigger id="operator">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unimed">Unimed</SelectItem>
                    <SelectItem value="bradesco">Bradesco Saúde</SelectItem>
                    <SelectItem value="sulamerica">SulAmérica</SelectItem>
                    <SelectItem value="amil">Amil</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
                onClick={calculateAdvance}
              >
                Calcular valor antecipado
              </Button>
            </div>
            
            <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 p-8 text-white shadow-lg">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Valor antecipado</h3>
                <div className="text-5xl font-bold">
                  {result !== null
                    ? result.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })
                    : "R$ 9.500,00"}
                </div>
                <p className="text-sm text-white/80">
                  Valor simulado. A proposta final será enviada após análise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
