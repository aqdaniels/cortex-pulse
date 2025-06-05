
import { AppLayout } from "@/components/layout/AppLayout";
import { DigitalTwinPulse } from "@/components/dashboard/DigitalTwinPulse";
import { EnhancedPersonalAssistant } from "@/components/dashboard/EnhancedPersonalAssistant";
import { CorrelationEngine } from "@/components/dashboard/CorrelationEngine";
import { RiskAssessment } from "@/components/dashboard/RiskAssessment";
import { DeploymentSuccess } from "@/components/dashboard/DeploymentSuccess";
import { MetricsOverview } from "@/components/dashboard/MetricsOverview";
import { TeamActivity } from "@/components/dashboard/TeamActivity";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClipboardCheck, Share, Download, Brain, Network, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  const showSuccessToast = () => {
    toast({
      title: "Progress Saved",
      description: "Your dashboard configuration has been saved.",
      variant: "default",
    });
  };

  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Cortex Intelligence Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            AI-powered insights and automation for your software development lifecycle
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="text-sm"
            onClick={() => {
              toast({
                title: "Report Downloaded",
                description: "Your intelligence report has been downloaded.",
                variant: "default",
              });
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button 
            variant="outline" 
            className="text-sm"
            onClick={() => {
              toast({
                title: "Dashboard Shared",
                description: "Dashboard link copied to clipboard.",
                variant: "default",
              });
            }}
          >
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button className="text-sm" onClick={showSuccessToast}>
            <ClipboardCheck className="mr-2 h-4 w-4" />
            Save Configuration
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="intelligence" className="flex items-center">
            <Brain className="mr-2 h-4 w-4" />
            Agent Intelligence
          </TabsTrigger>
          <TabsTrigger value="correlation" className="flex items-center">
            <Network className="mr-2 h-4 w-4" />
            Correlation Engine
          </TabsTrigger>
          <TabsTrigger value="risk" className="flex items-center">
            <Shield className="mr-2 h-4 w-4" />
            Risk Assessment
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2">
              <DigitalTwinPulse />
            </div>
            <div>
              <EnhancedPersonalAssistant />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2">
              <MetricsOverview />
            </div>
            <div>
              <DeploymentSuccess />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-3">
              <TeamActivity />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="intelligence" className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <EnhancedPersonalAssistant />
          </div>
        </TabsContent>

        <TabsContent value="correlation" className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <CorrelationEngine />
          </div>
        </TabsContent>

        <TabsContent value="risk" className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <RiskAssessment />
          </div>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default Index;
