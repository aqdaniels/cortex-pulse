
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface PredictiveEvent {
  id: string;
  title: string;
  type: "risk" | "opportunity" | "maintenance" | "optimization";
  probability: number;
  timeframe: string;
  impact: "low" | "medium" | "high" | "critical";
  description: string;
}

const predictiveEvents: PredictiveEvent[] = [
  {
    id: "1",
    title: "Deployment Risk Spike",
    type: "risk",
    probability: 73,
    timeframe: "Next 2 hours",
    impact: "high",
    description: "Code complexity metrics suggest 73% chance of deployment issues"
  },
  {
    id: "2",
    title: "Performance Optimization Window",
    type: "opportunity",
    probability: 85,
    timeframe: "Next 6 hours",
    impact: "medium",
    description: "Low traffic period ideal for system optimizations"
  },
  {
    id: "3",
    title: "Database Maintenance Required",
    type: "maintenance",
    probability: 91,
    timeframe: "Next 24 hours",
    impact: "critical",
    description: "Query performance degradation indicates maintenance needed"
  },
  {
    id: "4",
    title: "Team Productivity Boost",
    type: "optimization",
    probability: 67,
    timeframe: "Next 3 days",
    impact: "medium",
    description: "Sprint velocity patterns suggest optimization opportunity"
  }
];

function TimelineEvent({ event, index }: { event: PredictiveEvent; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 300);
    
    return () => clearTimeout(timer);
  }, [index]);

  const getTypeColor = () => {
    switch (event.type) {
      case "risk": return "border-red-500 bg-red-50";
      case "opportunity": return "border-green-500 bg-green-50";
      case "maintenance": return "border-yellow-500 bg-yellow-50";
      case "optimization": return "border-blue-500 bg-blue-50";
      default: return "border-gray-500 bg-gray-50";
    }
  };

  const getImpactColor = () => {
    switch (event.impact) {
      case "critical": return "bg-red-500 text-white";
      case "high": return "bg-orange-500 text-white";
      case "medium": return "bg-yellow-500 text-white";
      case "low": return "bg-green-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getProbabilityColor = () => {
    if (event.probability >= 80) return "text-red-600";
    if (event.probability >= 60) return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <div className={cn(
      "relative border-l-4 pl-4 pb-4 transition-all duration-500 transform",
      getTypeColor(),
      isVisible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
    )}>
      {/* Timeline dot */}
      <div className="absolute -left-2 top-2 w-3 h-3 bg-current rounded-full"></div>
      
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium text-sm">{event.title}</h4>
        <div className="flex space-x-2">
          <Badge className={cn("text-xs", getImpactColor())}>
            {event.impact}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {event.timeframe}
          </Badge>
        </div>
      </div>
      
      <p className="text-xs text-muted-foreground mb-2">{event.description}</p>
      
      <div className="flex items-center space-x-2">
        <span className="text-xs text-muted-foreground">Probability:</span>
        <Progress value={event.probability} className="h-1 w-16" />
        <span className={cn("text-xs font-medium", getProbabilityColor())}>
          {event.probability}%
        </span>
      </div>
    </div>
  );
}

export function PredictiveTimeline() {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Predictive Timeline</CardTitle>
          <Badge variant="outline" className="text-xs">
            {currentTime.toLocaleTimeString()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {predictiveEvents.map((event, index) => (
            <TimelineEvent key={event.id} event={event} index={index} />
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Prediction Accuracy</span>
            <span className="font-medium text-green-600">87.3% (Last 30 days)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
