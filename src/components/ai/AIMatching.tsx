import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Zap, Upload, FileText, Target, Sparkles, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AIMatching = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [matchResults, setMatchResults] = useState<any[]>([]);
  const { toast } = useToast();

  const sampleJobDescription = `Senior React Developer - Remote
  
We're looking for an experienced React developer to join our dynamic team. 

Requirements:
- 5+ years of React.js experience
- Strong TypeScript skills
- Experience with Next.js and modern build tools
- Knowledge of state management (Redux, Zustand)
- Familiarity with testing frameworks (Jest, React Testing Library)
- Experience with AWS or cloud platforms
- Strong communication skills

Nice to have:
- GraphQL experience
- Node.js backend knowledge
- CI/CD pipeline experience`;

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) {
      toast({
        title: "Job description required",
        description: "Please paste a job description to start matching.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);

    // Simulate AI analysis
    setTimeout(() => {
      const mockResults = [
        {
          candidate: "John Smith",
          position: "Senior React Developer",
          overallScore: 92,
          skills: [
            { name: "React", required: true, hasSkill: true, proficiency: 95 },
            { name: "TypeScript", required: true, hasSkill: true, proficiency: 88 },
            { name: "Next.js", required: true, hasSkill: true, proficiency: 85 },
            { name: "Redux", required: true, hasSkill: true, proficiency: 90 },
            { name: "Jest", required: true, hasSkill: false, proficiency: 0 },
            { name: "AWS", required: true, hasSkill: true, proficiency: 75 },
            { name: "GraphQL", required: false, hasSkill: true, proficiency: 80 },
          ],
          missingSkills: ["Jest", "React Testing Library"],
          strengths: ["Excellent React expertise", "Strong TypeScript skills", "GraphQL bonus"],
          improvements: ["Add testing framework experience", "Highlight cloud platform projects"]
        },
        {
          candidate: "Sarah Wilson",
          position: "Full Stack Engineer",
          overallScore: 87,
          skills: [
            { name: "React", required: true, hasSkill: true, proficiency: 85 },
            { name: "TypeScript", required: true, hasSkill: true, proficiency: 92 },
            { name: "Next.js", required: true, hasSkill: false, proficiency: 0 },
            { name: "Redux", required: true, hasSkill: true, proficiency: 88 },
            { name: "Jest", required: true, hasSkill: true, proficiency: 90 },
            { name: "AWS", required: true, hasSkill: true, proficiency: 95 },
            { name: "Node.js", required: false, hasSkill: true, proficiency: 95 },
          ],
          missingSkills: ["Next.js"],
          strengths: ["Strong full-stack background", "Excellent AWS knowledge", "Testing expertise"],
          improvements: ["Add Next.js experience", "Emphasize React component architecture"]
        }
      ];

      setMatchResults(mockResults);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete!",
        description: `Found ${mockResults.length} candidate matches with detailed insights.`,
      });
    }, 3000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 80) return "text-warning";
    return "text-muted-foreground";
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return "bg-success/10";
    if (score >= 80) return "bg-warning/10";
    return "bg-muted/10";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Resume Matching</h1>
          <p className="text-muted-foreground">Intelligent candidate-job matching powered by AI</p>
        </div>
        <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI Powered</span>
        </div>
      </div>

      {/* Job Description Input */}
      <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Job Description</span>
          </CardTitle>
          <CardDescription>
            Paste the job description to find the best matching candidates
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Paste the job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="min-h-32 resize-none bg-background/50"
          />
          <div className="flex justify-between items-center">
            <Button 
              variant="outline" 
              onClick={() => setJobDescription(sampleJobDescription)}
              className="text-sm"
            >
              Use Sample Job Description
            </Button>
            <Button 
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              {isAnalyzing ? (
                <>
                  <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4 mr-2" />
                  Analyze & Match
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="font-medium">AI Analysis in Progress</span>
              </div>
              <Progress value={75} className="h-2" />
              <div className="text-sm text-muted-foreground">
                Processing job requirements and matching against candidate profiles...
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Match Results */}
      {matchResults.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Match Results</h2>
            <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
              {matchResults.length} Matches Found
            </Badge>
          </div>

          {matchResults.map((result, index) => (
            <Card key={index} className="border-0 bg-gradient-to-br from-card to-muted/20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{result.candidate}</CardTitle>
                    <CardDescription>{result.position}</CardDescription>
                  </div>
                  <div className={`text-right p-3 rounded-lg ${getScoreBg(result.overallScore)}`}>
                    <div className={`text-2xl font-bold ${getScoreColor(result.overallScore)}`}>
                      {result.overallScore}%
                    </div>
                    <div className="text-xs text-muted-foreground">Match Score</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Skills Analysis */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Target className="h-4 w-4 mr-2" />
                    Skills Analysis
                  </h4>
                  <div className="grid gap-2">
                    {result.skills.map((skill: any, skillIndex: number) => (
                      <div key={skillIndex} className="flex items-center justify-between p-2 rounded-lg bg-muted/20">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-sm">{skill.name}</span>
                          {skill.required && <Badge variant="outline" className="text-xs">Required</Badge>}
                          {skill.hasSkill && <CheckCircle className="h-3 w-3 text-success" />}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress value={skill.proficiency} className="w-16 h-1" />
                          <span className="text-xs text-muted-foreground w-8">{skill.proficiency}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strengths and Improvements */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-success">Strengths</h4>
                    <ul className="space-y-1">
                      {result.strengths.map((strength: string, idx: number) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <CheckCircle className="h-3 w-3 text-success mr-2 mt-0.5 flex-shrink-0" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-warning">Suggested Improvements</h4>
                    <ul className="space-y-1">
                      {result.improvements.map((improvement: string, idx: number) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <Target className="h-3 w-3 text-warning mr-2 mt-0.5 flex-shrink-0" />
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-4 border-t border-border/50">
                  <Button variant="outline" className="flex-1">
                    View Full Profile
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Enhance Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isAnalyzing && matchResults.length === 0 && (
        <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
          <CardContent className="p-12 text-center">
            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Ready to Find Perfect Matches</h3>
            <p className="text-muted-foreground mb-4">
              Paste a job description above to start AI-powered candidate matching
            </p>
            <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Sparkles className="h-3 w-3 mr-1" />
                AI-Powered Analysis
              </div>
              <div className="flex items-center">
                <Target className="h-3 w-3 mr-1" />
                Skill Matching
              </div>
              <div className="flex items-center">
                <Upload className="h-3 w-3 mr-1" />
                Resume Enhancement
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AIMatching;