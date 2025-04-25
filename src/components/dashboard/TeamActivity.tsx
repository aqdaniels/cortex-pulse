
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ActivityItem {
  user: {
    name: string;
    avatar?: string;
    initials: string;
  };
  action: string;
  target: string;
  time: string;
  type: "commit" | "deployment" | "review" | "issue";
}

const activities: ActivityItem[] = [
  {
    user: {
      name: "Jane Doe",
      initials: "JD",
    },
    action: "deployed",
    target: "API Gateway v1.2.3",
    time: "10 minutes ago",
    type: "deployment"
  },
  {
    user: {
      name: "John Smith",
      initials: "JS",
    },
    action: "merged",
    target: "Fix authentication middleware",
    time: "25 minutes ago",
    type: "commit"
  },
  {
    user: {
      name: "Sarah Wilson",
      initials: "SW",
    },
    action: "approved",
    target: "Frontend redesign pull request",
    time: "1 hour ago",
    type: "review"
  },
  {
    user: {
      name: "Mike Johnson",
      initials: "MJ",
    },
    action: "closed",
    target: "Memory leak in worker process",
    time: "3 hours ago",
    type: "issue"
  }
];

function getActivityBadge(type: ActivityItem["type"]) {
  switch (type) {
    case "commit":
      return (
        <Badge className="bg-blue-500/10 text-blue-700 border-blue-500/20">
          Commit
        </Badge>
      );
    case "deployment":
      return (
        <Badge className="bg-green-500/10 text-green-700 border-green-500/20">
          Deployment
        </Badge>
      );
    case "review":
      return (
        <Badge className="bg-purple-500/10 text-purple-700 border-purple-500/20">
          Review
        </Badge>
      );
    case "issue":
      return (
        <Badge className="bg-yellow-500/10 text-yellow-700 border-yellow-500/20">
          Issue
        </Badge>
      );
    default:
      return null;
  }
}

export function TeamActivity() {
  return (
    <Card className="card-gradient shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">Team Activity</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className={cn(
                "flex items-start animate-slide-down",
                index === 0 && "relative"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {index === 0 && (
                <div className="absolute left-6 -top-7 h-7 w-px bg-gradient-to-b from-transparent to-border"></div>
              )}
              <Avatar className="h-8 w-8 mr-3">
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback className="bg-cortex-primary text-white">
                  {activity.user.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center">
                  <span className="font-medium text-sm">{activity.user.name}</span>
                  <span className="mx-1 text-sm text-muted-foreground">{activity.action}</span>
                  <span className="font-medium text-sm">{activity.target}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                  {getActivityBadge(activity.type)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
