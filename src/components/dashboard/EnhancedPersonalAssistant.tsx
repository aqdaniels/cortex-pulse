
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  BellRing, 
  Check, 
  ChevronRight, 
  Clock, 
  Lightbulb, 
  X, 
  TrendingUp, 
  AlertTriangle, 
  Brain,
  Target,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CortexInsight {
  id: string;
  type: "anomaly" | "prediction" | "optimization" | "learning";
  severity: "critical" | "high" | "medium" | "low";
  title: string;
  description: string;
  confidence: number;
  time: string;
  read: boolean;
  businessImpact: string;
  action?: string;
  learningSource?: string;
}

const cortexInsights: CortexInsight[] = [
  {
    id: "1",
    type: "anomaly",
    severity: "critical",
    title: "Code Deployment Pattern Anomaly Detected",
    description: "Agent detected unusual deployment frequency spike (3x normal) in payment service. Risk of instability increased by 67%.",
    confidence: 94,
    time: "12 minutes ago",
    read: false,
    businessImpact: "Potential $45K revenue impact if payment system fails",
    action: "Recommend rollback deployment #347"
  },
  {
    id: "2",
    type: "prediction",
    severity: "medium",
    title: "Team Burnout Risk Prediction",
    description: "ML model predicts 78% chance of developer burnout in Team Alpha based on commit patterns and velocity trends.",
    confidence: 78,
    time: "2 hours ago",
    read: false,
    businessImpact: "23% reduction in sprint velocity expected",
    action: "Redistribute workload, schedule team retrospective"
  },
  {
    id: "3",
    type: "learning",
    severity: "low",
    title: "Agent Learning Update",
    description: "Cortex agent improved incident classification accuracy by 12% after learning from your manual override on incident #2847.",
    confidence: 89,
    time: "4 hours ago",
    read: false,
    businessImpact: "Faster incident resolution times",
    learningSource: "Expert feedback from DevOps team"
  },
  {
    id: "4",
    type: "optimization",
    severity: "high",
    title: "Resource Optimization Opportunity",
    description: "Agent identified potential 31% cost reduction by optimizing CI/CD pipeline resource allocation during off-peak hours.",
    confidence: 85,
    time: "6 hours ago",
    read: false,
    businessImpact: "$12K monthly savings potential",
    action: "Implement schedule-based resource scaling"
  }
];

function InsightIcon({ type }: { type: CortexInsight["type"] }) {
  switch (type) {
    case "anomaly":
      return <AlertTriangle className="h-4 w-4 text-red-500" />;
    case "prediction":
      return <TrendingUp className="h-4 w-4 text-amber-500" />;
    case "optimization":
      return <Target className="h-4 w-4 text-blue-500" />;
    case "learning":
      return <Brain className="h-4 w-4 text-purple-500" />;
    default:
      return <Lightbulb className="h-4 w-4 text-gray-500" />;
  }
}

function SeverityBadge({ severity }: { severity: CortexInsight["severity"] }) {
  const colors = {
    critical: "bg-red-500 text-white",
    high: "bg-orange-500 text-white", 
    medium: "bg-yellow-500 text-white",
    low: "bg-green-500 text-white"
  };
  
  return (
    <Badge className={cn("text-xs", colors[severity])}>
      {severity.toUpperCase()}
    </Badge>
  );
}

export function EnhancedPersonalAssistant() {
  const [insights, setInsights] = useState<CortexInsight[]>(cortexInsights);
  const [agentLearning, setAgentLearning] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate real-time agent learning
    const timer = setInterval(() => {
      setAgentLearning(prev => !prev);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);
  
  const markAsRead = (id: string) => {
    setInsights(prev => 
      prev.map(insight => 
        insight.id === id ? { ...insight, read: true } : insight
      )
    );
    
    toast({
      title: "Insight Acknowledged",
      description: "Agent has recorded your acknowledgment for continuous learning",
      variant: "default",
    });
  };
  
  const dismissInsight = (id: string) => {
    setInsights(prev => prev.filter(insight => insight.id !== id));
    
    toast({
      title: "Insight Dismissed", 
      description: "Agent will learn from this feedback to improve future recommendations",
      variant: "default",
    });
  };
  
  const getSeverityColor = (severity: CortexInsight["severity"]) => {
    switch (severity) {
      case "critical":
        return "border-l-red-500";
      case "high":
        return "border-l-orange-500";
      case "medium":
        return "border-l-yellow-500";
      case "low":
        return "border-l-green-500";
      default:
        return "border-l-blue-500";
    }
  };

  const criticalCount = insights.filter(i => i.severity === "critical" && !i.read).length;
  const totalUnread = insights.filter(i => !i.read).length;

  return (
    <Card className="card-gradient shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center">
            <div className="mr-2 h-7 w-7 rounded-full bg-cortex-primary/10 flex items-center justify-center relative">
              <Brain className="h-4 w-4 text-cortex-primary" />
              {agentLearning && (
                <div className="absolute -top-1 -right-1">
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
            Cortex Agent Intelligence
          </CardTitle>
          <div className="flex items-center space-x-2">
            {criticalCount > 0 && (
              <Badge className="bg-red-500 text-white animate-pulse">
                {criticalCount} Critical
              </Badge>
            )}
            {agentLearning && (
              <Badge className="bg-green-500 text-white">
                <Zap className="h-3 w-3 mr-1" />
                Learning
              </Badge>
            )}
          </div>
        </div>
        {totalUnread > 0 && (
          <div className="text-sm text-muted-foreground">
            {totalUnread} new insights requiring attention
          </div>
        )}
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        {insights.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Brain className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p>All insights processed</p>
            <p className="text-xs mt-1">Agent continues monitoring...</p>
          </div>
        ) : (
          <div className="space-y-3">
            {insights.map((insight) => (
              <div 
                key={insight.id}
                className={cn(
                  "p-3 rounded-lg border-l-4 bg-background relative transition-all duration-200 hover:translate-x-1 hover:shadow-sm",
                  insight.read ? "opacity-70" : "opacity-100",
                  getSeverityColor(insight.severity)
                )}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start">
                    <div className="mr-3 mt-0.5">
                      <InsightIcon type={insight.type} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-sm">{insight.title}</h4>
                        <SeverityBadge severity={insight.severity} />
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{insight.description}</p>
                      
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="flex items-center space-x-1">
                          <span className="text-xs text-muted-foreground">Confidence:</span>
                          <Progress value={insight.confidence} className="h-1 w-12" />
                          <span className="text-xs font-medium">{insight.confidence}%</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{insight.time}</span>
                      </div>
                      
                      <div className="text-xs">
                        <div className="text-blue-600 font-medium mb-1">Business Impact: {insight.businessImpact}</div>
                        {insight.action && (
                          <div className="text-green-600 font-medium">Recommended: {insight.action}</div>
                        )}
                        {insight.learningSource && (
                          <div className="text-purple-600 font-medium">Learning from: {insight.learningSource}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-5 w-5"
                      onClick={() => markAsRead(insight.id)}
                    >
                      <Check className="h-3 w-3" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-5 w-5"
                      onClick={() => dismissInsight(insight.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            <Button 
              variant="outline" 
              className="w-full text-sm mt-2 hover:bg-cortex-primary hover:text-white"
            >
              View Agent Intelligence Dashboard
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
