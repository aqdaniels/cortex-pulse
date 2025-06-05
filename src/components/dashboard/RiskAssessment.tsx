
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  Clock, 
  Target,
  Brain,
  Zap,
  BarChart
} from "lucide-react";
import { cn } from "@/lib/utils";

interface RiskFactor {
  id: string;
  category: "technical" | "operational" | "business" | "compliance";
  name: string;
  currentLevel: number;
  predictedLevel: number;
  confidence: number;
  timeframe: string;
  impact: "critical" | "high" | "medium" | "low";
  trend: "increasing" | "stable" | "decreasing";
  mitigationActions: string[];
  businessValue: string;
}

const riskFactors: RiskFactor[] = [
  {
    id: "1",
    category: "technical",
    name: "Technical Debt Accumulation",
    currentLevel: 23,
    predictedLevel: 31,
    confidence: 87,
    timeframe: "Next 30 days",
    impact: "high",
    trend: "increasing",
    mitigationActions: [
      "Schedule debt reduction sprint",
      "Implement automated code quality gates",
      "Allocate 20% capacity to refactoring"
    ],
    businessValue: "Prevent 25% velocity decrease"
  },
  {
    id: "2", 
    category: "operational",
    name: "Deployment Pipeline Bottleneck Risk",
    currentLevel: 15,
    predictedLevel: 8,
    confidence: 92,
    timeframe: "Next 14 days", 
    impact: "medium",
    trend: "decreasing",
    mitigationActions: [
      "Continue parallel pipeline optimization",
      "Monitor resource utilization"
    ],
    businessValue: "Maintain 99.5% deployment success rate"
  },
  {
    id: "3",
    category: "business",
    name: "Customer Experience Degradation",
    currentLevel: 12,
    predictedLevel: 18,
    confidence: 74,
    timeframe: "Next 21 days",
    impact: "critical", 
    trend: "increasing",
    mitigationActions: [
      "Implement proactive monitoring",
      "Scale customer support capacity",
      "Accelerate performance optimization"
    ],
    businessValue: "Protect $2.3M monthly revenue"
  },
  {
    id: "4",
    category: "compliance",
    name: "Security Vulnerability Exposure",
    currentLevel: 8,
    predictedLevel: 6,
    confidence: 95,
    timeframe: "Next 7 days",
    impact: "high",
    trend: "decreasing", 
    mitigationActions: [
      "Continue automated security scanning",
      "Maintain patch management schedule"
    ],
    businessValue: "Ensure regulatory compliance"
  }
];

function CategoryIcon({ category }: { category: RiskFactor["category"] }) {
  switch (category) {
    case "technical":
      return <Brain className="h-4 w-4 text-blue-500" />;
    case "operational":
      return <Zap className="h-4 w-4 text-orange-500" />;
    case "business":
      return <Target className="h-4 w-4 text-green-500" />;
    case "compliance":
      return <Shield className="h-4 w-4 text-purple-500" />;
    default:
      return <AlertTriangle className="h-4 w-4 text-gray-500" />;
  }
}

function RiskBadge({ impact }: { impact: RiskFactor["impact"] }) {
  const colors = {
    critical: "bg-red-500 text-white",
    high: "bg-orange-500 text-white",
    medium: "bg-yellow-500 text-white", 
    low: "bg-green-500 text-white"
  };
  
  return (
    <Badge className={cn("text-xs", colors[impact])}>
      {impact.toUpperCase()}
    </Badge>
  );
}

function TrendIndicator({ trend, change }: { trend: RiskFactor["trend"]; change: number }) {
  const colors = {
    increasing: "text-red-500",
    stable: "text-gray-500",
    decreasing: "text-green-500"
  };
  
  return (
    <div className={cn("flex items-center space-x-1 text-xs", colors[trend])}>
      <TrendingUp className={cn("h-3 w-3", 
        trend === "decreasing" && "rotate-180",
        trend === "stable" && "rotate-90"
      )} />
      <span>{Math.abs(change)}%</span>
    </div>
  );
}

export function RiskAssessment() {
  const [risks, setRisks] = useState(riskFactors);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  useEffect(() => {
    // Simulate real-time risk analysis
    const timer = setInterval(() => {
      setIsAnalyzing(prev => !prev);
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);
  
  const overallRiskScore = Math.round(
    risks.reduce((acc, risk) => acc + risk.predictedLevel, 0) / risks.length
  );
  
  const criticalRisks = risks.filter(r => r.impact === "critical").length;
  const increasingRisks = risks.filter(r => r.trend === "increasing").length;

  return (
    <Card className="card-gradient shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold flex items-center">
              <div className="mr-2 h-7 w-7 rounded-full bg-orange-500/10 flex items-center justify-center relative">
                <Shield className="h-4 w-4 text-orange-500" />
                {isAnalyzing && (
                  <div className="absolute -top-1 -right-1">
                    <div className="h-3 w-3 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
              Automated Risk Assessment
            </CardTitle>
            <CardDescription>
              Predictive risk analysis with confidence intervals
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-center">
              <div className="text-2xl font-bold">{overallRiskScore}%</div>
              <div className="text-xs text-muted-foreground">Overall Risk</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 mt-2">
          {criticalRisks > 0 && (
            <Badge className="bg-red-500 text-white">
              {criticalRisks} Critical
            </Badge>
          )}
          {increasingRisks > 0 && (
            <Badge className="bg-amber-500 text-white">
              {increasingRisks} Increasing
            </Badge>
          )}
          {isAnalyzing && (
            <Badge className="bg-blue-500 text-white">
              <BarChart className="h-3 w-3 mr-1" />
              Analyzing
            </Badge>
          )}
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <div className="space-y-4">
          {risks.map((risk) => {
            const change = risk.predictedLevel - risk.currentLevel;
            
            return (
              <div 
                key={risk.id}
                className="border rounded-lg p-4 bg-background transition-all hover:shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    <CategoryIcon category={risk.category} />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-sm">{risk.name}</h4>
                        <RiskBadge impact={risk.impact} />
                        <Badge variant="outline" className="text-xs">
                          {risk.category}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{risk.timeframe}</span>
                        </span>
                        <TrendIndicator trend={risk.trend} change={change} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-1">Current Risk Level</div>
                    <div className="flex items-center space-x-2">
                      <Progress value={risk.currentLevel} className="flex-1 h-2" />
                      <span className="text-sm font-medium w-8">{risk.currentLevel}%</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-1">Predicted Level</div>
                    <div className="flex items-center space-x-2">
                      <Progress value={risk.predictedLevel} className="flex-1 h-2" />
                      <span className="text-sm font-medium w-8">{risk.predictedLevel}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-muted-foreground">Confidence</span>
                    <span className="text-xs font-medium">{risk.confidence}%</span>
                  </div>
                  <Progress value={risk.confidence} className="h-1" />
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-blue-600 font-medium">Business Value: {risk.businessValue}</div>
                  <div className="text-green-600 font-medium">
                    Recommended Actions: {risk.mitigationActions.slice(0, 1).join(", ")}
                    {risk.mitigationActions.length > 1 && ` (+${risk.mitigationActions.length - 1} more)`}
                  </div>
                </div>
              </div>
            );
          })}
          
          <Button variant="outline" className="w-full text-sm">
            <Shield className="mr-2 h-4 w-4" />
            View Detailed Risk Analysis
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
