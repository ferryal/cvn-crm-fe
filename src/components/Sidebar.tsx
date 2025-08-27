"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MessageCircle,
  Users,
  BarChart3,
  Settings,
  Zap,
  ChevronLeft,
  ChevronRight,
  User,
  LogOut,
  Sun,
  Moon,
  Bell,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Here you would typically update the actual theme
    document.documentElement.classList.toggle("dark");
  };

  const NavItem = ({
    icon: Icon,
    label,
    href,
    badge,
  }: {
    icon: any;
    label: string;
    href: string;
    badge?: string;
  }) => {
    const isActive = pathname === href;

    return (
      <Link href={href}>
        <Button
          variant={isActive ? "default" : "ghost"}
          className={`w-full justify-start ${
            isActive
              ? "bg-primary text-primary-foreground"
              : "hover:bg-accent hover:text-accent-foreground"
          } ${isCollapsed ? "px-2" : "px-3"}`}
        >
          <Icon className={`${isCollapsed ? "w-5 h-5" : "w-5 h-5 mr-3"}`} />
          {!isCollapsed && (
            <>
              <span className="font-medium">{label}</span>
              {badge && (
                <Badge
                  variant={isActive ? "secondary" : "outline"}
                  className="ml-auto"
                >
                  {badge}
                </Badge>
              )}
            </>
          )}
        </Button>
      </Link>
    );
  };

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } bg-background border-r border-border flex flex-col transition-all duration-300 ease-in-out`}
    >
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-bold text-lg">SalesAI</h1>
                <p className="text-xs text-muted-foreground">CRM</p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mx-auto">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
          )}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-auto"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3">
        <div className="space-y-1">
          <NavItem
            icon={MessageCircle}
            label="Conversations"
            href="/"
            badge="24"
          />
          <NavItem
            icon={Users}
            label="Contacts"
            href="/contacts"
            badge="1.2k"
          />
          <NavItem icon={BarChart3} label="Analytics" href="/analytics" />
          <NavItem icon={Zap} label="Automations" href="/automations" />
          <NavItem icon={Settings} label="Settings" href="/settings" />
        </div>
      </nav>

      {/* Account & Theme Controls */}
      <div className="p-3 border-t border-border">
        {/* Account Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start p-2 h-auto hover:bg-accent/50"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-primary" />
                </div>
                {!isCollapsed && (
                  <>
                    <div className="flex-1 min-w-0 text-left">
                      <p className="text-sm font-medium text-foreground truncate">
                        John Doe
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        john@example.com
                      </p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </>
                )}
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56"
            align="end"
            alignOffset={11}
            forceMount
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">
                  john@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            {/* Theme Toggle */}
            <DropdownMenuItem onClick={toggleTheme}>
              {isDarkMode ? (
                <Sun className="w-4 h-4 mr-2" />
              ) : (
                <Moon className="w-4 h-4 mr-2" />
              )}
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </DropdownMenuItem>

            {/* Notifications */}
            <DropdownMenuItem>
              <Bell className="w-4 h-4 mr-2" />
              Notifications
              <Badge
                variant="destructive"
                className="ml-auto w-5 h-5 p-0 text-xs"
              >
                3
              </Badge>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Logout */}
            <DropdownMenuItem className="text-destructive focus:text-destructive">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Sidebar;
