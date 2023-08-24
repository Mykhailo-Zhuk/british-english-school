'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import icons from '@/public/icons';
import Image from 'next/image';
import Link from 'next/link';

const listOfLinks = [
  { title: 'Обрати курс', path: 'course' },
  { title: 'Про компанію', path: 'about' },
  { title: 'Партнери', path: 'partners' },
  { title: 'Новини', path: 'news' },
  { title: 'Блог', path: 'blog' },
  { title: 'Вакансії', path: 'vacancies' },
  { title: 'Наша команда', path: 'team' },
  { title: 'Контакти', path: 'contacts' },
];

const SheetBlock = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image src={icons.burger} width={36} height={36} alt="burger" className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl p-2">Menu</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col space-y-2 mt-16">
          {listOfLinks.map((elem, index) => {
            return (
              <Link key={index} href={`/${elem?.path}`}>
                <li className="text-xl text-muted-foreground hover:bg-slate-200 p-2 rounded-lg">
                  {elem?.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default SheetBlock;
