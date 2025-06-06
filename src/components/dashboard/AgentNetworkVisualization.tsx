
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AgentNode {
  id: string;
  name: string;
  type: "anomaly" | "prediction" | "optimization" | "learning";
  status: "active" | "processing" | "idle";
  confidence: number;
  x: number;
  y: number;
  connections: string[];
}

const agentNodes: AgentNode[] = [
  {
    id: "anomaly-1",
    name: "Anomaly Detection",
    type: "anomaly",
    status: "active",
    confidence: 94,
    x: 20,
    y: 30,
    connections: ["prediction-1", "optimization-1"]
  },
  {
    id: "prediction-1",
    name: "Predictive Analytics",
    type: "prediction",
    status: "processing",
    confidence: 78,
    x: 50,
    y: 20,
    connections: ["learning-1", "optimization-1"]
  },
  {
    id: "optimization-1",
    name: "Process Optimization",
    type: "optimization",
    status: "active",
    confidence: 85,
    x: 80,
    y: 40,
    connections: ["learning-1"]
  },
  {
    id: "learning-1",
    name: "Continuous Learning",
    type: "learning",
    status: "processing",
    confidence: 89,
    x: 50,
    y: 70,
    connections: ["anomaly-1"]
  }
];

function AgentNodeComponent({ node }: { node: AgentNode }) {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(prev => !prev);
    }, node.status === "processing" ? 1000 : 2000);
    
    return () => clearInterval(interval);
  }, [node.status]);

  const getNodeColors = () => {
    switch (node.type) {
      case "anomaly":
        return "bg-red-500/20 border-red-500 text-red-700";
      case "prediction":
        return "bg-amber-500/20 border-amber-500 text-amber-700";
      case "optimization":
        return "bg-blue-500/20 border-blue-500 text-blue-700";
      case "learning":
        return "bg-purple-500/20 border-purple-500 text-purple-700";
      default:
        return "bg-gray-500/20 border-gray-500 text-gray-700";
    }
  };

  const getConfidenceColor = () => {
    if (node.confidence >= 90) return "bg-green-400";
    if (node.confidence >= 75) return "bg-yellow-400";
    return "bg-red-400";
  };

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
    >
      <div className={cn(
        "relative p-3 rounded-lg border-2 transition-all duration-300",
        getNodeColors(),
        isActive && node.status === "processing" ? "scale-110" : "scale-100"
      )}>
        {/* Activity pulse */}
        {node.status === "active" && (
          <div className="absolute -inset-1 rounded-lg animate-pulse bg-current opacity-20"></div>
        )}
        
        {/* Processing particles */}
        {node.status === "processing" && (
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute top-1 left-1 w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
            <div className="absolute top-2 right-1 w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute bottom-1 left-2 w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: "1s" }}></div>
          </div>
        )}
        
        <div className="text-xs font-medium mb-1">{node.name}</div>
        <div className="flex items-center space-x-2">
          <div className={cn("w-2 h-2 rounded-full", getConfidenceColor())}></div>
          <span className="text-xs">{node.confidence}%</span>
        </div>
      </div>
    </div>
  );
}

function ConnectionLine({ fromNode, toNode }: { fromNode: AgentNode; toNode: AgentNode }) {
  const [particlePosition, setParticlePosition] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setParticlePosition(prev => (prev + 2) % 100);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const distance = Math.sqrt(Math.pow(toNode.x - fromNode.x, 2) + Math.pow(toNode.y - fromNode.y, 2));
  const angle = Math.atan2(toNode.y - fromNode.y, toNode.x - fromNode.x) * (180 / Math.PI);

  return (
    <div className="absolute">
      {/* Connection line */}
      <div
        className="absolute h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 opacity-60"
        style={{
          left: `${fromNode.x}%`,
          top: `${fromNode.y}%`,
          width: `${distance}%`,
          transform: `rotate(${angle}deg)`,
          transformOrigin: "left center",
        }}
      />
      
      {/* Data particle */}
      <div
        className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
        style={{
          left: `${fromNode.x + (toNode.x - fromNode.x) * (particlePosition / 100)}%`,
          top: `${fromNode.y + (toNode.y - fromNode.y) * (particlePosition / 100)}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

export function AgentNetworkVisualization() {
  const [activeConnections, setActiveConnections] = useState<string[]>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNode = agentNodes[Math.floor(Math.random() * agentNodes.length)];
      setActiveConnections(randomNode.connections);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="h-64">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Agent Intelligence Network</CardTitle>
        <div className="flex space-x-2">
          <Badge variant="outline" className="text-xs">4 Active Agents</Badge>
          <Badge variant="outline" className="text-xs">Real-time Processing</Badge>
        </div>
      </CardHeader>
      <CardContent className="relative h-48 bg-muted/30 rounded-lg overflow-hidden">
        {/* Connection lines */}
        {agentNodes.map(fromNode =>
          fromNode.connections.map(toId => {
            const toNode = agentNodes.find(n => n.id === toId);
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
        
        {/* Agent nodes */}
        {agentNodes.map(node => (
          <AgentNodeComponent key={node.id} node={node} />
        ))}
      </CardContent>
    </Card>
  );
}
