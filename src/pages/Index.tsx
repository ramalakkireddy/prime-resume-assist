import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/components/dashboard/Dashboard";
import CandidateList from "@/components/candidates/CandidateList";
import AddCandidate from "@/components/candidates/AddCandidate";
import AIMatching from "@/components/ai/AIMatching";
import JobDescriptions from "@/components/jobs/JobDescriptions";
import ResumeBank from "@/components/resumes/ResumeBank";
import Analytics from "@/components/analytics/Analytics";
import Messages from "@/components/messages/Messages";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "candidates":
        return <CandidateList />;
      case "add-candidate":
        return <AddCandidate />;
      case "ai-match":
        return <AIMatching />;
      case "jobs":
        return <JobDescriptions />;
      case "resumes":
        return <ResumeBank />;
      case "analytics":
        return <Analytics />;
      case "messages":
        return <Messages />;
      case "settings":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">System configuration and user management</p>
            <div className="mt-6 space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">User Management</h3>
                <p className="text-muted-foreground text-sm">Manage recruiter accounts and permissions</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">System Configuration</h3>
                <p className="text-muted-foreground text-sm">Configure application settings and integrations</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Security & Compliance</h3>
                <p className="text-muted-foreground text-sm">Data privacy and security settings</p>
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
