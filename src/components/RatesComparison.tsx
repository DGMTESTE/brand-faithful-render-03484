import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const RatesComparison = () => {
  const comparisonData = [
    {
      name: "Garantia\nde imóvel",
      rate: 1.09,
      color: "hsl(var(--success))",
      showCheck: true,
    },
    {
      name: "Garantia\nde veículo",
      rate: 1.49,
      color: "hsl(var(--success))",
      showCheck: true,
    },
    {
      name: "Empréstimo\nPessoal",
      rate: 6.47,
      color: "hsl(var(--muted))",
      showCheck: false,
    },
    {
      name: "Cartão de\nCrédito Rotativo",
      rate: 14.06,
      color: "hsl(195 28% 25%)",
      showCheck: false,
    },
  ];

  const CustomLabel = (props: any) => {
    const { x, y, width, value, index } = props;
    const showCheck = comparisonData[index].showCheck;
    
    return (
      <g>
        <text
          x={x + width / 2}
          y={y - 10}
          fill="hsl(var(--foreground))"
          textAnchor="middle"
          fontSize="14"
          fontWeight="500"
        >
          {value}% a.m
        </text>
        {showCheck && (
          <circle
            cx={x + width / 2}
            cy={y - 35}
            r="12"
            fill="hsl(var(--success))"
          />
        )}
        {showCheck && (
          <path
            d={`M ${x + width / 2 - 4} ${y - 35} L ${x + width / 2 - 1} ${y - 32} L ${x + width / 2 + 4} ${y - 38}`}
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        )}
      </g>
    );
  };

  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('simular');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Chart */}
          <div className="w-full">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={comparisonData}
                margin={{ top: 60, right: 20, left: 20, bottom: 80 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="name"
                  tick={{ 
                    fill: "hsl(var(--foreground))", 
                    fontSize: 12,
                    textAnchor: "middle"
                  }}
                  interval={0}
                  height={80}
                  tickLine={false}
                />
                <YAxis hide />
                <Bar dataKey="rate" radius={[8, 8, 0, 0]}>
                  {comparisonData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                  <LabelList content={<CustomLabel />} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Right side - Text and CTA */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                COMPARE AS TAXAS E COMPROVE
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Aqui combatemos o mau endividamento
              </h2>
            </div>
            
            <Button 
              size="lg" 
              className="bg-[#86BC24] hover:bg-[#75a820] text-white font-semibold px-8 py-6 text-base group"
              onClick={scrollToCalculator}
            >
              Simule grátis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatesComparison;
