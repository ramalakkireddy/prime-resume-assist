import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  Clock, 
  DollarSign,
  Download,
  Calendar,
  Filter
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Analytics = () => {
  const performanceMetrics = [
    {
      title: "Total Placements",
      value: "156",
      change: "+12%",
      trend: "up",
      icon: Target,
      description: "This quarter"
    },
    {
      title: "Active Candidates",
      value: "847",
      change: "+24%",
      trend: "up",
      icon: Users,
      description: "In pipeline"
    },
    {
      title: "Avg. Time to Hire",
      value: "18 days",
      change: "-3 days",
      trend: "up",
      icon: Clock,
      description: "From application"
    },
    {
      title: "Success Rate",
      value: "68%",
      change: "+5%",
      trend: "up",
      icon: TrendingUp,
      description: "Interview to hire"
    }
  ];

  const hiringFunnel = [
    { stage: "Applications Received", count: 2847, percentage: 100, color: "bg-blue-500" },
    { stage: "Initial Screening", count: 1423, percentage: 50, color: "bg-green-500" },
    { stage: "Technical Interview", count: 568, percentage: 20, color: "bg-yellow-500" },
    { stage: "Final Interview", count: 227, percentage: 8, color: "bg-orange-500" },
    { stage: "Offers Extended", count: 89, percentage: 3, color: "bg-purple-500" },
    { stage: "Hires Made", count: 67, percentage: 2.4, color: "bg-red-500" }
  ];

  const topSkills = [
    { skill: "React", demand: 89, supply: 145, ratio: 1.6 },
    { skill: "Python", demand: 76, supply: 203, ratio: 2.7 },
    { skill: "Node.js", demand: 65, supply: 98, ratio: 1.5 },
    { skill: "AWS", demand: 82, supply: 87, ratio: 1.1 },
    { skill: "TypeScript", demand: 54, supply: 76, ratio: 1.4 },
    { skill: "Docker", demand: 45, supply: 65, ratio: 1.4 }
  ];

  const recentPlacements = [
    {
      candidate: "Sarah Chen",
      position: "Senior React Developer",
      company: "TechCorp Inc.",
      salary: "$145k",
      daysToHire: 12,
      status: "completed"
    },
    {
      candidate: "Marcus Johnson",
      position: "DevOps Engineer",
      company: "CloudTech Solutions",
      salary: "$125k",
      daysToHire: 18,
      status: "completed"
    },
    {
      candidate: "Emily Rodriguez",
      position: "UX Designer",
      company: "DesignStudio",
      salary: "$95k",
      daysToHire: 15,
      status: "completed"
    },
    {
      candidate: "David Kim",
      position: "Data Scientist",
      company: "DataInsights Corp",
      salary: "$135k",
      daysToHire: 22,
      status: "pending"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Recruitment performance insights and metrics</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="quarter">
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {performanceMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                    <p className="text-3xl font-bold">{metric.value}</p>
                    <div className="flex items-center space-x-1">
                      <Badge variant={metric.trend === "up" ? "default" : "secondary"} className="text-xs">
                        {metric.change}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{metric.description}</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Analytics Content */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="hiring-funnel">Hiring Funnel</TabsTrigger>
          <TabsTrigger value="skills-analysis">Skills Analysis</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Recent Placements */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Placements</CardTitle>
                  <CardDescription>Latest successful hires and their details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPlacements.map((placement, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{placement.candidate}</h4>
                            <Badge variant={placement.status === "completed" ? "default" : "secondary"}>
                              {placement.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{placement.position} at {placement.company}</p>
                        </div>
                        <div className="text-right space-y-1">
                          <p className="font-medium">{placement.salary}</p>
                          <p className="text-xs text-muted-foreground">{placement.daysToHire} days to hire</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
                <CardDescription>Key metrics at a glance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Conversion Rate</span>
                    <span className="font-medium">2.4%</span>
                  </div>
                  <Progress value={24} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Interview Show Rate</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Offer Acceptance</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Quality Score</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="hiring-funnel" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hiring Funnel Analysis</CardTitle>
              <CardDescription>Track candidates through each stage of the hiring process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {hiringFunnel.map((stage, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                        <span className="font-medium">{stage.stage}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold">{stage.count.toLocaleString()}</span>
                        <span className="text-sm text-muted-foreground ml-2">({stage.percentage}%)</span>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-muted rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${stage.color} transition-all duration-500`}
                          style={{ width: `${stage.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills-analysis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skills Supply & Demand Analysis</CardTitle>
              <CardDescription>Compare market demand with available talent pool</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSkills.map((skill, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium">{skill.skill}</h4>
                      <Badge variant={skill.ratio < 1.5 ? "destructive" : skill.ratio < 2 ? "secondary" : "default"}>
                        {skill.ratio}:1 ratio
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground mb-1">Demand (Open Positions)</p>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-red-100 rounded-full h-2">
                            <div 
                              className="h-2 bg-red-500 rounded-full"
                              style={{ width: `${(skill.demand / 100) * 100}%` }}
                            />
                          </div>
                          <span className="font-medium">{skill.demand}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Supply (Available Candidates)</p>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-green-100 rounded-full h-2">
                            <div 
                              className="h-2 bg-green-500 rounded-full"
                              style={{ width: `${(skill.supply / 250) * 100}%` }}
                            />
                          </div>
                          <span className="font-medium">{skill.supply}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recruiter Performance</CardTitle>
                <CardDescription>Individual recruiter metrics and rankings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Sarah Johnson", placements: 23, ratio: 68, revenue: "$2.4M" },
                    { name: "Mike Chen", placements: 19, ratio: 72, revenue: "$2.1M" },
                    { name: "Emily Davis", placements: 17, ratio: 65, revenue: "$1.8M" },
                    { name: "James Wilson", placements: 15, ratio: 61, revenue: "$1.6M" }
                  ].map((recruiter, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{recruiter.name}</h4>
                        <p className="text-sm text-muted-foreground">{recruiter.placements} placements</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{recruiter.revenue}</p>
                        <p className="text-sm text-muted-foreground">{recruiter.ratio}% success rate</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
                <CardDescription>Financial performance and projections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold">$8.2M</p>
                    <p className="text-xs text-green-600">+15% YoY</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Avg. Fee per Hire</p>
                    <p className="text-2xl font-bold">$52k</p>
                    <p className="text-xs text-green-600">+8% vs target</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Q1 Target Progress</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Annual Target Progress</span>
                      <span>23%</span>
                    </div>
                    <Progress value={23} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;