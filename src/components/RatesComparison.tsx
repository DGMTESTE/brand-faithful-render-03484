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
      name: "Antecipação Bhiobank",
      rate: 3,
      color: "hsl(var(--primary))",
      showCheck: false,
    },
    {
      name: "Capital de Giro",
      rate: 4.5,
      color: "hsl(195 28% 25%)",
      showCheck: false,
    },
    {
      name: "Empréstimo\nPessoal",
      rate: 7.47,
      color: "hsl(195 28% 25%)",
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
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Entenda, compare e escolha melhor:
              </h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Crédito consciente e taxas justas, aqui você economiza e cresce com segurança..
              </p>
            </div>
            
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatesComparison;