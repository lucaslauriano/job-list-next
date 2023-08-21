'use client';

import Logo from '@/app/components/Logo';
import { Bars3Icon } from '@heroicons/react/20/solid';
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
        <Link
          href='/https://www.jobylon.com/'
          className='text-sm font-semibold leading-6 text-gray-900'
        >
          Log in <span aria-hidden='true'>&rarr;</span>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
