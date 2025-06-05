
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  GitBranch, 
  Code, 
  Shield, 
  TrendingUp,
  TrendingDown,
  Clock,
  Users,
  Target,
  CheckCircle,
  AlertTriangle,
  Network,
  BarChart
} from "lucide-react";

export function CrossPlatformIntegration() {
  const [selectedMetric, setSelectedMetric] = useState("velocity");
  
  const integrationData = {
    velocity: {
      devMetric: "Story Points/Sprint",
      devValue: 32,
      devTrend: +12,
      opsMetric: "Deployment Frequency",
      opsValue: "2.3/day",
      opsTrend: +18,
      correlation: 0.87,
      insight: "Higher development velocity correlates with increased deployment frequency"
    },
    quality: {
      devMetric: "Code Coverage",
      devValue: 87,
      devTrend: +3,
      opsMetric: "Incident Rate",
      opsValue: "0.2%",
      opsTrend: -45,
      correlation: 0.92,
      insight: "Improved code coverage significantly reduces production incidents"
    },
    efficiency: {
      devMetric: "Lead Time",
      devValue: 4.2,
      devTrend: -15,
      opsMetric: "MTTR",
      opsValue: "23min",
      opsTrend: -28,
      correlation: 0.76,
      insight: "Shorter development lead times enable faster incident resolution"
    }
  };
  
  const activeData = integrationData[selectedMetric as keyof typeof integrationData];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Network className="mr-2 h-5 w-5" />
          Cross-Platform Intelligence Integration
        </CardTitle>
        <CardDescription>Real-time correlation between development and operations metrics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex space-x-2">
          <Badge 
            variant={selectedMetric === 'velocity' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedMetric('velocity')}
          >
            <TrendingUp className="mr-1 h-3 w-3" />
            Velocity
          </Badge>
          <Badge 
            variant={selectedMetric === 'quality' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedMetric('quality')}
          >
            <Shield className="mr-1 h-3 w-3" />
            Quality
          </Badge>
          <Badge 
            variant={selectedMetric === 'efficiency' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedMetric('efficiency')}
          >
            <Clock className="mr-1 h-3 w-3" />
            Efficiency
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center text-blue-800">
                <Code className="mr-2 h-4 w-4" />
                Development Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{activeData.devMetric}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold">{activeData.devValue}</span>
                    <div className={`flex items-center text-xs ${activeData.devTrend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {activeData.devTrend > 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                      {Math.abs(activeData.devTrend)}%
                    </div>
                  </div>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-blue-700">From development tools integration</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center text-green-800">
                <BarChart className="mr-2 h-4 w-4" />
                Operations Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{activeData.opsMetric}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold">{activeData.opsValue}</span>
                    <div className={`flex items-center text-xs ${activeData.opsTrend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {activeData.opsTrend > 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                      {Math.abs(activeData.opsTrend)}%
                    </div>
                  </div>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-xs text-green-700">From operations monitoring</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-purple-600" />
                <span className="font-medium text-purple-900">Correlation Analysis</span>
              </div>
              <Badge className="bg-purple-100 text-purple-800">
                {(activeData.correlation * 100).toFixed(0)}% correlation
              </Badge>
            </div>
            <p className="text-sm text-purple-700">{activeData.insight}</p>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">15</div>
              <div className="text-sm text-muted-foreground">Connected Tools</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">2.3M</div>
              <div className="text-sm text-muted-foreground">Data Points/Day</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">94%</div>
              <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
