'use client';
import Logo from '@/app/components/Logo';
import { Dialog } from '@headlessui/react';
import XMarkIcon from '@heroicons/react/20/solid/XMarkIcon';

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: any;
  navigation: any;
}
const MobileMenu = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  navigation,
}: MobileMenuProps) => {
  return (
    <Dialog
      as='div'
      className='lg:hidden'
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className='fixed inset-0 z-10' />
      <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
        <div className='flex items-center justify-between'>
          <Logo />
          <button
            type='button'
            data-testid='navbar__mobile-menu-button'
            className='-m-2.5 rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className='sr-only'>Close menu</span>
            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='mt-6 flow-root'>
          <div className='-my-6 divide-y divide-gray-500/10'>
            <div className='space-y-2 py-6'>
              {navigation.map((item: any) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileMenu;
