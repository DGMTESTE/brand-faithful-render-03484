import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RatesComparison = () => {
  const comparisonData = [
    {
      product: "Antecipação Bhio Bank",
      taxa: "1,5% a.m.",
      prazo: "30-90 dias",
      aprovacao: "Imediata",
      burocracia: false,
      garantia: false,
    },
    {
      product: "Capital de Giro",
      taxa: "3,5% a.m.",
      prazo: "12-24 meses",
      aprovacao: "5-10 dias",
      burocracia: true,
      garantia: true,
    },
    {
      product: "Cheque Especial",
      taxa: "8% a.m.",
      prazo: "30 dias",
      aprovacao: "Imediata",
      burocracia: false,
      garantia: false,
    },
    {
      product: "Empréstimo Pessoal",
      taxa: "4,5% a.m.",
      prazo: "12-48 meses",
      aprovacao: "3-7 dias",
      burocracia: true,
      garantia: false,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comparativo de Taxas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como a antecipação Bhio Bank oferece as melhores condições do mercado
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <CardTitle>Comparação com Outras Soluções de Crédito</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[200px]">Produto</TableHead>
                    <TableHead>Taxa Mensal</TableHead>
                    <TableHead>Prazo</TableHead>
                    <TableHead>Aprovação</TableHead>
                    <TableHead className="text-center">Burocracia</TableHead>
                    <TableHead className="text-center">Garantia</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((item, index) => (
                    <TableRow
                      key={index}
                      className={index === 0 ? "bg-primary/5 font-medium" : ""}
                    >
                      <TableCell>
                        {item.product}
                        {index === 0 && (
                          <span className="ml-2 text-xs bg-success text-success-foreground px-2 py-1 rounded-full">
                            Recomendado
                          </span>
                        )}
                      </TableCell>
                      <TableCell className={index === 0 ? "text-success font-bold" : ""}>
                        {item.taxa}
                      </TableCell>
                      <TableCell>{item.prazo}</TableCell>
                      <TableCell>{item.aprovacao}</TableCell>
                      <TableCell className="text-center">
                        {item.burocracia ? (
                          <X className="h-5 w-5 text-destructive mx-auto" />
                        ) : (
                          <Check className="h-5 w-5 text-success mx-auto" />
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.garantia ? (
                          <X className="h-5 w-5 text-destructive mx-auto" />
                        ) : (
                          <Check className="h-5 w-5 text-success mx-auto" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-success/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">1,5%</div>
                <p className="text-sm text-muted-foreground">Taxa mais baixa do mercado</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">0</div>
                <p className="text-sm text-muted-foreground">Burocracia zero</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-accent/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-foreground mb-2">Imediato</div>
                <p className="text-sm text-muted-foreground">Aprovação instantânea</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RatesComparison;
