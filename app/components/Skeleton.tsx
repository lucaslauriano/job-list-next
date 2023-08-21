const Skeleton = () => {
  return (
    <>
      <div className='border-b border-gray-6 pb-5 sm:flex sm:items-center sm:justify-between mt-16'>
        <div className='sm:w-0 sm:flex-1'>
          <h3
            id='message-heading'
            className='text-base font-semibold leading-6 text-gray-900'
          >
            <div className='h-2 w-20 bg-slate-300 rounded' />
          </h3>
          <p className='mt-1 truncate text-sm text-gray-500'>
            {' '}
            <div className='h-4 bg-slate-300 rounded' />
          </p>
        </div>
        <div className='mt-3 flex sm:ml-4 sm:mt-0'>
          <div className='h-6 bg-slate-400 rounded'></div>
        </div>
      </div>
      <div className='px-4 sm:px-0'>
        <h3 className='mt-2 text-base font-semibold leading-7 text-gray-900'>
          <div className='h-2 w-20 bg-slate-300 rounded' />
        </h3>
        <dd className='mt-2 text-sm text-gray-900 text-justify'>
          <div className='h-4 bg-slate-300 rounded' />
        </dd>
      </div>
      <div className='mt-6'>
        <dl className='grid grid-cols-1 sm:grid-cols-3'>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              <div className='h-2 w-20 bg-slate-300 rounded' />
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-400 sm:mt-2'>
              <div className='h-4 bg-slate-300 rounded' />
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              <div className='h-2 w-20 bg-slate-300 rounded' />
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-400 sm:mt-2'>
              <div className='h-4 bg-slate-300 rounded' />
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              <div className='h-2 w-20 bg-slate-300 rounded' />
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-400 sm:mt-2'>
              <div className='h-4 bg-slate-300 rounded' />
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              <div className='h-2 w-20 bg-slate-300 rounded' />
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-400 sm:mt-2'>
              <div className='h-4 bg-slate-300 rounded' />
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              <div className='h-2 w-20 bg-slate-300 rounded' />
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-400 sm:mt-2'>
              <div className='h-4 bg-slate-300 rounded' />
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              <div className='h-2 w-20 bg-slate-300 rounded' />
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-400 sm:mt-2'>
              <div className='h-4 bg-slate-300 rounded' />
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-3 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              <div className='h-2 w-20 bg-slate-300 rounded' />
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-400 sm:mt-2 text-justify'>
              <div className='h-4 bg-slate-300 rounded' />
            </dd>
          </div>
          <div className='border-t border-gray-100 px-4 py-6 sm:col-span-3 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              <div className='h-2 w-20 bg-slate-300 rounded' />
            </dt>
            <dd className='mt-2 text-sm text-gray-900 text-justify'>
              <div className='h-4 bg-slate-300 rounded' />
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};

export default Skeleton;
