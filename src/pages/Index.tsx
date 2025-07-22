import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/components/dashboard/Dashboard";
import CandidateList from "@/components/candidates/CandidateList";
import AIMatching from "@/components/ai/AIMatching";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "candidates":
        return <CandidateList />;
      case "ai-match":
        return <AIMatching />;
      case "jobs":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold">Job Descriptions</h1>
            <p className="text-muted-foreground">Manage job postings and requirements</p>
          </div>
        );
      case "resumes":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold">Resume Bank</h1>
            <p className="text-muted-foreground">Browse and manage candidate resumes</p>
          </div>
        );
      case "analytics":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground">Recruitment performance insights</p>
          </div>
        );
      case "messages":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold">Messages</h1>
            <p className="text-muted-foreground">Communication center</p>
          </div>
        );
      case "settings":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">System configuration</p>
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
