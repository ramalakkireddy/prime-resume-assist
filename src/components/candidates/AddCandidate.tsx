import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Upload, Plus, X, User, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AddCandidate = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedIn: "",
    github: "",
    experience: "",
    currentRole: "",
    expectedSalary: "",
    skills: [] as string[],
    bio: "",
    resumeFile: null as File | null
  });

  const [newSkill, setNewSkill] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf" || file.type.includes("document")) {
        setFormData(prev => ({ ...prev, resumeFile: file }));
        toast({
          title: "Resume uploaded",
          description: `${file.name} has been uploaded successfully.`
        });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document.",
          variant: "destructive"
        });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Candidate added successfully!",
      description: `${formData.firstName} ${formData.lastName} has been added to the candidate database.`
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      linkedIn: "",
      github: "",
      experience: "",
      currentRole: "",
      expectedSalary: "",
      skills: [],
      bio: "",
      resumeFile: null
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white">
          <User className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Add New Candidate</h1>
          <p className="text-muted-foreground">Create a comprehensive candidate profile</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Personal Information</span>
            </CardTitle>
            <CardDescription>Basic candidate details and contact information</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  className="pl-10"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="phone"
                  className="pl-10"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="location"
                  className="pl-10"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="City, State/Country"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedIn">LinkedIn Profile</Label>
              <div className="relative">
                <Linkedin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="linkedIn"
                  className="pl-10"
                  value={formData.linkedIn}
                  onChange={(e) => handleInputChange("linkedIn", e.target.value)}
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="github">GitHub Profile</Label>
              <div className="relative">
                <Github className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="github"
                  className="pl-10"
                  value={formData.github}
                  onChange={(e) => handleInputChange("github", e.target.value)}
                  placeholder="https://github.com/username"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Information</CardTitle>
            <CardDescription>Career details and experience level</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">0-1 years (Entry Level)</SelectItem>
                  <SelectItem value="2-3">2-3 years (Junior)</SelectItem>
                  <SelectItem value="4-6">4-6 years (Mid Level)</SelectItem>
                  <SelectItem value="7-10">7-10 years (Senior)</SelectItem>
                  <SelectItem value="10+">10+ years (Expert/Lead)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentRole">Current Role</Label>
              <Input
                id="currentRole"
                value={formData.currentRole}
                onChange={(e) => handleInputChange("currentRole", e.target.value)}
                placeholder="e.g. Senior React Developer"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="expectedSalary">Expected Salary Range</Label>
              <Input
                id="expectedSalary"
                value={formData.expectedSalary}
                onChange={(e) => handleInputChange("expectedSalary", e.target.value)}
                placeholder="e.g. $80k - $120k USD"
              />
            </div>
          </CardContent>
        </Card>

        {/* Skills & Technologies */}
        <Card>
          <CardHeader>
            <CardTitle>Skills & Technologies</CardTitle>
            <CardDescription>Add relevant technical skills and technologies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add a skill (e.g. React, Python, Node.js)"
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
              />
              <Button type="button" onClick={addSkill} variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="pr-1">
                  {skill}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 ml-2 hover:bg-transparent"
                    onClick={() => removeSkill(skill)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bio & Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
            <CardDescription>Brief overview of candidate's background and goals</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={formData.bio}
              onChange={(e) => handleInputChange("bio", e.target.value)}
              placeholder="Write a brief professional summary or bio..."
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>

        {/* Resume Upload */}
        <Card>
          <CardHeader>
            <CardTitle>Resume Upload</CardTitle>
            <CardDescription>Upload the candidate's current resume (PDF or Word document)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <Label htmlFor="resume" className="cursor-pointer">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Click to upload resume</p>
                  <p className="text-xs text-muted-foreground">PDF or Word document (max 10MB)</p>
                </div>
                <Input
                  id="resume"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                />
              </Label>
              {formData.resumeFile && (
                <div className="mt-4 p-3 bg-muted rounded-lg flex items-center justify-between">
                  <span className="text-sm font-medium">{formData.resumeFile.name}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setFormData(prev => ({ ...prev, resumeFile: null }))}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Submit Buttons */}
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline">Save as Draft</Button>
          <Button type="submit" className="bg-gradient-to-r from-primary to-secondary">
            Add Candidate
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCandidate;