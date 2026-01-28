import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dashboard Overview',
  description: 'AI-Powered Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex bg-background text-text-primary min-h-screen">
          <Sidebar />
          <div className="flex-1 ml-64 flex flex-col">
            <Navbar />
            <main className="flex-1 mt-20 p-8 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
