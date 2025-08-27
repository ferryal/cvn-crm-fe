"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Play,
  Pause,
  Eye,
  Edit3,
  ChevronDown,
  Filter,
  MoreHorizontal,
  Zap,
  Clock,
  Target,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const AutomationsView = () => {
  // const [selectedAutomation, setSelectedAutomation] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const automations = [
    {
      id: 1,
      name: "Lead Follow-up Sequence",
      status: "active",
      trigger: "Customer Never Engaged (24h)",
      actions: 3,
      successRate: 78,
      runs: 1247,
      lastRun: "2 mins ago",
      performance: { converted: 156, engaged: 892 },
      color: "emerald",
    },
    {
      id: 2,
      name: "Abandoned Cart Recovery",
      status: "active",
      trigger: "Conversation Inactivity (24h)",
      actions: 2,
      successRate: 65,
      runs: 834,
      lastRun: "5 mins ago",
      performance: { converted: 89, engaged: 543 },
      color: "blue",
    },
    {
      id: 3,
      name: "Welcome Onboarding",
      status: "paused",
      trigger: "New Customer Registration",
      actions: 4,
      successRate: 92,
      runs: 2156,
      lastRun: "1 hour ago",
      performance: { converted: 234, engaged: 1987 },
      color: "purple",
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "active"
      ? "bg-emerald-100 text-emerald-800"
      : "bg-gray-100 text-gray-600";
  };

  const getPerformanceColor = (rate: number) => {
    if (rate >= 80) return "text-emerald-600";
    if (rate >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      emerald: "bg-emerald-500",
      blue: "bg-blue-500",
      purple: "bg-purple-500",
    };
    return colorMap[color] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">
                Automations
              </h1>
              <p className="text-muted-foreground mt-1">
                Scale your conversations with intelligent workflows
              </p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Automation
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mt-8">
            <Card className="py-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Active Automations
                    </p>
                    <p className="text-2xl font-semibold text-foreground mt-1">
                      12
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="py-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Messages Sent Today
                    </p>
                    <p className="text-2xl font-semibold text-foreground mt-1">
                      2,847
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="py-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Avg Response Rate
                    </p>
                    <p className="text-2xl font-semibold text-foreground mt-1">
                      73%
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="py-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Time Saved</p>
                    <p className="text-2xl font-semibold text-foreground mt-1">
                      47h
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="px-8 py-6">
        {/* Search and Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search automations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            All Status
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Automations List */}
        <div className="space-y-4">
          {automations.map((automation) => (
            <Card
              key={automation.id}
              className="hover:shadow-sm transition-shadow py-0"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-3 h-3 rounded-full ${getColorClass(
                          automation.color
                        )}`}
                      ></div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {automation.name}
                      </h3>
                      <Badge
                        variant={
                          automation.status === "active"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {automation.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">
                          Trigger
                        </p>
                        <p className="text-sm text-foreground">
                          {automation.trigger}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">
                          Actions
                        </p>
                        <p className="text-sm text-foreground">
                          {automation.actions} steps
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">
                          Success Rate
                        </p>
                        <p
                          className={`text-sm font-medium ${getPerformanceColor(
                            automation.successRate
                          )}`}
                        >
                          {automation.successRate}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">
                          Total Runs
                        </p>
                        <p className="text-sm text-foreground">
                          {automation.runs.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span>Last run: {automation.lastRun}</span>
                        <span>
                          Converted: {automation.performance.converted}
                        </span>
                        <span>Engaged: {automation.performance.engaged}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button size="icon" variant="ghost">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          {automation.status === "active" ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4" />
                          )}
                        </Button>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Start Templates */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Quick Start Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Lead Nurturing",
                desc: "Convert cold leads with personalized sequences",
                icon: "🎯",
              },
              {
                name: "Customer Onboarding",
                desc: "Guide new customers through your product",
                icon: "👋",
              },
              {
                name: "Win-back Campaign",
                desc: "Re-engage inactive customers",
                icon: "🔄",
              },
            ].map((template, idx) => (
              <Card
                key={idx}
                className="hover:shadow-sm transition-shadow cursor-pointer py-0"
              >
                <CardContent className="p-6">
                  <div className="text-2xl mb-3">{template.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {template.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {template.desc}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80"
                  >
                    <span className="text-sm font-medium">Use Template</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationsView;
