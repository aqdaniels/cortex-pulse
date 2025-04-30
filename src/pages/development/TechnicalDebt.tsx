
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Code, FileCode, Calendar, Clock } from "lucide-react";

export default function TechnicalDebt() {
  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Technical Debt Management</h1>
          <p className="text-muted-foreground mt-1">
            Track, prioritize and manage technical debt across your codebase
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FileCode className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button size="sm">
            <Code className="mr-2 h-4 w-4" />
            Create Debt Item
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Technical Debt</CardTitle>
            <CardDescription>Estimated development effort</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-1">
              <span className="text-3xl font-bold">86</span>
              <span className="text-xl mb-1">days</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Increased by 4 days this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Debt Ratio</CardTitle>
            <CardDescription>Proportion of codebase affected</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-1">
              <span className="text-3xl font-bold">12.4</span>
              <span className="text-xl mb-1">%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full mt-4">
              <div className="h-2 bg-amber-500 rounded-full" style={{ width: "12.4%" }}></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Interest Rate</CardTitle>
            <CardDescription>How fast debt accumulates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-end gap-1">
                <span className="text-3xl font-bold">2.7</span>
                <span className="text-xl mb-1">%</span>
              </div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Low</Badge>
            </div>
            <p className="text-xs text-green-600 mt-2">Decreased from 3.2% last quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Planned Paydown</CardTitle>
            <CardDescription>This sprint's debt reduction</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-1">
              <span className="text-3xl font-bold">8.5</span>
              <span className="text-xl mb-1">days</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">4 items scheduled for refactoring</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Debt Breakdown</h2>
        <Card>
          <CardHeader>
            <CardTitle>Technical Debt by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-1/4 text-sm font-medium">Code Quality</div>
                <div className="w-3/4">
                  <div className="h-8 bg-gray-100 rounded-md relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-md" style={{ width: "45%" }}></div>
                    <span className="absolute inset-0 flex items-center px-3 text-sm font-medium">45% (38 days)</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/4 text-sm font-medium">Architecture</div>
                <div className="w-3/4">
                  <div className="h-8 bg-gray-100 rounded-md relative">
                    <div className="absolute inset-0 bg-amber-500 rounded-md" style={{ width: "30%" }}></div>
                    <span className="absolute inset-0 flex items-center px-3 text-sm font-medium">30% (26 days)</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/4 text-sm font-medium">Documentation</div>
                <div className="w-3/4">
                  <div className="h-8 bg-gray-100 rounded-md relative">
                    <div className="absolute inset-0 bg-green-500 rounded-md" style={{ width: "15%" }}></div>
                    <span className="absolute inset-0 flex items-center px-3 text-sm font-medium">15% (13 days)</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/4 text-sm font-medium">Testing</div>
                <div className="w-3/4">
                  <div className="h-8 bg-gray-100 rounded-md relative">
                    <div className="absolute inset-0 bg-purple-500 rounded-md" style={{ width: "10%" }}></div>
                    <span className="absolute inset-0 flex items-center px-3 text-sm font-medium">10% (9 days)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Top Debt Items</h2>
        <Card>
          <CardContent className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 text-sm font-medium">Description</th>
                  <th className="text-left p-4 text-sm font-medium">Category</th>
                  <th className="text-left p-4 text-sm font-medium">Effort</th>
                  <th className="text-left p-4 text-sm font-medium">Age</th>
                  <th className="text-left p-4 text-sm font-medium">Status</th>
                  <th className="text-right p-4 text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  {
                    name: "Refactor authentication flow",
                    category: "Architecture",
                    effort: "8 days",
                    age: "3 months",
                    status: "Planned"
                  },
                  {
                    name: "Update API documentation",
                    category: "Documentation",
                    effort: "3 days",
                    age: "2 months",
                    status: "In Progress"
                  },
                  {
                    name: "Fix test coverage gaps",
                    category: "Testing",
                    effort: "5 days",
                    age: "5 months",
                    status: "Not Started"
                  },
                  {
                    name: "Reduce complexity in billing module",
                    category: "Code Quality",
                    effort: "6 days",
                    age: "1 month",
                    status: "Planned"
                  },
                  {
                    name: "Replace deprecated components",
                    category: "Code Quality",
                    effort: "4 days",
                    age: "4 months",
                    status: "Not Started"
                  }
                ].map((item, i) => (
                  <tr key={i}>
                    <td className="p-4 text-sm">
                      <div className="font-medium">{item.name}</div>
                    </td>
                    <td className="p-4 text-sm">{item.category}</td>
                    <td className="p-4 text-sm">{item.effort}</td>
                    <td className="p-4 text-sm">{item.age}</td>
                    <td className="p-4 text-sm">
                      <Badge 
                        className={
                          item.status === "Planned" ? "bg-amber-100 text-amber-800" : 
                          item.status === "In Progress" ? "bg-blue-100 text-blue-800" : 
                          "bg-gray-100 text-gray-800"
                        }
                      >
                        {item.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
