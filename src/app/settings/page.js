'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const profileInfo = [
    { label: 'Full Name:', value: 'Jane D.' },
    { label: 'Email:', value: 'jane@gmail.com' },
    { label: 'Store Name:', value: 'Ubreakfix Store' },
    { label: 'Store Address:', value: '123 Main Street, New York, NY 10001' },
  ];

  return (
    <div className="max-w-4xl">
      <div className="flex space-x-12 mb-12 border-b border-white/5">
        <button
          onClick={() => setActiveTab('profile')}
          className={`pb-4 text-xl font-medium transition-all relative ${
            activeTab === 'profile' ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          Profile
          {activeTab === 'profile' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue shadow-[0_0_10px_#0EA5E9]" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('password')}
          className={`pb-4 text-xl font-medium transition-all relative ${
            activeTab === 'password' ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          Password Settings
          {activeTab === 'password' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue shadow-[0_0_10px_#0EA5E9]" />
          )}
        </button>
      </div>

      {activeTab === 'profile' ? (
        <div className="space-y-12">
          {/* Profile Image Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-text-secondary uppercase tracking-wider">Profile Image</h4>
            <div className="flex items-center space-x-6">
              <div className="relative w-24 h-24 rounded-full border-2 border-brand-blue/30 p-1">
                <Image
                  src="/images/user.png"
                  alt="Jane D."
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
              <button className="bg-surface-hover border border-border-subtle px-4 py-1.5 rounded-lg text-xs font-semibold text-text-primary shadow-lg shadow-brand-blue/10 hover:border-brand-blue/50 transition-all">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="space-y-8 max-w-lg">
            {profileInfo.map((item, idx) => (
              <div key={idx} className="flex items-center group">
                <span className="text-base font-semibold text-text-primary w-40">{item.label}</span>
                <span className="text-base text-text-secondary group-hover:text-text-primary transition-colors">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Card className="flex flex-col items-center justify-center p-20 border-dashed">
          <p className="text-text-secondary">Password settings implementation coming soon.</p>
        </Card>
      )}
    </div>
  );
}
