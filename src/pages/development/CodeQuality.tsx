
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Code, FileCode, TrendingUp, BarChart, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function CodeQuality() {
  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Code Quality Analysis</h1>
          <p className="text-muted-foreground mt-1">
            Detailed metrics and insights for maintaining high code quality standards
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FileCode className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button size="sm">
            <Code className="mr-2 h-4 w-4" />
            Run Analysis
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="complexity">Complexity</TabsTrigger>
          <TabsTrigger value="duplication">Duplication</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Code Coverage</CardTitle>
                <CardDescription>Unit and integration test coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-2xl font-bold">87%</span>
                  <span className="text-sm text-green-600">+2.4% from last month</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-4">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: "87%" }}></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Code Quality Score</CardTitle>
                <CardDescription>Based on style, structure and best practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-2xl font-bold">B+</span>
                  <span className="text-sm text-amber-600">No change from last month</span>
                </div>
                <div className="flex items-center gap-1 mt-4">
                  {["A+", "A", "A-", "B+", "B", "B-", "C+", "C"].map((grade, i) => (
                    <div 
                      key={grade} 
                      className={`h-8 flex-1 flex items-center justify-center text-xs font-medium ${grade === "B+" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500"}`}
                    >
                      {grade}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Issues</CardTitle>
                <CardDescription>Code quality issues by severity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-sm">Critical</span>
                    </div>
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                      <span className="text-sm">Major</span>
                    </div>
                    <span className="text-sm font-medium">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm">Minor</span>
                    </div>
                    <span className="text-sm font-medium">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm">Info</span>
                    </div>
                    <span className="text-sm font-medium">45</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Quality Trends</h2>
            <Card>
              <CardContent className="h-[300px] flex items-center justify-center">
                <BarChart className="h-24 w-24 text-muted-foreground opacity-30" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="complexity">
          <Card>
            <CardHeader>
              <CardTitle>Code Complexity Analysis</CardTitle>
              <CardDescription>Cyclomatic complexity metrics by file and function</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] flex items-center justify-center">
                <BarChart className="h-24 w-24 text-muted-foreground opacity-30" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="duplication">
          <Card>
            <CardHeader>
              <CardTitle>Code Duplication</CardTitle>
              <CardDescription>Detected code duplicates and suggestions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] flex items-center justify-center">
                <BarChart className="h-24 w-24 text-muted-foreground opacity-30" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="issues">
          <Card>
            <CardHeader>
              <CardTitle>Code Issues</CardTitle>
              <CardDescription>Detailed list of detected code issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((issue) => (
                  <div key={issue} className="flex items-start gap-4 border-b pb-4">
                    <div className="mt-1">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">High cognitive complexity in Auth.ts</h3>
                      <p className="text-xs text-muted-foreground mt-1">The authenticateUser function has a cognitive complexity of 25, which exceeds the recommended threshold of 15.</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs font-mono">src/utils/Auth.ts:24</div>
                    </div>
                    <Button variant="outline" size="sm">Fix</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}
