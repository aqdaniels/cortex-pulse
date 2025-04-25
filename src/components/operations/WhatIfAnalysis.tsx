
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, FileHeart, Layers, Plus, TrendingDown, TrendingUp } from "lucide-react";

export function WhatIfAnalysis() {
  const [activeScenario, setActiveScenario] = useState("baseline");
  
  const scenarios = [
    {
      id: "baseline",
      name: "Current Baseline",
      description: "Current operational setup with no changes",
      status: "Baseline",
      statusColor: "bg-blue-500",
      metrics: {
        mttr: 4.2,
        costPerTicket: 28.50,
        customerSatisfaction: 72,
        staffUtilization: 84,
      }
    },
    {
      id: "automate-l1",
      name: "Automate L1 Support",
      description: "Increase L1 ticket automation to 75%",
      status: "Optimized",
      statusColor: "bg-green-500",
      metrics: {
        mttr: 3.1,
        costPerTicket: 22.80,
        customerSatisfaction: 78,
        staffUtilization: 76,
      }
    },
    {
      id: "staff-increase",
      name: "Increase Staffing",
      description: "Add 4 FTE to L2 support team",
      status: "Sub-optimal",
      statusColor: "bg-amber-500",
      metrics: {
        mttr: 3.5,
        costPerTicket: 32.40,
        customerSatisfaction: 80,
        staffUtilization: 68,
      }
    }
  ];
  
  const activeData = scenarios.find(s => s.id === activeScenario) || scenarios[0];

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Layers className="mr-2 h-5 w-5" />
              Scenarios
            </CardTitle>
            <CardDescription>Compare different operational approaches</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-3">
            {scenarios.map((scenario) => (
              <Card 
                key={scenario.id}
                className={`cursor-pointer transition-all ${activeScenario === scenario.id ? 'border-primary bg-muted/50' : 'hover:border-primary/50'}`}
                onClick={() => setActiveScenario(scenario.id)}
              >
                <CardHeader className="p-3 pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{scenario.name}</CardTitle>
                    <Badge className={`${scenario.statusColor} text-white`}>
                      {scenario.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-xs">
                    {scenario.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
            
            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              New Scenario
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="col-span-9">
        <Card className="h-full">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">{activeData.name}</CardTitle>
                <CardDescription>{activeData.description}</CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <FileHeart className="h-4 w-4 mr-2" />
                  Detailed Report
                </Button>
                <Button size="sm">
                  Apply Changes
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Key Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <MetricCard 
                        label="Mean Time to Resolution"
                        value={`${activeData.metrics.mttr} hrs`}
                        comparison={activeData.id !== "baseline" ? 
                          ((scenarios[0].metrics.mttr - activeData.metrics.mttr) / scenarios[0].metrics.mttr * 100) : null}
                        isGoodWhenLower={true}
                      />
                      <MetricCard 
                        label="Cost per Ticket"
                        value={`$${activeData.metrics.costPerTicket.toFixed(2)}`}
                        comparison={activeData.id !== "baseline" ? 
                          ((scenarios[0].metrics.costPerTicket - activeData.metrics.costPerTicket) / scenarios[0].metrics.costPerTicket * 100) : null}
                        isGoodWhenLower={true}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <MetricCard 
                        label="Customer Satisfaction"
                        value={`${activeData.metrics.customerSatisfaction}%`}
                        comparison={activeData.id !== "baseline" ? 
                          ((activeData.metrics.customerSatisfaction - scenarios[0].metrics.customerSatisfaction) / scenarios[0].metrics.customerSatisfaction * 100) : null}
                        isGoodWhenLower={false}
                      />
                      <MetricCard 
                        label="Staff Utilization"
                        value={`${activeData.metrics.staffUtilization}%`}
                        comparison={activeData.id !== "baseline" ? 
                          ((activeData.metrics.staffUtilization - scenarios[0].metrics.staffUtilization) / scenarios[0].metrics.staffUtilization * 100) : null}
                        isGoodWhenLower={true}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Visual Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <BarChart className="h-24 w-24 text-muted-foreground opacity-30" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Sensitivity Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="text-sm font-medium mb-2">Staffing Impact</h3>
                      <p className="text-xs text-muted-foreground mb-4">How staffing levels affect key metrics</p>
                      <div className="flex justify-center">
                        <BarChart className="h-16 w-16 text-muted-foreground opacity-30" />
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="text-sm font-medium mb-2">Automation Impact</h3>
                      <p className="text-xs text-muted-foreground mb-4">Effects of increasing automation</p>
                      <div className="flex justify-center">
                        <BarChart className="h-16 w-16 text-muted-foreground opacity-30" />
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="text-sm font-medium mb-2">Volume Sensitivity</h3>
                      <p className="text-xs text-muted-foreground mb-4">How incident volume affects performance</p>
                      <div className="flex justify-center">
                        <BarChart className="h-16 w-16 text-muted-foreground opacity-30" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function MetricCard({ 
  label, 
  value, 
  comparison,
  isGoodWhenLower = true
}: { 
  label: string;
  value: string;
  comparison: number | null;
  isGoodWhenLower?: boolean;
}) {
  const isPositive = comparison !== null ? 
    (isGoodWhenLower ? comparison < 0 : comparison > 0) : null;
  
  return (
    <div className="border rounded-lg p-4">
      <div className="text-sm text-muted-foreground mb-1">{label}</div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold">{value}</div>
        {comparison !== null && (
          <div className={`flex items-center text-xs font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
            {Math.abs(comparison).toFixed(1)}%
          </div>
        )}
      </div>
    </div>
  );
}
