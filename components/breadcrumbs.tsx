'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function Breadcrumbs() {
  const pathname = usePathname();
  
  // Generate breadcrumbs from pathname
  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map((segment, index, arr) => ({
      label: segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      href: '/' + arr.slice(0, index + 1).join('/')
    }));

  if (segments.length === 0) return null;

  return (
    <nav className="flex items-center gap-2 mb-8 text-sm text-muted-foreground" aria-label="breadcrumb">
      <Link href="/" className="hover:text-foreground transition-colors">
        Home
      </Link>
      {segments.map((segment, index) => (
        <div key={segment.href} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          {index === segments.length - 1 ? (
            <span className="text-foreground font-medium">{segment.label}</span>
          ) : (
            <Link href={segment.href} className="hover:text-foreground transition-colors">
              {segment.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
