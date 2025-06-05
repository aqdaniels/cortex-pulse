
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  GitCommit, 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  Eye,
  Network,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Correlation {
  id: string;
  sourceEvent: {
    type: "commit" | "deployment" | "config_change" | "team_change";
    description: string;
    timestamp: string;
    author: string;
  };
  targetImpact: {
    metric: string;
    change: number;
    direction: "up" | "down";
    severity: "high" | "medium" | "low";
  };
  confidence: number;
  timeToImpact: string;
  businessContext: string;
}

const correlations: Correlation[] = [
  {
    id: "1",
    sourceEvent: {
      type: "commit",
      description: "Optimized database query in payment service",
      timestamp: "14 minutes ago",
      author: "alex.chen"
    },
    targetImpact: {
      metric: "API Response Time",
      change: -23,
      direction: "down",
      severity: "high"
    },
    confidence: 89,
    timeToImpact: "8 minutes",
    businessContext: "Payment processing performance improved"
  },
  {
    id: "2", 
    sourceEvent: {
      type: "deployment",
      description: "Frontend bundle size optimization v2.1.4",
      timestamp: "2 hours ago",
      author: "deploy-bot"
    },
    targetImpact: {
      metric: "Page Load Time",
      change: -31,
      direction: "down", 
      severity: "high"
    },
    confidence: 94,
    timeToImpact: "12 minutes",
    businessContext: "User experience enhancement detected"
  },
  {
    id: "3",
    sourceEvent: {
      type: "config_change",
      description: "Increased connection pool size in auth service",
      timestamp: "4 hours ago",
      author: "ops-team"
    },
    targetImpact: {
      metric: "Authentication Errors",
      change: -67,
      direction: "down",
      severity: "high"
    },
    confidence: 91,
    timeToImpact: "3 minutes",
    businessContext: "Login reliability improved significantly"
  },
  {
    id: "4",
    sourceEvent: {
      type: "team_change",
      description: "Sarah joined DevOps rotation schedule",
      timestamp: "1 day ago",
      author: "hr-system"
    },
    targetImpact: {
      metric: "Incident Resolution Time",
      change: -19,
      direction: "down",
      severity: "medium"
    },
    confidence: 76,
    timeToImpact: "6 hours",
    businessContext: "Team expertise distribution optimized"
  }
];

function EventIcon({ type }: { type: Correlation["sourceEvent"]["type"] }) {
  switch (type) {
    case "commit":
      return <GitCommit className="h-4 w-4 text-green-500" />;
    case "deployment":
      return <Zap className="h-4 w-4 text-blue-500" />;
    case "config_change":
      return <Activity className="h-4 w-4 text-orange-500" />;
    case "team_change":
      return <Network className="h-4 w-4 text-purple-500" />;
    default:
      return <Activity className="h-4 w-4 text-gray-500" />;
  }
}

function ImpactIndicator({ change, direction }: { change: number; direction: "up" | "down" }) {
  const isImprovement = (direction === "down" && change < 0) || (direction === "up" && change > 0);
  
  return (
    <div className={cn("flex items-center space-x-1", 
      isImprovement ? "text-green-600" : "text-red-600"
    )}>
      {direction === "down" ? (
        <TrendingDown className="h-4 w-4" />
      ) : (
        <TrendingUp className="h-4 w-4" />
      )}
      <span className="font-medium">{Math.abs(change)}%</span>
    </div>
  );
}

export function CorrelationEngine() {
  const [activeCorrelations, setActiveCorrelations] = useState(correlations);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  useEffect(() => {
    // Simulate real-time analysis
    const timer = setInterval(() => {
      setIsAnalyzing(prev => !prev);
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="animated-border card-gradient shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold flex items-center">
              <div className="mr-2 h-7 w-7 rounded-full bg-blue-500/10 flex items-center justify-center relative">
                <Network className="h-4 w-4 text-blue-500" />
                {isAnalyzing && (
                  <div className="absolute -top-1 -right-1">
                    <div className="h-3 w-3 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
              Real-time Correlation Engine
            </CardTitle>
            <CardDescription>
              AI agents automatically correlating code changes with operational impacts
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            {isAnalyzing && (
              <Badge className="bg-blue-500 text-white">
                <Eye className="h-3 w-3 mr-1" />
                Analyzing
              </Badge>
            )}
            <Badge variant="outline" className="text-xs">
              {activeCorrelations.length} Active Correlations
            </Badge>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <div className="space-y-4">
          {activeCorrelations.map((correlation) => (
            <div 
              key={correlation.id}
              className="border rounded-lg p-4 bg-background hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3">
                  <EventIcon type={correlation.sourceEvent.type} />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-sm">{correlation.sourceEvent.description}</h4>
                      <Badge variant="outline" className="text-xs">
                        {correlation.sourceEvent.type.replace("_", " ")}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">
                      By {correlation.sourceEvent.author} • {correlation.sourceEvent.timestamp}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 p-3 bg-muted/40 rounded-md">
                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-1">Impact Detected</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{correlation.targetImpact.metric}</span>
                    <ImpactIndicator 
                      change={correlation.targetImpact.change} 
                      direction={correlation.targetImpact.direction} 
                    />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-1">Time to Impact</div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm font-medium">{correlation.timeToImpact}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground">Confidence Score</span>
                  <span className="text-xs font-medium">{correlation.confidence}%</span>
                </div>
                <Progress value={correlation.confidence} className="h-2 mb-2" />
                <div className="text-xs text-blue-600 font-medium">
                  Business Context: {correlation.businessContext}
                </div>
              </div>
            </div>
          ))}
          
          <Button variant="outline" className="w-full text-sm">
            <Activity className="mr-2 h-4 w-4" />
            View Full Correlation Analytics
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
