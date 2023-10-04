'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import icons from '@/public/icons';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Navigation = () => {
  const t = useTranslations('main_header');

  const components = {
    center: [
      { label: t('navigation.contact_data'), link: '#' },
      { label: t('navigation.news'), link: '#news' },
    ],
    courses: [
      {
        label: t('navigation.courses_for_adult.title'),
        link: '/adult',
        description: t('navigation.courses_for_adult.description'),
      },
      {
        label: t('navigation.courses_for_teenagers.title'),
        link: '/teenagers',
        description: t('navigation.courses_for_teenagers.description'),
      },
      {
        label: t('navigation.courses_for_kids.title'),
        link: '/kids',
        description: t('navigation.courses_for_kids.description'),
      },
    ],
    contacts: {
      address: t('navigation.address'),
      mapLink: '#',
      email: 'example@gmail.com',
      messengers: [
        {
          title: 'Viber',
          icon: icons.viber1,
          href: 'viber://chat?number=+1234567890',
        },
        {
          title: 'Telegram',
          icon: icons.telegram1,
          href: 'tg://resolve?domain=username',
        },
        {
          title: 'Messenger',
          icon: icons.messenger1,
          href: 'fb-messenger://user-thread/1234567890',
        },
      ],
      phoneNumbers: [
        '+380 (44) 580 33 00',
        '+380 (44) 580 33 00',
        '+380 (44) 580 33 00',
        '+380 (44) 580 33 00',
      ],
    },
  };
  const { contacts, courses } = components;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="dark:bg-slate-800 text-slate-500 dark:text-slate-400">
            {t('navigation.choose_course')}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] dark:bg-slate-800">
              {courses?.map(({ label, link, description }, index) => {
                if (index === 0) {
                  return (
                    <li key={index} className="row-span-2">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted dark:from-slate-600 dark:to-slate-700 p-6 no-underline outline-none focus:shadow-md"
                          href={link}>
                          <p className="text-sm leading-tight font-bold text-red-500">
                            {t('navigation.most_popular')}
                          </p>
                          <div className="mb-2 mt-4 text-lg font-medium">{label}</div>
                          <p className="text-sm leading-tight text-muted-foreground dark:text-slate-400">
                            {description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  );
                } else
                  return (
                    <li key={index}>
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted dark:from-slate-600 dark:to-slate-700  p-6 no-underline outline-none focus:shadow-md"
                          href={link}>
                          <div className="mb-2 mt-4 text-lg font-medium">{label}</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="dark:bg-slate-800 text-slate-500 dark:text-slate-400">
            {t('navigation.contact_us')}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[600px] md:grid-cols-3 dark:bg-slate-800 text-slate-500 dark:text-slate-400s">
              <ul>
                <ListItem
                  href={contacts.mapLink}
                  title={t('navigation.address_title')}
                  label={contacts.address}>
                  {contacts.address}
                </ListItem>
                <ListItem href={`mailto:${contacts.email}`} title="Email">
                  {contacts.email}
                </ListItem>
              </ul>
              <ul>
                <p className="text-sm font-medium leading-none">{t('navigation.phones')}</p>
                {contacts.phoneNumbers.map((item, index) => {
                  return (
                    <ListItem key={index} href={`tel:${item}`}>
                      {item}
                    </ListItem>
                  );
                })}
              </ul>
              <ul className="text-slate-500">
                <p className="text-sm font-medium leading-none">{t('navigation.text_us')}</p>
                {contacts.messengers.map((item, index) => {
                  return (
                    <ListItem key={index} href={item.href}>
                      <p className="inline-flex items-center">
                        <Image
                          src={item.icon}
                          alt="social"
                          width={20}
                          height={20}
                          className="pr-4 w-full"
                        />
                        {item.title}
                      </p>
                    </ListItem>
                  );
                })}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef(({ className, title, label, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent dark:hover:bg-slate-400',
            className,
          )}
          {...props}>
          <div className="text-sm font-medium leading-none dark:from-slate-600">{title}</div>
          <p
            className="line-clamp-2 text-sm leading-snug text-muted-foreground dark:text-slate-600"
            title={label}>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default Navigation;
