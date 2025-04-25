
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
  Clock, 
  Download, 
  FileChart, 
  Gauge, 
  Layers, 
  Play, 
  Plus, 
  Save, 
  Settings, 
  Share, 
  TimerOff, 
  Users 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { DigitalTwinPlayground } from "@/components/operations/DigitalTwinPlayground";
import { ScenarioBuilder } from "@/components/operations/ScenarioBuilder";
import { SimulationResults } from "@/components/operations/SimulationResults";
import { WhatIfAnalysis } from "@/components/operations/WhatIfAnalysis";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

const OperationsModeling = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("model-builder");

  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Operations Modeling & Simulation</h1>
          <p className="text-muted-foreground mt-1">
            Create scenarios, optimize resources, and predict operational outcomes
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="text-sm"
            onClick={() => {
              toast({
                title: "Simulation Exported",
                description: "Your simulation results have been exported to CSV",
                variant: "default",
              });
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Export Results
          </Button>
          <Button 
            variant="outline" 
            className="text-sm"
            onClick={() => {
              toast({
                title: "Simulation Shared",
                description: "Share link copied to clipboard",
                variant: "default",
              });
            }}
          >
            <Share className="mr-2 h-4 w-4" />
            Share Simulation
          </Button>
          <Button 
            className="text-sm"
            onClick={() => {
              toast({
                title: "Scenario Saved",
                description: "Your scenario has been saved successfully",
                variant: "default",
              });
            }}
          >
            <Save className="mr-2 h-4 w-4" />
            Save Scenario
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="model-builder" className="flex items-center">
              <Layers className="mr-2 h-4 w-4" />
              Model Builder
            </TabsTrigger>
            <TabsTrigger value="digital-twin" className="flex items-center">
              <Gauge className="mr-2 h-4 w-4" />
              Digital Twin Playground
            </TabsTrigger>
            <TabsTrigger value="what-if" className="flex items-center">
              <FileChart className="mr-2 h-4 w-4" />
              What-If Analysis
            </TabsTrigger>
            <TabsTrigger value="results" className="flex items-center">
              <BarChart className="mr-2 h-4 w-4" />
              Simulation Results
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
                    <DialogTitle>Create New Template</DialogTitle>
                    <DialogDescription>
                      Build a reusable template for common operational scenarios
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-1 gap-4 py-4">
                    <Card className="cursor-pointer hover:border-primary transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          Staffing Model
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                        Optimize staffing levels across different service tiers
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:border-primary transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base flex items-center">
                          <TimerOff className="h-4 w-4 mr-2" />
                          Automation Impact
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                        Model the effects of introducing new automation
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:border-primary transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Seasonal Planning
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                        Plan for seasonal variations in service demand
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
                    description: "Your operational simulation is now running",
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
          <ScenarioBuilder />
        </TabsContent>
        
        <TabsContent value="digital-twin" className="mt-6 space-y-4">
          <DigitalTwinPlayground />
        </TabsContent>
        
        <TabsContent value="what-if" className="mt-6 space-y-4">
          <WhatIfAnalysis />
        </TabsContent>
        
        <TabsContent value="results" className="mt-6 space-y-4">
          <SimulationResults />
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default OperationsModeling;
