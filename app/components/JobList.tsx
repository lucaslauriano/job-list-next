'use client';

import { IJob } from '@/types';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface JobsProps {
  jobs: IJob[];
}
const JobList = ({ jobs }: JobsProps) => {
  const router = useRouter();
  return (
    <div className='rounded-md border-2 mt-12 px-6 py-0 border-gray-50'>
      <ul className='divide-y divide-gray-100'>
        {jobs.map((job) => (
          <li key={job.id} className='flex justify-between gap-x-6 py-5'>
            <div className='flex min-w-0 gap-x-4'>
              <Image
                priority
                width={80}
                height={80}
                className='h-12 w-12 flex-none rounded-full bg-gray-50'
                src={job.company.logo}
                alt=''
              />
              <div className='min-w-0 flex-auto'>
                <p className='text-sm font-semibold leading-6 text-gray-900'>
                  {job.title}
                </p>
                <p className='mt-1 truncate text-xs leading-5 text-gray-500'>
                  {job.company.name}
                </p>
              </div>
            </div>
            <div className='flex shrink-0 items-center gap-x-4'>
              <div className='hidden sm:flex sm:flex-col sm:items-end'>
                <p className='text-sm leading-6 text-gray-900'>
                  {job.employment_type}
                </p>
                <p className='mt-1 text-xs leading-5 text-gray-500'>
                  {job.experience}
                </p>
              </div>
              <ChevronRightIcon
                className='h-5 w-5 flex-none text-gray-400 cursor-pointer'
                aria-hidden='true'
                onClick={() => router.push(`/job/${job.id}`)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
