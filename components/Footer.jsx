import React from 'react';
import icons from '@/public/icons';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

const context = {
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
      <div className="mt-20 pt-14 pb-10 max-w-[1320px] mx-auto h-max space-y-7 flex flex-col rounded-xl">
        <div className="flex pb-7 space-x-6 justify-between">
          <div className="flex flex-col space-y-4 w-3/12">
            <h2 className="text-base">Студенту</h2>
            {students.map((item, index) => {
              return (
                <Link key={index} href={item.link} className="text-white text-left text-sm">
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col space-y-4 w-3/12">
            <h2 className="text-base">Наш освітній центр</h2>
            {center.map((item, index) => {
              return (
                <Link key={index} href={item.link} className="text-white text-left text-sm">
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col space-y-4 w-3/12">
            <h2 className="text-base">Курси англійської мови</h2>
            {courses.map((item, index) => {
              return (
                <Link key={index} href={item.link} className="text-white text-left text-sm">
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col space-y-4 w-3/12">
            <h2 className="text-base">Контакти</h2>
            <p className="text-sm">{contacts.address}</p>
            <Button variant="link">
              <a href="#" className="text-white">
                Показати на Google Maps
              </a>
            </Button>
            <div className="flex space-x-4">
              {contacts.social.map((item, index) => {
                return (
                  <a href={item.link}>
                    <Image key={index} src={item.icon} alt={item.alt} width={30} height={30} />
                  </a>
                );
              })}
            </div>
            <p className="text-base">Наші Telegram-канали</p>
            {contacts.telagramChannels.map((item, index) => {
              return (
                <p key={index} className="text-base inline-flex items-center">
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
