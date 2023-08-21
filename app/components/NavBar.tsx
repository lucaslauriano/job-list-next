'use client';

import Menu from '@/app/components/Menu';
import MobileMenu from '@/app/components/MobileMenu';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'About', href: '/about' },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className='bg-white'>
      <Menu setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} />
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
      />
    </nav>
  );
};

export default NavBar;
