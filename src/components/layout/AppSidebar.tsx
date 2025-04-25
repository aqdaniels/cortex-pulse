
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BarChart, 
  Code, 
  CpuIcon, 
  GitBranch, 
  Home, 
  LayoutDashboard, 
  Settings, 
  Users 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

const navItems = [
  { 
    icon: Home, 
    label: "Overview", 
    href: "/", 
    description: "System-wide overview and key metrics" 
  },
  { 
    icon: LayoutDashboard, 
    label: "Dashboard", 
    href: "/dashboard", 
    description: "Your personalized dashboard view" 
  },
  { 
    icon: Code, 
    label: "Development", 
    href: "/development", 
    description: "Code metrics and development insights" 
  },
  { 
    icon: GitBranch, 
    label: "CI/CD", 
    href: "/cicd", 
    description: "Pipeline performance and deployment metrics" 
  },
  { 
    icon: CpuIcon, 
    label: "Operations", 
    href: "/operations", 
    description: "System health and operational metrics" 
  },
  { 
    icon: BarChart, 
    label: "Analytics", 
    href: "/analytics", 
    description: "Advanced analytics and reporting" 
  },
  { 
    icon: Users, 
    label: "Team", 
    href: "/team", 
    description: "Team performance and collaboration" 
  },
  { 
    icon: Settings, 
    label: "Settings", 
    href: "/settings", 
    description: "System configuration and preferences" 
  },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { toast } = useToast();

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside 
      className={cn(
        "h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col relative z-10",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center p-4 h-16">
        {!collapsed && (
          <div className="flex items-center space-x-2 animate-fade-in">
            <div className="bg-cortex-primary h-8 w-8 rounded-lg flex items-center justify-center">
              <div className="text-white font-bold">DX</div>
            </div>
            <div className="font-bold text-lg text-sidebar-foreground">
              Cortex<span className="text-cortex-primary">Pulse</span>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="mx-auto animate-fade-in">
            <div className="bg-cortex-primary h-8 w-8 rounded-lg flex items-center justify-center">
              <div className="text-white font-bold">DX</div>
            </div>
          </div>
        )}
      </div>
      
      <Separator className="bg-sidebar-border" />
      
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Tooltip key={item.href} delayDuration={300}>
              <TooltipTrigger asChild>
                <Link to={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full flex items-center justify-start px-3 py-2 hover:bg-sidebar-accent transition-all duration-200",
                      collapsed ? "justify-center" : "justify-start",
                      item.href === "/" && "bg-sidebar-accent text-cortex-primary"
                    )}
                    onClick={() => {
                      if (item.href !== "/" && item.href !== "/dashboard") {
                        toast({
                          title: "Coming Soon",
                          description: `The ${item.label} section is under development`,
                          variant: "default",
                        });
                      }
                    }}
                  >
                    <item.icon className={cn("h-5 w-5", item.href === "/" && "text-cortex-primary")} />
                    {!collapsed && <span className="ml-3">{item.label}</span>}
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-cortex-dark text-white">
                <p>{item.label}</p>
                {collapsed && <p className="text-xs text-gray-300">{item.description}</p>}
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </div>
      
      <Separator className="bg-sidebar-border" />
      
      <div className="p-4">
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full flex items-center justify-center"
          onClick={handleToggleCollapse}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={cn("h-5 w-5 transition-transform", collapsed ? "rotate-0" : "rotate-180")}
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          {!collapsed && <span className="ml-2">Collapse</span>}
        </Button>
      </div>
    </aside>
  );
}
