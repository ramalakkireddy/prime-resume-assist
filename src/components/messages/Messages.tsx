import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Send, 
  Plus, 
  MessageCircle, 
  Bell, 
  Users, 
  Clock,
  Check,
  CheckCheck,
  Phone,
  Video,
  MoreVertical,
  Paperclip
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageInput, setMessageInput] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior React Developer",
      lastMessage: "Thanks for the update on the TechCorp position!",
      time: "2 min ago",
      unread: 2,
      status: "online",
      avatar: "/avatars/sarah.png"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "DevOps Engineer",
      lastMessage: "Could you send me the job description?",
      time: "1 hour ago",
      unread: 0,
      status: "offline",
      avatar: "/avatars/marcus.png"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer",
      lastMessage: "Perfect! When can we schedule the interview?",
      time: "3 hours ago",
      unread: 1,
      status: "away",
      avatar: "/avatars/emily.png"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Data Scientist",
      lastMessage: "I've updated my resume as requested.",
      time: "1 day ago",
      unread: 0,
      status: "offline",
      avatar: "/avatars/david.png"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah Chen",
      content: "Hi! I wanted to follow up on the React Developer position at TechCorp. Any updates?",
      time: "10:30 AM",
      isMe: false,
      status: "delivered"
    },
    {
      id: 2,
      sender: "You",
      content: "Hi Sarah! Great news - they want to schedule a technical interview with you. Are you available this Thursday or Friday?",
      time: "10:45 AM",
      isMe: true,
      status: "read"
    },
    {
      id: 3,
      sender: "Sarah Chen",
      content: "That's fantastic! I'm available both days. Thursday afternoon would be perfect if possible.",
      time: "10:47 AM",
      isMe: false,
      status: "delivered"
    },
    {
      id: 4,
      sender: "You", 
      content: "Perfect! I'll coordinate with them and send you the meeting details by EOD. The interview will cover React, TypeScript, and system design.",
      time: "10:50 AM",
      isMe: true,
      status: "read"
    },
    {
      id: 5,
      sender: "Sarah Chen",
      content: "Thanks for the update on the TechCorp position!",
      time: "11:02 AM",
      isMe: false,
      status: "delivered"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "message",
      title: "New message from Sarah Chen",
      description: "Thanks for the update on the TechCorp position!",
      time: "2 min ago",
      read: false
    },
    {
      id: 2,
      type: "interview",
      title: "Interview scheduled",
      description: "Marcus Johnson - DevOps position at CloudTech",
      time: "1 hour ago",
      read: false
    },
    {
      id: 3,
      type: "application",
      title: "New application received",
      description: "Full Stack Developer position",
      time: "2 hours ago",
      read: true
    },
    {
      id: 4,
      type: "reminder",
      title: "Follow-up reminder",
      description: "Check on Emily Rodriguez application status",
      time: "3 hours ago",
      read: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "away": return "bg-yellow-500";
      case "offline": return "bg-gray-400";
      default: return "bg-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "read": return <CheckCheck className="h-3 w-3 text-blue-500" />;
      case "delivered": return <Check className="h-3 w-3 text-gray-400" />;
      default: return <Clock className="h-3 w-3 text-gray-400" />;
    }
  };

  const sendMessage = () => {
    if (messageInput.trim()) {
      // Here you would send the message to your backend
      console.log("Sending message:", messageInput);
      setMessageInput("");
    }
  };

  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").toUpperCase();
  };

  return (
    <div className="p-6 h-[calc(100vh-7rem)]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Messages</h1>
          <p className="text-muted-foreground">Communication center for candidates and team</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-secondary">
          <Plus className="h-4 w-4 mr-2" />
          New Message
        </Button>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 h-full">
        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <Tabs defaultValue="conversations" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="conversations">Messages</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="conversations" className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>

              {/* Conversations List */}
              <div className="space-y-2 h-[500px] overflow-y-auto">
                {conversations.map((conversation) => (
                  <Card 
                    key={conversation.id} 
                    className={`cursor-pointer transition-colors hover:bg-muted/50 ${
                      selectedConversation === conversation.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={conversation.avatar} />
                            <AvatarFallback>{getInitials(conversation.name)}</AvatarFallback>
                          </Avatar>
                          <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background ${getStatusColor(conversation.status)}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium truncate">{conversation.name}</h4>
                            <span className="text-xs text-muted-foreground">{conversation.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{conversation.role}</p>
                          <p className="text-sm truncate">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread > 0 && (
                          <Badge variant="default" className="min-w-[20px] h-5 text-xs">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <div className="space-y-2 h-[500px] overflow-y-auto">
                {notifications.map((notification) => (
                  <Card key={notification.id} className={`${!notification.read ? 'border-primary/50 bg-primary/5' : ''}`}>
                    <CardContent className="p-3">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-full bg-primary/10">
                          {notification.type === "message" && <MessageCircle className="h-4 w-4 text-primary" />}
                          {notification.type === "interview" && <Users className="h-4 w-4 text-primary" />}
                          {notification.type === "application" && <Bell className="h-4 w-4 text-primary" />}
                          {notification.type === "reminder" && <Clock className="h-4 w-4 text-primary" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm">{notification.title}</h4>
                          <p className="text-xs text-muted-foreground">{notification.description}</p>
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                        {!notification.read && <div className="w-2 h-2 rounded-full bg-primary" />}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-8">
          <Card className="h-full flex flex-col">
            {/* Chat Header */}
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/avatars/sarah.png" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background bg-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Chen</h3>
                    <p className="text-sm text-muted-foreground">Senior React Developer • Online</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Video className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Mute Conversation</DropdownMenuItem>
                      <DropdownMenuItem>Archive</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 p-0 overflow-y-auto">
              <div className="p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] ${message.isMe ? 'order-2' : 'order-1'}`}>
                      <div className={`rounded-lg p-3 ${
                        message.isMe 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <div className={`flex items-center space-x-1 mt-1 text-xs text-muted-foreground ${
                        message.isMe ? 'justify-end' : 'justify-start'
                      }`}>
                        <span>{message.time}</span>
                        {message.isMe && getStatusIcon(message.status)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>

            {/* Message Input */}
            <div className="border-t p-4">
              <div className="flex items-end space-x-2">
                <Button variant="outline" size="sm">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <div className="flex-1">
                  <Textarea
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type your message..."
                    className="min-h-[40px] max-h-[120px] resize-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                  />
                </div>
                <Button 
                  onClick={sendMessage}
                  disabled={!messageInput.trim()}
                  className="bg-gradient-to-r from-primary to-secondary"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;