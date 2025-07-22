import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Download, 
  Eye, 
  Star, 
  Filter, 
  Upload,
  FileText,
  Calendar,
  User,
  Briefcase,
  MapPin,
  MoreVertical,
  Edit,
  Trash2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ResumeBank = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [skillFilter, setSkillFilter] = useState("all");
  const [experienceFilter, setExperienceFilter] = useState("all");

  const resumes = [
    {
      id: 1,
      candidateName: "Sarah Chen",
      title: "Senior React Developer",
      email: "sarah.chen@email.com",
      location: "San Francisco, CA",
      experience: "5-7 years",
      lastUpdated: "2 days ago",
      uploadDate: "Jan 15, 2024",
      fileSize: "2.3 MB",
      skills: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
      rating: 4.8,
      isStarred: true,
      resumeVersion: "v2.1",
      status: "active"
    },
    {
      id: 2,
      candidateName: "Marcus Johnson",
      title: "DevOps Engineer",
      email: "marcus.j@email.com",
      location: "Remote",
      experience: "3-5 years",
      lastUpdated: "5 days ago",
      uploadDate: "Jan 12, 2024",
      fileSize: "1.8 MB",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Python"],
      rating: 4.6,
      isStarred: false,
      resumeVersion: "v1.3",
      status: "active"
    },
    {
      id: 3,
      candidateName: "Emily Rodriguez",
      title: "UX/UI Designer",
      email: "emily.rod@email.com",
      location: "New York, NY",
      experience: "2-3 years",
      lastUpdated: "1 week ago",
      uploadDate: "Jan 10, 2024",
      fileSize: "3.1 MB",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "CSS"],
      rating: 4.9,
      isStarred: true,
      resumeVersion: "v1.7",
      status: "active"
    },
    {
      id: 4,
      candidateName: "David Kim",
      title: "Data Scientist",
      email: "david.kim@email.com",
      location: "Boston, MA",
      experience: "7-10 years",
      lastUpdated: "3 days ago",
      uploadDate: "Jan 8, 2024",
      fileSize: "2.7 MB",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "R"],
      rating: 4.7,
      isStarred: false,
      resumeVersion: "v3.2",
      status: "archived"
    }
  ];

  const filteredResumes = resumes.filter(resume => {
    const matchesSearch = resume.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resume.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resume.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSkill = skillFilter === "all" || resume.skills.some(skill => skill.toLowerCase().includes(skillFilter.toLowerCase()));
    const matchesExperience = experienceFilter === "all" || resume.experience === experienceFilter;
    
    return matchesSearch && matchesSkill && matchesExperience;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500/10 text-green-700 border-green-200";
      case "archived": return "bg-gray-500/10 text-gray-700 border-gray-200";
      default: return "bg-blue-500/10 text-blue-700 border-blue-200";
    }
  };

  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").toUpperCase();
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Resume Bank</h1>
          <p className="text-muted-foreground">Browse and manage candidate resumes</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-secondary">
          <Upload className="h-4 w-4 mr-2" />
          Upload Resume
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">247</p>
                <p className="text-xs text-muted-foreground">Total Resumes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">42</p>
                <p className="text-xs text-muted-foreground">Starred</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Upload className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">18</p>
                <p className="text-xs text-muted-foreground">This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Eye className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">1.2k</p>
                <p className="text-xs text-muted-foreground">Views</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search candidates, titles, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={skillFilter} onValueChange={setSkillFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Skills" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="node">Node.js</SelectItem>
                <SelectItem value="aws">AWS</SelectItem>
                <SelectItem value="docker">Docker</SelectItem>
              </SelectContent>
            </Select>
            <Select value={experienceFilter} onValueChange={setExperienceFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Experience</SelectItem>
                <SelectItem value="0-2 years">0-2 years</SelectItem>
                <SelectItem value="2-3 years">2-3 years</SelectItem>
                <SelectItem value="3-5 years">3-5 years</SelectItem>
                <SelectItem value="5-7 years">5-7 years</SelectItem>
                <SelectItem value="7-10 years">7-10 years</SelectItem>
                <SelectItem value="10+ years">10+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Resume List */}
      <Tabs defaultValue="grid" className="w-full">
        <TabsList>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="grid" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredResumes.map((resume) => (
              <Card key={resume.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`/avatars/candidate-${resume.id}.png`} />
                        <AvatarFallback>{getInitials(resume.candidateName)}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-sm leading-tight">{resume.candidateName}</h3>
                        <p className="text-sm text-muted-foreground">{resume.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Star className={`h-4 w-4 ${resume.isStarred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Resume
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Archive
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      {resume.location}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Briefcase className="h-3 w-3 mr-1" />
                      {resume.experience}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      Updated {resume.lastUpdated}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge className={getStatusColor(resume.status)} variant="outline">
                      {resume.status}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{resume.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {resume.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {resume.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{resume.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-secondary">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="list" className="space-y-4">
          <div className="space-y-2">
            {filteredResumes.map((resume) => (
              <Card key={resume.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/avatars/candidate-${resume.id}.png`} />
                        <AvatarFallback>{getInitials(resume.candidateName)}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{resume.candidateName}</h3>
                          <Badge className={getStatusColor(resume.status)} variant="outline">
                            {resume.status}
                          </Badge>
                          {resume.isStarred && <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{resume.title}</span>
                          <span className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {resume.location}
                          </span>
                          <span className="flex items-center">
                            <Briefcase className="h-3 w-3 mr-1" />
                            {resume.experience}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {resume.lastUpdated}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 mr-4">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{resume.rating}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                        <Download className="h-4 w-4 mr-1" />
                        Download
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

export default ResumeBank;