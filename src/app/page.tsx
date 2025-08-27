"use client";

import { useState, useEffect } from "react";
import ConversationsList from "@/components/ConversationsList";
import ChatArea from "@/components/ChatArea";
import CustomerProfile from "@/components/CustomerProfile";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

export default function HomePage() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsTyping(true), 1000);
    const timer2 = setTimeout(() => setIsTyping(false), 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  // Open drawer when conversation changes
  useEffect(() => {
    if (selectedConversation) {
      setIsDrawerOpen(true);
    }
  }, [selectedConversation]);

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      <ConversationsList
        selectedConversation={selectedConversation}
        onSelectConversation={setSelectedConversation}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <ChatArea
          selectedConversation={selectedConversation}
          message={message}
          onMessageChange={setMessage}
          isTyping={isTyping}
          onOpenDrawer={() => setIsDrawerOpen(true)}
        />
      </div>

      {/* Customer Profile Drawer */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent
          className="h-full max-h-screen w-80"
          data-vaul-drawer-direction="right"
        >
          <CustomerProfile
            selectedConversation={selectedConversation}
            onClose={() => setIsDrawerOpen(false)}
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
