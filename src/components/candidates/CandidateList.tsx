import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Filter, Plus, Mail, Phone, MapPin, Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CandidateList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSkill, setFilterSkill] = useState("");

  const candidates = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      position: "Senior React Developer",
      experience: "5+ years",
      skills: ["React", "TypeScript", "Node.js", "GraphQL"],
      rating: 4.8,
      status: "Available",
      avatar: "/avatars/john.png",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      position: "Full Stack Engineer",
      experience: "7+ years",
      skills: ["Python", "Django", "React", "AWS"],
      rating: 4.9,
      status: "Interviewing",
      avatar: "/avatars/sarah.png",
      lastActive: "1 day ago"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@email.com",
      phone: "+1 (555) 345-6789",
      location: "Austin, TX",
      position: "DevOps Engineer",
      experience: "4+ years",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
      rating: 4.7,
      status: "Available",
      avatar: "/avatars/mike.png",
      lastActive: "3 hours ago"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+1 (555) 456-7890",
      location: "Seattle, WA",
      position: "Data Scientist",
      experience: "6+ years",
      skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
      rating: 4.9,
      status: "Hired",
      avatar: "/avatars/emily.png",
      lastActive: "1 week ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-success/10 text-success border-success/20";
      case "Interviewing":
        return "bg-warning/10 text-warning border-warning/20";
      case "Hired":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const filteredCandidates = candidates.filter(candidate => 
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Candidates</h1>
          <p className="text-muted-foreground">Manage your talent pool</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
          <Plus className="h-4 w-4 mr-2" />
          Add Candidate
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search candidates by name, position, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50"
              />
            </div>
            <Select value={filterSkill} onValueChange={setFilterSkill}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by skill" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="node">Node.js</SelectItem>
                <SelectItem value="aws">AWS</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Candidates Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCandidates.map((candidate) => (
          <Card key={candidate.id} className="border-0 bg-gradient-to-br from-card to-muted/20 hover:shadow-lg transition-all duration-200 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={candidate.avatar} />
                    <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{candidate.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{candidate.position}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(candidate.status)}>
                  {candidate.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-3 w-3 mr-2" />
                  {candidate.email}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-3 w-3 mr-2" />
                  {candidate.phone}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-2" />
                  {candidate.location}
                </div>
              </div>

              {/* Experience and Rating */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{candidate.experience}</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-warning text-warning" />
                  <span className="text-sm font-medium">{candidate.rating}</span>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">SKILLS</p>
                <div className="flex flex-wrap gap-1">
                  {candidate.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {candidate.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{candidate.skills.length - 3}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button size="sm" className="flex-1">
                  Match Jobs
                </Button>
              </div>

              {/* Last Active */}
              <p className="text-xs text-muted-foreground text-center">
                Last active {candidate.lastActive}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredCandidates.length === 0 && (
        <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
          <CardContent className="p-12 text-center">
            <div className="mx-auto w-24 h-24 bg-muted/20 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No candidates found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search criteria</p>
            <Button variant="outline">Clear filters</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CandidateList;