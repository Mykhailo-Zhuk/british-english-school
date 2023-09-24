import { Toaster } from '@/components/ui/toaster';
import '../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Teenagers Courses',
  description: 'All courses for adult students',
};

export default function RootLayout({ children }) {
  return (
    <main className={inter.className}>
      {children}
      <Toaster />
    </main>
  );
}
