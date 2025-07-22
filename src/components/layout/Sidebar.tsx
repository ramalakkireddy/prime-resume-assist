import { 
  Home, 
  Users, 
  FileText, 
  Briefcase, 
  BarChart3, 
  MessageSquare, 
  Settings,
  PlusCircle,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const [isExpanded] = useState(true);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "candidates", label: "Candidates", icon: Users },
    { id: "jobs", label: "Job Descriptions", icon: Briefcase },
    { id: "resumes", label: "Resume Bank", icon: FileText },
    { id: "ai-match", label: "AI Matching", icon: Zap },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "messages", label: "Messages", icon: MessageSquare },
  ];

  const bottomItems = [
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className={cn(
      "h-full border-r border-border bg-card flex flex-col transition-all duration-300",
      isExpanded ? "w-64" : "w-16"
    )}>
      {/* Quick Actions */}
      <div className="p-4 border-b border-border">
        <Button 
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          onClick={() => onTabChange("add-candidate")}
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          {isExpanded && "Add Candidate"}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start h-11 transition-all duration-200",
                isActive && "bg-primary/10 text-primary hover:bg-primary/15",
                !isActive && "hover:bg-muted/50"
              )}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className={cn("h-4 w-4", isExpanded && "mr-3")} />
              {isExpanded && item.label}
            </Button>
          );
        })}
      </nav>

      {/* Bottom Items */}
      <div className="p-4 border-t border-border">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start h-11",
                isActive && "bg-primary/10 text-primary",
                !isActive && "hover:bg-muted/50"
              )}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className={cn("h-4 w-4", isExpanded && "mr-3")} />
              {isExpanded && item.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;