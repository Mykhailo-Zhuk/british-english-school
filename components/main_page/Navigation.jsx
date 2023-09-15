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
  center: [
    { label: 'Контактні дані', link: '#' },
    { label: 'Новини', link: '#news' },
  ],
  courses: [
    {
      label: 'Англійська для дорослих',
      link: '/adult',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, perspiciatis?',
    },
    {
      label: 'Для підлітків 13–17 років',
      link: '/teenagers',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, perspiciatis?',
    },
    {
      label: 'Для дітей 6–12 років',
      link: '/kids',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, perspiciatis?',
    },
  ],
  contacts: {
    address: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, perspiciatis?',
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
  const { contacts, center, courses } = components;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Обрати курс</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {courses?.map(({ label, link, description }, index) => {
                if (index === 0) {
                  return (
                    <li key={index} className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href={link}>
                          <p className="text-sm leading-tight font-bold text-red-500">
                            Найбільш популярний
                          </p>
                          <div className="mb-2 mt-4 text-lg font-medium">{label}</div>
                          <p className="text-sm leading-tight text-muted-foreground">
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
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
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
