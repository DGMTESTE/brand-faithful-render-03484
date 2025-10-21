import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrendingUp, Calendar, DollarSign, CheckCircle } from "lucide-react";

interface Receivable {
  id: string;
  date: string;
  description: string;
  plano: string;
  amount: number;
  status: "pending" | "received";
}

const ReceivablesManagement = () => {
  const [receivables, setReceivables] = useState<Receivable[]>([
    {
      id: "1",
      date: "2025-11-20",
      description: "Consulta Clínica",
      plano: "SulAmérica",
      amount: 15000,
      status: "pending",
    },
    {
      id: "2",
      date: "2025-10-25",
      description: "Procedimento Cirúrgico",
      plano: "Unimed",
      amount: 28500,
      status: "received",
    },
    {
      id: "3",
      date: "2025-12-15",
      description: "Teleconsulta",
      plano: "Unimed VTPR",
      amount: 10000,
      status: "pending",
    },
    {
      id: "4",
      date: "2025-09-30",
      description: "Exames Diagnósticos",
      plano: "Ipê",
      amount: 19800,
      status: "received",
    },
  ]);

  const totalPending = receivables
    .filter((r) => r.status === "pending")
    .reduce((sum, r) => sum + r.amount, 0);

  const totalReceived = receivables
    .filter((r) => r.status === "received")
    .reduce((sum, r) => sum + r.amount, 0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  // Placeholder para integração futura com API
  useEffect(() => {
    // TODO: Integrar com sistema interno
    // fetch('/api/receivables')
    //   .then(res => res.json())
    //   .then(data => setReceivables(data));
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gestão de Recebíveis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Saiba exatamente quanto você já recebeu e quanto ainda tem a receber pelos serviços prestados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-l-4 border-l-bold">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Valor Total Processado
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(totalPending + totalReceived)}</div>
             
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                A Receber
              </CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {formatCurrency(totalPending)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {receivables.filter((r) => r.status === "pending").length} pagamentos pendentes
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-success">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Já Recebido
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">
                {formatCurrency(totalReceived)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {receivables.filter((r) => r.status === "received").length} pagamentos concluídos
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle>Histórico de Recebíveis</CardTitle>
              <Button variant="outline" size="sm">
                <DollarSign className="h-4 w-4 mr-2" />
                Exportar Relatório
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data do procedimento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Plano</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {receivables.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{formatDate(item.date)}</TableCell>
                      <TableCell>
                        {item.status === "received" ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Recebido
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-primary">
                            <Calendar className="h-3 w-3 mr-1" />
                            Pendente
                          </span>
                        )}
                      </TableCell>
                      <TableCell>{item.plano}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell className="font-medium">
                        {formatCurrency(item.amount)}
                      </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        
      </div>
    </section>
  );
};

export default ReceivablesManagement;
