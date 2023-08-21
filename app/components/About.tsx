'use client';

import Link from 'next/link';

const About = () => {
  return (
    <div className='bg-white px-6 py-24 sm:py-12 '>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          About this project
        </h2>
        <p className='pb-6 pt-6 text-base font-semibold leading-7 text-indigo-600'>
          A simple job-list app with Next.js 13.4
        </p>
        <div className='border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0'>
          <dt className='text-sm font-medium leading-6 text-gray-900'>About</dt>
          <dd className='mt-1 text-justify text-sm leading-6 text-gray-700 sm:mt-2'>
            This is what we have in mind for the test. It should in the end show
            us a little more about how you solve problems, how you structure
            your code and what you care about when developing. Try showcasing
            the things you think are important in a project and think about your
            project architecture as if it was a larger project. If there is not
            enough time, please take notes during your development and submit
            them on the feedback form together with your code.
          </dd>
        </div>
        <p className='mt-2 text-lg leading-8 text-gray-600'>
          The site in question where you should get the jobs from is one of the
          following:{' '}
          <Link
            href='https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/'
            target='_blank'
          >
            XML
          </Link>
          {' or '}
          <Link
            href='https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json'
            target='_blank'
          >
            JSON
          </Link>
        </p>

        <div className='border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0'>
          <dt className='text-sm font-medium leading-6 text-gray-900'>
            The use-case is very simple
          </dt>
          <dd className='mt-2 text-sm text-gray-900'>
            <ul
              role='list'
              className='divide-y divide-gray-100 rounded-md border border-gray-200'
            >
              <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
                <div className='flex w-0 flex-1 items-center'>
                  <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                    <span className='truncate font-medium'>
                      User types a URL in the browser
                    </span>
                  </div>
                </div>
              </li>
              <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
                <div className='flex w-0 flex-1 items-center'>
                  <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                    <span className=' font-medium'>
                      User is presented with a list of jobs
                    </span>
                  </div>
                </div>
              </li>
              <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
                <div className='flex w-0 flex-1 items-center'>
                  <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                    <span className=' font-medium'>
                      The user can interact with the jobs in the list and follow
                      a link to the actual ads
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </dd>
        </div>
        <div className=' border-gray-100 px-4  sm:col-span-2 sm:px-0'>
          <dt className='text-sm font-medium leading-6 text-gray-900'>
            Non functional requirements
          </dt>
          <dd className='mt-2 text-sm text-gray-900'>
            <ul
              role='list'
              className='divide-y divide-gray-100 rounded-md border border-gray-200'
            >
              <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
                <div className='flex w-0 flex-1 items-center'>
                  <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                    <span className='truncate font-medium'>
                      Use React, and create-react-app as a basis to complete
                      your assignment
                    </span>
                  </div>
                </div>
              </li>
              <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
                <div className='flex w-0 flex-1 items-center'>
                  <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                    <span className=' font-medium'>
                      It should work in a modern browser (Chrome or Firefox)
                    </span>
                  </div>
                </div>
              </li>
              <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
                <div className='flex w-0 flex-1 items-center'>
                  <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                    <span className=' font-medium'>
                      If you want to impress, feel free to put a special touch
                      on the UI. If you have any questions feel free to reach
                      out at any time.
                    </span>
                  </div>
                </div>
              </li>
              <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
                <div className='flex w-0 flex-1 items-center'>
                  <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                    <span className=' font-medium'>
                      I also need to get access to all the source code, be it on
                      Github, Bitbucket or just a tar.gz
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </dd>
          <div className=' border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Bonus
            </dt>
            <div className='ml-4 flex min-w-0 flex-1 gap-2'>
              <span className='font-medium'>
                If you want to impress, feel free to put a special touch on the
                UI. If you have any questions feel free to reach out at any
                time.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
