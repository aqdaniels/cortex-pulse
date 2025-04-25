
import { AppLayout } from "@/components/layout/AppLayout";
import { DigitalTwinPulse } from "@/components/dashboard/DigitalTwinPulse";
import { PersonalAssistant } from "@/components/dashboard/PersonalAssistant";
import { DeploymentSuccess } from "@/components/dashboard/DeploymentSuccess";
import { MetricsOverview } from "@/components/dashboard/MetricsOverview";
import { TeamActivity } from "@/components/dashboard/TeamActivity";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Share, Download } from "lucide-react";
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
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Your software development lifecycle at a glance
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="text-sm"
            onClick={() => {
              toast({
                title: "Report Downloaded",
                description: "Your dashboard report has been downloaded.",
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <DigitalTwinPulse />
        </div>
        <div>
          <PersonalAssistant />
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
    </AppLayout>
  );
};

export default Index;
