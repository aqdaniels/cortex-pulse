
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BarChart, 
  Code, 
  CpuIcon, 
  Gauge,
  GitBranch, 
  Home, 
  LayoutDashboard, 
  Layers,
  Settings, 
  Users,
  FileCode,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

// Main navigation items
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
    description: "Code metrics and development insights",
    subItems: [
      { 
        label: "Code Quality", 
        href: "/development/code-quality",
        description: "Track and improve code maintainability"
      },
      { 
        label: "Technical Debt", 
        href: "/development/tech-debt",
        description: "Monitor and manage technical debt"
      },
      { 
        label: "Codebase Health", 
        href: "/development/codebase-health",
        description: "Overall health metrics for your codebase"
      }
    ]
  },
  { 
    icon: GitBranch, 
    label: "CI/CD", 
    href: "/cicd", 
    description: "Pipeline performance and deployment metrics",
    subItems: [
      { 
        label: "Build Performance", 
        href: "/cicd/build-performance",
        description: "Analyze build times and success rates"
      },
      { 
        label: "Deployment Analytics", 
        href: "/cicd/deployment-analytics",
        description: "Track deployment frequency and stability"
      }
    ]
  },
  { 
    icon: CpuIcon, 
    label: "Operations", 
    href: "/operations/modeling", 
    description: "System health and operational metrics",
    subItems: [
      {
        label: "Service Modeling", 
        href: "/operations/modeling",
        description: "Simulate operational scenarios and optimize resources"
      },
      {
        label: "Dev Modeling", 
        href: "/operations/dev-modeling",
        description: "Model development processes and outcomes"
      }
    ]
  },
  { 
    icon: BarChart, 
    label: "Analytics", 
    href: "/analytics", 
    description: "Advanced analytics and reporting",
    subItems: [
      {
        label: "Predictive Metrics", 
        href: "/analytics/predictive",
        description: "AI-powered development forecasting"
      },
      {
        label: "Performance Trends", 
        href: "/analytics/trends",
        description: "Long-term performance analytics"
      }
    ]
  },
  { 
    icon: Users, 
    label: "Team", 
    href: "/team", 
    description: "Team performance and collaboration",
    subItems: [
      {
        label: "Collaboration Insights", 
        href: "/team/collaboration",
        description: "Analyze team interactions and knowledge sharing"
      },
      {
        label: "Developer Productivity", 
        href: "/team/productivity",
        description: "Individual and team performance metrics"
      }
    ]
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
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const { toast } = useToast();

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
    if (!collapsed) {
      // Close all expanded items when collapsing sidebar
      setExpandedItems([]);
    }
  };

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label) 
        : [...prev, label]
    );
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
        <nav className="space-y-1">
          {navItems.map((item) => (
            <div key={item.href} className="space-y-1">
              <Tooltip key={item.href} delayDuration={300}>
                <TooltipTrigger asChild>
                  <div>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full flex items-center justify-start px-3 py-2 hover:bg-sidebar-accent transition-all duration-200",
                        collapsed ? "justify-center" : "justify-start",
                        (item.href === "/" && window.location.pathname === "/") || 
                        (item.href !== "/" && window.location.pathname.startsWith(item.href)) 
                          ? "bg-sidebar-accent text-cortex-primary" : ""
                      )}
                      onClick={() => {
                        if (item.subItems && !collapsed) {
                          toggleExpand(item.label);
                        } else if (
                          item.href !== "/" && 
                          item.href !== "/dashboard" && 
                          item.href !== "/operations/modeling" &&
                          item.href !== "/development" &&
                          !item.href.startsWith("/operations")
                        ) {
                          toast({
                            title: "Coming Soon",
                            description: `The ${item.label} section is under development`,
                            variant: "default",
                          });
                        }
                      }}
                    >
                      <item.icon className={cn(
                        "h-5 w-5", 
                        (item.href === "/" && window.location.pathname === "/") || 
                        (item.href !== "/" && window.location.pathname.startsWith(item.href)) 
                          ? "text-cortex-primary" : ""
                      )} />
                      {!collapsed && (
                        <>
                          <span className="ml-3 flex-1 text-left">{item.label}</span>
                          {item.subItems && (
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              className={cn(
                                "transition-transform duration-200",
                                expandedItems.includes(item.label) ? "rotate-180" : ""
                              )}
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          )}
                        </>
                      )}
                    </Button>
                    
                    {/* Link wrapper for main items */}
                    {(!item.subItems || collapsed) && (
                      <Link 
                        to={item.href} 
                        className="absolute inset-0" 
                        onClick={(e) => {
                          if (
                            item.href !== "/" && 
                            item.href !== "/dashboard" && 
                            item.href !== "/operations/modeling" &&
                            item.href !== "/development" &&
                            !item.href.startsWith("/operations")
                          ) {
                            e.preventDefault();
                          }
                        }}
                      />
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-cortex-dark text-white">
                  <p>{item.label}</p>
                  {collapsed && <p className="text-xs text-gray-300">{item.description}</p>}
                </TooltipContent>
              </Tooltip>
              
              {/* Subitems */}
              {!collapsed && item.subItems && expandedItems.includes(item.label) && (
                <div className="ml-8 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Tooltip key={subItem.href} delayDuration={300}>
                      <TooltipTrigger asChild>
                        <Link to={subItem.href}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "w-full flex items-center justify-start px-3 py-1.5 text-sm hover:bg-sidebar-accent transition-all duration-200",
                              window.location.pathname.startsWith(subItem.href) 
                                ? "bg-sidebar-accent/50 text-cortex-primary" : ""
                            )}
                            onClick={(e) => {
                              if (
                                subItem.href !== "/operations/modeling" &&
                                !subItem.href.startsWith("/development") &&
                                !subItem.href.startsWith("/operations")
                              ) {
                                e.preventDefault();
                                toast({
                                  title: "Coming Soon",
                                  description: `The ${subItem.label} section is under development`,
                                  variant: "default",
                                });
                              }
                            }}
                          >
                            <span className="flex-1 text-left">{subItem.label}</span>
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="bg-cortex-dark text-white">
                        <p>{subItem.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              )}
            </div>
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
