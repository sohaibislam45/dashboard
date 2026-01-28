'use client';

import { Bell } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const getPageTitle = (path) => {
    switch (path) {
      case '/':
        return 'Dashboard Overview';
      case '/call-logs':
        return 'Call Logs & History';
      case '/appointments':
        return 'Appointments';
      case '/settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  return (
    <header className="h-20 bg-background/80 backdrop-blur-md border-b border-border-subtle fixed top-0 right-0 left-64 z-10 px-8 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-text-primary tracking-tight">
        {getPageTitle(pathname)}
      </h1>

      <div className="flex items-center space-x-6">
        <button className="relative p-2 text-text-secondary hover:text-text-primary transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-brand-red rounded-full border-2 border-background" />
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full border-2 border-brand-blue/30 p-0.5 overflow-hidden">
            <Image 
              src="/images/user.png" 
              alt="User" 
              width={40} 
              height={40} 
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
