'use client';

import React, { useState } from 'react';
import { Search, ChevronDown, Play, FileText, Phone } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function CallLogsPage() {
  const [selectedCall, setSelectedCall] = useState(0);

  const calls = [
    {
      id: 0,
      phone: '+1 (555) 345-6789',
      date: '2025-12-16',
      time: '09:42 AM',
      duration: '5:23',
      outcome: 'Quote Provided',
      issue: 'Screen',
      status: 'AI Resolved',
      statusVariant: 'success',
    },
    {
      id: 1,
      phone: '+1 (555) 345-6789',
      date: '2025-12-16',
      time: '09:42 AM',
      duration: '5:23',
      outcome: 'Escalated to technician',
      issue: 'Software',
      status: 'Warm Transfer',
      statusVariant: 'warning',
    },
    {
      id: 2,
      phone: '+1 (555) 345-6789',
      date: '2025-12-16',
      time: '09:42 AM',
      duration: '5:23',
      outcome: 'Appointment Booked',
      issue: 'Battery',
      status: 'Appointment',
      statusVariant: 'info',
    },
    {
      id: 3,
      phone: '+1 (555) 345-6789',
      date: '2025-12-16',
      time: '09:42 AM',
      duration: '0:20',
      outcome: 'Call Dropped',
      issue: 'Unknown',
      status: 'Dropped',
      statusVariant: 'danger',
    },
    {
      id: 4,
      phone: '+1 (555) 345-6789',
      date: '2025-12-16',
      time: '09:42 AM',
      duration: '5:23',
      outcome: 'Quote Provided',
      issue: 'Screen',
      status: 'AI Resolved',
      statusVariant: 'success',
    }
  ];

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-10">
        <div className="relative w-full md:max-w-xl">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
          <input
            type="text"
            placeholder="Search by phone number, issue type..."
            className="w-full bg-surface border border-border-subtle rounded-2xl py-3.5 pl-14 pr-6 text-[15px] font-medium text-text-primary focus:outline-none focus:border-brand-blue/50 transition-all shadow-lg shadow-black/5"
          />
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <Button variant="secondary" size="md" className="flex-1 md:flex-none justify-between space-x-3 px-6 py-3.5 rounded-xl border border-white/5 hover:border-brand-blue/30 transition-all">
            <span className="font-bold text-sm tracking-tight">All Type</span>
            <ChevronDown className="w-5 h-5 opacity-50" />
          </Button>
          <Button variant="secondary" size="md" className="flex-1 md:flex-none justify-between space-x-3 px-6 py-3.5 rounded-xl border border-white/5 hover:border-brand-blue/30 transition-all">
            <span className="font-bold text-sm tracking-tight">All Issues</span>
            <ChevronDown className="w-5 h-5 opacity-50" />
          </Button>
          <Button variant="secondary" size="md" className="flex-1 md:flex-none justify-between space-x-3 px-6 py-3.5 rounded-xl border border-white/5 hover:border-brand-blue/30 transition-all">
            <span className="font-bold text-sm tracking-tight">Today</span>
            <ChevronDown className="w-5 h-5 opacity-50" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Call List */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-0 overflow-hidden shadow-xl shadow-black/10">
            <div className="p-8 border-b border-white/5 bg-surface/50">
              <h3 className="text-xl font-bold text-text-primary tracking-tight">Call List</h3>
            </div>
            <div className="divide-y divide-white/5 max-h-[800px] overflow-y-auto custom-scrollbar">
              {calls.map((call) => (
                <div
                  key={call.id}
                  onClick={() => setSelectedCall(call.id)}
                  className={`p-8 cursor-pointer transition-all duration-300 hover:bg-surface-hover ${
                    selectedCall === call.id ? 'bg-brand-blue/10 border-l-4 border-l-brand-blue' : 'border-l-4 border-l-transparent'
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-5">
                      <div className="bg-brand-blue/20 p-3.5 rounded-2xl border border-white/5 shadow-inner">
                        <Phone className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-text-primary tracking-tight">{call.phone}</p>
                        <p className="text-xs font-semibold text-text-secondary uppercase tracking-widest mt-1">{call.date} • {call.time}</p>
                      </div>
                    </div>
                    <Badge variant={call.statusVariant} className="px-3 py-1 scale-110">{call.status}</Badge>
                  </div>
                  <div className="flex items-center space-x-6 text-[11px] font-bold text-text-secondary uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-brand-blue/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>{call.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-brand-blue/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>{call.outcome}</span>
                    </div>
                    <Badge variant="default" className="normal-case py-0.5 px-2 bg-white/5">{call.issue}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Call Details */}
        <div className="lg:col-span-8">
          <Card className="p-0 overflow-hidden flex flex-col min-h-[800px] bg-surface shadow-2xl shadow-black/20">
            <div className="p-8 border-b border-white/5 bg-surface/50 flex justify-between items-center">
              <h3 className="text-xl font-bold text-text-primary tracking-tight">Call Details</h3>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="rounded-xl font-bold text-xs uppercase tracking-widest border-white/10">Download Transcript</Button>
                <Button variant="outline" size="sm" className="rounded-xl font-bold text-xs uppercase tracking-widest border-white/10">Delete Log</Button>
              </div>
            </div>
            
            <div className="p-10 space-y-12 flex-1">
              {/* Call Info Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
                <div className="space-y-1.5">
                  <p className="text-[11px] font-bold text-text-secondary uppercase tracking-widest">Phone Number</p>
                  <p className="text-lg font-bold text-text-primary tracking-tight">{calls[selectedCall].phone}</p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[11px] font-bold text-text-secondary uppercase tracking-widest">Duration</p>
                  <p className="text-lg font-bold text-text-primary tracking-tight">{calls[selectedCall].duration}</p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[11px] font-bold text-text-secondary uppercase tracking-widest">Date & Time</p>
                  <p className="text-lg font-bold text-text-primary tracking-tight">{calls[selectedCall].date} {calls[selectedCall].time}</p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[11px] font-bold text-text-secondary uppercase tracking-widest">Issue Type</p>
                  <Badge variant="default" className="text-sm px-4 py-1 rounded-xl bg-white/5 border-white/10 uppercase font-bold">{calls[selectedCall].issue}</Badge>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[11px] font-bold text-text-secondary uppercase tracking-widest">Call Type</p>
                  <Badge variant={calls[selectedCall].statusVariant} className="text-sm px-4 py-1 rounded-xl uppercase font-bold">{calls[selectedCall].status}</Badge>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[11px] font-bold text-text-secondary uppercase tracking-widest">Outcome</p>
                  <p className="text-lg font-bold text-text-primary tracking-tight">{calls[selectedCall].outcome}</p>
                </div>
              </div>

              {/* Audio Player Placeholder */}
              <div className="bg-[#3F2B56]/10 p-1.5 rounded-2xl border border-[#3F2B56]/30">
                <Button className="w-full bg-[#3F2B56] hover:bg-[#3F2B56]/90 border-none group justify-center space-x-3 py-5 rounded-xl shadow-lg shadow-[#3F2B56]/20 transition-all">
                   <Play className="w-6 h-6 fill-white text-white group-hover:scale-110 transition-transform" />
                   <span className="text-base font-bold tracking-tight">Play Audio Recording</span>
                </Button>
              </div>

              {/* Transcription */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-text-secondary border-b border-white/5 pb-4">
                  <FileText className="w-5 h-5 text-brand-blue" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Conversation Transcript</span>
                </div>
                
                <div className="bg-[#0D152F] rounded-[2rem] p-10 space-y-8 border border-white/5 h-[450px] overflow-y-auto custom-scrollbar shadow-inner">
                    <div className="space-y-10">
                        <div className="max-w-[85%]">
                            <div className="text-[11px] font-black text-brand-green mb-2.5 uppercase tracking-widest flex items-center space-x-2">
                              <span>AI Assistant</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                            </div>
                            <p className="text-base font-medium text-text-secondary leading-relaxed bg-white/5 p-5 rounded-2xl rounded-tl-none border border-white/5 shadow-sm">Thank you for calling UBreakIFix! How can I help you today?</p>
                        </div>
                        <div className="max-w-[85%] ml-auto">
                            <div className="text-[11px] font-black text-brand-blue mb-2.5 uppercase tracking-widest flex items-center justify-end space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                              <span>Customer</span>
                            </div>
                            <p className="text-base font-medium text-text-secondary leading-relaxed bg-brand-blue/10 p-5 rounded-2xl rounded-tr-none border border-brand-blue/20 shadow-sm text-right">Hi, my iPhone 13 screen is cracked. How much would it cost to repair?</p>
                        </div>
                        <div className="max-w-[85%]">
                            <div className="text-[11px] font-black text-brand-green mb-2.5 uppercase tracking-widest flex items-center space-x-2">
                              <span>AI Assistant</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                            </div>
                            <p className="text-base font-medium text-text-secondary leading-relaxed bg-white/5 p-5 rounded-2xl rounded-tl-none border border-white/5 shadow-sm">I can help you with that! For an iPhone 13 screen repair, our price is <span className="text-text-primary font-bold">$199</span>. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?</p>
                        </div>
                        <div className="max-w-[85%] ml-auto">
                            <div className="text-[11px] font-black text-brand-blue mb-2.5 uppercase tracking-widest flex items-center justify-end space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                              <span>Customer</span>
                            </div>
                            <p className="text-base font-medium text-text-secondary leading-relaxed bg-brand-blue/10 p-5 rounded-2xl rounded-tr-none border border-brand-blue/20 shadow-sm text-right">Yes, please! When are you available?</p>
                        </div>
                        <div className="max-w-[85%]">
                            <div className="text-[11px] font-black text-brand-green mb-2.5 uppercase tracking-widest flex items-center space-x-2">
                              <span>AI Assistant</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                            </div>
                            <p className="text-base font-medium text-text-secondary leading-relaxed bg-white/5 p-5 rounded-2xl rounded-tl-none border border-white/5 shadow-sm">Great! I have availability today at <span className="text-text-primary font-bold">2:00 PM</span> or tomorrow at <span className="text-text-primary font-bold">10:00 AM</span>. Which works better for you?</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
