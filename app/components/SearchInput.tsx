import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

type SearchInputProps = {
  onSearch: (searchTerm: string) => void;
};

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (event: any) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
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
            {/* <MagnifyingGlassIcon
              className='h-5 w-5 text-gray-400'
              aria-hidden='true'
            /> */}
          </div>
          <input
            type='text'
            data-testid='mobile-search-job'
            name='mobile-search-job'
            id='mobile-search-job'
            onChange={handleInputChange}
            value={searchTerm}
            className='block w-full  rounded-md  border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:hidden'
            placeholder='Search'
          />
          <input
            type='text'
            name='desktop-search-job'
            data-testid='desktop-search-job'
            id='desktop-search-job'
            onChange={handleInputChange}
            value={searchTerm}
            className='hidden w-full  rounded-md border-0 py-1.5 pl-10 text-sm leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:block'
            placeholder='Search jobs'
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
