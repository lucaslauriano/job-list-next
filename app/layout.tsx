import './globals.css';
import NavBar from '@/app/components/NavBar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jobylon - Job List',
  description: 'Jobylon - Job List Tech Assessment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
