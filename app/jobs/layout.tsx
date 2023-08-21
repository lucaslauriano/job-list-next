'use client';

import React from 'react';
import Link from 'next/link';
import {
  HomeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid';
import { useSelectedLayoutSegment } from 'next/navigation';
const JobsLayout = ({ children }: { children: React.ReactNode }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl'>
        <div>
          <div>
            <nav className='sm:hidden' aria-label='Back'>
              <Link
                href='/'
                className='flex items-center text-sm font-medium text-gray-500 hover:text-gray-700'
              >
                <ChevronLeftIcon
                  className='-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400'
                  aria-hidden='true'
                />
                <HomeIcon
                  className='h-5 w-5 flex-shrink-0'
                  aria-hidden='true'
                />
              </Link>
            </nav>
            <nav className='hidden sm:flex' aria-label='Breadcrumb'>
              <ol className='flex items-center space-x-4'>
                <li>
                  <div className='flex'>
                    <Link
                      href='/'
                      className='text-sm font-medium text-gray-500 hover:text-gray-700'
                    >
                      <HomeIcon
                        className='h-5 w-5 flex-shrink-0'
                        aria-hidden='true'
                      />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='flex items-center'>
                    <ChevronRightIcon
                      className='h-5 w-5 flex-shrink-0 text-gray-400'
                      aria-hidden='true'
                    />
                    <Link
                      href='/jobs'
                      className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                    >
                      Jobs
                    </Link>
                  </div>
                </li>
                {segment && (
                  <li>
                    <div className='flex items-center'>
                      <ChevronRightIcon
                        className='h-5 w-5 flex-shrink-0 text-gray-400'
                        aria-hidden='true'
                      />
                      <Link
                        href={`/jobs/${segment}`}
                        className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                      >
                        Job Id: {segment}
                      </Link>
                    </div>
                  </li>
                )}
              </ol>
            </nav>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default JobsLayout;
