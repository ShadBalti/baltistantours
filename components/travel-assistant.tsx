'use client'

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TravelAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 bg-background border border-border rounded-lg shadow-2xl p-6 mb-2">
          <h3 className="font-bold text-lg mb-4">Travel Assistant</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Welcome to Baltistan Tourism! How can we help you plan your adventure?
          </p>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-sm">
              Common Questions
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm">
              Trip Planner
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm">
              Contact Us
            </Button>
          </div>
        </div>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="rounded-full w-14 h-14 shadow-lg"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}
