"use client";

import { Search, Plus, Bot, MessageCircle } from "lucide-react";
import { conversations } from "@/data/mockData";
// import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ConversationsListProps {
  selectedConversation: number;
  onSelectConversation: (id: number) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const ConversationsList = ({
  selectedConversation,
  onSelectConversation,
  searchQuery,
  onSearchChange,
}: ConversationsListProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "ongoing-qa":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-emerald-100 text-emerald-800";
      case "no_response":
        return "bg-red-100 text-red-800";
      case "interested":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "whatsapp":
        return "💬";
      case "instagram":
        return "📷";
      case "facebook":
        return "📘";
      default:
        return "💬";
    }
  };

  return (
    <div className="w-80 border-r border-border flex flex-col bg-background">
      {/* Header */}
      <div className="p-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-foreground">
            Conversations
          </h1>
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-9"
          />
        </div>

        {/* Quick Filters */}
        <div className="flex gap-2">
          <Badge variant="default" className="text-xs px-2 py-1">
            All
          </Badge>
          <Badge variant="outline" className="text-xs px-2 py-1">
            Unread
          </Badge>
          <Badge variant="outline" className="text-xs px-2 py-1">
            AI
          </Badge>
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`group px-3 py-2 cursor-pointer transition-all duration-200 ${
              selectedConversation === conversation.id
                ? "bg-accent/80 border-r-2 border-r-primary"
                : "hover:bg-accent/30"
            }`}
            onClick={() => onSelectConversation(conversation.id)}
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-lg border-2 border-primary/20">
                  {conversation.customer.avatar}
                </div>
                <div
                  className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-background ${
                    conversation.customer.status === "online"
                      ? "bg-emerald-500"
                      : conversation.customer.status === "away"
                      ? "bg-yellow-500"
                      : "bg-gray-400"
                  }`}
                ></div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <h3 className="font-medium text-foreground truncate text-sm">
                      {conversation.customer.name}
                    </h3>
                    <span className="text-xs flex-shrink-0">
                      {getChannelIcon(conversation.channel)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
                    {conversation.agent === "AI" && (
                      <Badge
                        variant="secondary"
                        className="text-xs px-1.5 py-0.5 h-5"
                      >
                        <Bot className="w-3 h-3 mr-1" />
                        AI
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {conversation.time}
                    </span>
                    {conversation.unread > 0 && (
                      <Badge
                        variant="destructive"
                        className="w-5 h-5 p-0 text-xs flex items-center justify-center"
                      >
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Last Message */}
                <p className="text-sm text-muted-foreground truncate mb-2 leading-relaxed">
                  {conversation.lastMessage}
                </p>

                {/* Status and Tags */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge
                    className={`text-xs px-2 py-0.5 h-5 font-normal ${getStatusColor(
                      conversation.status
                    )}`}
                  >
                    {conversation.status.replace("_", " ")}
                  </Badge>
                  <div className="flex gap-1">
                    {conversation.tags.slice(0, 2).map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs px-1.5 py-0.5 h-5 font-normal bg-muted/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {conversation.tags.length > 2 && (
                      <Badge
                        variant="outline"
                        className="text-xs px-1.5 py-0.5 h-5 font-normal bg-muted/50"
                      >
                        +{conversation.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Menu */}
              {/* <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle menu actions
                }}
              >
                <MoreHorizontal className="w-3 h-3" />
              </Button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {conversations.length === 0 && (
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-sm font-medium text-foreground mb-2">
              No conversations
            </h3>
            <p className="text-xs text-muted-foreground">
              Start a new conversation to get started
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationsList;
