'use client';

import { urlUtils } from '@/app/utils/urls';
import Image from 'next/image';
const Logo = () => {
  return (
    <a
      href={urlUtils.JOBYLON}
      target='_blank'
      className='-m-1.5 p-1.5'
      rel='noreferrer'
    >
      <span className='sr-only'>Lucas Lauriano de Souza</span>
      <Image
        priority
        width={80}
        height={80}
        className='h-8 w-auto'
        src={`${urlUtils.JOBYLON}/hubfs/raw_assets/public/jobylon2-theme/dist/assets/site-logo.svg`}
        alt=''
      />
    </a>
  );
};

export default Logo;
