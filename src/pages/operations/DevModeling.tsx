
import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Calendar, 
  Code, 
  Download, 
  FileHeart, 
  GitBranch,
  GitPullRequest,
  Gauge, 
  Layers,
  Play, 
  Plus, 
  Save, 
  Share, 
  TrendingDown,
  TrendingUp,
  Users 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function DevModeling() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("model-builder");

  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Development Process Modeling</h1>
          <p className="text-muted-foreground mt-1">
            Simulate development processes, optimize team structure, and predict delivery outcomes
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="text-sm"
            onClick={() => {
              toast({
                title: "Model Exported",
                description: "Your development model has been exported to CSV",
                variant: "default",
              });
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Export Model
          </Button>
          <Button 
            variant="outline" 
            className="text-sm"
            onClick={() => {
              toast({
                title: "Model Shared",
                description: "Share link copied to clipboard",
                variant: "default",
              });
            }}
          >
            <Share className="mr-2 h-4 w-4" />
            Share Model
          </Button>
          <Button 
            className="text-sm"
            onClick={() => {
              toast({
                title: "Model Saved",
                description: "Your development model has been saved successfully",
                variant: "default",
              });
            }}
          >
            <Save className="mr-2 h-4 w-4" />
            Save Model
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="model-builder" className="flex items-center">
              <Code className="mr-2 h-4 w-4" />
              Model Builder
            </TabsTrigger>
            <TabsTrigger value="team-structure" className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Team Structure
            </TabsTrigger>
            <TabsTrigger value="what-if" className="flex items-center">
              <FileHeart className="mr-2 h-4 w-4" />
              What-If Analysis
            </TabsTrigger>
            <TabsTrigger value="forecasts" className="flex items-center">
              <BarChart className="mr-2 h-4 w-4" />
              Delivery Forecasts
            </TabsTrigger>
          </TabsList>

          {activeTab === "model-builder" && (
            <div className="flex items-center space-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Plus className="mr-2 h-4 w-4" />
                    New Template
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Dev Model Template</DialogTitle>
                    <DialogDescription>
                      Build a reusable template for common development scenarios
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-1 gap-4 py-4">
                    <Card className="cursor-pointer hover:border-primary transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base flex items-center">
                          <GitBranch className="h-4 w-4 mr-2" />
                          Feature Development
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                        Optimize the process for delivering new features
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:border-primary transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base flex items-center">
                          <Code className="h-4 w-4 mr-2" />
                          Technical Debt Reduction
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                        Model the impact of dedicated technical debt sprints
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:border-primary transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          Team Scaling
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                        Predict velocity changes when scaling the team
                      </CardContent>
                    </Card>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Create Template</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Button 
                size="sm"
                onClick={() => {
                  toast({
                    title: "Running Simulation",
                    description: "Your development simulation is now running",
                    variant: "default",
                  });
                }}
              >
                <Play className="mr-2 h-4 w-4" />
                Run Simulation
              </Button>
            </div>
          )}
        </div>

        <TabsContent value="model-builder" className="mt-6 space-y-4">
          <div className="grid grid-cols-3 gap-6">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle className="text-lg">Development Parameters</CardTitle>
                <CardDescription>Configure your development model</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Team Size</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="range" 
                      min="1" 
                      max="20" 
                      defaultValue="8" 
                      className="w-full" 
                    />
                    <span className="text-sm font-medium">8</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Average Experience (years)</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      defaultValue="4" 
                      className="w-full" 
                    />
                    <span className="text-sm font-medium">4</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Technical Debt (%)</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="50" 
                      defaultValue="15" 
                      className="w-full" 
                    />
                    <span className="text-sm font-medium">15%</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Code Review Rigor</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      defaultValue="7" 
                      className="w-full" 
                    />
                    <span className="text-sm font-medium">7</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Test Coverage Target (%)</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      defaultValue="85" 
                      className="w-full" 
                    />
                    <span className="text-sm font-medium">85%</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full">
                    Apply Parameters
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Development Pipeline Visualization</CardTitle>
                <CardDescription>Visual representation of your development process</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <div className="w-full max-w-3xl">
                  <div className="flex justify-between mb-6">
                    {["Planning", "Development", "Code Review", "Testing", "Deployment"].map((stage) => (
                      <div key={stage} className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 border-2 border-blue-300">
                          <span className="text-xs text-blue-800 font-medium">{stage}</span>
                        </div>
                        <span className="text-xs text-center">{stage}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="h-px bg-gray-300 w-full relative">
                    {[12, 24, 38, 75, 95].map((pos) => (
                      <div key={pos} className="absolute top-0 -mt-1" style={{ left: `${pos}%` }}>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 w-full bg-gray-100 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Velocity Simulation</span>
                      <Badge>3.2 story points/day</Badge>
                    </div>
                    <div className="w-full h-20 bg-white rounded border flex">
                      {[32, 28, 35, 40, 38, 42, 30, 36].map((val, i) => (
                        <div 
                          key={i}
                          className="h-full bg-blue-500 opacity-50"
                          style={{ width: `${100/8}%`, height: `${val*2}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-muted-foreground">Week 1</span>
                      <span className="text-xs text-muted-foreground">Week 8</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Development Model Results</CardTitle>
              <CardDescription>Projected outcomes based on current parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Delivery Time</div>
                  <div className="text-2xl font-bold mb-1">4.2 weeks</div>
                  <div className="flex items-center text-xs text-green-600">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    8% faster than baseline
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Defect Rate</div>
                  <div className="text-2xl font-bold mb-1">3.8%</div>
                  <div className="flex items-center text-xs text-green-600">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    12% lower than baseline
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Technical Debt</div>
                  <div className="text-2xl font-bold mb-1">+2.4%</div>
                  <div className="flex items-center text-xs text-amber-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    1.2% increase from baseline
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Team Utilization</div>
                  <div className="text-2xl font-bold mb-1">87%</div>
                  <div className="flex items-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    4% increase from baseline
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="team-structure" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Structure Modeling</CardTitle>
              <CardDescription>Optimize team composition and roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] flex items-center justify-center">
                <Users className="h-24 w-24 text-muted-foreground opacity-30" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="what-if" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>What-If Analysis</CardTitle>
              <CardDescription>Compare different development scenarios</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] flex items-center justify-center">
                <FileHeart className="h-24 w-24 text-muted-foreground opacity-30" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="forecasts" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Forecasts</CardTitle>
              <CardDescription>Predicted delivery timelines and confidence intervals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] flex items-center justify-center">
                <BarChart className="h-24 w-24 text-muted-foreground opacity-30" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}
