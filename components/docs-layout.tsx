'use client'

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import Breadcrumbs from "@/components/breadcrumbs";
import Footer from "@/components/footer";
import TravelAssistant from "@/components/travel-assistant";
import { Mountain } from 'lucide-react';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 px-6 shadow-sm transition-all">
            <SidebarTrigger className="hover-scale" />
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-primary to-primary/70 flex items-center justify-center shadow-lg hover-scale">
                <Mountain className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-lg font-bold leading-none text-gradient">Baltistan Tourism</h1>
                <p className="font-sans text-xs text-muted-foreground">Your Complete Travel Guide</p>
              </div>
            </div>
          </header>
          <main className="flex-1 p-6 md:p-8 lg:p-12 bg-gradient-to-b from-background to-muted/20">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <Breadcrumbs />
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <TravelAssistant />
    </SidebarProvider>
  );
}