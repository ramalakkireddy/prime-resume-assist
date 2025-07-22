import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Plus, 
  Building, 
  MapPin, 
  DollarSign, 
  Clock, 
  Users, 
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const JobDescriptions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  const jobPostings = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      status: "active",
      department: "Engineering",
      posted: "2 days ago",
      applicants: 24,
      skills: ["React", "TypeScript", "Node.js", "GraphQL"],
      description: "We're looking for a Senior React Developer to join our growing engineering team...",
      requirements: ["5+ years React experience", "Strong TypeScript skills", "Experience with modern tooling"]
    },
    {
      id: 2,
      title: "DevOps Engineer",
      company: "CloudTech Solutions",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $140k",
      status: "active",
      department: "Infrastructure",
      posted: "1 week ago",
      applicants: 18,
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      description: "Join our DevOps team to build and maintain cloud infrastructure...",
      requirements: ["AWS certification preferred", "Docker & Kubernetes experience", "Infrastructure as Code"]
    },
    {
      id: 3,
      title: "Python Data Scientist",
      company: "DataInsights Corp",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90k - $130k",
      status: "paused",
      department: "Data Science",
      posted: "3 days ago",
      applicants: 31,
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      description: "Looking for a data scientist to work on machine learning projects...",
      requirements: ["PhD in relevant field", "Strong Python skills", "ML model deployment experience"]
    },
    {
      id: 4,
      title: "Product Manager",
      company: "InnovateLabs",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110k - $150k",
      status: "closed",
      department: "Product",
      posted: "2 weeks ago",
      applicants: 45,
      skills: ["Product Strategy", "Agile", "Analytics", "User Research"],
      description: "We need a strategic product manager to drive our product roadmap...",
      requirements: ["5+ years product management", "B2B SaaS experience", "Strong analytical skills"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500/10 text-green-700 border-green-200";
      case "paused": return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
      case "closed": return "bg-red-500/10 text-red-700 border-red-200";
      default: return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  const filteredJobs = jobPostings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter;
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Job Descriptions</h1>
          <p className="text-muted-foreground">Manage job postings and requirements</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-secondary">
          <Plus className="h-4 w-4 mr-2" />
          Create Job Posting
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search jobs, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Product">Product</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Infrastructure">Infrastructure</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Job Listings */}
      <Tabs defaultValue="grid" className="w-full">
        <TabsList>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="grid" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg leading-tight">{job.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Building className="h-3 w-3 mr-1" />
                        {job.company}
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <DollarSign className="h-3 w-3 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {job.posted}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-3 w-3 mr-1" />
                      {job.applicants} applicants
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge className={getStatusColor(job.status)} variant="outline">
                      {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{job.type}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {job.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {job.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{job.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View & Match Candidates
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="list" className="space-y-4">
          <div className="space-y-2">
            {filteredJobs.map((job) => (
              <Card key={job.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{job.title}</h3>
                        <Badge className={getStatusColor(job.status)} variant="outline">
                          {job.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Building className="h-3 w-3 mr-1" />
                          {job.company}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {job.salary}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {job.applicants} applicants
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                        Match Candidates
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobDescriptions;