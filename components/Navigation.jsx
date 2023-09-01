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
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import icons from '@/public/icons';
import Image from 'next/image';

const components = {
  students: [
    { label: 'Правила центру', link: '#' },
    { label: 'Договір навчання', link: '#' },
    { label: 'Знайти сертифікат', link: '#' },
    { label: 'Знижки', link: '#' },
    { label: 'Кабінет', link: '#' },
    { label: 'Мапа сайту', link: '#' },
  ],
  center: [
    { label: 'Про компанію', link: '#' },
    { label: 'Організація навчання', link: '#' },
    { label: 'Контактні дані', link: '#' },
    { label: 'Наша команда', link: '#' },
    { label: 'Новини', link: '#' },
    { label: 'Блог', link: '#' },
    { label: 'Тест на рівень англійської', link: '#' },
    { label: 'Іспити Cambridge English', link: '#' },
    { label: 'Вакансії', link: '#' },
  ],
  courses: [
    { label: 'Всі курси', link: '#' },
    { label: 'Англійська для дорослих', link: '#' },
    { label: 'Для підлітків 13–17 років', link: '#' },
    { label: 'Для дітей 6–12 років', link: '#' },
    { label: 'Розмовні клуби', link: '#' },
    { label: 'Онлайн курси англійської', link: '#' },
    { label: 'Англійська для компаній', link: '#' },
  ],
  contacts: {
    address:
      'Київ, 01054, Україна, вул. Ярославів Вал, 13/2-Б, офіс 39. Найближча станція метро — Золоті Ворота',
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

const Navigation = () => {
  const { students, contacts, center, courses } = components;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Обрати курс</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Звʼязатись з нами</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[600px] md:grid-cols-3 lg:w-[800px]">
              <ul>
                <ListItem href={contacts.mapLink} title="Адреса" label={contacts.address}>
                  {contacts.address}
                </ListItem>
                <ListItem href={`mailto:${contacts.email}`} title="Email">
                  {contacts.email}
                </ListItem>
              </ul>
              <ul>
                <p className="text-sm font-medium leading-none">Телефони</p>
                {contacts.phoneNumbers.map((item, index) => {
                  return (
                    <ListItem key={index} href={`tel:${item}`}>
                      {item}
                    </ListItem>
                  );
                })}
              </ul>
              <ul>
                <p className="text-sm font-medium leading-none">Напишіть нам</p>
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
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Пройти тест онлайн
            </NavigationMenuLink>
          </Link>
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
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground" title={label}>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default Navigation;
