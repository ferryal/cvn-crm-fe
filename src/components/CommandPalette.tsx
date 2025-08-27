"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  MessageCircle,
  Users,
  BarChart3,
  Zap,
  Settings,
  Search,
} from "lucide-react";

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const navigationItems = [
    {
      title: "Conversations",
      description: "View and manage conversations",
      icon: MessageCircle,
      href: "/",
      shortcut: "⌘1",
    },
    {
      title: "Contacts",
      description: "Manage customer contacts",
      icon: Users,
      href: "/contacts",
      shortcut: "⌘2",
    },
    {
      title: "Analytics",
      description: "View analytics and reports",
      icon: BarChart3,
      href: "/analytics",
      shortcut: "⌘3",
    },
    {
      title: "Automations",
      description: "Manage automation workflows",
      icon: Zap,
      href: "/automations",
      shortcut: "⌘4",
    },
    {
      title: "Settings",
      description: "Application settings",
      icon: Settings,
      href: "/settings",
      shortcut: "⌘5",
    },
  ];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 right-4 z-50 items-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-background border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors hidden"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            {navigationItems.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => handleSelect(item.href)}
                className="flex items-center gap-3"
              >
                <item.icon className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.title}</span>
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                      {item.shortcut}
                    </kbd>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandPalette;
