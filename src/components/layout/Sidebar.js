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
    <aside className="w-80 bg-surface border-r border-border-subtle flex flex-col h-full shadow-2xl shadow-black/40 z-20" data-testid="sidebar">
      <div className="p-10 flex items-center justify-center">
        <Image src="/images/logo.png" alt="Logo" width={48} height={48} priority />
      </div>
      <nav className="flex-1 px-6 py-6 space-y-3">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center space-x-4 px-4 py-3.5 rounded-xl transition-all duration-300 relative group overflow-hidden ${
                isActive
                  ? 'text-brand-blue bg-brand-blue/10'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
              }`}
            >
              {isActive && (
                <>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue shadow-[0_0_15px_#0EA5E9]" />
                  <div className="absolute inset-0 bg-brand-blue/5 blur-xl group-hover:bg-brand-blue/10 transition-all duration-500" />
                </>
              )}
              <item.icon className={`w-5 h-5 relative z-10 ${isActive ? 'text-brand-blue' : 'text-text-secondary group-hover:text-text-primary'}`} />
              <span className="font-semibold text-[15px] relative z-10 tracking-tight">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-6 border-t border-white/5">
        <button className="flex items-center space-x-3 px-6 py-3 text-brand-red font-semibold hover:bg-brand-red/10 rounded-xl transition-all w-full group">
          <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[15px] tracking-tight">Log Out</span>
        </button>
      </div>
    </aside>
  );
}
