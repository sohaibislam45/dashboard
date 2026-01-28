'use client';

import React from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Share2, 
  Copy, 
  ChevronLeft, 
  ChevronRight,
  Search,
  ChevronDown
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function AppointmentsPage() {
  const appointments = Array(6).fill({
    name: 'Jane.D',
    phone: '01960685765',
    email: 'admin@gmail.com',
    device: 'Apple/Iphone 13pro',
    repairType: 'Screen',
    date: '02/06/2026',
    slot: '1',
    startTime: '09:00',
  }).map((item, idx) => ({
    ...item,
    id: idx,
    startTime: `${(9 + idx).toString().padStart(2, '0')}:00`,
  }));

  const stats = [
    {
      title: 'Total Booked',
      value: '34',
      subtext: '+8 this week',
      subtextColor: 'text-brand-green',
      icon: Calendar,
      iconColor: 'text-brand-blue',
      iconBg: 'bg-brand-blue/10',
    },
    {
      title: 'AI Booked',
      value: '28',
      subtext: '82% of total',
      subtextColor: 'text-text-secondary',
      icon: CheckCircle2,
      iconColor: 'text-brand-green',
      iconBg: 'bg-brand-green/10',
    },
    {
      title: 'Pending',
      value: '3',
      subtext: 'Awaiting confirmation',
      subtextColor: 'text-text-secondary',
      icon: Clock,
      iconColor: 'text-brand-orange',
      iconBg: 'bg-brand-orange/10',
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://techstore.com/book?id=store123');
    alert('Link copied to clipboard!');
  };

  return (
    <div className="space-y-12">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <Card className="flex flex-col p-8 group hover:border-brand-blue/50 transition-all shadow-lg shadow-black/10">
          <div className="flex justify-between items-start mb-6">
            <div className="bg-brand-blue/20 p-4 rounded-2xl shadow-inner">
              <Calendar className="w-8 h-8 text-brand-blue" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-widest mb-2">Total Booked</p>
            <h3 className="text-4xl font-bold text-text-primary tracking-tight">24</h3>
          </div>
        </Card>

        <Card className="flex flex-col p-8 group hover:border-brand-blue/50 transition-all shadow-lg shadow-black/10">
          <div className="flex justify-between items-start mb-6">
            <div className="bg-brand-green/20 p-4 rounded-2xl shadow-inner">
              <CheckCircle2 className="w-8 h-8 text-brand-green" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-widest mb-2">AI Booked</p>
            <h3 className="text-4xl font-bold text-text-primary tracking-tight">18</h3>
          </div>
        </Card>

        <Card className="flex flex-col p-8 group hover:border-brand-blue/50 transition-all shadow-lg shadow-black/10">
          <div className="flex justify-between items-start mb-6">
            <div className="bg-brand-orange/20 p-4 rounded-2xl shadow-inner">
              <Clock className="w-8 h-8 text-brand-orange" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-widest mb-2">Pending</p>
            <h3 className="text-4xl font-bold text-text-primary tracking-tight">6</h3>
          </div>
        </Card>

        <Card className="bg-brand-blue p-8 flex flex-col justify-between shadow-xl shadow-brand-blue/20 group hover:brightness-110 transition-all">
          <div>
            <div className="flex justify-between items-center mb-6">
               <Share2 className="w-8 h-8 text-white/50" />
               <Button onClick={copyToClipboard} variant="ghost" className="text-white hover:bg-white/10 p-2 rounded-xl">
                 <Copy className="w-5 h-5" />
               </Button>
            </div>
            <p className="text-sm font-black text-white/60 uppercase tracking-widest mb-2">Booking Link</p>
            <p className="text-base font-bold text-white tracking-tight truncate border-b border-white/20 pb-2 mb-4">ubreakifix.com/book/ny-101</p>
          </div>
          <Button variant="secondary" className="w-full bg-white text-brand-blue font-black rounded-xl py-3 group-hover:scale-[0.98] transition-all">
            Share Link
          </Button>
        </Card>
      </div>

      {/* Appointments Table */}
      <Card className="p-0 overflow-hidden shadow-2xl shadow-black/20">
        <div className="p-10 border-b border-white/5 bg-surface/50 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-text-primary tracking-tight">Scheduled Appointments</h3>
            <p className="text-sm text-text-secondary font-medium uppercase tracking-wider mt-1">Showing data for Feb 2026</p>
          </div>
          <div className="flex space-x-4">
             <Button variant="secondary" className="px-6 py-3.5 rounded-xl border border-white/5 font-bold text-sm">Download PDF</Button>
             <Button variant="outline" className="px-6 py-3.5 rounded-xl border-white/10 font-bold text-sm">Filter</Button>
          </div>
        </div>
        <div className="overflow-x-auto min-h-[600px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02]">
                <th className="px-10 py-6 text-[11px] font-black text-text-secondary uppercase tracking-wider border-b border-white/5">Client Mail</th>
                <th className="px-10 py-6 text-[11px] font-black text-text-secondary uppercase tracking-wider border-b border-white/5">Device</th>
                <th className="px-10 py-6 text-[11px] font-black text-text-secondary uppercase tracking-wider border-b border-white/5">Repair Type</th>
                <th className="px-10 py-6 text-[11px] font-black text-text-secondary uppercase tracking-wider border-b border-white/5">Date</th>
                <th className="px-10 py-6 text-[11px] font-black text-text-secondary uppercase tracking-wider border-b border-white/5 text-center">Slot No</th>
                <th className="px-10 py-6 text-[11px] font-black text-text-secondary uppercase tracking-wider border-b border-white/5">Start Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {appointments.map((apt) => (
                <tr key={apt.id} className="group hover:bg-white/[0.03] transition-all duration-200">
                  <td className="px-10 py-8 text-[15px] font-bold text-text-primary tracking-tight">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                      <span>{apt.client}</span>
                    </div>
                  </td>
                  <td className="px-10 py-8">
                    <Badge variant="default" className="bg-white/5 text-text-secondary border-white/10 px-3 py-1 font-bold text-xs uppercase tracking-tight">{apt.device}</Badge>
                  </td>
                  <td className="px-10 py-8">
                    <div className="flex items-center space-x-2">
                       <div className="w-2 h-2 rounded bg-brand-orange/40" />
                       <span className="text-sm font-bold text-text-primary tracking-tight">{apt.repair}</span>
                    </div>
                  </td>
                  <td className="px-10 py-8 text-sm font-semibold text-text-secondary">{apt.date}</td>
                  <td className="px-10 py-8 text-center text-sm font-bold text-brand-blue">{apt.slot}</td>
                  <td className="px-10 py-8">
                    <Badge className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 font-black px-4 py-1.5 rounded-lg text-sm">{apt.time}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-10 border-t border-white/5 bg-white/[0.01] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-bold text-text-secondary tracking-tight">Showing <span className="text-text-primary">1 to 10</span> of 110 entries</p>
          <div className="flex items-center space-x-3">
            <button className="p-2.5 rounded-xl border border-white/10 text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5, '...', 11].map((page, i) => (
                <button
                  key={i}
                  className={`w-11 h-11 flex items-center justify-center rounded-xl text-sm font-black transition-all ${
                    page === 2
                      ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30'
                      : 'text-text-secondary hover:bg-white/5'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="p-2.5 rounded-xl border border-white/10 text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
