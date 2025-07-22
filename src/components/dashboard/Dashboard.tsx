import DashboardStats from "./DashboardStats";
import RecentActivity from "./RecentActivity";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Zap, Users, Target, Clock } from "lucide-react";

const Dashboard = () => {
  const quickActions = [
    {
      title: "AI Resume Matching",
      description: "Match candidates to job descriptions",
      icon: Zap,
      action: "Start Matching",
      color: "bg-gradient-to-r from-primary to-secondary"
    },
    {
      title: "Add New Candidate",
      description: "Create a new candidate profile",
      icon: Users,
      action: "Add Candidate",
      color: "bg-gradient-to-r from-secondary to-accent"
    },
    {
      title: "Job Analysis",
      description: "Analyze job description requirements",
      icon: Target,
      action: "Analyze",
      color: "bg-gradient-to-r from-accent to-warning"
    }
  ];

  const pipelineStats = [
    { stage: "Applied", count: 145, percentage: 100 },
    { stage: "Screening", count: 89, percentage: 61 },
    { stage: "Interview", count: 34, percentage: 23 },
    { stage: "Offer", count: 12, percentage: 8 },
    { stage: "Hired", count: 8, percentage: 5 }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Sarah! Here's your recruitment overview.</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activity - Takes 2 columns */}
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>

        {/* Pipeline Overview */}
        <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
          <CardHeader>
            <CardTitle className="text-lg">Recruitment Pipeline</CardTitle>
            <CardDescription>Current candidate flow</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pipelineStats.map((stage, index) => (
              <div key={stage.stage} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{stage.stage}</span>
                  <span className="text-muted-foreground">{stage.count}</span>
                </div>
                <Progress value={stage.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
          <CardDescription>Streamline your recruitment workflow</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div key={index} className="group relative overflow-hidden rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-200">
                  <div className={`absolute inset-0 ${action.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg ${action.color} text-white`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-semibold text-foreground">{action.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                    <Button variant="outline" size="sm" className="w-full group-hover:border-primary/50">
                      {action.action}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;