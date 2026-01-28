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
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
          <input
            type="text"
            placeholder="Search by phone number, issue type..."
            className="w-full bg-surface border border-border-subtle rounded-xl py-2.5 pl-11 pr-4 text-sm text-text-primary focus:outline-none focus:border-brand-blue/50 transition-colors"
          />
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="secondary" size="sm" className="flex-1 md:flex-none justify-between space-x-2">
            <span>All Type</span>
            <ChevronDown className="w-4 h-4 opacity-50" />
          </Button>
          <Button variant="secondary" size="sm" className="flex-1 md:flex-none justify-between space-x-2">
            <span>All Issues</span>
            <ChevronDown className="w-4 h-4 opacity-50" />
          </Button>
          <Button variant="secondary" size="sm" className="flex-1 md:flex-none justify-between space-x-2">
            <span>Today</span>
            <ChevronDown className="w-4 h-4 opacity-50" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Call List */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="p-0 overflow-hidden">
            <div className="p-6 border-b border-white/5 bg-surface/50">
              <h3 className="text-lg font-semibold text-text-primary">Call List</h3>
            </div>
            <div className="divide-y divide-white/5 max-h-[700px] overflow-y-auto">
              {calls.map((call) => (
                <div
                  key={call.id}
                  onClick={() => setSelectedCall(call.id)}
                  className={`p-6 cursor-pointer transition-all duration-200 hover:bg-surface-hover ${
                    selectedCall === call.id ? 'bg-brand-blue/5 border-l-4 border-l-brand-blue' : 'border-l-4 border-l-transparent'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-brand-blue/20 p-2.5 rounded-xl border border-white/5">
                        <Phone className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-primary">{call.phone}</p>
                        <p className="text-xs text-text-secondary">{call.date} • {call.time}</p>
                      </div>
                    </div>
                    <Badge variant={call.statusVariant}>{call.status}</Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>{call.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>{call.outcome}</span>
                    </div>
                    <Badge variant="default" className="normal-case py-0">{call.issue}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Call Details */}
        <div className="lg:col-span-7">
          <Card className="p-0 overflow-hidden flex flex-col min-h-[750px] bg-surface">
            <div className="p-6 border-b border-white/5 bg-surface/50">
              <h3 className="text-lg font-semibold text-text-primary">Call Details</h3>
            </div>
            
            <div className="p-8 space-y-8 flex-1">
              {/* Call Info Grid */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <p className="text-xs text-text-secondary mb-1">Phone Number</p>
                  <p className="text-sm font-medium text-text-primary">{calls[selectedCall].phone}</p>
                </div>
                <div>
                  <p className="text-xs text-text-secondary mb-1">Duration</p>
                  <p className="text-sm font-medium text-text-primary">{calls[selectedCall].duration}</p>
                </div>
                <div>
                  <p className="text-xs text-text-secondary mb-1">Date & Time</p>
                  <p className="text-sm font-medium text-text-primary">{calls[selectedCall].date} {calls[selectedCall].time}</p>
                </div>
                <div>
                  <p className="text-xs text-text-secondary mb-1">Issue Type</p>
                  <p className="text-sm font-medium text-text-primary">{calls[selectedCall].issue}</p>
                </div>
                <div>
                  <p className="text-xs text-text-secondary mb-1">Call Type</p>
                  <Badge variant={calls[selectedCall].statusVariant}>{calls[selectedCall].status}</Badge>
                </div>
              </div>

              <div>
                <p className="text-xs text-text-secondary mb-2">Outcome</p>
                <p className="text-sm font-medium text-text-primary">{calls[selectedCall].outcome}</p>
              </div>

              {/* Audio Player Placeholder */}
              <Button className="w-full bg-[#3F2B56] hover:bg-[#3F2B56]/90 border-none group justify-center space-x-2 py-3 rounded-xl">
                 <Play className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
                 <span className="text-sm font-medium">Play Audio Recording</span>
              </Button>

              {/* Transcription */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <FileText className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Conversation Transcript</span>
                </div>
                
                <div className="bg-[#0D152F] rounded-2xl p-6 space-y-6 border border-white/5 h-[400px] overflow-y-auto">
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs font-bold text-brand-green mb-1 uppercase">AI Assistant:</p>
                            <p className="text-sm text-text-secondary leading-relaxed">Thank you for calling UBreakIFix! How can I help you today?</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-brand-blue mb-1 uppercase">Customer:</p>
                            <p className="text-sm text-text-secondary leading-relaxed">Hi, my iPhone 13 screen is cracked. How much would it cost to repair?</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-brand-green mb-1 uppercase">AI Assistant:</p>
                            <p className="text-sm text-text-secondary leading-relaxed">I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-brand-blue mb-1 uppercase">Customer:</p>
                            <p className="text-sm text-text-secondary leading-relaxed">Yes, please! When are you available?</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-brand-green mb-1 uppercase">AI Assistant:</p>
                            <p className="text-sm text-text-secondary leading-relaxed">Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?</p>
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
