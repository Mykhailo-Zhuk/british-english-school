'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import icons from '@/public/icons';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
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
        <Image src={icons.burger} width={36} height={36} alt="burger" className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl p-2">{t('menu')}</SheetTitle>
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
