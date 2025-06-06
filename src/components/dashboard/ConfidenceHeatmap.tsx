
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ConfidenceData {
  category: string;
  current: number;
  trend: "up" | "down" | "stable";
  history: number[];
}

const confidenceMetrics: ConfidenceData[] = [
  {
    category: "Anomaly Detection",
    current: 94,
    trend: "up",
    history: [85, 88, 91, 94]
  },
  {
    category: "Risk Prediction",
    current: 78,
    trend: "down",
    history: [82, 80, 79, 78]
  },
  {
    category: "Process Optimization",
    current: 85,
    trend: "stable",
    history: [84, 85, 85, 85]
  },
  {
    category: "Learning Accuracy",
    current: 89,
    trend: "up",
    history: [75, 81, 86, 89]
  },
  {
    category: "Correlation Analysis",
    current: 92,
    trend: "up",
    history: [88, 90, 91, 92]
  },
  {
    category: "Impact Assessment",
    current: 76,
    trend: "stable",
    history: [74, 75, 77, 76]
  }
];

function ConfidenceCell({ data, index }: { data: ConfidenceData; index: number }) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, index * 200);
    
    return () => clearTimeout(timer);
  }, [index]);

  const getConfidenceColor = () => {
    if (data.current >= 90) return "bg-green-500";
    if (data.current >= 80) return "bg-green-400";
    if (data.current >= 70) return "bg-yellow-400";
    return "bg-red-400";
  };

  const getTrendColor = () => {
    switch (data.trend) {
      case "up": return "text-green-600";
      case "down": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className={cn(
      "p-3 rounded-lg border transition-all duration-500 transform",
      isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-70"
    )}>
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-medium">{data.category}</h4>
        <Badge variant="outline" className={cn("text-xs", getTrendColor())}>
          {data.trend === "up" ? "↗" : data.trend === "down" ? "↘" : "→"}
        </Badge>
      </div>
      
      <div className="flex items-center space-x-2 mb-2">
        <div className={cn("w-4 h-4 rounded", getConfidenceColor())}></div>
        <span className="text-lg font-bold">{data.current}%</span>
      </div>
      
      {/* Mini trend chart */}
      <div className="flex items-end space-x-1 h-6">
        {data.history.map((value, i) => (
          <div
            key={i}
            className={cn("w-2 rounded-t transition-all duration-300", getConfidenceColor())}
            style={{ 
              height: `${(value / 100) * 24}px`,
              opacity: i === data.history.length - 1 ? 1 : 0.6
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export function ConfidenceHeatmap() {
  const [refreshKey, setRefreshKey] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey(prev => prev + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const averageConfidence = Math.round(
    confidenceMetrics.reduce((acc, curr) => acc + curr.current, 0) / confidenceMetrics.length
  );

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Agent Confidence Heatmap</CardTitle>
          <Badge className="bg-blue-500 text-white">
            Avg: {averageConfidence}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3" key={refreshKey}>
          {confidenceMetrics.map((metric, index) => (
            <ConfidenceCell key={metric.category} data={metric} index={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
