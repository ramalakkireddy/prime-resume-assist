import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "match",
      candidate: "John Smith",
      action: "Matched with Senior React Developer position",
      score: 92,
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      avatar: "/avatars/john.png"
    },
    {
      id: 2,
      type: "resume",
      candidate: "Sarah Wilson",
      action: "Resume enhanced for Full Stack Engineer role",
      score: 87,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      avatar: "/avatars/sarah.png"
    },
    {
      id: 3,
      type: "candidate",
      candidate: "Mike Johnson",
      action: "New candidate profile created",
      score: null,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
      avatar: "/avatars/mike.png"
    },
    {
      id: 4,
      type: "match",
      candidate: "Emily Davis",
      action: "Matched with DevOps Engineer position",
      score: 89,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
      avatar: "/avatars/emily.png"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "match":
        return "🎯";
      case "resume":
        return "📝";
      case "candidate":
        return "👤";
      default:
        return "📋";
    }
  };

  const getScoreBadgeVariant = (score: number | null) => {
    if (!score) return "secondary";
    if (score >= 90) return "default";
    if (score >= 80) return "secondary";
    return "outline";
  };

  return (
    <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
      <CardHeader>
        <CardTitle className="text-lg">Recent Activity</CardTitle>
        <CardDescription>Latest updates from your recruitment pipeline</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/30 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="text-lg">{getActivityIcon(activity.type)}</div>
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatar} />
                <AvatarFallback>{activity.candidate.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {activity.candidate}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {activity.action}
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              {activity.score && (
                <Badge variant={getScoreBadgeVariant(activity.score)} className="text-xs">
                  {activity.score}%
                </Badge>
              )}
              <span className="text-xs text-muted-foreground">
                {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;