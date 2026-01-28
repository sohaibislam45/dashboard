'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Edit, ShieldCheck } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <div className="max-w-5xl space-y-12 pb-20">
      {/* Tabs */}
      <div className="flex space-x-12 border-b border-white/5 pb-1 mb-4">
        {['Profile', 'Password Settings'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-base font-bold transition-all relative px-2 tracking-tight ${
              activeTab === tab
                ? 'text-brand-blue'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue rounded-full shadow-[0_-5px_15px_#0EA5E9]" />
            )}
          </button>
        ))}
      </div>

      {activeTab === 'Profile' ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          {/* Profile Image Section */}
          <div className="md:col-span-4 flex flex-col items-center">
            <Card className="w-full flex flex-col items-center p-12 space-y-10 shadow-2xl shadow-black/20 bg-surface/50 border-white/5">
              <div className="relative group">
                <div className="w-48 h-48 rounded-full border-4 border-brand-blue/30 p-1.5 shadow-xl shadow-brand-blue/10 overflow-hidden ring-8 ring-white/5 transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="/images/user.png"
                    alt="Profile"
                    width={192}
                    height={192}
                    className="rounded-full object-cover"
                  />
                </div>
                <button className="absolute bottom-3 right-3 bg-brand-blue p-3.5 rounded-2xl shadow-xl shadow-brand-blue/40 border-4 border-background hover:scale-110 transition-all text-white">
                  <Edit className="w-6 h-6" />
                </button>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-black text-text-primary tracking-tight">Jane Doe</h3>
                <p className="text-sm font-bold text-text-secondary uppercase tracking-[0.2em]">Store Manager</p>
              </div>
              <Button variant="outline" className="w-full py-4 rounded-2xl font-bold border-white/10 hover:bg-white/5 transition-all text-[15px] tracking-tight">
                Edit Profile
              </Button>
            </Card>
          </div>

          {/* Profile Details Section */}
          <div className="md:col-span-8">
            <Card className="p-12 space-y-12 shadow-2xl shadow-black/20 bg-surface/50 border-white/5">
              <div className="flex justify-between items-center border-b border-white/5 pb-8">
                <h4 className="text-xl font-bold text-text-primary tracking-tight">Personal Information</h4>
                <Button variant="primary" className="px-8 py-3.5 rounded-2xl font-black text-sm shadow-xl shadow-brand-blue/20">Update Info</Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
                <div className="space-y-2.5">
                  <p className="text-[11px] font-black text-text-secondary uppercase tracking-[0.2em]">Full Name</p>
                  <p className="text-lg font-bold text-text-primary tracking-tight border-b border-white/5 pb-2">Jane Doe</p>
                </div>
                <div className="space-y-2.5">
                  <p className="text-[11px] font-black text-text-secondary uppercase tracking-[0.2em]">Email Address</p>
                  <p className="text-lg font-bold text-text-primary tracking-tight border-b border-white/5 pb-2">jane.doe@ubreakifix.com</p>
                </div>
                <div className="space-y-2.5">
                  <p className="text-[11px] font-black text-text-secondary uppercase tracking-[0.2em]">Phone Number</p>
                  <p className="text-lg font-bold text-text-primary tracking-tight border-b border-white/5 pb-2">+1 (555) 000-0000</p>
                </div>
                <div className="space-y-2.5">
                  <p className="text-[11px] font-black text-text-secondary uppercase tracking-[0.2em]">Store ID</p>
                  <p className="text-lg font-bold text-text-primary tracking-tight border-b border-white/5 pb-2">NY-BLOCK-101</p>
                </div>
                <div className="sm:col-span-2 space-y-2.5">
                  <p className="text-[11px] font-black text-text-secondary uppercase tracking-[0.2em]">Store Location</p>
                  <p className="text-lg font-bold text-text-primary tracking-tight border-b border-white/5 pb-2">123 Tech Street, New York, NY 10001</p>
                </div>
              </div>

              <div className="pt-8 flex items-center p-6 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
                <div className="bg-brand-blue/20 p-3 rounded-xl mr-5">
                  <ShieldCheck className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h5 className="text-[15px] font-bold text-text-primary tracking-tight">Two-Step Verification</h5>
                  <p className="text-sm text-brand-blue/70 font-bold">Recommended for extra security</p>
                </div>
                <Button variant="ghost" className="ml-auto text-brand-blue font-black text-sm hover:bg-brand-blue/10 rounded-xl px-6">Enable</Button>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <Card className="flex flex-col items-center justify-center p-20 border-dashed shadow-2xl shadow-black/20 bg-surface/50 border-white/5">
          <p className="text-text-secondary">Password settings implementation coming soon.</p>
        </Card>
      )}
    </div>
  );
}
