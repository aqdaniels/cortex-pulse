
import { useState, useEffect } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { DigitalTwinPulse } from "@/components/dashboard/DigitalTwinPulse";
import { PersonalAssistant } from "@/components/dashboard/PersonalAssistant";
import { DeploymentSuccess } from "@/components/dashboard/DeploymentSuccess";
import { MetricsOverview } from "@/components/dashboard/MetricsOverview";
import { TeamActivity } from "@/components/dashboard/TeamActivity";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash, Settings, Save, LayoutGrid } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface DashboardWidget {
  id: string;
  name: string;
  type: string;
  column: number;
  row: number;
  component: React.ReactNode;
}

const Dashboard = () => {
  const { toast } = useToast();
  const [editMode, setEditMode] = useState(false);
  const [widgets, setWidgets] = useState<DashboardWidget[]>([
    {
      id: "1",
      name: "Digital Twin Pulse",
      type: "visualization",
      column: 1,
      row: 1,
      component: <DigitalTwinPulse />
    },
    {
      id: "2",
      name: "Personal Assistant",
      type: "notification",
      column: 2,
      row: 1,
      component: <PersonalAssistant />
    },
    {
      id: "3",
      name: "Metrics Overview",
      type: "metrics",
      column: 1,
      row: 2,
      component: <MetricsOverview />
    },
    {
      id: "4",
      name: "Deployment Success",
      type: "metrics",
      column: 2,
      row: 2,
      component: <DeploymentSuccess />
    }
  ]);

  const [celebrateSuccess, setCelebrateSuccess] = useState(false);
  
  const handleSaveLayout = () => {
    setEditMode(false);
    setCelebrateSuccess(true);
    
    toast({
      title: "Dashboard Saved",
      description: "Your custom dashboard layout has been saved.",
      variant: "default",
    });
    
    setTimeout(() => setCelebrateSuccess(false), 2000);
  };
  
  const handleAddWidget = () => {
    // In a real application, this would open a widget selection modal
    toast({
      title: "Add Widget",
      description: "Widget selection will be available in the next update.",
      variant: "default",
    });
  };
  
  const handleRemoveWidget = (id: string) => {
    setWidgets(widgets.filter(widget => widget.id !== id));
    
    toast({
      title: "Widget Removed",
      description: "The widget has been removed from your dashboard.",
      variant: "default",
    });
  };
  
  const moveWidget = (id: string, direction: "up" | "down" | "left" | "right") => {
    setWidgets(prevWidgets => {
      return prevWidgets.map(widget => {
        if (widget.id !== id) return widget;
        
        switch (direction) {
          case "up":
            return { ...widget, row: Math.max(1, widget.row - 1) };
          case "down":
            return { ...widget, row: widget.row + 1 };
          case "left":
            return { ...widget, column: Math.max(1, widget.column - 1) };
          case "right":
            return { ...widget, column: Math.min(2, widget.column + 1) };
          default:
            return widget;
        }
      });
    });
  };

  return (
    <AppLayout>
      <div className={cn(
        "flex items-center justify-between mb-6 transition-all duration-500",
        celebrateSuccess && "animate-celebrate"
      )}>
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Customize your view with widgets that matter to you
          </p>
        </div>
        <div className="flex items-center space-x-3">
          {!editMode ? (
            <Button 
              variant="outline" 
              className="text-sm"
              onClick={() => setEditMode(true)}
            >
              <Edit className="mr-2 h-4 w-4" />
              Customize
            </Button>
          ) : (
            <>
              <Button 
                variant="outline" 
                className="text-sm"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </Button>
              <Button 
                className="text-sm"
                onClick={handleSaveLayout}
              >
                <Save className="mr-2 h-4 w-4" />
                Save Layout
              </Button>
            </>
          )}
        </div>
      </div>

      <Tabs defaultValue="my-dashboard">
        <TabsList>
          <TabsTrigger value="my-dashboard">My Dashboard</TabsTrigger>
          <TabsTrigger value="team">Team View</TabsTrigger>
          <TabsTrigger value="operations">Operations</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
        </TabsList>
        <TabsContent value="my-dashboard" className="space-y-6 mt-6">
          <div className="grid grid-cols-2 gap-6">
            {widgets.map(widget => {
              const gridArea = `${widget.row} / ${widget.column} / auto / span 1`;
              
              return (
                <div 
                  key={widget.id} 
                  className="relative"
                  style={{ gridArea }}
                >
                  {editMode && (
                    <div className="absolute top-3 right-3 z-10 flex space-x-1">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="secondary" size="icon" className="h-7 w-7">
                            <Settings className="h-3.5 w-3.5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Widget Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => moveWidget(widget.id, "up")}>
                            Move Up
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => moveWidget(widget.id, "down")}>
                            Move Down
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => moveWidget(widget.id, "left")}>
                            Move Left
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => moveWidget(widget.id, "right")}>
                            Move Right
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            className="text-red-600"
                            onClick={() => handleRemoveWidget(widget.id)}
                          >
                            Remove Widget
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  )}
                  {widget.component}
                </div>
              );
            })}
            
            {editMode && (
              <Card className="border-dashed border-2 col-span-2 flex items-center justify-center h-64">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-12 w-12 rounded-full mb-4"
                    onClick={handleAddWidget}
                  >
                    <Plus className="h-6 w-6" />
                  </Button>
                  <h3 className="text-lg font-medium">Add Widget</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Customize your dashboard with additional widgets
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
          
          {!editMode && (
            <div className="mt-6">
              <TeamActivity />
            </div>
          )}
        </TabsContent>
        <TabsContent value="team">
          <div className="flex items-center justify-center h-64 mt-6">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-xl">Team Dashboard</CardTitle>
                <CardDescription>
                  This view will be available in the next release.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Coming Soon",
                      description: "Team dashboard will be available in the next release.",
                      variant: "default",
                    });
                  }}
                >
                  <LayoutGrid className="mr-2 h-4 w-4" />
                  Preview Team Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="operations">
          <div className="flex items-center justify-center h-64 mt-6">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-xl">Operations Dashboard</CardTitle>
                <CardDescription>
                  This view will be available in the next release.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Coming Soon",
                      description: "Operations dashboard will be available in the next release.",
                      variant: "default",
                    });
                  }}
                >
                  <LayoutGrid className="mr-2 h-4 w-4" />
                  Preview Operations Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="development">
          <div className="flex items-center justify-center h-64 mt-6">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-xl">Development Dashboard</CardTitle>
                <CardDescription>
                  This view will be available in the next release.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Coming Soon",
                      description: "Development dashboard will be available in the next release.",
                      variant: "default",
                    });
                  }}
                >
                  <LayoutGrid className="mr-2 h-4 w-4" />
                  Preview Development Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default Dashboard;
