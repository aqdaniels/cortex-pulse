import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Info } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function DeploymentSuccess() {
  const [progress, setProgress] = useState(96);
  const [isIncreasing, setIsIncreasing] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  
  useEffect(() => {
    // Simulate a success animation if progress hits 100
    if (progress >= 100 && !showSuccess) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
    
    // Create small fluctuations in the progress for visual interest
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        // If we're increasing and at or above 98, start decreasing
        if (isIncreasing && prevProgress >= 98) {
          setIsIncreasing(false);
          return prevProgress - (Math.random() * 0.5);
        } 
        // If we're decreasing and at or below 94, start increasing
        else if (!isIncreasing && prevProgress <= 94) {
          setIsIncreasing(true);
          return prevProgress + (Math.random() * 0.5);
        }
        // Otherwise, continue the current trend
        else {
          return isIncreasing 
            ? prevProgress + (Math.random() * 0.5) 
            : prevProgress - (Math.random() * 0.5);
        }
      });
    }, 2000);
    
    return () => clearInterval(timer);
  }, [progress, isIncreasing, showSuccess]);

  return (
    <Card className={cn(
      "card-gradient shadow-md transition-all duration-500",
      showSuccess && "animate-celebrate border-green-400"
    )}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Deployment Success</CardTitle>
          <Popover>
            <PopoverTrigger asChild>
              <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
            </PopoverTrigger>
            <PopoverContent className="text-sm">
              <p>Percentage of successful deployments in the last 30 days.</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Data sources: Jenkins, GitHub Actions, Argo CD
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="py-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold">{progress.toFixed(1)}%</span>
          <Badge className={
            progress >= 95 
              ? "bg-green-500/10 text-green-700 border-green-500/20" 
              : progress >= 85 
                ? "bg-yellow-500/10 text-yellow-700 border-yellow-500/20"
                : "bg-red-500/10 text-red-700 border-red-500/20"
          }>
            {
              progress >= 95 
                ? "Excellent" 
                : progress >= 85 
                  ? "Good"
                  : "Needs Improvement"
            }
          </Badge>
        </div>
        <Progress 
          value={progress} 
          className="h-3 bg-gray-200"
          indicatorClassName={
            progress >= 95 
              ? "bg-green-500" 
              : progress >= 85 
                ? "bg-yellow-500"
                : "bg-red-500"
          }
        />
        <div className="text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>Last 30 days</span>
            <span>Target: 99%</span>
          </div>
          <div className="mt-1">54 of 56 deployments successful</div>
        </div>
      </CardContent>
    </Card>
  );
}
