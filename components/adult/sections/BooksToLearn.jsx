import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useTranslations } from 'next-intl';
import React from 'react';

const ListItem = ({ item }) => {
  return (
    <li className="flex flex-col space-y-4 max-h-max">
      <p className="text-base">{item.title}</p>
      <p className="text-base">{item.description}</p>
    </li>
  );
};

const BooksToLearn = () => {
  const t = useTranslations('books_to_learn');

  const context = [
    {
      title: `📕 ${t('list.first')}`,
      description: t('list.first_desc'),
    },
    {
      title: `📕 ${t('list.second')}`,
      description: t('list.second_desc'),
    },
    {
      title: `📕 ${t('list.third')}`,
      description: t('list.third_desc'),
    },
  ];

  return (
    <section className="w-full">
      <div className="py-10 lg:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6 px-5">
        <h1 className="text-2xl lg:text-4xl">{t('title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-5 text-justify">
            <p>{t('desc_first')}</p>
            <p>{t('desc_second')}</p>
            <AspectRatio ratio={16 / 9} className="bg-accent rounded-lg">
              Photo
            </AspectRatio>
          </div>
          <ul className="space-y-6 text-justify">
            {context?.map((item, index) => {
              return <ListItem key={index} item={item} />;
            })}
          </ul>
          <ul className="space-y-6 text-justify">
            {context?.map((item, index) => {
              return <ListItem key={index} item={item} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BooksToLearn;
