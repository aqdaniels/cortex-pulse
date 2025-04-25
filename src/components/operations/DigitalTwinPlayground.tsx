
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { CircleGauge, Clock, Gauge, Play, Rocket, TimerOff, Users } from "lucide-react";

export function DigitalTwinPlayground() {
  const [incidentVolume, setIncidentVolume] = useState([50]);
  const [staffingLevel, setStaffingLevel] = useState([75]);
  const [automationLevel, setAutomationLevel] = useState([30]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeScale, setTimeScale] = useState("days");
  
  const handlePlaySimulation = () => {
    setIsPlaying(!isPlaying);
  };
  
  const calculateHealth = () => {
    // Simple calculation for visual health based on our parameters
    const staffRatio = staffingLevel[0] / 100;
    const incidentImpact = (100 - incidentVolume[0]) / 100;
    const automationHelp = automationLevel[0] / 100;
    
    const health = (staffRatio * 0.4) + (incidentImpact * 0.3) + (automationHelp * 0.3);
    return Math.round(health * 100);
  };
  
  const healthScore = calculateHealth();
  
  const getHealthStatus = () => {
    if (healthScore >= 80) return { label: "Excellent", color: "bg-green-500" };
    if (healthScore >= 60) return { label: "Good", color: "bg-emerald-500" };
    if (healthScore >= 40) return { label: "Fair", color: "bg-amber-500" };
    return { label: "At Risk", color: "bg-red-500" };
  };
  
  const healthStatus = getHealthStatus();

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-8">
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <Gauge className="mr-2 h-5 w-5" />
                Digital Twin Visualization
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Button 
                  variant={isPlaying ? "destructive" : "outline"} 
                  size="sm"
                  onClick={handlePlaySimulation}
                >
                  <Play className={`h-4 w-4 ${isPlaying ? "mr-2" : "mr-2"}`} />
                  {isPlaying ? "Stop Simulation" : "Run Time-lapse"}
                </Button>
                <div className="border rounded-md p-1 flex items-center">
                  <TabsList className="h-7">
                    <TabsTrigger
                      value="days"
                      className="text-xs h-5 px-2"
                      onClick={() => setTimeScale("days")}
                      data-state={timeScale === "days" ? "active" : ""}
                    >
                      Days
                    </TabsTrigger>
                    <TabsTrigger
                      value="weeks"
                      className="text-xs h-5 px-2"
                      onClick={() => setTimeScale("weeks")}
                      data-state={timeScale === "weeks" ? "active" : ""}
                    >
                      Weeks
                    </TabsTrigger>
                    <TabsTrigger
                      value="months"
                      className="text-xs h-5 px-2"
                      onClick={() => setTimeScale("months")}
                      data-state={timeScale === "months" ? "active" : ""}
                    >
                      Months
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>
            </div>
            <CardDescription>Visualize system health as parameters change</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/40 rounded-lg h-[500px] p-6 relative">
              <div className="absolute top-6 left-6 flex items-center space-x-2">
                <Badge variant="outline" className="bg-background">
                  <Clock className="h-3 w-3 mr-1" />
                  {isPlaying ? "Simulating..." : "Paused"}
                </Badge>
                {isPlaying && (
                  <Badge variant="outline" className="bg-background">
                    <span className="animate-pulse mr-1">●</span>
                    Day 3 of 30
                  </Badge>
                )}
              </div>
              
              <div className="flex flex-col items-center justify-center h-full">
                <div className="mb-8 text-center">
                  <div className="text-7xl font-bold mb-2">{healthScore}%</div>
                  <div className="flex items-center justify-center">
                    <Badge className={`${healthStatus.color} text-white px-3 py-1`}>
                      {healthStatus.label}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mt-2">System Health Score</p>
                </div>
                
                <div className="grid grid-cols-3 gap-8 w-full max-w-3xl">
                  <div className="flex flex-col items-center">
                    <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center ${incidentVolume[0] > 70 ? "border-red-500" : incidentVolume[0] > 40 ? "border-amber-500" : "border-emerald-500"}`}>
                      <div className="text-2xl font-bold">{incidentVolume[0]}</div>
                    </div>
                    <p className="text-sm mt-2 text-center">Incident Volume</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center ${staffingLevel[0] < 40 ? "border-red-500" : staffingLevel[0] < 70 ? "border-amber-500" : "border-emerald-500"}`}>
                      <div className="text-2xl font-bold">{staffingLevel[0]}%</div>
                    </div>
                    <p className="text-sm mt-2 text-center">Staffing Level</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center ${automationLevel[0] < 20 ? "border-amber-500" : "border-emerald-500"}`}>
                      <div className="text-2xl font-bold">{automationLevel[0]}%</div>
                    </div>
                    <p className="text-sm mt-2 text-center">Automation Level</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="col-span-4">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-lg">Parameter Controls</CardTitle>
            <CardDescription>Adjust parameters to see real-time impacts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 py-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium flex items-center">
                  <Rocket className="h-4 w-4 mr-2" />
                  Incident Volume
                </label>
                <span className="text-sm font-bold">{incidentVolume[0]}</span>
              </div>
              <Slider
                defaultValue={incidentVolume}
                max={100}
                step={1}
                onValueChange={setIncidentVolume}
                className="pt-2"
              />
              <p className="text-xs text-muted-foreground">Number of incidents per day</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Staffing Level
                </label>
                <span className="text-sm font-bold">{staffingLevel[0]}%</span>
              </div>
              <Slider
                defaultValue={staffingLevel}
                max={100}
                step={1}
                onValueChange={setStaffingLevel}
                className="pt-2"
              />
              <p className="text-xs text-muted-foreground">Percentage of optimal staffing</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium flex items-center">
                  <TimerOff className="h-4 w-4 mr-2" />
                  Automation Level
                </label>
                <span className="text-sm font-bold">{automationLevel[0]}%</span>
              </div>
              <Slider
                defaultValue={automationLevel}
                max={100}
                step={1}
                onValueChange={setAutomationLevel}
                className="pt-2"
              />
              <p className="text-xs text-muted-foreground">Percentage of tasks automated</p>
            </div>
            
            <div className="pt-4">
              <Button className="w-full">
                <CircleGauge className="h-4 w-4 mr-2" />
                Apply to Main Simulation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
