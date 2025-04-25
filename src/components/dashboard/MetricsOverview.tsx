
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, AlertTriangle, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MetricProps {
  title: string;
  value: string;
  change: {
    value: string;
    positive: boolean;
  };
  icon: React.ReactNode;
  description: string;
}

const metrics: MetricProps[] = [
  {
    title: "Deploy Frequency",
    value: "3.2/day",
    change: {
      value: "+12%",
      positive: true,
    },
    icon: <CheckCircle className="h-4 w-4 text-green-500" />,
    description: "Daily average over last 7 days"
  },
  {
    title: "Lead Time",
    value: "4.6h",
    change: {
      value: "-18%",
      positive: true,
    },
    icon: <Clock className="h-4 w-4 text-blue-500" />,
    description: "Time from commit to production"
  },
  {
    title: "MTTR",
    value: "52m",
    change: {
      value: "+5%",
      positive: false,
    },
    icon: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
    description: "Mean time to recover from failures"
  },
  {
    title: "Change Fail %",
    value: "3.8%",
    change: {
      value: "-2%",
      positive: true,
    },
    icon: <Ban className="h-4 w-4 text-red-500" />,
    description: "Failed deployments last 7 days"
  }
];

export function MetricsOverview() {
  return (
    <Card className="card-gradient shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">DORA Metrics</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-background flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-2">
                {metric.icon}
                <span className="text-sm font-medium ml-2">{metric.title}</span>
              </div>
              <div className="text-2xl font-bold mt-1">{metric.value}</div>
              <div className="flex items-center mt-1">
                <span className={metric.change.positive ? "text-green-600" : "text-red-600"}>
                  {metric.change.value}
                </span>
                <span className="text-xs text-muted-foreground ml-2">vs last period</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
        <Button 
          variant="outline" 
          className="w-full mt-4 text-sm hover:bg-cortex-primary hover:text-white"
        >
          View Detailed Metrics
        </Button>
      </CardContent>
    </Card>
  );
}
