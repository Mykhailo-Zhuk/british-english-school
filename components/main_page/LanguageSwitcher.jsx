'use client';

import Link from 'next-intl/link';
import { usePathname } from 'next-intl/client';
import { IoLanguage } from 'react-icons/io5';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LanguageSwitcher = () => {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <IoLanguage size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-16 h-fit">
        <DropdownMenuItem className="flex justify-center">
          <Link href={pathname} locale="ua">
            UK
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-center">
          <Link href={pathname} locale="en">
            EN
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
