'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  PhoneCall, 
  Calendar, 
  Settings, 
  LogOut, 
  Zap 
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard Overview', path: '/', icon: Home },
    { name: 'Call Logs', path: '/call-logs', icon: PhoneCall },
    { name: 'Appointments', path: '/appointments', icon: Calendar },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-surface border-r border-border-subtle flex flex-col h-screen fixed left-0 top-0">
      {/* Logo */}
      <div className="p-8 flex items-center justify-center">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} priority />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`
                group flex items-center px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden
                ${isActive 
                  ? 'bg-brand-blue/10 text-text-primary' 
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'}
              `}
            >
              {/* Active Indicator Glow */}
              {isActive && (
                <div className="absolute inset-0 bg-brand-blue/5 blur-xl pointer-events-none" />
              )}
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue rounded-r-full" />
              )}

              <Icon className={`w-5 h-5 mr-4 transition-colors duration-300 ${isActive ? 'text-brand-blue' : 'text-text-secondary group-hover:text-text-primary'}`} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Log Out Button */}
      <div className="p-4 border-t border-border-subtle">
        <button className="flex items-center px-4 py-3 w-full rounded-xl text-text-secondary hover:text-brand-red hover:bg-brand-red/10 transition-all duration-300 group">
          <LogOut className="w-5 h-5 mr-4 text-text-secondary group-hover:text-brand-red" />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
}
