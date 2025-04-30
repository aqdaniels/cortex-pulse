
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { GitBranch, Code, FileCode, TrendingUp, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

export default function DevelopmentHome() {
  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Development Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Monitor code quality, technical debt, and development performance
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <GitBranch className="mr-2 h-4 w-4" />
            Connect Repository
          </Button>
          <Button size="sm">
            <Code className="mr-2 h-4 w-4" />
            Analyze Code
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/development/code-quality" className="block">
          <Card className="h-full hover:border-primary transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <FileCode className="mr-2 h-5 w-5 text-blue-500" />
                Code Quality
              </CardTitle>
              <CardDescription>
                Monitor code complexity, duplication, and style consistency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Code Coverage</span>
                  <span className="text-sm text-green-600 font-medium">87%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: "87%" }}></div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-medium">Technical Debt Ratio</span>
                  <span className="text-sm text-amber-600 font-medium">12.4%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-amber-500 rounded-full" style={{ width: "12.4%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/development/tech-debt" className="block">
          <Card className="h-full hover:border-primary transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <TrendingUp className="mr-2 h-5 w-5 text-amber-500" />
                Technical Debt
              </CardTitle>
              <CardDescription>
                Track and manage accumulated technical debt
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between p-2 bg-amber-50 border border-amber-100 rounded-md">
                  <span className="text-sm font-medium text-amber-800">High Complexity</span>
                  <span className="text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded-full">24 files</span>
                </div>
                
                <div className="flex items-center justify-between p-2 bg-blue-50 border border-blue-100 rounded-md">
                  <span className="text-sm font-medium text-blue-800">Code Duplication</span>
                  <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">8.2%</span>
                </div>
                
                <div className="flex items-center justify-between p-2 bg-green-50 border border-green-100 rounded-md">
                  <span className="text-sm font-medium text-green-800">Addressed Issues</span>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">+12 this month</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/development/codebase-health" className="block">
          <Card className="h-full hover:border-primary transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <BarChart className="mr-2 h-5 w-5 text-violet-500" />
                Codebase Health
              </CardTitle>
              <CardDescription>
                Overall health and trends of your codebase
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center h-[120px]">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 36 36" className="w-32 h-32 transform -rotate-90">
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-200" strokeWidth="3.6"></circle>
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-blue-500" strokeWidth="3.6" strokeDasharray="100" strokeDashoffset="22"></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-700">78%</span>
                  </div>
                </div>
                <p className="text-sm text-center mt-2 text-muted-foreground">Overall Health Score</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center gap-4 p-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <GitBranch className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Repository scan completed for <span className="text-blue-600">frontend-app</span></p>
                    <p className="text-xs text-muted-foreground">3 high, 12 medium, and 24 low priority issues found</p>
                  </div>
                  <div className="text-xs text-muted-foreground">2 hours ago</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
