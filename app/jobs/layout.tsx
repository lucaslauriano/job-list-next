import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const JobsLayout = ({ children }: { children: React.ReactNode }) => {
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
                Home
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
                      Home
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
