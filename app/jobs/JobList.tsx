'use client';

import { useAppStore } from '@/stores/useAppStore';
import { IResponse } from '@/types/jobs';
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const JobList = () => {
  const { jobs, fetchJobs } = useAppStore();
  const [mJobs, setMJobs] = useState<IResponse[]>([]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  useEffect(() => {
    setMJobs(jobs);
  }, [setMJobs, jobs]);

  const router = useRouter();
  return (
    <>
      <div className='border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between mt-16'>
        <h3 className='text-base font-semibold leading-6 text-gray-900'>
          Job Postings
        </h3>
        <div className='mt-3 sm:ml-4 sm:mt-0'>
          <label htmlFor='mobile-search-jobs' className='sr-only'>
            Search
          </label>
          <label htmlFor='desktop-search-jobs' className='sr-only'>
            Search
          </label>
          <div className='flex rounded-md shadow-sm'>
            <div className='relative flex-grow focus-within:z-10'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <MagnifyingGlassIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </div>
              <input
                type='text'
                name='mobile-search-job'
                id='mobile-search-job'
                className='block w-full  rounded-md  border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:hidden'
                placeholder='Search'
              />
              <input
                type='text'
                name='desktop-search-job'
                id='desktop-search-job'
                className='hidden w-full  rounded-md border-0 py-1.5 pl-10 text-sm leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:block'
                placeholder='Search jobs'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-md border-2 mt-12 px-6 py-0 border-gray-50'>
        <ul className='divide-y divide-gray-100'>
          {mJobs.map((job) => (
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
                  onClick={() => router.push(`/jobs/${job.id}`)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default JobList;
