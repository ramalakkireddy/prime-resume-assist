import { Bell, Search, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="h-16 border-b border-border bg-card shadow-sm">
      <div className="flex h-full items-center justify-between px-6">
        {/* Logo and Search */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">NT</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">NetPrime TalentFlow</h1>
              <p className="text-xs text-muted-foreground">Intelligent Recruitment Suite</p>
            </div>
          </div>
          
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search candidates, jobs, or resumes..."
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary/20"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Notification Bell */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-destructive flex items-center justify-center">
              <span className="text-xs text-destructive-foreground font-bold">3</span>
            </span>
          </Button>
          
          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/01.png" alt="@recruiter" />
                  <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">SJ</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Sarah Johnson</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    Senior Recruiter • Admin
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>My Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Account Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;