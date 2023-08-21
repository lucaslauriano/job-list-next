'use client';

import Logo from '@/app/components/Logo';
import Bars3Icon from '@heroicons/react/20/solid/Bars3Icon';
import Link from 'next/link';

interface MobileMenuProps {
  setMobileMenuOpen: any;
  navigation: any;
}

const Menu = ({ setMobileMenuOpen, navigation }: MobileMenuProps) => {
  return (
    <nav
      className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
      aria-label='Global'
    >
      <div className='flex lg:flex-1'>
        <Logo />
      </div>
      <div className='flex lg:hidden'>
        <button
          type='button'
          className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className='sr-only'>Open main menu</span>
          <Bars3Icon className='h-6 w-6' aria-hidden='true' />
        </button>
      </div>
      <div className='hidden lg:flex lg:gap-x-12'>
        {navigation.map((item: any) => (
          <Link
            key={item.name}
            href={item.href}
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
        <span className='inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100'>
          <svg
            className='h-full w-full text-gray-300'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
          </svg>
        </span>
      </div>
    </nav>
  );
};

export default Menu;
