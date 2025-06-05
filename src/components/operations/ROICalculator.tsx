
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  Target,
  BarChart,
  Download
} from "lucide-react";

export function ROICalculator() {
  const [implementationCost, setImplementationCost] = useState("350000");
  const [annualLicensing, setAnnualLicensing] = useState("120000");
  const [teamSize, setTeamSize] = useState("15");
  const [avgSalary, setAvgSalary] = useState("95000");
  const [productivityGain, setProductivityGain] = useState("25");
  const [incidentReduction, setIncidentReduction] = useState("40");
  
  // Calculations
  const totalTeamCost = parseInt(teamSize) * parseInt(avgSalary);
  const productivitySavings = (totalTeamCost * parseInt(productivityGain)) / 100;
  const incidentCostSavings = 450 * 24 * 12 * (parseInt(incidentReduction) / 100); // Assuming monthly incidents
  const totalAnnualSavings = productivitySavings + incidentCostSavings;
  const totalCostYear1 = parseInt(implementationCost) + parseInt(annualLicensing);
  const netBenefitYear1 = totalAnnualSavings - totalCostYear1;
  const netBenefitYear2 = totalAnnualSavings - parseInt(annualLicensing);
  const netBenefitYear3 = totalAnnualSavings - parseInt(annualLicensing);
  const roiYear1 = (netBenefitYear1 / totalCostYear1) * 100;
  const roiYear3 = ((netBenefitYear1 + netBenefitYear2 + netBenefitYear3) / totalCostYear1) * 100;
  const paybackMonths = totalCostYear1 / (totalAnnualSavings / 12);
  
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Calculator className="mr-2 h-5 w-5" />
              Investment Parameters
            </CardTitle>
            <CardDescription>Enter your organization's specific values</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="implementation">Implementation Cost</Label>
              <Input
                id="implementation"
                value={implementationCost}
                onChange={(e) => setImplementationCost(e.target.value)}
                placeholder="350000"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="licensing">Annual Licensing</Label>
              <Input
                id="licensing"
                value={annualLicensing}
                onChange={(e) => setAnnualLicensing(e.target.value)}
                placeholder="120000"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="teamSize">Team Size (FTE)</Label>
              <Input
                id="teamSize"
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                placeholder="15"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="salary">Average Salary</Label>
              <Input
                id="salary"
                value={avgSalary}
                onChange={(e) => setAvgSalary(e.target.value)}
                placeholder="95000"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="productivity">Productivity Gain (%)</Label>
              <Input
                id="productivity"
                value={productivityGain}
                onChange={(e) => setProductivityGain(e.target.value)}
                placeholder="25"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="incidents">Incident Reduction (%)</Label>
              <Input
                id="incidents"
                value={incidentReduction}
                onChange={(e) => setIncidentReduction(e.target.value)}
                placeholder="40"
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
              ROI Analysis Results
            </CardTitle>
            <CardDescription>Financial impact and return on investment calculations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="border rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">Year 1 ROI</div>
                <div className={`text-2xl font-bold ${roiYear1 >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {roiYear1 > 0 ? '+' : ''}{roiYear1.toFixed(1)}%
                </div>
              </div>
              
              <div className="border rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">3-Year ROI</div>
                <div className="text-2xl font-bold text-green-600">
                  +{roiYear3.toFixed(1)}%
                </div>
              </div>
              
              <div className="border rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">Payback Period</div>
                <div className="text-2xl font-bold">
                  {paybackMonths.toFixed(1)} mo
                </div>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3 flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Annual Benefits
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Productivity Savings</span>
                    <span className="font-medium">${productivitySavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Incident Cost Reduction</span>
                    <span className="font-medium">${incidentCostSavings.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="font-medium">Total Annual Savings</span>
                    <span className="font-bold text-green-600">${totalAnnualSavings.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  3-Year Projection
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Year 1 Net Benefit</span>
                    <span className={`font-medium ${netBenefitYear1 >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${netBenefitYear1.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Year 2 Net Benefit</span>
                    <span className="font-medium text-green-600">${netBenefitYear2.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Year 3 Net Benefit</span>
                    <span className="font-medium text-green-600">${netBenefitYear3.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="font-medium">Total 3-Year Value</span>
                    <span className="font-bold text-green-600">
                      ${(netBenefitYear1 + netBenefitYear2 + netBenefitYear3).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-muted/40 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Executive Summary</div>
                  <div className="text-sm text-muted-foreground">
                    Investment of ${parseInt(implementationCost).toLocaleString()} with {paybackMonths.toFixed(1)} month payback period
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <BarChart className="mr-2 h-4 w-4" />
                    Detailed Analysis
                  </Button>
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export Report
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
