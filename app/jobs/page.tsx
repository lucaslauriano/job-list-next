import JobList from '@/app/jobs/JobList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jobs',
  description: 'This is the jobs page',
};

export default async function JobsPage() {
  return <JobList />;
}
