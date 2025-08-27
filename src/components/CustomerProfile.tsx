"use client";

import { Clock, User, Bot, Phone, Mail, Calendar, X } from "lucide-react";
import { conversations } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
import { DrawerHeader, DrawerTitle } from "@/components/ui/drawer";

interface CustomerProfileProps {
  selectedConversation: number;
  onClose: () => void;
}

const CustomerProfile = ({
  selectedConversation,
  onClose,
}: CustomerProfileProps) => {
  const currentConversation = conversations.find(
    (c) => c.id === selectedConversation
  );

  if (!currentConversation) {
    return null;
  }

  // const getStatusColor = (status: string) => {
  //   switch (status) {
  //     case "ongoing-qa":
  //       return "bg-blue-100 text-blue-800";
  //     case "completed":
  //       return "bg-emerald-100 text-emerald-800";
  //     case "no_response":
  //       return "bg-red-100 text-red-800";
  //     case "interested":
  //       return "bg-yellow-100 text-yellow-800";
  //     default:
  //       return "bg-gray-100 text-gray-800";
  //   }
  // };

  return (
    <div className="w-full h-full bg-background overflow-y-auto">
      {/* Drawer Header with Title */}
      <DrawerHeader className="border-b border-border">
        <div className="flex items-center justify-between">
          <DrawerTitle>Customer Profile</DrawerTitle>
          <Button
            size="icon"
            variant="ghost"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </DrawerHeader>

      <div className="p-6">
        {/* Customer Header */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border-2 border-primary/20">
            {currentConversation.customer.avatar}
          </div>
          <h3 className="font-semibold text-foreground text-lg mb-1">
            {currentConversation.customer.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-3">
            {currentConversation.customer.phone}
          </p>
          <Badge variant="secondary" className="text-xs">
            {currentConversation.status.replace("_", " ")}
          </Badge>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <Button size="sm" variant="outline" className="h-9">
            <Phone className="w-3 h-3 mr-1" />
            Call
          </Button>
          <Button size="sm" variant="outline" className="h-9">
            <Mail className="w-3 h-3 mr-1" />
            Email
          </Button>
          <Button size="sm" variant="outline" className="h-9">
            <Calendar className="w-3 h-3 mr-1" />
            Schedule
          </Button>
        </div>

        {/* Tags */}
        <Card className="mb-6 gap-1 py-2">
          <CardHeader className="pb-0">
            <CardTitle className="text-sm text-muted-foreground">
              Tags
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {currentConversation.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conversation History */}
        <Card className="mb-6 gap-1 py-2">
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-medium text-foreground">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-foreground">Template sent</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <User className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-foreground">Customer replied</p>
                <p className="text-xs text-muted-foreground">5 minutes ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="mb-6 gap-1 py-2">
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-medium text-foreground flex items-center gap-2">
              <Bot className="w-4 h-4 text-primary" />
              AI Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-foreground">
                High purchase intent detected
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-foreground">Best contact time: 2-4 PM</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-foreground">
                Similar profiles convert at 85%
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-3">
          <Button className="w-full">Assign to Human Agent</Button>
          <Button variant="outline" className="w-full">
            Add Note
          </Button>
          <Button variant="outline" className="w-full">
            Schedule Callback
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
