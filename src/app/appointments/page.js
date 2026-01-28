'use client';

import React from 'react';
import { 
  Calendar, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

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
      icon: CheckCircle,
      iconColor: 'text-brand-green',
      iconBg: 'bg-brand-green/10',
    },
    {
      title: 'Pending',
      value: '3',
      subtext: 'Awaiting confirmation',
      subtextColor: 'text-text-secondary',
      icon: AlertCircle,
      iconColor: 'text-brand-orange',
      iconBg: 'bg-brand-orange/10',
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://techstore.com/book?id=store123');
    alert('Link copied to clipboard!');
  };

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <Card key={idx} className="flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`${stat.iconBg} p-2 rounded-lg`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
              <span className="text-sm font-medium text-text-secondary">{stat.title}</span>
            </div>
            <h3 className="text-3xl font-bold text-text-primary mb-1">{stat.value}</h3>
            <p className={`text-xs ${stat.subtextColor}`}>{stat.subtext}</p>
          </Card>
        ))}
      </div>

      {/* Booking Link Section */}
      <Card className="flex flex-col space-y-4">
        <h4 className="text-sm font-semibold text-text-primary">Booking Link</h4>
        <div className="flex space-x-4">
          <div className="flex-1 bg-background border border-border-subtle rounded-xl px-4 py-3 text-sm text-text-secondary">
            https://techstore.com/book?id=store123
          </div>
          <Button 
            variant="secondary" 
            className="flex items-center space-x-2 bg-brand-blue/10 border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white"
            onClick={copyToClipboard}
          >
            <Copy className="w-4 h-4" />
            <span>Copy Link</span>
          </Button>
        </div>
      </Card>

      {/* Appointments Table */}
      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-hover/50 text-xs text-text-secondary font-semibold uppercase tracking-wider">
                <th className="px-6 py-4">Client Name</th>
                <th className="px-6 py-4">Client Phone</th>
                <th className="px-6 py-4">Client mail</th>
                <th className="px-6 py-4">Device</th>
                <th className="px-6 py-4">Repair Type</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Slot no</th>
                <th className="px-6 py-4">Start Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {appointments.map((appt) => (
                <tr key={appt.id} className="text-sm text-text-secondary hover:bg-surface-hover transition-colors">
                  <td className="px-6 py-4 font-medium text-brand-blue">{appt.name}</td>
                  <td className="px-6 py-4">{appt.phone}</td>
                  <td className="px-6 py-4">{appt.email}</td>
                  <td className="px-6 py-4">{appt.device}</td>
                  <td className="px-6 py-4">{appt.repairType}</td>
                  <td className="px-6 py-4">{appt.date}</td>
                  <td className="px-6 py-4">{appt.slot}</td>
                  <td className="px-6 py-4">{appt.startTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 flex items-center justify-center space-x-4">
          <button className="p-2 text-text-secondary hover:text-text-primary disabled:opacity-30">
            <ChevronLeft className="w-5 h-5" />
            <span className="sr-only">Previous</span>
          </button>
          
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5, '...', 11].map((page, idx) => (
              <button 
                key={idx}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                  page === 2 ? 'bg-brand-blue text-white' : 'text-text-secondary hover:bg-surface-hover'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button className="p-2 text-text-secondary hover:text-text-primary group">
            <span className="sr-only">Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </Card>
    </div>
  );
}
