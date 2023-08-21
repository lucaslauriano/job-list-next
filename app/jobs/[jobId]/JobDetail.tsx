'use client';

import { IJob } from '@/types/jobs';
import { getFormattedDate, getFormattedDescription } from '@/utils/format';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type JobsProps = {
  job: IJob | null;
};

const JobDetail = ({ job }: JobsProps) => {
  return (
    <div className='mb-16 bg-white px-6'>
      <div className='border-b  border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between mt-16'>
        <div className='sm:w-0 sm:flex-1'>
          <h3
            id='message-heading'
            className='text-base font-semibold leading-6 text-gray-900'
          >
            {job?.title}
          </h3>
          <p className='mt-1 truncate text-sm text-gray-500'>{job?.function}</p>
        </div>
        <div className='mt-3 flex sm:ml-4 sm:mt-0'>
          <Link
            href={job?.urls.ad || '#'}
            target='_blank'
            className='flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
          >
            View
          </Link>
        </div>
        <div className='mt-3 flex sm:ml-4 sm:mt-0'>
          <Link
            href={job?.urls.apply || '#'}
            target='_blank'
            className='ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Apply
          </Link>
        </div>
      </div>
      <div className='px-4 sm:px-0'>
        <h3 className='mt-2 text-base font-semibold leading-7 text-gray-900'>
          {job?.company.name}
        </h3>
        <dd className='mt-2 text-sm text-gray-900 text-justify'>
          {getFormattedDescription(job?.company.descr)}
        </dd>
      </div>
      <div className='mt-6'>
        <dl className='grid grid-cols-1 sm:grid-cols-3'>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Contact
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:mt-2'>
              {job?.owner.name}
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Email address
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:mt-2'>
              {job?.owner.email}
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Location
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:mt-2'>
              {job?.locations.map((item) => (
                <p key={item.location.text}>{item.location.text}</p>
              ))}
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Application for
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:mt-2'>
              {job?.function}
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Experience
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:mt-2'>
              {job?.experience}
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Type
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:mt-2'>
              {job?.employment_type}
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-3 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              You will
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:mt-2 text-justify'>
              {getFormattedDescription(job?.descr)}
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-3 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              You have
            </dt>
            <dd className='mt-2 text-sm text-gray-900 text-justify'>
              {getFormattedDescription(job?.skills)}
            </dd>
          </div>
        </dl>
      </div>
      {job?.from_date && (
        <dt className='pb-20 text-sm font-medium leading-6 text-gray-900'>
          Created at
          <p className='mt-1 truncate text-sm text-gray-500'>
            {getFormattedDate(job?.from_date)}
          </p>
        </dt>
      )}
    </div>
  );
};

export default JobDetail;
