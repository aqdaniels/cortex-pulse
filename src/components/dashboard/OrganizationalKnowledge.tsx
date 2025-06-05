
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Brain, 
  Users, 
  TrendingUp,
  CheckCircle,
  Clock,
  Star,
  Award,
  MessageSquare
} from "lucide-react";

export function OrganizationalKnowledge() {
  const [activeCategory, setActiveCategory] = useState("decisions");
  
  const knowledgeItems = {
    decisions: [
      {
        title: "Database Migration Strategy",
        expert: "Sarah Chen",
        confidence: 94,
        appliedCount: 8,
        outcome: "25% performance improvement",
        tags: ["architecture", "performance"]
      },
      {
        title: "Microservices Decomposition Pattern",
        expert: "Mike Rodriguez",
        confidence: 89,
        appliedCount: 12,
        outcome: "40% faster deployments",
        tags: ["architecture", "scalability"]
      },
      {
        title: "Security Compliance Framework",
        expert: "Lisa Wang",
        confidence: 96,
        appliedCount: 15,
        outcome: "100% audit compliance",
        tags: ["security", "compliance"]
      }
    ],
    patterns: [
      {
        title: "Circuit Breaker Implementation",
        usage: 85,
        successRate: 94,
        impact: "Reduced cascading failures by 78%",
        tags: ["resilience", "patterns"]
      },
      {
        title: "Event-Driven Architecture",
        usage: 72,
        successRate: 91,
        impact: "Improved system decoupling",
        tags: ["architecture", "events"]
      }
    ],
    insights: [
      {
        title: "Peak traffic handling optimization",
        source: "Agent Analysis",
        confidence: 91,
        prediction: "30% capacity increase needed for Q4",
        tags: ["capacity", "performance"]
      }
    ]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <BookOpen className="mr-2 h-5 w-5" />
          Organizational Knowledge Base
        </CardTitle>
        <CardDescription>Capturing and sharing expert decisions and best practices</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex space-x-2">
          <Button 
            variant={activeCategory === 'decisions' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory('decisions')}
          >
            <Brain className="mr-2 h-4 w-4" />
            Expert Decisions
          </Button>
          <Button 
            variant={activeCategory === 'patterns' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory('patterns')}
          >
            <Award className="mr-2 h-4 w-4" />
            Proven Patterns
          </Button>
          <Button 
            variant={activeCategory === 'insights' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory('insights')}
          >
            <Star className="mr-2 h-4 w-4" />
            AI Insights
          </Button>
        </div>
        
        <div className="space-y-4">
          {activeCategory === 'decisions' && knowledgeItems.decisions.map((item, index) => (
            <Card key={index} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground flex items-center mt-1">
                      <Users className="h-3 w-3 mr-1" />
                      Expert: {item.expert}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{item.confidence}% confidence</Badge>
                    <Badge variant="secondary">{item.appliedCount} times applied</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {item.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-green-600">
                    {item.outcome}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {activeCategory === 'patterns' && knowledgeItems.patterns.map((item, index) => (
            <Card key={index} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-green-600 mt-1">{item.impact}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{item.usage}% adoption</div>
                    <div className="text-xs text-muted-foreground">{item.successRate}% success rate</div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  {item.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          
          {activeCategory === 'insights' && knowledgeItems.insights.map((item, index) => (
            <Card key={index} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground flex items-center mt-1">
                      <Brain className="h-3 w-3 mr-1" />
                      Source: {item.source}
                    </p>
                  </div>
                  <Badge variant="outline">{item.confidence}% confidence</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {item.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-blue-600">
                    {item.prediction}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <div>
                  <h3 className="font-medium text-blue-900">Knowledge Sharing Active</h3>
                  <p className="text-sm text-blue-700">3 new expert decisions captured this week</p>
                </div>
              </div>
              <Button size="sm">
                Contribute Knowledge
              </Button>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
