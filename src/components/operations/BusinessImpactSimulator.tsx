
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Calculator, 
  Target, 
  Clock,
  Users,
  Zap
} from "lucide-react";

export function BusinessImpactSimulator() {
  const [automationLevel, setAutomationLevel] = useState([40]);
  const [teamSize, setTeamSize] = useState([12]);
  const [incidentVolume, setIncidentVolume] = useState([85]);
  
  // Business calculations
  const avgSalary = 95000;
  const hoursPerYear = 2080;
  const hourlyRate = avgSalary / hoursPerYear;
  
  const currentCost = teamSize[0] * avgSalary;
  const incidentCostPerHour = 450; // Average cost of downtime
  const automationSavings = (automationLevel[0] / 100) * 0.3 * currentCost;
  const incidentReduction = (automationLevel[0] / 100) * 0.4;
  const incidentSavings = incidentVolume[0] * incidentReduction * incidentCostPerHour * 12; // Monthly
  
  const totalAnnualSavings = automationSavings + incidentSavings;
  const roi = ((totalAnnualSavings - 250000) / 250000) * 100; // Assuming 250k implementation cost
  
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Calculator className="mr-2 h-5 w-5" />
              Business Parameters
            </CardTitle>
            <CardDescription>Adjust parameters to see business impact</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium flex items-center">
                  <Zap className="h-4 w-4 mr-2" />
                  Automation Level
                </label>
                <span className="text-sm font-bold">{automationLevel[0]}%</span>
              </div>
              <Slider
                value={automationLevel}
                max={100}
                step={5}
                onValueChange={setAutomationLevel}
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Team Size
                </label>
                <span className="text-sm font-bold">{teamSize[0]} FTE</span>
              </div>
              <Slider
                value={teamSize}
                min={5}
                max={25}
                step={1}
                onValueChange={setTeamSize}
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Monthly Incidents
                </label>
                <span className="text-sm font-bold">{incidentVolume[0]}</span>
              </div>
              <Slider
                value={incidentVolume}
                min={20}
                max={150}
                step={5}
                onValueChange={setIncidentVolume}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="col-span-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <DollarSign className="mr-2 h-5 w-5" />
              Business Impact Analysis
            </CardTitle>
            <CardDescription>Real-time ROI and cost impact calculations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Current Annual Cost</span>
                    <Badge variant="outline">Baseline</Badge>
                  </div>
                  <div className="text-2xl font-bold">${currentCost.toLocaleString()}</div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Automation Savings</span>
                    <TrendingDown className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    ${automationSavings.toLocaleString()}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Incident Cost Reduction</span>
                    <TrendingDown className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    ${incidentSavings.toLocaleString()}
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 bg-primary/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Total ROI</span>
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {roi > 0 ? '+' : ''}{roi.toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="bg-muted/40 rounded-lg p-4">
              <h4 className="font-medium mb-3">Key Business Outcomes</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Time to Resolution</span>
                  <div className="font-medium">-{((automationLevel[0] / 100) * 45).toFixed(0)}%</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Team Efficiency</span>
                  <div className="font-medium">+{((automationLevel[0] / 100) * 35).toFixed(0)}%</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Customer Satisfaction</span>
                  <div className="font-medium">+{((automationLevel[0] / 100) * 25).toFixed(0)}%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
