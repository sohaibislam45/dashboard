import Image from 'next/image';
import { Card } from '@/components/ui/Card';

export default function Home() {
  const stats = [
    {
      title: 'Total Calls Today',
      value: '127',
      trend: '+12%',
      trendType: 'up',
      icon: '/images/calls-today.png',
      iconBg: 'bg-brand-blue/20',
    },
    {
      title: 'AI-Handled Calls',
      value: '98',
      trend: '+77%',
      trendType: 'up',
      icon: '/images/ai-handled-calls.png',
      iconBg: 'bg-brand-pink/20',
    },
    {
      title: 'Warm Transfer',
      value: '23',
      trend: '+18%',
      trendType: 'up',
      icon: '/images/transfer.png',
      iconBg: 'bg-brand-orange/20',
    },
    {
      title: 'Appointments Booked',
      value: '34',
      trend: '+8%',
      trendType: 'up',
      icon: '/images/appointment-books.png',
      iconBg: 'bg-brand-green/20',
    },
    {
      title: 'Missed/Failed Calls',
      value: '6',
      trend: '-3%',
      trendType: 'down',
      icon: '/images/missed-calls.png',
      iconBg: 'bg-brand-red/20',
    },
    {
      title: 'Avg Call Duration',
      value: '3:42',
      trend: '+15%',
      trendType: 'up',
      icon: '/images/call-duration.png',
      iconBg: 'bg-brand-blue/20',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {stats.map((stat, index) => (
          <Card key={index} className="flex flex-col justify-between group hover:border-brand-blue/50 transition-all p-8 shadow-lg shadow-black/10">
            <div className="flex justify-between items-start mb-6">
              <div className={`${stat.iconBg} p-4 rounded-2xl shadow-inner`}>
                <Image src={stat.icon} alt={stat.title} width={32} height={32} />
              </div>
              <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold border ${
                stat.trendType === 'up' 
                  ? 'bg-brand-green/10 text-brand-green border-brand-green/20' 
                  : 'bg-brand-red/10 text-brand-red border-brand-red/20'
              }`}>
                <span>{stat.trend}</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {stat.trendType === 'up' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  )}
                </svg>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-text-secondary uppercase tracking-widest mb-2">{stat.title}</p>
              <h3 className="text-4xl font-bold text-text-primary tracking-tight">{stat.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      {/* Call Trends Chart */}
      <Card className="p-0 overflow-hidden shadow-xl shadow-black/10">
        <div className="p-10 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-1">Call Trends - This Week</h3>
            <p className="text-sm text-text-secondary font-medium uppercase tracking-wider">Total: 472 calls processed</p>
          </div>
          <div className="relative">
            <button className="flex items-center space-x-3 bg-surface-hover border border-border-subtle px-5 py-2.5 rounded-xl text-sm font-semibold text-text-primary hover:border-brand-blue/50 transition-all">
              <span>This Week</span>
              <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="h-[400px] w-full px-10 pb-10 relative">
          {/* Y-Axis Labels */}
          <div className="absolute left-10 top-0 bottom-16 flex flex-col justify-between text-[11px] font-bold text-text-secondary pr-6 w-10 text-right uppercase tracking-tighter">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>

          <div className="ml-12 h-full flex flex-col">
            {/* Grid Lines & Chart Area */}
            <div className="flex-1 relative border-b border-white/5">
              {[0, 1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="absolute w-full border-t border-white/5" 
                  style={{ top: `${i * 25}%` }} 
                />
              ))}
              
              {/* SVG Chart */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Area Path */}
                <path
                  d="M 0 80 Q 50 60, 100 70 T 200 65 T 300 50 T 400 30 T 500 45 T 600 20 T 700 35 L 700 100 L 0 100 Z"
                  fill="url(#chartGradient)"
                  className="w-full"
                  vectorEffect="non-scaling-stroke"
                  transform="scale(1.2, 3.5) translate(0, -20)"
                />
                
                {/* Stroke Path */}
                <path
                  d="M 0 80 Q 50 60, 100 70 T 200 65 T 300 50 T 400 30 T 500 45 T 600 20 T 700 35"
                  fill="none"
                  stroke="#0EA5E9"
                  strokeWidth="3"
                  vectorEffect="non-scaling-stroke"
                  transform="scale(1.2, 3.5) translate(0, -20)"
                />
              </svg>
            </div>

            {/* X-Axis Labels */}
            <div className="flex justify-between mt-6 text-[11px] font-bold text-text-secondary uppercase tracking-wider">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Bottom Lists Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Recent Activity */}
        <Card className="flex flex-col p-10 shadow-xl shadow-black/10">
          <h3 className="text-xl font-bold text-text-primary mb-10 tracking-tight">Recent Activity</h3>
          <div className="space-y-6">
            {[
              { text: 'AI booked appointment for iPhone 13 screen repair', time: '2 min ago', color: 'bg-brand-green' },
              { text: 'Warm transfer to technician - Software issue', time: '5 min ago', color: 'bg-brand-orange' },
              { text: 'Quote provided for iPad battery replacement', time: '8 min ago', color: 'bg-brand-green' },
              { text: 'Call dropped after 12 seconds', time: '15 min ago', color: 'bg-brand-red' },
            ].map((item, idx) => (
              <div key={idx} className="bg-surface-hover/30 p-5 rounded-2xl border border-white/5 group hover:bg-surface-hover transition-all cursor-default">
                <div className="flex items-start space-x-4">
                  <div className={`w-3 h-3 mt-1.5 rounded-full ${item.color} shadow-lg shadow-black/20`} />
                  <div>
                    <p className="text-[15px] text-text-primary font-bold tracking-tight">{item.text}</p>
                    <p className="text-[11px] text-text-secondary mt-1.5 font-semibold uppercase tracking-widest">{item.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Repair Requests */}
        <Card className="flex flex-col p-10 shadow-xl shadow-black/10">
          <h3 className="text-xl font-bold text-text-primary mb-10 tracking-tight">Top Repair Requests</h3>
          <div className="space-y-10">
            {[
              { name: 'Screen Repair', count: 156, percentage: 80 },
              { name: 'Battery Replacement', count: 89, percentage: 50 },
              { name: 'Back Glass Repair', count: 67, percentage: 40 },
              { name: 'Software Issues', count: 45, percentage: 30 },
            ].map((request, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex justify-between text-sm items-center">
                  <span className="font-bold text-text-primary tracking-tight text-base">{request.name}</span>
                  <span className="text-text-secondary font-bold text-xs uppercase tracking-widest">{request.count} requests</span>
                </div>
                <div className="h-2.5 w-full bg-surface-hover rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-brand-blue rounded-full shadow-lg shadow-brand-blue/40" 
                    style={{ width: `${request.percentage}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
