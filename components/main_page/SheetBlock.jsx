'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const SheetBlock = () => {
  const t = useTranslations('sheet');

  const listOfLinks = [
    { title: t('course'), path: '#courses' },
    { title: t('about'), path: 'about' },
    { title: t('news'), path: '#news' },
    { title: t('contact'), path: '#contacts' },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <GiHamburgerMenu size={24} className="cursor-pointer dark:hover:text-white" />
      </SheetTrigger>
      <SheetContent className="dark:bg-slate-800">
        <SheetHeader>
          <SheetTitle className="text-xl p-2 dark:text-slate-400">{t('menu')}</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col space-y-2 mt-16">
          {listOfLinks.map((elem, index) => {
            return (
              <SheetClose key={index} asChild>
                <Link href={`/${elem.path}`}>
                  <li className="text-xl text-muted-foreground hover:bg-accent p-2 rounded-lg">
                    {elem.title}
                  </li>
                </Link>
              </SheetClose>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default SheetBlock;
