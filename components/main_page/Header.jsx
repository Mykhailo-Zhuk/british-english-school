'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Navigation, SheetBlock, LanguageSwitcher } from './index';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-[100vw] bg-white z-50 bg-opacity-70">
      <div className="flex w-full px-5 justify-between max-w-[1320px] mx-auto h-20 md:h-14">
        <div className="flex space-x-2 items-center flex-shrink-0 w-max">
          <Avatar>
            <Link href={'/'}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Link>
          </Avatar>
          <h3>
            <Link href={'/'}>
              British <br />
              School
            </Link>
          </h3>
        </div>
        <div className="hidden md:visible">
          <Navigation />
        </div>
        <div className="flex space-x-2 items-center">
          <LanguageSwitcher />
          <SheetBlock />
        </div>
      </div>
    </header>
  );
};

export default Header;
