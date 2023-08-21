import About from '@/app/components/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'This is the about page',
};

export default async function AboutPage() {
  return <About />;
}
