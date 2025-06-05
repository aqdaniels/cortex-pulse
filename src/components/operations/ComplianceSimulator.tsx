
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  FileText, 
  TrendingUp,
  DollarSign,
  Scale
} from "lucide-react";

interface ComplianceScenario {
  id: string;
  name: string;
  description: string;
  currentCompliance: number;
  targetCompliance: number;
  timeToAchieve: string;
  estimatedCost: number;
  riskReduction: number;
  frameworks: string[];
}

export function ComplianceSimulator() {
  const [selectedScenario, setSelectedScenario] = useState("sox");
  
  const scenarios: ComplianceScenario[] = [
    {
      id: "sox",
      name: "SOX Compliance Enhancement",
      description: "Strengthen financial reporting controls and audit trails",
      currentCompliance: 78,
      targetCompliance: 95,
      timeToAchieve: "6 months",
      estimatedCost: 180000,
      riskReduction: 67,
      frameworks: ["SOX", "COSO", "PCAOB"]
    },
    {
      id: "gdpr",
      name: "GDPR Data Protection",
      description: "Enhance data privacy and protection mechanisms",
      currentCompliance: 82,
      targetCompliance: 98,
      timeToAchieve: "4 months",
      estimatedCost: 145000,
      riskReduction: 73,
      frameworks: ["GDPR", "ISO 27001", "NIST"]
    },
    {
      id: "hipaa",
      name: "HIPAA Security Enhancement",
      description: "Strengthen healthcare data protection and access controls",
      currentCompliance: 71,
      targetCompliance: 92,
      timeToAchieve: "8 months",
      estimatedCost: 220000,
      riskReduction: 58,
      frameworks: ["HIPAA", "HITECH", "NIST Cybersecurity"]
    }
  ];
  
  const activeScenario = scenarios.find(s => s.id === selectedScenario) || scenarios[0];
  const complianceGain = activeScenario.targetCompliance - activeScenario.currentCompliance;
  const potentialFineSavings = activeScenario.riskReduction * 50000; // Estimated fine reduction
  
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Scale className="mr-2 h-5 w-5" />
              Compliance Scenarios
            </CardTitle>
            <CardDescription>Select a regulatory framework to simulate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {scenarios.map((scenario) => (
              <Card 
                key={scenario.id}
                className={`cursor-pointer transition-all ${selectedScenario === scenario.id ? 'border-primary bg-muted/50' : 'hover:border-primary/50'}`}
                onClick={() => setSelectedScenario(scenario.id)}
              >
                <CardHeader className="p-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-sm">{scenario.name}</CardTitle>
                    <Badge variant={scenario.currentCompliance >= 90 ? "default" : "secondary"}>
                      {scenario.currentCompliance}%
                    </Badge>
                  </div>
                  <CardDescription className="text-xs">
                    {scenario.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {scenario.frameworks.map((framework) => (
                      <Badge key={framework} variant="outline" className="text-xs">
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
      
      <div className="col-span-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Shield className="mr-2 h-5 w-5" />
              {activeScenario.name} Simulation
            </CardTitle>
            <CardDescription>{activeScenario.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Current Compliance</span>
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                  </div>
                  <div className="text-2xl font-bold mb-2">{activeScenario.currentCompliance}%</div>
                  <Progress value={activeScenario.currentCompliance} className="h-2" />
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Target Compliance</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold mb-2 text-green-600">
                    {activeScenario.targetCompliance}%
                  </div>
                  <Progress value={activeScenario.targetCompliance} className="h-2" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Implementation Cost</span>
                    <DollarSign className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold">
                    ${activeScenario.estimatedCost.toLocaleString()}
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Risk Reduction</span>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {activeScenario.riskReduction}%
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/40 rounded-lg p-4 mb-4">
              <h4 className="font-medium mb-3 flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                Implementation Timeline
              </h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Time to Target</span>
                  <div className="font-medium">{activeScenario.timeToAchieve}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Compliance Gain</span>
                  <div className="font-medium text-green-600">+{complianceGain}%</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Potential Fine Savings</span>
                  <div className="font-medium">${potentialFineSavings.toLocaleString()}</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button className="flex-1">
                <FileText className="mr-2 h-4 w-4" />
                Generate Compliance Roadmap
              </Button>
              <Button variant="outline">
                <Shield className="mr-2 h-4 w-4" />
                Risk Assessment Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
