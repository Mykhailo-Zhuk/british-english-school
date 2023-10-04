'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Navigation, SheetBlock, LanguageSwitcher } from './index';
import Link from 'next/link';
import DarkMode from '../features/DarkMode';

const Header = () => {
  return (
    <header className="fixed w-full bg-white z-50 bg-opacity-70 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
      <div className="flex w-full px-5 justify-between max-w-[1320px] mx-auto h-20 md:h-14">
        <div className="flex space-x-2 items-center flex-shrink-0 w-max">
          <Avatar>
            <Link href={'/'}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="w-10">CN</AvatarFallback>
            </Link>
          </Avatar>
          <h3>
            <Link href={'/'}>
              British <br />
              School
            </Link>
          </h3>
        </div>
        <div className="hidden md:flex">
          <Navigation />
        </div>
        <div className="flex space-x-2 items-center">
          <DarkMode />
          <LanguageSwitcher />
          <SheetBlock />
        </div>
      </div>
    </header>
  );
};

export default Header;
