'use client';

import SearchInput from '@/app/components/SearchInput';
import { useAppStore } from '@/stores/useAppStore';
import { IResponse } from '@/types/jobs';
import ChevronRightIcon from '@heroicons/react/20/solid/ChevronRightIcon';
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const JobList = () => {
  const router = useRouter();

  const { jobs, fetchJobs } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState<IResponse[]>(jobs);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  useEffect(() => {
    setFilteredJobs(
      jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [jobs, searchTerm]);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className='mb-16 bg-white px-6 py-16 sm:py-16'>
      <div className='border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between'>
        <h3 className='text-base font-semibold leading-6 text-gray-900 '>
          Job Postings
        </h3>
        <SearchInput onSearch={handleSearch} />
      </div>
      <div className='rounded-md border-2 mt-6 px-6 py-0 border-gray-50'>
        <ul className='divide-y divide-gray-100'>
          {filteredJobs.length === 0 ? (
            <div className='mt-2 justify-center  flex mx-auto'>
              <p className='text-lg italic leading-8 text-gray-400'>No data </p>
              <ExclamationTriangleIcon className='mt-2 ml-2 h-5 w-5 flex-none text-gray-400' />
            </div>
          ) : (
            filteredJobs.map((job) => (
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
                  <button
                    onClick={() => router.push(`/jobs/${job.id}`)}
                    type='button'
                    className='rounded-full p-1 text-white shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    <ChevronRightIcon
                      className='h-6 w-6 flex-none text-gray-400 cursor-pointer'
                      aria-hidden='true'
                    />
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
export default JobList;
