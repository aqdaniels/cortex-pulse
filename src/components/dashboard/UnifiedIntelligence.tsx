
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Network, 
  Code, 
  Shield, 
  TrendingUp, 
  TrendingDown,
  GitBranch,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  Target
} from "lucide-react";

export function UnifiedIntelligence() {
  const [activeWorkflow, setActiveWorkflow] = useState("feature-delivery");
  
  const workflows = [
    {
      id: "feature-delivery",
      name: "Feature Delivery Pipeline",
      cortexActions: ["Risk Assessment", "Performance Monitoring", "Compliance Check"],
      convergeActions: ["Code Generation", "Testing", "Deployment"],
      status: "active",
      confidence: 94
    },
    {
      id: "incident-response",
      name: "Incident Response",
      cortexActions: ["Root Cause Analysis", "Impact Simulation", "Recovery Planning"],
      convergeActions: ["Hotfix Generation", "Testing", "Emergency Deploy"],
      status: "standby",
      confidence: 87
    },
    {
      id: "compliance-automation",
      name: "Compliance Automation",
      cortexActions: ["Regulatory Monitoring", "Risk Validation", "Audit Trail"],
      convergeActions: ["Code Compliance", "Documentation", "Reporting"],
      status: "active",
      confidence: 91
    }
  ];
  
  const activeFlow = workflows.find(w => w.id === activeWorkflow) || workflows[0];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Network className="mr-2 h-5 w-5" />
          Cortex + Converge Unified Intelligence
        </CardTitle>
        <CardDescription>Real-time collaboration between intelligence and delivery agents</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {workflows.map((workflow) => (
            <Card 
              key={workflow.id}
              className={`cursor-pointer transition-all ${activeWorkflow === workflow.id ? 'border-primary bg-muted/50' : 'hover:border-primary/50'}`}
              onClick={() => setActiveWorkflow(workflow.id)}
            >
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-sm">{workflow.name}</CardTitle>
                  <Badge variant={workflow.status === 'active' ? 'default' : 'secondary'}>
                    {workflow.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs text-muted-foreground">Confidence:</span>
                  <Progress value={workflow.confidence} className="flex-1 h-1" />
                  <span className="text-xs font-medium">{workflow.confidence}%</span>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center">
                <Brain className="mr-2 h-4 w-4 text-blue-500" />
                Cortex Intelligence Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activeFlow.cortexActions.map((action, index) => (
                  <div key={action} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">{action}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Step {index + 1}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center">
                <Code className="mr-2 h-4 w-4 text-green-500" />
                Converge Delivery Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activeFlow.convergeActions.map((action, index) => (
                  <div key={action} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">{action}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Step {index + 1}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Collaborative Insight</h3>
                  <p className="text-sm text-muted-foreground">
                    Cortex identified 15% performance improvement opportunity while Converge optimized deployment pipeline
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600">+23% Efficiency</div>
                <div className="text-xs text-muted-foreground">Last 30 days</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
