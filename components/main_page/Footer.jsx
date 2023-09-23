'use client';

import React, { Fragment } from 'react';
import icons from '@/public/icons';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

const context = {
  students: [{ label: 'Договір навчання', link: '#' }],
  center: [
    { label: 'Контактні дані', link: '#contacts' },
    { label: 'Новини', link: '#news' },
  ],
  courses: [
    { label: 'Англійська для дорослих', link: 'adults' },
    { label: 'Для підлітків 13–17 років', link: 'teenagers' },
    { label: 'Для дітей 6–12 років', link: 'kids' },
  ],
  contacts: {
    address:
      'Київ, 01054, Україна, вул. Ярославів Вал, 13/2-Б, офіс 39. Найближча станція метро — Золоті Ворота',
    mapLink: '#',
    social: [
      { icon: icons.instagram, link: '#', alt: 'instagram' },
      { icon: icons.linkedin, link: '#', alt: 'linkedin' },
      { icon: icons.tictok, link: '#', alt: 'tictok' },
      { icon: icons.youtube, link: '#', alt: 'youtube' },
      { icon: icons.x, link: '#', alt: 'x' },
      { icon: icons.telegram2, link: '#', alt: 'telegram' },
    ],
    telagramChannels: [
      { title: 'CambridgeUA', link: '#' },
      { title: 'Cambridge Teens', link: '#' },
      { title: 'CambridgeUA Clubs', link: '#' },
    ],
  },
};

const Footer = () => {
  const { students, center, courses, contacts } = context;
  return (
    <footer className="w-full mt-20 bg-[#202E48] text-white">
      <div className="pt-10 lg:pt-20 pb-10 px-5 max-w-[1320px] mx-auto h-max space-y-7 flex flex-col rounded-xl">
        <div className="pb-7 lg:pb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-3">
          <div className="flex flex-col space-y-4 w-full p-1">
            <h2 className="text-base text-center">Студенту</h2>
            {students.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Link
                    href={item.link}
                    className="text-white text-center text-sm p-1 hover:bg-gray-500 rounded-sm">
                    {item.label}
                  </Link>
                </Fragment>
              );
            })}
          </div>
          <div className="flex flex-col space-y-4 w-full p-1">
            <h2 className="text-base text-center">Наш освітній центр</h2>
            {center.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Link
                    href={item.link}
                    className="text-white text-center text-sm p-1 hover:bg-gray-500 rounded-sm">
                    {item.label}
                  </Link>
                </Fragment>
              );
            })}
          </div>
          <div className="flex flex-col space-y-4 w-full p-1">
            <h2 className="text-base text-center">Курси англійської мови</h2>
            {courses.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Link
                    href={item.link}
                    className="text-white text-center text-sm p-1 hover:bg-gray-500 rounded-sm">
                    {item.label}
                  </Link>
                </Fragment>
              );
            })}
          </div>
          <div className="flex flex-col space-y-4 w-full p-1">
            <h2 className="text-base text-center">Контакти</h2>
            <p className="text-sm p-1 hover:bg-gray-500 text-center rounded-sm">
              {contacts.address}
            </p>
            <Button variant="link">
              <a href="#" className="text-white p-1 hover:bg-gray-500 text-center rounded-sm">
                Показати на Google Maps
              </a>
            </Button>
            <div className="flex space-x-4 justify-evenly items-center">
              {contacts.social.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <a href={item.link} className="cursor-pointer">
                      <Image src={item.icon} alt={item.alt} width={30} height={30} />
                    </a>
                  </Fragment>
                );
              })}
            </div>
            <p className="text-base text-center">Наші Telegram-канали</p>
            {contacts.telagramChannels.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-base inline-flex items-center justify-center cursor-pointer p-1 hover:bg-gray-500 rounded-sm">
                  <span className="mx-2">
                    <Image src={icons.telegram2} alt="telegram" width={20} height={20} />
                  </span>
                  {item.title}
                </p>
              );
            })}
          </div>
        </div>
        <>
          <Separator />
          <p className="text-sm text-center">
            2009–2023 Офіційний підготовчий центр University of Cambridge English Examinations в
            Україні, ліцензія №52374
          </p>
        </>
      </div>
    </footer>
  );
};

export default Footer;
