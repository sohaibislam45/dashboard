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
    <header className="h-24 bg-background/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-10 px-16 flex items-center justify-between shadow-sm">
      <h1 className="text-3xl font-bold text-text-primary tracking-tight">
        {getPageTitle(pathname)}
      </h1>
      <div className="flex items-center space-x-8">
        <button className="relative p-2.5 text-text-secondary hover:text-text-primary transition-all hover:bg-white/5 rounded-xl group">
          <Bell className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-brand-red rounded-full border-2 border-background animate-pulse" />
        </button>
        <div className="flex items-center space-x-4 pl-4 border-l border-white/10">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-text-primary">Jane D.</p>
            <p className="text-[11px] text-text-secondary font-medium uppercase tracking-wider">Store Manager</p>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-brand-blue/30 p-0.5 shadow-lg shadow-brand-blue/10">
            <Image
              src="/images/user.png"
              alt="User"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
