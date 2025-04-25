
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers, Plus, Settings, SquareCheck, SquarePlus } from "lucide-react";

export function ScenarioBuilder() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Layers className="mr-2 h-5 w-5" />
              Component Library
            </CardTitle>
            <CardDescription>Drag components to build your model</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Service Components</h3>
              <div className="grid grid-cols-1 gap-2">
                {['Service Desk', 'Incident Management', 'Problem Management', 'Change Management'].map((item) => (
                  <div 
                    key={item}
                    className="flex items-center p-2 border rounded-md cursor-move hover:bg-accent hover:text-accent-foreground"
                  >
                    <SquarePlus className="mr-2 h-4 w-4" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Resources</h3>
              <div className="grid grid-cols-1 gap-2">
                {['Staff', 'Software Licenses', 'Hardware', 'Facilities'].map((item) => (
                  <div 
                    key={item}
                    className="flex items-center p-2 border rounded-md cursor-move hover:bg-accent hover:text-accent-foreground"
                  >
                    <SquarePlus className="mr-2 h-4 w-4" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Connectors</h3>
              <div className="grid grid-cols-1 gap-2">
                {['Direct Flow', 'Conditional Path', 'Feedback Loop', 'Delay'].map((item) => (
                  <div 
                    key={item}
                    className="flex items-center p-2 border rounded-md cursor-move hover:bg-accent hover:text-accent-foreground"
                  >
                    <SquarePlus className="mr-2 h-4 w-4" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="col-span-6">
        <Card className="h-full">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Model Canvas</CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Properties
                </Button>
                <Button variant="outline" size="sm">
                  <SquareCheck className="h-4 w-4 mr-2" />
                  Validate
                </Button>
              </div>
            </div>
            <CardDescription>Drag and drop components to build your operational model</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/40 border border-dashed border-muted-foreground/25 rounded-lg h-[600px] flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Layers className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p className="mb-2">Drag service components here to start building</p>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Component
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="col-span-3">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-lg">Properties</CardTitle>
            <CardDescription>Configure component parameters</CardDescription>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground p-6">
            <p className="mb-4">Select a component to view and edit its properties</p>
            <div className="bg-muted py-10 px-4 rounded-md">
              <Settings className="h-10 w-10 mx-auto mb-2 opacity-30" />
              <p className="text-sm">No component selected</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
