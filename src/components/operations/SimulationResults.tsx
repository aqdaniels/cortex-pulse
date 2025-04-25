
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart,
  Calendar, 
  Download, 
  FileText,
  Rocket, 
  Save, 
  Settings
} from "lucide-react";

export function SimulationResults() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <CardTitle className="text-lg">Simulation Results</CardTitle>
                <Badge className="bg-green-500 text-white">Optimal</Badge>
              </div>
              <CardDescription>Automated Scenario #247 • Run on April 25, 2025</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save Results
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <ResultCard 
              title="Projected Cost Savings" 
              value="$1.2M" 
              description="Annual reduction in operating expenses"
              trend="up"
              percentage={12.5}
            />
            <ResultCard 
              title="Time to Payback" 
              value="4.2 mos" 
              description="Break-even point for implementation costs"
              trend="up"
              percentage={30}
            />
            <ResultCard 
              title="MTTR Improvement" 
              value="32%" 
              description="Reduction in mean time to resolution"
              trend="up"
              percentage={32}
            />
            <ResultCard 
              title="Resource Utilization" 
              value="94%" 
              description="Optimal resource allocation score"
              trend="up"
              percentage={8.3}
            />
          </div>
          
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
              <TabsTrigger value="implementation">Implementation Plan</TabsTrigger>
              <TabsTrigger value="risks">Risk Assessment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Performance Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center">
                    <BarChart className="h-24 w-24 text-muted-foreground opacity-30" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Resource Allocation</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center">
                    <BarChart className="h-24 w-24 text-muted-foreground opacity-30" />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="metrics" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      <MetricItem name="Incident Resolution Time" value="2.8 hours" change="-32%" />
                      <MetricItem name="First Contact Resolution" value="72%" change="+15%" />
                      <MetricItem name="Service Availability" value="99.95%" change="+0.15%" />
                      <MetricItem name="Cost per Ticket" value="$18.75" change="-22%" />
                      <MetricItem name="Customer Satisfaction" value="86%" change="+8%" />
                      <MetricItem name="SLA Compliance" value="98.2%" change="+4.5%" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="implementation" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Implementation Roadmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="relative border-l-2 border-muted pl-6 pb-2">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px]"></div>
                      <div className="mb-1 text-sm font-medium">Phase 1: Technology Implementation</div>
                      <div className="text-xs text-muted-foreground mb-1">30 days • May 2025</div>
                      <div className="text-sm">Deploy automation platform and configure integrations</div>
                    </div>
                    
                    <div className="relative border-l-2 border-muted pl-6 pb-2">
                      <div className="absolute w-4 h-4 bg-muted-foreground rounded-full -left-[9px]"></div>
                      <div className="mb-1 text-sm font-medium">Phase 2: Process Redesign</div>
                      <div className="text-xs text-muted-foreground mb-1">45 days • June-July 2025</div>
                      <div className="text-sm">Update operational processes and documentation</div>
                    </div>
                    
                    <div className="relative border-l-2 border-muted pl-6 pb-2">
                      <div className="absolute w-4 h-4 bg-muted-foreground rounded-full -left-[9px]"></div>
                      <div className="mb-1 text-sm font-medium">Phase 3: Team Training</div>
                      <div className="text-xs text-muted-foreground mb-1">30 days • August 2025</div>
                      <div className="text-sm">Comprehensive training for all team members</div>
                    </div>
                    
                    <div className="relative pl-6">
                      <div className="absolute w-4 h-4 bg-muted-foreground rounded-full -left-[9px]"></div>
                      <div className="mb-1 text-sm font-medium">Phase 4: Full Rollout</div>
                      <div className="text-xs text-muted-foreground mb-1">15 days • September 2025</div>
                      <div className="text-sm">Complete transition to new operational model</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="risks" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Risk Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <RiskCard
                        title="Technology Implementation"
                        risk="Medium"
                        riskColor="bg-amber-500"
                        description="Integration complexity with legacy systems"
                        mitigation="Phased approach with comprehensive testing"
                      />
                      <RiskCard
                        title="Staff Adaptation"
                        risk="Low"
                        riskColor="bg-green-500"
                        description="Resistance to process changes"
                        mitigation="Early involvement and comprehensive training"
                      />
                      <RiskCard
                        title="Service Disruption"
                        risk="Very Low"
                        riskColor="bg-emerald-500"
                        description="Potential service impact during transition"
                        mitigation="Parallel running of systems during cutover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recommendation Engine</CardTitle>
          <CardDescription>AI-powered suggestions based on simulation results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Rocket className="h-4 w-4 mr-2" />
                  Optimize Service Desk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Increase automation for L1 tickets to reduce manual handling by 45% and improve resolution times.
                </p>
                <Button variant="outline" size="sm" className="w-full">View Details</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Adjust Shift Patterns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Redistribute staff based on peak incident times to improve coverage and reduce overtime costs.
                </p>
                <Button variant="outline" size="sm" className="w-full">View Details</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Settings className="h-4 w-4 mr-2" />
                  Cross-train Staff
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Implement cross-training program to increase flexibility and improve resource utilization by 12%.
                </p>
                <Button variant="outline" size="sm" className="w-full">View Details</Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ResultCard({ 
  title, 
  value, 
  description, 
  trend, 
  percentage 
}: { 
  title: string; 
  value: string;
  description: string;
  trend: "up" | "down";
  percentage: number;
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-sm text-muted-foreground mb-1">{title}</div>
        <div className="text-3xl font-bold mb-1">{value}</div>
        <div className="flex items-center">
          <div className={`text-xs flex items-center mr-2 ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
            {trend === "up" ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            )}
            {percentage}%
          </div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function MetricItem({ name, value, change }: { name: string; value: string; change: string }) {
  const isPositive = change.startsWith("+");
  
  return (
    <div className="flex items-center justify-between border-b pb-2">
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-base">{value}</div>
      </div>
      <div className={`text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
        {change}
      </div>
    </div>
  );
}

function RiskCard({ 
  title, 
  risk, 
  riskColor, 
  description, 
  mitigation 
}: { 
  title: string; 
  risk: string;
  riskColor: string;
  description: string;
  mitigation: string;
}) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm font-medium">{title}</div>
        <Badge className={`${riskColor} text-white`}>{risk}</Badge>
      </div>
      <div className="text-xs text-muted-foreground mb-2">{description}</div>
      <div className="text-xs">
        <span className="font-medium">Mitigation:</span> {mitigation}
      </div>
    </div>
  );
}
