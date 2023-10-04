'use client';

import React, { Fragment } from 'react';
import icons from '@/public/icons';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');

  const context = {
    students: [{ label: t('agreement'), link: '#' }],
    center: [
      { label: t('contact_data'), link: '#contacts' },
      { label: t('news'), link: '#news' },
    ],
    courses: [
      { label: t('adults'), link: 'adults' },
      { label: t('teenagers'), link: 'teenagers' },
      { label: t('kids'), link: 'kids' },
    ],
    contacts: {
      address: t('address'),
      mapLink: '#',
      social: [
        { icon: icons.instagram, link: '#', alt: 'instagram' },
        { icon: icons.linkedin, link: '#', alt: 'linkedin' },
        { icon: icons.tictok, link: '#', alt: 'tictok' },
        { icon: icons.youtube, link: '#', alt: 'youtube' },
        { icon: icons.x, link: '#', alt: 'x' },
        { icon: icons.telegram2, link: '#', alt: 'telegram' },
      ],
    },
  };

  const { students, center, courses, contacts } = context;
  return (
    <footer className="w-full mt-20 bg-[#202E48] text-white dark:text-slate-400">
      <div className="pt-10 lg:pt-20 pb-10 px-5 max-w-[1320px] mx-auto h-max space-y-7 flex flex-col rounded-xl">
        <div className="pb-7 lg:pb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-3">
          <div className="flex flex-col space-y-4 w-full p-1">
            <h2 className="text-base text-center">{t('student')}</h2>
            {students.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Link
                    href={item.link}
                    className="text-white dark:text-slate-400 text-center text-sm p-1 hover:bg-slate-500 dark:hover:bg-slate-500 rounded-sm">
                    {item.label}
                  </Link>
                </Fragment>
              );
            })}
          </div>
          <div className="flex flex-col space-y-4 w-full p-1">
            <h2 className="text-base text-center">{t('education_center')}</h2>
            {center.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Link
                    href={item.link}
                    className="text-white dark:text-slate-400 text-center text-sm p-1 hover:bg-slate-500 dark:hover:bg-slate-500 rounded-sm">
                    {item.label}
                  </Link>
                </Fragment>
              );
            })}
          </div>
          <div className="flex flex-col space-y-4 w-full p-1">
            <h2 className="text-base text-center">{t('courses')}</h2>
            {courses.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Link
                    href={item.link}
                    className="text-white dark:text-slate-400 text-center text-sm p-1 hover:bg-slate-500 dark:hover:bg-slate-500 rounded-sm">
                    {item.label}
                  </Link>
                </Fragment>
              );
            })}
          </div>
          <div className="flex flex-col space-y-4 w-full p-1">
            <h2 className="text-base text-center">{t('contact')}</h2>
            <p className="text-sm p-1 hover:bg-slate-500 dark:hover:bg-slate-500 text-center rounded-sm">
              {contacts.address}
            </p>
            <Button variant="link">
              <a
                href="#"
                className="text-white dark:text-slate-400 p-1 hover:bg-slate-500 dark:hover:bg-slate-500 text-center rounded-sm">
                {t('maps')}
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
          </div>
        </div>
        <>
          <Separator />
          <p className="text-sm text-center">{t('official')} </p>
        </>
      </div>
    </footer>
  );
};

export default Footer;
