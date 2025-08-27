"use client";

import {
  Phone,
  Star,
  Archive,
  MoreHorizontal,
  Bot,
  Paperclip,
  Smile,
  Send,
  Zap,
  CheckCircle,
  User,
} from "lucide-react";
import { conversations, messages } from "@/data/mockData";
import TypingIndicator from "./TypingIndicator";
import SmartInsight from "./SmartInsight";
import SmartSuggestion from "./SmartSuggestion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

interface ChatAreaProps {
  selectedConversation: number;
  message: string;
  onMessageChange: (message: string) => void;
  isTyping: boolean;
  onOpenDrawer: () => void;
}

const ChatArea = ({
  selectedConversation,
  message,
  onMessageChange,
  isTyping,
  onOpenDrawer,
}: ChatAreaProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentConversation = conversations.find(
    (c) => c.id === selectedConversation
  );

  // Auto-scroll to bottom when messages change or typing starts
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  if (!currentConversation) {
    return (
      <div className="flex-1 flex items-center justify-center bg-muted/20">
        <Card className="text-center border-0 shadow-none bg-transparent">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">💬</div>
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              No conversation selected
            </h3>
            <p className="text-muted-foreground">
              Choose a conversation from the sidebar to start messaging
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

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

  return (
    <div className="flex-1 flex flex-col bg-background min-h-0">
      {/* Chat Header */}
      <div className="flex-shrink-0 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-xl border-2 border-primary/20">
                  {currentConversation.customer.avatar}
                </div>
                <div
                  className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-background ${
                    currentConversation.customer.status === "online"
                      ? "bg-emerald-500"
                      : currentConversation.customer.status === "away"
                      ? "bg-yellow-500"
                      : "bg-gray-400"
                  }`}
                ></div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold text-foreground text-lg">
                    {currentConversation.customer.name}
                  </h2>
                  {currentConversation.agent === "AI" && (
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <Bot className="w-3 h-3" />
                      AI Agent
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {currentConversation.customer.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <SmartInsight />
              <Button
                size="icon"
                variant="ghost"
                className="h-9 w-9"
                onClick={onOpenDrawer}
                title="View Customer Profile"
              >
                <User className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-9 w-9">
                <Phone className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-9 w-9">
                <Star className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-9 w-9">
                <Archive className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-9 w-9">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              className="bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 h-8 px-3"
            >
              Mark as Paid
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 h-8 px-3"
            >
              Schedule Follow-up
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 h-8 px-3"
            >
              Add to Pipeline
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-muted/20 min-h-0">
        <div className="space-y-6 max-w-5xl mx-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "customer" ? "justify-start" : "justify-end"
              }`}
            >
              <div className="flex flex-col max-w-xs lg:max-w-md">
                {/* Message Bubble */}
                <div
                  className={`${
                    message.sender === "customer"
                      ? "bg-background border border-border shadow-sm rounded-2xl rounded-bl-md"
                      : message.sender === "ai"
                      ? "bg-primary text-primary-foreground rounded-2xl rounded-br-md"
                      : "bg-muted text-foreground rounded-2xl rounded-br-md"
                  } p-4 shadow-sm`}
                >
                  {/* Template Header */}
                  {message.isTemplate && (
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/20">
                      <Zap className="w-3 h-3" />
                      <span className="text-xs opacity-75">
                        Template: {message.templateName || "Auto-response"}
                      </span>
                    </div>
                  )}

                  {/* Message Content */}
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">
                    {message.content}
                  </p>
                </div>

                {/* Message Meta */}
                <div
                  className={`flex items-center gap-2 mt-2 ${
                    message.sender === "customer"
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >
                  <span className="text-xs text-muted-foreground">
                    {message.time}
                  </span>
                  {message.sender !== "customer" && (
                    <CheckCircle className="w-3 h-3 text-muted-foreground" />
                  )}
                </div>
              </div>
            </div>
          ))}
          {isTyping && <TypingIndicator />}

          {/* Invisible div for auto-scroll */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="flex-shrink-0 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="p-4">
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <SmartSuggestion text="Send pricing sheet" />
                <SmartSuggestion text="Schedule demo" />
              </div>
              <div className="flex items-center gap-3">
                <Button size="icon" variant="ghost" className="h-9 w-9">
                  <Paperclip className="w-4 h-4" />
                </Button>
                <div className="flex-1 relative">
                  <Input
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => onMessageChange(e.target.value)}
                    className="pr-12 h-11 text-base"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
                  >
                    <Smile className="w-4 h-4" />
                  </Button>
                </div>
                <Button
                  size="icon"
                  className="bg-primary hover:bg-primary/90 h-11 w-11"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
