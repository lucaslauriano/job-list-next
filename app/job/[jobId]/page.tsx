import JobDetail from '@/app/components/JobDetail';
import { getJob } from '@/lib/getJob';
import { IJob } from '@/types';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { jobId: number };
}) {
  const job: IJob | null = await getJob(params.jobId);
  return {
    title: job?.title,
    description: `This is ${job?.title}`,
  };
}

type Params = {
  params: {
    jobId: number;
  };
};
export default async function JobPage({ params: { jobId } }: Params) {
  const job: IJob | null = await getJob(jobId);
  return (
    <>
      <div className='border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between mt-16'>
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
          <button
            type='button'
            className='ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Apply
          </button>
        </div>
      </div>
      <JobDetail job={job} />
    </>
  );
}
