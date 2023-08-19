import { IJob } from '@/types';
import { PaperClipIcon } from '@heroicons/react/20/solid';

type JobsProps = {
  job: IJob | null;
};
function getFormatedDescription(htmlString: string | undefined) {
  if (!htmlString) return null;
  const textWithoutTags = htmlString.replace(/<\/?[^>]+(>|$)/g, '');

  const lines = textWithoutTags
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '');
  console.log(lines);

  return lines.slice(1).map((lines) => lines);
}
const JobDetail = ({ job }: JobsProps) => {
  const skills = getFormatedDescription(job?.skills);
  const jobDescription = getFormatedDescription(job?.descr);
  return (
    <div>
      <div className='px-4 sm:px-0'>
        <h3 className='text-base font-semibold leading-7 text-gray-900'>
          {job?.company.name}
        </h3>
        <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>
          {job?.company.descr.replace(/<\/?[^>]+(>|$)/g, '')}
        </p>
      </div>
      <div className='mt-6'>
        <dl className='grid grid-cols-1 sm:grid-cols-2'>
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
              Application for
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:mt-2'>
              {job?.function}
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
              {job?.locations.map((location) => (
                <p key={location.name}>{location.name}</p>
              ))}
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              You will
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:mt-2'>
              {jobDescription}
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              You have
            </dt>
            <dd className='mt-2 text-sm text-gray-900'>
              <ul
                role='list'
                className='divide-y divide-gray-100 rounded-md border border-gray-200'
              >
                {skills?.map((skill) => (
                  <li
                    key={skill}
                    className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'
                  >
                    <div className='flex w-0 flex-1 items-center'>
                      <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                        <span className='truncate font-medium'>{skill}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default JobDetail;
