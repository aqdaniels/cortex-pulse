
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BellRing, Check, ChevronRight, Clock, Lightbulb, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

interface AssistantInsight {
  id: string;
  type: "suggestion" | "notification" | "reminder";
  title: string;
  description: string;
  time: string;
  read: boolean;
  priority: "high" | "medium" | "low";
}

const initialInsights: AssistantInsight[] = [
  {
    id: "1",
    type: "suggestion",
    title: "Optimize CI Pipeline",
    description: "Your build times have increased by 20% this week. Consider optimizing the test suite.",
    time: "2 hours ago",
    read: false,
    priority: "medium"
  },
  {
    id: "2",
    type: "notification",
    title: "Deployment Success",
    description: "API Gateway v1.2.3 was deployed to production successfully.",
    time: "3 hours ago",
    read: false,
    priority: "low"
  },
  {
    id: "3",
    type: "reminder",
    title: "Team Standup",
    description: "Daily standup meeting in 15 minutes.",
    time: "Just now",
    read: false,
    priority: "high"
  }
];

function InsightIcon({ type }: { type: AssistantInsight["type"] }) {
  switch (type) {
    case "suggestion":
      return <Lightbulb className="h-4 w-4 text-yellow-500" />;
    case "notification":
      return <BellRing className="h-4 w-4 text-blue-500" />;
    case "reminder":
      return <Clock className="h-4 w-4 text-purple-500" />;
    default:
      return null;
  }
}

export function PersonalAssistant() {
  const [insights, setInsights] = useState<AssistantInsight[]>(initialInsights);
  const { toast } = useToast();
  
  const markAsRead = (id: string) => {
    setInsights(prev => 
      prev.map(insight => 
        insight.id === id ? { ...insight, read: true } : insight
      )
    );
    
    toast({
      title: "Marked as read",
      description: "The insight has been marked as read",
      variant: "default",
    });
  };
  
  const dismissInsight = (id: string) => {
    setInsights(prev => prev.filter(insight => insight.id !== id));
    
    toast({
      title: "Insight dismissed",
      description: "The insight has been removed from your list",
      variant: "default",
    });
  };
  
  const getPriorityClass = (priority: AssistantInsight["priority"]) => {
    switch (priority) {
      case "high":
        return "border-l-red-500";
      case "medium":
        return "border-l-yellow-500";
      case "low":
        return "border-l-green-500";
      default:
        return "border-l-blue-500";
    }
  };

  return (
    <Card className="card-gradient shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold flex items-center">
          <div className="mr-2 h-7 w-7 rounded-full bg-cortex-primary/10 flex items-center justify-center">
            <Lightbulb className="h-4 w-4 text-cortex-primary" />
          </div>
          Personal Assistant
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        {insights.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>No insights available</p>
          </div>
        ) : (
          <div className="space-y-3">
            {insights.map((insight) => (
              <div 
                key={insight.id}
                className={cn(
                  "p-3 rounded-lg border-l-4 bg-background relative transition-all duration-200 hover:translate-x-1 hover:shadow-sm",
                  insight.read ? "opacity-70" : "opacity-100",
                  getPriorityClass(insight.priority)
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <div className="mr-3 mt-0.5">
                      <InsightIcon type={insight.type} />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{insight.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{insight.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{insight.time}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-5 w-5"
                      onClick={() => markAsRead(insight.id)}
                    >
                      <Check className="h-3 w-3" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-5 w-5"
                      onClick={() => dismissInsight(insight.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            <Button 
              variant="outline" 
              className="w-full text-sm mt-2 hover:bg-cortex-primary hover:text-white"
            >
              View All Insights
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
