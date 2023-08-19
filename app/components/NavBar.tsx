'use client';

import Menu from '@/app/components/Menu';
import MobileMenu from '@/app/components/MobileMenu';
import { urlUtils } from '@/app/utils/urls';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '#' },
  // { name: 'Features', href: '#' },
  // { name: 'Marketplace', href: '#' },
  { name: 'GitHub', href: urlUtils.GIT_HUB, target: '_blank' },
  { name: 'About', href: urlUtils.LINKED_IN, target: '_blank' },
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
