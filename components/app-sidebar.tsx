'use client'

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Home, MapPin, Users, Utensils, Compass, BookOpen, Info, Mail, Mountain, Hotel, Zap, Lightbulb, Globe } from 'lucide-react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const navigationGroups = [
  {
    label: "Getting Started",
    items: [
      { label: "Home", href: "/", icon: Home },
      { label: "Getting There", href: "/getting-there", icon: MapPin },
    ]
  },
  {
    label: "Explore",
    items: [
      { label: "Destinations", href: "/destinations", icon: Mountain },
      { label: "Destinations - Skardu", href: "/destinations/skardu", icon: Mountain },
      { label: "Destinations - Shigar", href: "/destinations/shigar", icon: Mountain },
      { label: "Destinations - Khaplu", href: "/destinations/khaplu", icon: Mountain },
      { label: "Destinations - Kharmang", href: "/destinations/kharmang", icon: Mountain },
      { label: "Destinations - Rondu", href: "/destinations/rondu", icon: Mountain },
    ]
  },
  {
    label: "Experiences",
    items: [
      { label: "Accommodation", href: "/accommodation", icon: Hotel },
      { label: "Food", href: "/food", icon: Utensils },
      { label: "Adventure", href: "/adventure", icon: Zap },
      { label: "Culture", href: "/culture", icon: Users },
      { label: "Experiences", href: "/experiences", icon: Compass },
      { label: "Festivals", href: "/festivals", icon: Lightbulb },
    ]
  },
  {
    label: "Travel Info",
    items: [
      { label: "Travel Essentials", href: "/travel-essentials", icon: BookOpen },
      { label: "Language", href: "/language", icon: Globe },
      { label: "Tips & Tricks", href: "/tips", icon: Lightbulb },
      { label: "Blog", href: "/blogs", icon: BookOpen },
    ]
  },
  {
    label: "About",
    items: [
      { label: "About Us", href: "/about", icon: Info },
      { label: "Privacy Policy", href: "/privacy", icon: BookOpen },
      { label: "Contact", href: "/contact", icon: Mail },
    ]
  }
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        {navigationGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                  const Icon = item.icon;
                  
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link href={item.href}>
                          <Icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
