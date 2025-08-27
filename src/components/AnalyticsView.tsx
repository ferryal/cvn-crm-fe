"use client";

import { useState } from "react";
import {
  Calendar,
  Download,
  Filter,
  TrendingUp,
  TrendingDown,
  Users,
  MessageCircle,
  DollarSign,
  Target,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
} from "@/components/ui/chart";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AnalyticsView = () => {
  const [timeRange, setTimeRange] = useState("7d");
  const [selectedMetric, setSelectedMetric] = useState("conversations");

  const metrics = [
    {
      label: "Total Conversations",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: MessageCircle,
      color: "blue",
    },
    {
      label: "Successful Payments",
      value: "642",
      change: "+8.2%",
      trend: "up",
      icon: DollarSign,
      color: "emerald",
    },
    {
      label: "Conversion Rate",
      value: "22.5%",
      change: "+2.1%",
      trend: "up",
      icon: Target,
      color: "purple",
    },
    {
      label: "AI vs Human",
      value: "78%",
      change: "+5.3%",
      trend: "up",
      icon: Users,
      color: "orange",
    },
  ];

  const chartData = [
    { day: "Mon", conversations: 120, payments: 69, rate: 21.2 },
    { day: "Tue", conversations: 287, payments: 85, rate: 24.5 },
    { day: "Wed", conversations: 445, payments: 102, rate: 22.9 },
    { day: "Thu", conversations: 398, payments: 87, rate: 21.9 },
    { day: "Fri", conversations: 456, payments: 112, rate: 24.6 },
    { day: "Sat", conversations: 389, payments: 78, rate: 20.1 },
    { day: "Sun", conversations: 352, payments: 79, rate: 22.4 },
  ];

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-100 text-blue-600",
      emerald: "bg-emerald-100 text-emerald-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
    };
    return colorMap[color] || "bg-gray-100 text-gray-600";
  };

  const getChannelColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      emerald: "bg-emerald-500",
      blue: "bg-blue-500",
      purple: "bg-purple-500",
      indigo: "bg-indigo-500",
    };
    return colorMap[color] || "bg-gray-500";
  };

  // Prepare data for the line chart
  const getChartData = () => {
    if (selectedMetric === "conversations") {
      return chartData.map((data) => ({
        day: data.day,
        value: data.conversations,
        label: "Conversations",
      }));
    } else if (selectedMetric === "payments") {
      return chartData.map((data) => ({
        day: data.day,
        value: data.payments,
        label: "Payments",
      }));
    } else {
      return chartData.map((data) => ({
        day: data.day,
        value: data.rate,
        label: "Conversion Rate (%)",
      }));
    }
  };

  const getYAxisDomain = () => {
    if (selectedMetric === "conversations") return [0, 500];
    if (selectedMetric === "payments") return [0, 120];
    return [0, 30];
  };

  // Chart configuration for shadcn/ui
  const chartConfig = {
    conversations: {
      label: "Conversations",
      color: "hsl(var(--primary))",
    },
    payments: {
      label: "Payments",
      color: "hsl(var(--primary))",
    },
    rate: {
      label: "Conversion Rate (%)",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">
                Analytics
              </h1>
              <p className="text-muted-foreground mt-1">
                Track and analyze your conversation metrics across all channels
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Last 7 days
              </Button>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => (
              <Card
                key={idx}
                className="hover:shadow-sm transition-shadow py-0"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 ${getColorClass(
                        metric.color
                      )} rounded-lg flex items-center justify-center`}
                    >
                      <metric.icon className="w-6 h-6" />
                    </div>
                    <Badge
                      variant={
                        metric.trend === "up" ? "default" : "destructive"
                      }
                      className="flex items-center gap-1"
                    >
                      {metric.trend === "up" ? (
                        <ArrowUp className="w-3 h-3" />
                      ) : (
                        <ArrowDown className="w-3 h-3" />
                      )}
                      {metric.change}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {metric.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {metric.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="px-8 py-8">
        {/* Main Chart */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Conversation Trends</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant={
                    selectedMetric === "conversations" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedMetric("conversations")}
                >
                  Conversations
                </Button>
                <Button
                  variant={
                    selectedMetric === "payments" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedMetric("payments")}
                >
                  Payments
                </Button>
                <Button
                  variant={selectedMetric === "rate" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedMetric("rate")}
                >
                  Conversion Rate
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {/* Line Chart */}
            <div className="w-full h-80 overflow-hidden">
              <ChartContainer config={chartConfig} className="w-full h-full">
                <LineChart data={getChartData()} width={800} height={320}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis
                    dataKey="day"
                    className="text-xs text-muted-foreground"
                    stroke="currentColor"
                  />
                  <YAxis
                    domain={getYAxisDomain()}
                    className="text-xs text-muted-foreground"
                    stroke="currentColor"
                  />
                  <Tooltip
                    content={({ active, payload, label }: any) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                            <p className="text-sm font-medium text-foreground">
                              {label}
                            </p>
                            <p className="text-sm text-primary">
                              {payload[0].value}{" "}
                              {selectedMetric === "rate" ? "%" : ""}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                    activeDot={{
                      r: 6,
                      stroke: "hsl(var(--primary))",
                      strokeWidth: 2,
                    }}
                    className="stroke-primary"
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Breakdown */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Performance Breakdown</CardTitle>
                <Button size="icon" variant="ghost">
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* AI vs Human Performance */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">
                    AI Agent Performance
                  </span>
                  <span className="text-sm font-semibold text-emerald-600">
                    78.4%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full"
                    style={{ width: "78.4%" }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  587 successful payments from AI interactions
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">
                    Human Agent Performance
                  </span>
                  <span className="text-sm font-semibold text-blue-600">
                    21.6%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "21.6%" }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  138 successful payments from human agents
                </p>
              </div>

              {/* Top Performing Hours */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  Peak Performance Hours
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      time: "2:00 PM - 4:00 PM",
                      rate: "31.2%",
                      conversations: 234,
                    },
                    {
                      time: "10:00 AM - 12:00 PM",
                      rate: "28.7%",
                      conversations: 189,
                    },
                    {
                      time: "7:00 PM - 9:00 PM",
                      rate: "25.1%",
                      conversations: 156,
                    },
                  ].map((slot, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {slot.time}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {slot.conversations} conversations
                        </p>
                      </div>
                      <Badge variant="secondary">{slot.rate}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Channel Performance */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Channel Performance</CardTitle>
                <Button size="icon" variant="ghost">
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  channel: "WhatsApp",
                  conversations: 1847,
                  payments: 412,
                  rate: 22.3,
                  color: "emerald",
                },
                {
                  channel: "Website Chat",
                  conversations: 687,
                  payments: 156,
                  rate: 22.7,
                  color: "blue",
                },
                {
                  channel: "Instagram",
                  conversations: 234,
                  payments: 52,
                  rate: 22.2,
                  color: "purple",
                },
                {
                  channel: "Facebook",
                  conversations: 156,
                  payments: 22,
                  rate: 14.1,
                  color: "indigo",
                },
              ].map((channel, idx) => (
                <div key={idx} className="p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${getChannelColor(
                          channel.color
                        )}`}
                      ></div>
                      <span className="font-medium text-foreground">
                        {channel.channel}
                      </span>
                    </div>
                    <Badge
                      variant={channel.rate > 20 ? "default" : "secondary"}
                    >
                      {channel.rate}%
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Conversations</p>
                      <p className="font-semibold text-foreground">
                        {channel.conversations.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Payments</p>
                      <p className="font-semibold text-foreground">
                        {channel.payments}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="justify-start h-auto p-3"
                  >
                    <div className="text-left">
                      <p className="text-sm font-medium text-foreground">
                        View Detailed Report
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Full analytics breakdown
                      </p>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start h-auto p-3"
                  >
                    <div className="text-left">
                      <p className="text-sm font-medium text-foreground">
                        Schedule Report
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Automated delivery
                      </p>
                    </div>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;
