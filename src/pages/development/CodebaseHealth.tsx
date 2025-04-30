
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, GitBranch, Code, TrendingUp, TrendingDown } from "lucide-react";

export default function CodebaseHealth() {
  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Codebase Health</h1>
          <p className="text-muted-foreground mt-1">
            Holistic view of your codebase health and trends
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <GitBranch className="mr-2 h-4 w-4" />
            Compare Branches
          </Button>
          <Button size="sm">
            <Code className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="relative flex flex-col items-center">
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 36 36" className="w-48 h-48 transform -rotate-90">
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-200" strokeWidth="3.6"></circle>
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-blue-500" strokeWidth="3.6" strokeDasharray="100" strokeDashoffset="22"></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold text-blue-700">78%</span>
            </div>
          </div>
          <p className="text-xl font-medium mt-4">Overall Health Score</p>
          <p className="text-sm text-muted-foreground mt-1">Based on 12 key metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Code Quality</CardTitle>
            <CardDescription>Maintainability and reliability</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">B+</span>
              <Badge className="bg-green-100 text-green-800">Good</Badge>
            </div>
            <div className="space-y-3 mt-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Maintainability</span>
                  <span className="text-xs font-medium">82%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div className="h-1.5 bg-green-500 rounded-full" style={{ width: "82%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Test Coverage</span>
                  <span className="text-xs font-medium">87%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div className="h-1.5 bg-green-500 rounded-full" style={{ width: "87%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Code Duplication</span>
                  <span className="text-xs font-medium">8.2%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div className="h-1.5 bg-amber-500 rounded-full" style={{ width: "8.2%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Architecture</CardTitle>
            <CardDescription>Structure and dependencies</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">A-</span>
              <Badge className="bg-green-100 text-green-800">Very Good</Badge>
            </div>
            <div className="space-y-3 mt-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Modularity</span>
                  <span className="text-xs font-medium">91%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div className="h-1.5 bg-green-500 rounded-full" style={{ width: "91%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Dependency Management</span>
                  <span className="text-xs font-medium">88%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div className="h-1.5 bg-green-500 rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Coupling</span>
                  <span className="text-xs font-medium">7.4%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div className="h-1.5 bg-green-500 rounded-full" style={{ width: "7.4%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Development</CardTitle>
            <CardDescription>Process and velocity</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">B-</span>
              <Badge className="bg-amber-100 text-amber-800">Fair</Badge>
            </div>
            <div className="space-y-3 mt-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Build Success Rate</span>
                  <span className="text-xs font-medium">96%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div className="h-1.5 bg-green-500 rounded-full" style={{ width: "96%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Issue Resolution Time</span>
                  <span className="text-xs font-medium">3.2 days</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div className="h-1.5 bg-amber-500 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Code Review Coverage</span>
                  <span className="text-xs font-medium">78%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div className="h-1.5 bg-amber-500 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Health Trends</h2>
        <Card>
          <CardContent className="h-[300px] flex items-center justify-center">
            <BarChart className="h-24 w-24 text-muted-foreground opacity-30" />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Component Health</CardTitle>
            <CardDescription>Health score by component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Authentication", health: 92, trend: "up" },
                { name: "API Layer", health: 86, trend: "up" },
                { name: "User Interface", health: 78, trend: "down" },
                { name: "Database", health: 88, trend: "down" },
                { name: "Analytics", health: 72, trend: "up" }
              ].map((component) => (
                <div key={component.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div 
                      className={`w-2 h-2 rounded-full mr-3 ${
                        component.health >= 85 ? "bg-green-500" : 
                        component.health >= 70 ? "bg-amber-500" : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-sm">{component.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">{component.health}%</span>
                    {component.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-amber-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Changes</CardTitle>
            <CardDescription>Health impact of recent changes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Authentication refactor", impact: "+4%", date: "3 days ago" },
                { name: "New analytics module", impact: "-1%", date: "1 week ago" },
                { name: "API versioning", impact: "+2%", date: "2 weeks ago" },
                { name: "Test coverage improvements", impact: "+3%", date: "3 weeks ago" },
                { name: "UI component library update", impact: "-2%", date: "1 month ago" }
              ].map((change, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{change.name}</p>
                    <p className="text-xs text-muted-foreground">{change.date}</p>
                  </div>
                  <span 
                    className={`text-sm font-medium ${
                      change.impact.startsWith('+') ? 'text-green-600' : 'text-amber-600'
                    }`}
                  >
                    {change.impact}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
