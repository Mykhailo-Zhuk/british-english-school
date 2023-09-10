'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Navigation, SheetBlock } from './index';
import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex w-full px-2 justify-between max-w-[1320px] mx-auto p-1 h-14">
      <div className="flex space-x-2 flex-shrink-0 w-max">
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
      <Navigation />
      <div className="flex space-x-2 items-center">
        <LanguageSwitcher />
        <SheetBlock />
      </div>
    </header>
  );
};

export default Header;
