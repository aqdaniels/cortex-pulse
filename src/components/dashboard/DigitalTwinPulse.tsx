
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface PulseNodeProps {
  id: string;
  name: string;
  status: "healthy" | "warning" | "critical" | "unknown";
  x: number;
  y: number;
  connections: string[];
}

const pulseNodes: PulseNodeProps[] = [
  { 
    id: "code-repo", 
    name: "Code Repository", 
    status: "healthy", 
    x: 20, 
    y: 50, 
    connections: ["ci-pipeline"] 
  },
  { 
    id: "ci-pipeline", 
    name: "CI Pipeline", 
    status: "healthy", 
    x: 35, 
    y: 30, 
    connections: ["cd-pipeline"] 
  },
  { 
    id: "cd-pipeline", 
    name: "CD Pipeline", 
    status: "warning", 
    x: 50, 
    y: 50, 
    connections: ["production", "staging"] 
  },
  { 
    id: "staging", 
    name: "Staging", 
    status: "healthy", 
    x: 65, 
    y: 30, 
    connections: [] 
  },
  { 
    id: "production", 
    name: "Production", 
    status: "healthy", 
    x: 80, 
    y: 50, 
    connections: ["monitoring"] 
  },
  { 
    id: "monitoring", 
    name: "Monitoring", 
    status: "healthy", 
    x: 65, 
    y: 70, 
    connections: ["analytics"] 
  },
  { 
    id: "analytics", 
    name: "Analytics", 
    status: "unknown", 
    x: 50, 
    y: 70, 
    connections: ["code-repo"] 
  },
];

function PulseNode({ node }: { node: PulseNodeProps }) {
  const statusColors = {
    healthy: "bg-green-500",
    warning: "bg-yellow-500",
    critical: "bg-red-500",
    unknown: "bg-gray-400",
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <div 
            className={cn(
              "absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",
              isHovered ? "z-10" : "z-0"
            )}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={cn("rounded-full h-4 w-4 mb-2 transition-all duration-300", 
              statusColors[node.status],
              isHovered ? "scale-150" : "scale-100"
            )}>
              <div className="pulse-dot">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={cn("text-xs font-medium transition-opacity", 
              isHovered ? "opacity-100" : "opacity-70"
            )}>
              {node.name}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top">
          <div className="text-sm font-semibold">{node.name}</div>
          <div className="text-xs">Status: {node.status}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function ConnectionLine({ fromNode, toNode }: { fromNode: PulseNodeProps; toNode: PulseNodeProps }) {
  // Animation effect for the connection line
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, Math.random() * 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const fromStatus = fromNode.status;
  const toStatus = toNode.status;
  
  let lineColor = "bg-green-500";
  if (fromStatus === "critical" || toStatus === "critical") {
    lineColor = "bg-red-500";
  } else if (fromStatus === "warning" || toStatus === "warning") {
    lineColor = "bg-yellow-500";
  } else if (fromStatus === "unknown" || toStatus === "unknown") {
    lineColor = "bg-gray-400";
  }

  return (
    <div 
      className={cn("data-flow-line", lineColor)}
      style={{
        left: `${fromNode.x}%`,
        top: `${fromNode.y}%`,
        width: `${Math.sqrt(Math.pow(toNode.x - fromNode.x, 2) + Math.pow(toNode.y - fromNode.y, 2))}%`,
        transform: `rotate(${Math.atan2(toNode.y - fromNode.y, toNode.x - fromNode.x) * (180 / Math.PI)}deg)`,
        transformOrigin: "left center",
        opacity: animate ? 0.7 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    />
  );
}

export function DigitalTwinPulse() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [overallStatus, setOverallStatus] = useState<"healthy" | "warning" | "critical">("healthy");
  
  useEffect(() => {
    // Determine overall status based on node statuses
    if (pulseNodes.some(node => node.status === "critical")) {
      setOverallStatus("critical");
    } else if (pulseNodes.some(node => node.status === "warning")) {
      setOverallStatus("warning");
    } else {
      setOverallStatus("healthy");
    }
    
    // Update last updated time every minute
    const timer = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);

  const statusInfo = {
    healthy: { label: "Healthy", color: "bg-green-500/10 text-green-700 border-green-500/20" },
    warning: { label: "Attention Needed", color: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20" },
    critical: { label: "Critical Issues", color: "bg-red-500/10 text-red-700 border-red-500/20" },
  };

  return (
    <Card className="animated-border card-gradient shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl font-semibold">Digital Twin Pulse</CardTitle>
          <CardDescription>
            Real-time health of your software lifecycle
          </CardDescription>
        </div>
        <Badge className={cn("px-3 py-1", statusInfo[overallStatus].color)}>
          {statusInfo[overallStatus].label}
        </Badge>
      </CardHeader>
      <Separator />
      <CardContent className="pt-6">
        <div className="h-64 relative bg-muted/30 rounded-lg overflow-hidden">
          {/* Connection lines */}
          {pulseNodes.map(fromNode => 
            fromNode.connections.map(toId => {
              const toNode = pulseNodes.find(n => n.id === toId);
              if (toNode) {
                return (
                  <ConnectionLine 
                    key={`${fromNode.id}-${toNode.id}`} 
                    fromNode={fromNode} 
                    toNode={toNode} 
                  />
                );
              }
              return null;
            })
          )}
          
          {/* Nodes */}
          {pulseNodes.map(node => (
            <PulseNode key={node.id} node={node} />
          ))}
        </div>
        <div className="mt-3 text-xs text-muted-foreground flex items-center justify-between">
          <span>Auto-refreshes every minute</span>
          <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
        </div>
      </CardContent>
    </Card>
  );
}
